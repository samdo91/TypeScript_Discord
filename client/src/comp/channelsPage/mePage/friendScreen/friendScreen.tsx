import styled from "@emotion/styled";
import React from "react";
import FriendScreenHeader from "./friendScreenHeader/friendScreenHeader";
import { useAtom } from "jotai";
import { initialFriendListStateAtom } from "../../../../global/global";
import OnlineFriendsList from "./friendList/onlineFriendsList";
import WaitingFriendsList from "./friendList/waitingFriendsList";
import BlockFriendsList from "./friendList/blockFriendsList";
import AllFrienFriendsList from "./friendList/allFrienFriendsList";
import AddFriend from "./friendList/addFriend";

function FriendScreen() {
  // friendListState 리스트가 처음 켜졌을때 디폴트는   status: "online" 로 들어간다.
  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );

  let selectedListComponent;

  switch (friendListState.status) {
    case "online":
      selectedListComponent = <OnlineFriendsList />;
      break;
    case "waiting":
      selectedListComponent = <WaitingFriendsList />;
      break;
    case "allFriend":
      selectedListComponent = <AllFrienFriendsList />;
      break;
    case "block":
      selectedListComponent = <BlockFriendsList />;
      break;
    case "addFriend":
      selectedListComponent = <AddFriend />;
      break;
    default:
      selectedListComponent = "online";
  }
  return (
    <FriendScreens>
      <FriendScreenHeader
        friendListState={friendListState}
        setFriendListState={setFriendListState}
      />
      <Containers>
        {selectedListComponent}
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
