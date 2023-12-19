var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = "1q2w3e4r!";
const cookieParser = require("cookie-parser");

app.use(cors()); // 모든 origin에 대해 CORS를 허용합니다.
app.use(bodyParser.json());
app.use(cookieParser());

const DB_URL = process.env.DB_URL;
// 데이터베이스 연결(27017 : MongoDB 기본 포트)
const User = require(`./model/userData/userData.js`);
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB에 연결되었습니다.");
  })
  .catch((error) => {
    console.error("MongoDB 연결 에러:", DB_URL, error);
    process.exit(1); // 에러 발생 시 프로세스 종료
  });

app.post("/signup", function (req, res) {
  // 클라이언트로부터 전송된 데이터는 req.body에 있음
  var signupData = req.body;
  const newUser = new User({
    email: signupData.email,
    nickname: signupData.nickname,
    userName: signupData.userName,
    password: signupData.password,
    sendMail: signupData.sendMail,
    birthDate: signupData.birthDate,
  });

  newUser
    .save()
    .then(() => {
      console.log("사용자가 성공적으로 저장되었습니다.");
    })
    .catch((error) => {
      console.error("사용자 저장 오류:", error);
    });

  res.json({
    status: "success",
    message: "Signup data received successfully.",
  });
});

app.post("/login", async function (req, res) {
  // 클라이언트로부터 전송된 데이터는 req.body에 있음
  var loginData = req.body;

  // 로그인에 사용되는 ID와 패스워드 추출
  const { id, password } = loginData;
  console.log(id, password);

  // 해당 ID와 패스워드로 사용자를 찾음
  try {
    const user = await User.findOne({ email: id, password: password });

    if (user) {
      // 사용자를 찾으면 로그인 성공
      const token = jwt.sign({ userId: user._id }, jwtSecret, {
        expiresIn: "1h",
      });
      res.json({
        status: "success",
        message: "Login successful.",
        token: token,
      });
    } else {
      // 사용자를 찾지 못하면 로그인 실패
      res.json({
        status: "fail",
        message: "Login failed. User not found or incorrect password.",
      });
    }
  } catch (error) {
    // 에러 발생 시 처리
    console.error("Error during login:", error);
    res.json({
      status: "error",
      message: "An error occurred during login.",
    });
  }
});

app.post("/profile", async (req, res) => {
  // 클라이언트로부터 쿠키에서 토큰을 추출
  const token = req.body.token;

  // 토큰이 없는 경우, 401 Unauthorized 응답 반환
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // 토큰을 검증하고 복호화
    const decoded = jwt.verify(token, jwtSecret);
    console.log(decoded);

    // 토큰에서 추출한 사용자 ID로 데이터베이스에서 사용자 정보 조회
    const userData = await User.findById(decoded.userId).select("-password");

    // 사용자 정보를 클라이언트에 응답
    res.json(userData);
  } catch (error) {
    console.error("Error verifying token:", error);

    // 토큰 만료 에러인 경우, 401 Unauthorized 응답 반환
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ error: "Token expired. Please log in again." });
    } else {
      // 그 외의 경우, 401 Unauthorized 응답 반환
      res.status(401).json({ error: "Unauthorized" });
    }
  }
});

// 3000 포트로 서버 오픈
app.listen(3000, function () {
  console.log("Express server is listening on port 3000");
});
