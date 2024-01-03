import React from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { initialFriendListStateAtom } from "../../../../../../global/global";
import { interDetailFriendListData } from "../../../../../../store/interface";
import WaitingBoard from "./boards/waitingBoard";
import BlockBoard from "./boards/blockBoard";
import OnlineBoard from "./boards/onlineBoard";
import AllFriendBoard from "./boards/allFriendBoard";

interface FriendListBoardProps {
  setFriendList: React.Dispatch<
    React.SetStateAction<interDetailFriendListData[]>
  >;
  friendList: interDetailFriendListData[];
}

const FriendListBoard: React.FC<FriendListBoardProps> = ({
  friendList,
  setFriendList,
}) => {
  const [friendListState] = useAtom(initialFriendListStateAtom);

  return (
    <FriendListBoards>
      <TitleSection>
        <Title>대기중 - {friendList.length}명</Title>
      </TitleSection>

      {/* FriendListComponent를 여기서 사용 */}
      <FriendListComponent
        friendListState={friendListState}
        friendList={friendList}
        setFriendList={setFriendList}
      />
    </FriendListBoards>
  );
};

// FriendListComponent를 밖에서 선언
const FriendListComponent: React.FC<{
  friendListState: any;
  friendList: interDetailFriendListData[];
  setFriendList: React.Dispatch<
    React.SetStateAction<interDetailFriendListData[]>
  >;
}> = ({ friendListState, friendList, setFriendList }) => {
  switch (friendListState.status) {
    case "waiting":
      return (
        <WaitingBoard friendList={friendList} setFriendList={setFriendList} />
      );

    case "block":
      return (
        <BlockBoard friendList={friendList} setFriendList={setFriendList} />
      );

    case "online":
      return (
        <OnlineBoard friendList={friendList} setFriendList={setFriendList} />
      );
    case "allFriend":
      return (
        <AllFriendBoard friendList={friendList} setFriendList={setFriendList} />
      );
    default:
      return null; // 기본값 처리
  }
};

// renderBlockMessage 함수와 renderDefaultMessage 함수가 구현되어야 합니다.

const FriendListBoards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 55px;
  height: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export default FriendListBoard;
