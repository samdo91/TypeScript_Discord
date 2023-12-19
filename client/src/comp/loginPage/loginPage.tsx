import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import LoginScreen from "./loginScreen/loginScreen";
import LoginQr from "./loginScreen/loginQr";
function LoginPage() {
  // 화면 크기 상태를 저장할 객체 상태 변수
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // 화면 크기 변경 시 실행되는 함수
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setWindowSize({
        width: newWidth,
        height: newHeight,
      });
      console.log(
        `화면 크기가 변경되었습니다. 너비: ${newWidth}, 높이: ${newHeight}`
      );
    };

    // 컴포넌트가 마운트될 때 초기 화면 크기 설정
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // resize 이벤트에 대한 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 전달하여 최초 한 번만 실행되도록 함

  const isSmallScreen = windowSize.width <= 1200;

  return (
    <LoginPages>
      {isSmallScreen ? (
        <div>
          {
            <LoginPageBody>
              <LoginScreen />
            </LoginPageBody>
          }
        </div>
      ) : (
        <div>
          {
            <LoginPageBody>
              <LoginScreen /> <LoginQr />
            </LoginPageBody>
          }
        </div>
      )}
    </LoginPages>
  );
}

export default LoginPage;

const LoginPages = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const LoginPageBody = styled.div`
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
    height: 55vh;
    width: 60vw;
  }
`;
