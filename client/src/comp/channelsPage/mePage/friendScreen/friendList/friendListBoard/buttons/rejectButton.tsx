import styled from "@emotion/styled";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiX } from "react-icons/fi";
import { interDetailFriendListData } from "../../../../../../../store/interface";
import { userDataAtom } from "../../../../../../../global/global";
import { useAtom } from "jotai";
import axios from "axios";

interface ButtonProps {
  friend: interDetailFriendListData;
}

const RejectIconHint = (
  <Tooltip
    id="tooltip"
    style={{
      backgroundColor: "#242424",
      color: "white",
      padding: "10px",
      borderRadius: "8px",
      paddingLeft: "20px",
      fontSize: "20px",
      marginBottom: "5px",
      textAlign: "center",
    }}
  >
    거절
  </Tooltip>
);
function RejectButton({ friend }: ButtonProps) {
  const [userData, setUserData] = useAtom(userDataAtom);

  const handleRejectClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/cancelFriend", {
        userId: userData._id,
        friendId: friend._id,
      });

      setUserData(response.data.userData);
      // 응답을 처리하고 로컬 상태를 업데이트합니다.
      // 예를 들어, 새로운 데이터로 userDataAtom을 업데이트할 수 있습니다.
    } catch (error) {
      console.error("친구 취소 중 오류:", error);
      // 필요한 경우 오류를 처리합니다.
    }
  };
  return (
    <RejectButtons onClick={handleRejectClick}>
      <OverlayTrigger placement="top" overlay={RejectIconHint}>
        <RejectIcon>
          <FiX />
        </RejectIcon>
      </OverlayTrigger>
    </RejectButtons>
  );
}

export default RejectButton;

const RejectButtons = styled.button`
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

const RejectIcon = styled.div`
  margin-left: auto;
  font-size: 27px;
  color: rgba(126, 126, 126);
  &:hover {
    color: red;
  }
`;
