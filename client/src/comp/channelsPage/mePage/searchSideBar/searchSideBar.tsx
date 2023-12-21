import styled from "@emotion/styled";
import React from "react";
import SearchSideBarSearchBar from "./searchSideBarSearchBar/searchSideBarSearchBar";
import UtilityButton from "./utilityButton/utilityButton";

function SearchSideBar() {
  return (
    <SearchSideBars>
      <SearchSideBarSearchBar />
      <UtilityButton />
    </SearchSideBars>
  );
}

export default SearchSideBar;

const SearchSideBars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
