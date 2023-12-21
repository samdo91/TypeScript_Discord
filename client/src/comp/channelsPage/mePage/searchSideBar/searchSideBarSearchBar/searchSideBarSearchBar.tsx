import styled from "@emotion/styled";
import React from "react";

function SearchSideBarSearchBar() {
  return (
    <SearchSideBarSearchBars>
      <SearchBar placeholder="대화찾기 또는 시작하기" />
    </SearchSideBarSearchBars>
  );
}

export default SearchSideBarSearchBar;

const SearchSideBarSearchBars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #3e3e3e;
  box-shadow: 1px 0.5px 00 #3e3e3e;
  width: 100%;
  height: 70px;
`;

const SearchBar = styled.input`
  width: 90%;
  height: 40px;
  justify-content: center;
  align-items: center;
  box-shadow: 0.5px 1px 00 #3e3e3e;
  border-radius: 5px;
  font-size: 27px;
`;
