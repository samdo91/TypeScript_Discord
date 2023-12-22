import React from "react";
import { interFriendListStateProps } from "../friendScreenHeader";
import { interfriendListState } from "../../../../../../store/interface";
import styled from "@emotion/styled";

interface ButtonProps {
  screenState: interfriendListState["status"];
  value: string;
}
function FriendList({
  friendListState,
  setFriendListState,
}: interFriendListStateProps) {
  const handleButtonClick = (value: interfriendListState["status"]) => {
    setFriendListState({ status: value });
  };
  return (
    <>
      <ListButtons
        screenState={friendListState.status}
        value="online"
        onClick={() => handleButtonClick("online")}
      >
        온라인
      </ListButtons>
      <ListButtons
        screenState={friendListState.status}
        value="allFriend"
        onClick={() => handleButtonClick("allFriend")}
      >
        모든 친구
      </ListButtons>
      <ListButtons
        screenState={friendListState.status}
        value="waiting"
        onClick={() => handleButtonClick("waiting")}
      >
        대기 중
      </ListButtons>
      <ListButtons
        screenState={friendListState.status}
        value="block"
        onClick={() => handleButtonClick("block")}
      >
        차단 목록
      </ListButtons>
      <Button>친구 추가하기</Button>
    </>
  );
}
export default FriendList;

const ListButtons = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 27px;
  width: 90px
  height: 60px;
  margin: 15px;
  border-radius: 5px;

  background-color: ${(props) =>
    typeof props.value === "string" && props.screenState === props.value
      ? "#7e7e7e"
      : ""};

  transition: background-color 0.3s;
  &:hover {
    background-color: #7e7e7e;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 27px;
  padding: 2px;
  width: 90px
  height: 60px;
  margin: 15px;
  border-radius: 5px;
  background-color:#18BC5D

  }
`;
