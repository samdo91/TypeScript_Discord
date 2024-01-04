import styled from "@emotion/styled";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";
import { interDetailFriendListData } from "../../../../../../../store/interface";
import { userDataAtom } from "../../../../../../../global/global";
import { useAtom } from "jotai";
import axios from "axios";

export interface ButtonProps {
  friend: interDetailFriendListData;
}

const AcceptIconHint = (
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
    수락
  </Tooltip>
);

function AcceptButton({ friend }: ButtonProps) {
  const [userData, setUserData] = useAtom(userDataAtom);
  const handleAccepButton = async () => {
    try {
      const response = await axios.post("http://localhost:3000/acceptFriend", {
        userId: userData._id,
        friendId: friend._id,
      });
      setUserData(response.data.userData);
      // 응답을 처리하고 로컬 상태를 업데이트합니다.
      // 예를 들어, 새로운 데이터로 userDataAtom을 업데이트할 수 있습니다.
    } catch (error) {
      console.error("친구 수락 중 오류:", error);
      // 필요한 경우 오류를 처리합니다.
    }
  };

  return (
    <AcceptButtons onClick={handleAccepButton}>
      <OverlayTrigger placement="top" overlay={AcceptIconHint}>
        <AcceptIcon>
          <FaCheck />
        </AcceptIcon>
      </OverlayTrigger>
    </AcceptButtons>
  );
}

export default AcceptButton;

const AcceptButtons = styled.button`
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

const AcceptIcon = styled.div`
  margin-left: auto;
  font-size: 27px;
  color: rgba(126, 126, 126);
  &:hover {
    color: green;
  }
`;
