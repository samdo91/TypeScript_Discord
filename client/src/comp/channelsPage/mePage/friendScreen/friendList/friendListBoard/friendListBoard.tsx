import { useAtom } from "jotai";
import React from "react";
import { initialFriendListStateAtom } from "../../../../../../global/global";
import { interDetailFriendListData } from "../../../../../../store/interface";
import styled from "@emotion/styled";
import { FaCheck } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export interface interFriendListSProps {
  setFriendList: React.Dispatch<
    React.SetStateAction<interDetailFriendListData[]>
  >;
  friendList: interDetailFriendListData[];
}

const AcceptIconHint = (
  <Tooltip
    id="tooltip"
    style={{
      backgroundColor: "#242424",
      color: "white",
      padding: "5px",
      borderRadius: "8px",
      fontSize: "20px",
    }}
  >
    수락
  </Tooltip>
);

const RejectIconHint = (
  <Tooltip
    id="tooltip"
    style={{
      backgroundColor: "#242424",
      color: "white",
      padding: "5px",
      borderRadius: "8px",
      fontSize: "20px",
    }}
  >
    거절
  </Tooltip>
);

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
                <WaitingImgNameSection>
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
                  <WaitingNameSection>
                    <WaitingName>{friend.nickname}</WaitingName>
                    <RequestType>
                      {friend.friendRequestType === "Outgoing"
                        ? "보낸 친구 요청"
                        : "받은 친구 요청"}
                    </RequestType>
                  </WaitingNameSection>
                </WaitingImgNameSection>
                <AcceptRejectButtonSection>
                  <AcceptButton>
                    <OverlayTrigger placement="top" overlay={AcceptIconHint}>
                      <AcceptIcon>
                        <FaCheck />
                      </AcceptIcon>
                    </OverlayTrigger>
                  </AcceptButton>

                  <RejectButton>
                    <OverlayTrigger placement="top" overlay={RejectIconHint}>
                      <RejectIcon>
                        <FiX />
                      </RejectIcon>
                    </OverlayTrigger>
                  </RejectButton>
                </AcceptRejectButtonSection>
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
  justify-content: space-between;
  width: 90%;
  margin: 40px auto;
  height: 100px;
  border-top: 1px solid rgba(126, 126, 126, 0.25);
  &:hover {
    background-color: rgba(126, 126, 126, 0.25);
  }
  border-radius: 10px;
`;
const WaitingImgNameSection = styled.div`
  display: flex;
`;
const WaitingNameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

const WaitingName = styled.div`
  font-size: 23px;
`;

const RequestType = styled.div`
  font-size: 18px;
  color: rgba(126, 126, 126);
`;

const AcceptRejectButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AcceptButton = styled.button`
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

const RejectButton = styled.button`
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

const RejectIcon = styled.div`
  margin-left: auto;
  font-size: 27px;
  color: rgba(126, 126, 126);
  &:hover {
    color: red;
  }
`;
