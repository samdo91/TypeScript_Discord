import styled from "@emotion/styled";
import React from "react";
import FriendsSideSearchBar from "./friendsSideSearchBar/friendsSideSearchBar";

function FriendsSideBar() {
  return (
    <FriendsSideBars>
      <FriendsSideSearchBar />
    </FriendsSideBars>
  );
}

export default FriendsSideBar;

const FriendsSideBars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
