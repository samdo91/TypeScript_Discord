import styled from "@emotion/styled";
import React, { useState } from "react";
import FriendScreenHeader from "./friendScreenHeader/friendScreenHeader";
import { interfriendListState } from "../../../../store/interface";

function FriendScreen() {
  // 초기 상태를 "online"으로 설정
  const initialFriendListState: interfriendListState = {
    status: "online",
  };
  // friendListState 리스트가 처음 켜졌을때 디폴트는   status: "online" 로 들어간다.
  const [friendListState, setFriendListState] = useState<interfriendListState>(
    initialFriendListState
  );
  return (
    <FriendScreens>
      <FriendScreenHeader
        friendListState={friendListState}
        setFriendListState={setFriendListState}
      />
      <Containers>
        <div>1</div>
        <div>2</div>
      </Containers>
    </FriendScreens>
  );
}

export default FriendScreen;

const FriendScreens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Containers = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;

  & > div:nth-of-type(1) {
    flex-grow: 2;

    background-color: #323232;
  }

  & > div:nth-of-type(2) {
    flex-grow: 1.2;
    background-color: #323232;
    border-left: 1px solid #3e3e3e;
  }
`;
