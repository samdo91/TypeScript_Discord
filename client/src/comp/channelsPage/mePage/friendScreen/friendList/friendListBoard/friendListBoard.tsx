import { useAtom } from "jotai";
import React from "react";
import { initialFriendListStateAtom } from "../../../../../../global/global";
import { interDetailFriendListData } from "../../../../../../store/interface";
import styled from "@emotion/styled";

export interface interFriendListSProps {
  setFriendList: React.Dispatch<
    React.SetStateAction<interDetailFriendListData[]>
  >;
  friendList: interDetailFriendListData[];
}

function FriendListBoard({ friendList, setFriendList }: interFriendListSProps) {
  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );
  console.log(friendList);
  return (
    <FriendListBoards>
      <TitleSection>
        <Title>대기중 - {friendList.length}명</Title>
      </TitleSection>

      {friendListState.status === "waiting" ? (
        <WaitingBoard>
          {friendList.map((friend) => {
            return (
              <WaitingItem key={friend._id}>
                <img
                  src={friend.src}
                  width="50px"
                  height="50px"
                  alt={friend.alt}
                  style={{
                    margin: "5px",
                    marginTop: "20px",
                    borderRadius: "30px",
                  }}
                ></img>
                <WaitingName>
                  <div>{friend.nickname}</div>
                  <div>
                    {friend.friendRequestType === "Outgoing"
                      ? "보낸 친구 요청"
                      : "받은 친구 요청"}
                  </div>
                </WaitingName>
              </WaitingItem>
            );
          })}
        </WaitingBoard>
      ) : (
        ""
      )}
    </FriendListBoards>
  );
}

export default FriendListBoard;

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

const WaitingBoard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const WaitingItem = styled.div`
  display: flex;
  width: 90%;
  margin: 40px auto;
  height: 100px;
  border-top: 1px solid rgba(126, 126, 126, 0.25);
  &:hover {
    background-color: rgba(126, 126, 126, 0.25);
  }
  border-radius: 10px;
`;
const WaitingName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
