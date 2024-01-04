import styled from "@emotion/styled";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { RiKakaoTalkFill } from "react-icons/ri";
import { userDataAtom } from "../../../../../../../global/global";
import { useAtom } from "jotai";
import { ButtonProps } from "./acceptButton";

const SendMessageIconHint = (
  <Tooltip
    id="tooltip"
    style={{
      backgroundColor: "#242424",
      color: "white",
      padding: "10px",
      paddingLeft: "20px",
      borderRadius: "8px",
      fontSize: "20px",
      marginBottom: "5px",
      textAlign: "center",
    }}
  >
    메시지 보내기
  </Tooltip>
);

function SendMessageButton({ friend }: ButtonProps) {
  const [userData, setUserData] = useAtom(userDataAtom);
  return (
    <SendMessageButtons>
      <OverlayTrigger placement="top" overlay={SendMessageIconHint}>
        <SendMessageIcon>
          <RiKakaoTalkFill />
        </SendMessageIcon>
      </OverlayTrigger>
    </SendMessageButtons>
  );
}

export default SendMessageButton;
const SendMessageButtons = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin: 5px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 15px;
  border: none;
  background-color: #1f1f1f;
`;

const SendMessageIcon = styled.div`
  margin-left: auto;
  font-size: 27px;
  color: rgba(126, 126, 126);
  &:hover {
    color: green;
  }
`;
