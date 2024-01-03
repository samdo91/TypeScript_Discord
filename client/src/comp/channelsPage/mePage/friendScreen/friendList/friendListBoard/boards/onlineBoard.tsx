import React from "react";
import { interFriendListSProps } from "./waitingBoard";
import styled from "@emotion/styled";

function OnlineBoard({ friendList, setFriendList }: interFriendListSProps) {
  return (
    <OnlineBoards>
      {friendList.map((friend) => {
        return (
          <OnlineItem key={friend._id}>
            <OnlineImgNameSection>
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
              <OnlineNameSection>
                <OnlineName>{friend.nickname}</OnlineName>
                <RequestType>
                  {friend.isOnline ? "Online" : "Offline"}
                </RequestType>
              </OnlineNameSection>
            </OnlineImgNameSection>
            <AcceptRejectButtonSection></AcceptRejectButtonSection>
          </OnlineItem>
        );
      })}
    </OnlineBoards>
  );
}

export default OnlineBoard;
const OnlineBoards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
const OnlineItem = styled.div`
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
const OnlineImgNameSection = styled.div`
  display: flex;
`;
const OnlineNameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

const OnlineName = styled.div`
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
