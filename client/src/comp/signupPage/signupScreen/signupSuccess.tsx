import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

function SignupSuccess() {
  return (
    <SignupSuccesPage>
      <SignupSuccesBody>
        <Title>함께하기 성공!</Title>
        <div> 회원가입에 성공했어요! </div>
        <Button>
          <Link to={"/"}>로그인하러 가기</Link>
        </Button>
      </SignupSuccesBody>
    </SignupSuccesPage>
  );
}

export default SignupSuccess;

const SignupSuccesPage = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const SignupSuccesBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55vh;
  width: 55vw;
  background-color: grey;

  @media screen and (max-width: 768px) {
    /* 768px 미만인 경우에 적용할 스타일 */
    height: 100vh;
    width: 100vw;
  }

  @media screen and (min-width: 768px) {
    /* 768px 이상인 경우에 적용할 스타일 */
    height: 100vh;
    width: 40vw;
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 20px;
`;

const Button = styled.div`
  font-size: 20px;
  width: 20vw;
  padding: 10px;
  margin: 20px;
  box-sizing: border-box;
  flex-direction: center;
  font-size: 40px;
  border-radius: 4px;
  background-color: background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,9,121,0.8267682072829132) 27%, rgba(0,212,255,1) 100%); ;
`;
