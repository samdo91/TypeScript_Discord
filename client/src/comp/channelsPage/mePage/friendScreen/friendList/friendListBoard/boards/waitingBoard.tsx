import styled from "@emotion/styled";
import React from "react";
import CancelButton from "../buttons/cancelButton";
import AcceptButton from "../buttons/acceptButton";
import RejectButton from "../buttons/rejectButton";
import { interDetailFriendListData } from "../../../../../../../store/interface";

export interface interFriendListSProps {
  setFriendList: React.Dispatch<
    React.SetStateAction<interDetailFriendListData[]>
  >;
  friendList: interDetailFriendListData[];
}

function WaitingBoard({ friendList, setFriendList }: interFriendListSProps) {
  return (
    <WaitingBoards>
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
            {friend.friendRequestType === "Outgoing" ? (
              <AcceptRejectButtonSection>
                <CancelButton friend={friend} />
              </AcceptRejectButtonSection>
            ) : (
              <AcceptRejectButtonSection>
                <AcceptButton friend={friend} />
                <RejectButton friend={friend} />
              </AcceptRejectButtonSection>
            )}
          </WaitingItem>
        );
      })}
    </WaitingBoards>
  );
}

export default WaitingBoard;

const WaitingBoards = styled.div`
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
