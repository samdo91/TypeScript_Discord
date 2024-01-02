var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = "1q2w3e4r!";
const cookieParser = require("cookie-parser");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001", // 클라이언트의 주소
  })
); // 모든 origin에 대해 CORS를 허용합니다.
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
    otherChannelData: [],
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

// 로그인 엔드포인트
app.post("/login", async function (req, res) {
  var loginData = req.body;
  const { email, password } = loginData;

  try {
    console.log(email, password);
    const user = await User.findOne({ email, password });

    if (user) {
      user.isOnline = true; // 로그인 성공 시 isOnline을 true로 설정
      await user.save();

      const token = jwt.sign({ userId: user._id }, jwtSecret, {
        expiresIn: "1d",
      });
      console.log(token);

      const friendList = user.friendList;
      const detailFriendListData = []; // detailFriendListData를 완전히 빈 배열로 초기화

      // 사용자에게 friendList가 있는지 확인
      if (friendList && friendList.length > 0) {
        // friendList를 반복
        friendList.forEach((friend) => {
          // 유효한 friend인지 확인
          if (friend && friend._id) {
            // friend에 meChannelData 배열이 있고 길이가 0보다 큰지 확인
            const meChannelData =
              friend.meChannelData && friend.meChannelData.length > 0
                ? friend.meChannelData[0]
                : null;

            const friendData = {
              _id: friend._id,
              email: friend.email,
              src: meChannelData ? meChannelData.src : "",
              alt: meChannelData ? meChannelData.alt : "",
              href: meChannelData ? meChannelData.href : "",
              text: meChannelData ? meChannelData.text : "",
              friendRequestType: friend.friendRequestType,
              nickname: friend.nickname,
              isOnline: friend.isOnline,
              friendState:
                typeof friend.friendState === "string"
                  ? friend.friendState
                  : String(friend.friendState),
            };

            detailFriendListData.push(friendData);
          }
        });
      }

      user.detailFriendListData = detailFriendListData;

      res.json({
        userData: user,
        status: "success",
        message: "로그인 성공.",
        token: token,
      });
    } else {
      res.json({
        status: "fail",
        message: "로그인 실패. 사용자를 찾을 수 없거나 잘못된 비밀번호입니다.",
      });
    }
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    res.json({
      status: "error",
      message: "로그인 중 오류가 발생했습니다.",
    });
  }
});

// 로그아웃 엔드포인트
app.post("/logout", async function (req, res) {
  const userId = req.body.userId;

  try {
    const user = await User.findById(userId);

    if (user) {
      user.isOnline = false; // 로그아웃 시 isOnline을 false로 설정
      await user.save();

      res.json({
        status: "success",
        message: "Logout successful.",
      });
    } else {
      res.json({
        status: "fail",
        message: "User not found.",
      });
    }
  } catch (error) {
    console.error("Error during logout:", error);
    res.json({
      status: "error",
      message: "An error occurred during logout.",
    });
  }
});
app.post("/profile", async (req, res) => {
  // 클라이언트로부터 쿠키에서 토큰을 추출
  const token = req.body.token;

  console.log(token);
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
    userData.isOnline = true; // 로그인 시 isOnline을 true로 설정

    const friendList = userData.friendList;

    // friendList를 사용하여 detailFriendListData 생성
    const userDataPromises = friendList.map(async (friend) => {
      try {
        // friend의 id를 사용하여 데이터베이스에서 해당 유저 데이터를 가져옴
        const friendUserData = await User.findById(friend._id).select(
          "-password"
        );

        // friendUserData가 존재하고 meChannelData가 존재하며 비어 있지 않은 경우에만 첫 번째 요소를 가져옴
        const meChannelData =
          friendUserData &&
          friendUserData.meChannelData &&
          friendUserData.meChannelData[0];

        const friendData = {
          _id: friend._id,
          email: friend.email,
          nickname: friendUserData.nickname,
          isOnline: friendUserData.isOnline,
          friendRequestType: friend.friendRequestType,
          src: meChannelData ? meChannelData.src : "",
          alt: meChannelData ? meChannelData.alt : "",
          href: meChannelData ? meChannelData.href : "",
          text: meChannelData ? meChannelData.text : "",
          friendState:
            typeof friend.friendState === "string"
              ? friend.friendState
              : String(friend.friendState),
        };

        // userData.detailFriendListData에 추가
        userData.detailFriendListData.push(friendData);

        return friendData;
      } catch (error) {
        console.error("Error fetching friendUserData:", error);
        return null;
      }
    });

    const userDataArray = await Promise.all(userDataPromises);
    const validUserDataArray = userDataArray.filter(
      (userData) => userData !== null
    );

    // 업데이트된 isOnline 필드로 문서 저장

    // 사용자 정보를 클라이언트에 응답

    res.json(userData);
  } catch (error) {
    console.error("토큰 검증 오류:", error);

    // 토큰 만료 에러인 경우, 401 Unauthorized 응답 반환
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ error: "토큰 만료. 다시 로그인하세요." });
    } else {
      // 그 외의 경우, 401 Unauthorized 응답 반환
      res.status(401).json({ error: "Unauthorized" });
    }
  }
});

