import styled from "@emotion/styled";
import { GrRestroomMen } from "react-icons/gr";
import React from "react";
import { interfriendListState } from "../../../../../store/interface";

export interface interFriendListStateProps {
  setFriendListState: React.Dispatch<
    React.SetStateAction<interfriendListState>
  >;
  friendListState: interfriendListState;
}

function FriendScreenHeader({
  friendListState,
  setFriendListState,
}: interFriendListStateProps) {
  return (
    <FriendScreenHeaders>
      <TitleSection>
        <GrRestroomMen
          style={{
            margin: "10px",
            marginRight: "10px",
            fontSize: "40px",
          }}
        />
        <Title>친구</Title>
        <SideLine />
      </TitleSection>
    </FriendScreenHeaders>
  );
}

export default FriendScreenHeader;

const FriendScreenHeaders = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

const TitleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 27px;
  margin-right: 10px;
`;
const SideLine = styled.div`
  display: flex;
  border: 0.2px solid #c0c0c0;
  box-shadow: 0.5px 0.5px 0 #c0c0c0;
  background-color: #c0c0c0;
  height: 30px;
`;
