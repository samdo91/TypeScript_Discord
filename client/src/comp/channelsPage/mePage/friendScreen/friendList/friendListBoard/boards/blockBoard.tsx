import React from "react";
import { interDetailFriendListData } from "../../../../../../../store/interface";
import styled from "@emotion/styled";

export interface interFriendListSProps {
  setFriendList: React.Dispatch<
    React.SetStateAction<interDetailFriendListData[]>
  >;
  friendList: interDetailFriendListData[];
}

function BlockBoard({ friendList, setFriendList }: interFriendListSProps) {
  return (
    <BlockBoards>
      {friendList.map((friend) => {
        return (
          <BlockItem key={friend._id}>
            <BlockImgNameSection>
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
              <BlockNameSection>
                <BlockName>{friend.nickname}</BlockName>
                <RequestType>
                  {friend.isOnline ? "Online" : "Offline"}
                </RequestType>
              </BlockNameSection>
            </BlockImgNameSection>
            <AcceptRejectButtonSection></AcceptRejectButtonSection>
          </BlockItem>
        );
      })}
    </BlockBoards>
  );
}

export default BlockBoard;
const BlockBoards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
const BlockItem = styled.div`
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
const BlockImgNameSection = styled.div`
  display: flex;
`;
const BlockNameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

const BlockName = styled.div`
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
