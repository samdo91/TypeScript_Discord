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
  return <BlockBoards>blockBoard</BlockBoards>;
}

export default BlockBoard;
const BlockBoards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
