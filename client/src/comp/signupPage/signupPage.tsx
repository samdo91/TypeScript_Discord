import React from "react";
import SignScreen from "./signupScreen/signupScreen";
import styled from "@emotion/styled";

function SignupPage() {
  return (
    <SignupPages>
      <SignupPageBody>
        <SignScreen />
      </SignupPageBody>
    </SignupPages>
  );
}

export default SignupPage;

const SignupPages = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const SignupPageBody = styled.div`
  display: flex;
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
