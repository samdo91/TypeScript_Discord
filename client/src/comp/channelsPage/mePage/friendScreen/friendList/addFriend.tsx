import { useAtom } from "jotai";
import React from "react";
import { initialFriendListStateAtom } from "../../../../../global/global";
import styled from "@emotion/styled";

function AddFriend() {
  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );

  return (
    <AddFriends>
      <Title>친구 추가하기</Title>
      <Tip>Discord 사용자명을 사용하여 친구를 추가 할 수 있어요.</Tip>
      <SearchSection>
        <SearchBar
          type="text"
          placeholder="Discord 사용자명을 사용하여 친구를 추가할 수 있어요."
        />
        <SearchButton>친구요청보내기</SearchButton>
      </SearchSection>
    </AddFriends>
  );
}

export default AddFriend;

const AddFriends = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 30px;
  height: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Tip = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;
  margin-left: 30px;
  height: 20px;
  font-size: 18px;
  color: #9e9e9e;
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 80px;
  margin: 20px;
  box-shadow: 0.5px 1px 0 #3e3e3e;
  padding-left: 10px;
  border-radius: 10px;
  font-size: 25px;
  background-color: #2d2d2d;
  position: relative;
  &:focus-within {
    border-color: #4caf50;
  }
`;

const SearchBar = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  font-size: inherit;
`;

const SearchButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 25px;
`;
