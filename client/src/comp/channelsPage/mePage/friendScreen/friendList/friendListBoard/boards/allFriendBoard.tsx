import React from "react";
import { interFriendListSProps } from "./waitingBoard";
import styled from "@emotion/styled";

function AllFriendBoard({ friendList, setFriendList }: interFriendListSProps) {
  return (
    <AllFriendBoards>
      {friendList.map((friend) => {
        return (
          <AllFriendItem key={friend._id}>
            <AllFriendImgNameSection>
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
              <AllFriendNameSection>
                <AllFriendName>{friend.nickname}</AllFriendName>
                <RequestType>
                  {friend.isOnline ? "Online" : "Offline"}
                </RequestType>
              </AllFriendNameSection>
            </AllFriendImgNameSection>
            <AcceptRejectButtonSection></AcceptRejectButtonSection>
          </AllFriendItem>
        );
      })}
    </AllFriendBoards>
  );
}

export default AllFriendBoard;
const AllFriendBoards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
const AllFriendItem = styled.div`
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
const AllFriendImgNameSection = styled.div`
  display: flex;
`;
const AllFriendNameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

const AllFriendName = styled.div`
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