// 친구 추가 엔드포인트
app.post("/addFriend", async (req, res) => {
  const { currentFriendEmail, userId } = req.body;

  try {
    // 단계 a: userId로 사용자를 찾습니다 (meUserData)
    const meUserData = await User.findById(userId);
    if (!meUserData) {
      return res.status(404).json({
        status: "fail",
        message:
          "사용자를 찾을 수 없습니다. 사용자가 로그인되어 있는지 확인하세요.",
      });
    }

    // 단계 b: currentFriendEmail로 친구 사용자를 찾습니다 (friendUserData)
    const friendUserData = await User.findOne({ email: currentFriendEmail });
    if (!friendUserData) {
      return res.status(404).json({
        status: "fail",
        message: "친구를 찾을 수 없습니다. 사용자명이 올바른지 확인하세요.",
      });
    }

    // 단계 c: 이미 친구인지 확인합니다
    const isAlreadyFriendForMe = meUserData.friendList.some(
      (friend) => friend._id.toString() === friendUserData._id.toString()
    );

    if (isAlreadyFriendForMe) {
      // 이미 친구인 경우, 응답으로 현재 사용자 데이터 전송
      return res.json({
        userData: meUserData,
        status: "success",
        message: "친구가 이미 추가되었습니다.",
      });
    }

    // 친구 목록에 추가
    const friendListEntryForMe = {
      _id: friendUserData._id,
      email: friendUserData.email,
      friendState: "waiting",
      friendRequestType: "Outgoing",
    };
    meUserData.friendList.push(friendListEntryForMe);
    await meUserData.save();

    // 단계 d: friendUserData에서 나를 친구로 추가합니다
    const isAlreadyFriendForFriend = friendUserData.friendList.some(
      (friend) => friend._id.toString() === meUserData._id.toString()
    );

    if (!isAlreadyFriendForFriend) {
      // 친구 목록에 추가
      const friendListEntryForFriend = {
        _id: meUserData._id,
        email: meUserData.email,
        friendState: "waiting",
        friendRequestType: "Incoming",
      };
      friendUserData.friendList.push(friendListEntryForFriend);
      await friendUserData.save();
    }

    // 단계 e: 업데이트된 meUserData로 응답합니다
    const userDataPromises = meUserData.friendList.map(async (friend) => {
      try {
        // friend의 id를 사용하여 데이터베이스에서 해당 유저 데이터를 가져옴
        const friendUserData = await User.findById(friend._id).select(
          "-password"
        );

        // friendUserData가 존재하고 meChannelData가 존재하며 비어 있지 않은 경우에만 첫 번째 요소를 가져옴
        const meChannelData =
          friendUserData &&
          friendUserData.meChannelData &&
          friendUserData.meChannelData[0];

        const friendData = {
          _id: friend._id,
          email: friend.email,
          src: meChannelData ? meChannelData.src : "",
          alt: meChannelData ? meChannelData.alt : "",
          href: meChannelData ? meChannelData.href : "",
          text: meChannelData ? meChannelData.text : "",
          isOnline: friendUserData.isOnline,
          friendRequestType: friend.friendRequestType,
          nickname: friendUserData.nickname,
          friendState:
            typeof friend.friendState === "string"
              ? friend.friendState
              : String(friend.friendState),
        };

        // userData.detailFriendListData에 추가
        meUserData.detailFriendListData.push(friendData);

        return friendData;
      } catch (error) {
        console.error("Error fetching friendUserData:", error);
        return null;
      }
    });

    const userDataArray = await Promise.all(userDataPromises);
    const validUserDataArray = userDataArray.filter(
      (userData) => userData !== null
    );

    // 업데이트된 isOnline 필드로 문서 저장
    await meUserData.save();

    // 최종적으로 userData.detailFriendListData에 할당
    // userData.detailFriendListData = validUserDataArray;

    // 사용자 정보를 클라이언트에 응답
    res.json({
      userData: meUserData,
      status: "success",
      message: "친구가 성공적으로 추가되었습니다.",
    });
  } catch (error) {
    console.error("친구 추가 중 오류 발생:", error);
    res.status(500).json({
      status: "error",
      message: "프로세스 중 오류가 발생했습니다.",
    });
  }
});

// 3000 포트로 서버 오픈
app.listen(3000, function () {
  console.log("Express server is listening on port 3000");
});
