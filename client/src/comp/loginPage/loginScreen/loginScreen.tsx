import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useAtom } from "jotai";
import { loginStateAtom, userDataAtom } from "../../../global/global";
import { interUserData, interChannelData } from "../../../store/interface";
type TextProps = {
  fontSize: string;
};

interface interLoginUserData {
  id: string;
  password: string;
}
interface LoginResponse {
  meChannelData: [interChannelData];
  token: string;
  status: string;
  message: string;
  userData: interUserData;
  // 다른 필요한 속성 추가
}
function LoginScreen() {
  const [currentId, setCurrentId] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [, setLoginState] = useAtom(loginStateAtom);
  const [, setUserData] = useAtom(userDataAtom);
  // response의 구조에 따라 타입 정의

  // handleLoginButton 함수 내에서 반환 타입 지정
  const handleLoginButton = async (): Promise<void> => {
    const userData: interLoginUserData = {
      id: currentId,
      password: currentPassword,
    };

    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:3000/login",
        userData
      );

      if (response.data.status === "success") {
        // 로그인 성공 후 필요한 동작을 수행하세요.
        console.log("Login successful:", response.data.message);
        // Set the received token as a cookie
        Cookies.set("token", response.data.token);
        setLoginState(true);
        const useData = response.data.userData;
        const meChannelDataCopy = [...response.data.userData.meChannelData];
        const otherChannelDataCopy = [
          ...response.data.userData.otherChannelData,
        ];
        console.log("마이채널", meChannelDataCopy);
        setUserData({
          birthDate: useData.birthDate,
          email: useData.email,
          password: useData.password,
          nickname: useData.nickname,
          sendMail: useData.sendMail,
          userName: useData.userName,
          _id: useData._id,
          meChannelData: meChannelDataCopy,
          otherChannelData: otherChannelDataCopy,
        });
        window.location.href = "/";
      } else {
        console.error("Login failed:", response.data.message);
        // 로그인 실패 시 필요한 동작을 수행하세요.
      }
    } catch (error: any) {
      // Axios 에러 객체인지 확인
      if (axios.isAxiosError(error)) {
        console.error("Error during login:", error.response?.data.message);
      } else {
        console.error("Non-Axios error during login:", error.message);
      }
    }
  };

  return (
    <LoginScreens>
      <Title>
        <Text fontSize="30px"> 돌아온것을 환영해요</Text>
        <div> 다시 만나다니 반가워요! </div>
      </Title>
      <LoginScreenBody>
        <InputSection>
          <div>
            <Label>
              <div> 이메일 또는 전화번호</div>
              <Star>*</Star>
            </Label>
            <Input
              type="text"
              value={currentId}
              onChange={(e) => {
                setCurrentId(e.target.value);
              }}
            />
          </div>
          <div>
            <Label>
              <div> 비밀번호</div>
              <Star>*</Star>
            </Label>
            <Input
              type="password"
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
            />
          </div>
        </InputSection>
        <PasswordFindSection>
          <div>페스워드를 잊으셨나요?</div>
        </PasswordFindSection>
        <LoginButtonSection>
          <Button onClick={handleLoginButton}>로그인</Button>
        </LoginButtonSection>
        <SignupSection>
          <div>계정이 필요한가요?</div>
          <Link to={`/signup`}>가입하기</Link>
        </SignupSection>
      </LoginScreenBody>
    </LoginScreens>
  );
}

export default LoginScreen;

const LoginScreens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 60vw;
  // background-color: blue;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
`;

const Text = styled.div<TextProps>`
  font-size: ${(props) => props.fontSize};
`;
const LoginScreenBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputSection = styled.div``;
const Input = styled.input`
  width: 15vw;
`;
const Label = styled.div`
  display: flex;
  flex-direction: row;
`;

const Star = styled.div`
  color: red;
`;

const PasswordFindSection = styled.div``;

const LoginButtonSection = styled.div``;

const Button = styled.button`
  width: 15.5vw;
`;

const SignupSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
