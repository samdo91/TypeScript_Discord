import React from "react";
import { useAtom } from "jotai";
import { loginStateAtom } from "../../../global/global";
import NavModule from "./navModule";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function MainHeader() {
  const [loginState, setLoginState] = useAtom(loginStateAtom); // 로그인 스테이트

  return (
    <HeaderBody>
      <HeaderSection>
        <Link to={"/"}>
          <div>Discord</div>
        </Link>
        <NavModule />
        {loginState ? (
          <Link to={"/channels"}>
            <NameCord>Open Discord</NameCord>
          </Link>
        ) : (
          <Link to={"/login"}>
            <NameCord>로그인</NameCord>
          </Link>
        )}
      </HeaderSection>
    </HeaderBody>
  );
}

export default MainHeader;
const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0 0, 0, 0.5);
  padding: 10px;
  width: 1900px;
`;

const NameCord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 00 #c0c0c0;
  font-size: 16px;
  width: 200px;
`;
