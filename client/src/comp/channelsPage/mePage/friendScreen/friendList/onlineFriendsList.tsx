import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import {
  initialFriendListStateAtom,
  userDataAtom,
} from "../../../../../global/global";
import styled from "@emotion/styled";
import { IoSearch } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import {
  interDetailFriendListData,
  interFriendList,
  interUserData,
} from "../../../../../store/interface";

interface OnlineFriendsListProps {
  userData: interUserData;
}

function OnlineFriendsList() {
  const [userData, setUserData] = useAtom(userDataAtom);

  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [friendList, setFriendList] = useState<string[]>([]);

  useEffect(() => {
    let filteredFriends: string[] = [];

    if (friendListState.status === "online") {
      // "online" 상태이면서 friendState가 "friend"인 모든 친구를 필터링
      filteredFriends = userData.friendList
        .filter((friend) => friend.friendState === "friend")
        .map((friend) => friend._id);
    } else {
      // 온라인 상태가 아닐 때, friendListState.status에 따라 다르게 필터링
      const friendStateFilter =
        friendListState.status === "allFriend"
          ? "friend"
          : friendListState.status;

      filteredFriends = userData.friendList
        .filter((friend) => friend.friendState === friendStateFilter)
        .map((friend) => friend._id);
    }

    // 현재 검색어가 있는 경우, 검색어로 다시 필터링
    if (currentSearch) {
      filteredFriends = filteredFriends.filter((friendId) =>
        friendId.includes(currentSearch)
      );
    }

    // 최종적으로 filteredFriends를 friendList 상태로 업데이트
    setFriendList(filteredFriends);

    return () => {};
  }, [friendListState, userData, currentSearch]);

  return (
    <OnlineFriendsLists>
      <SearchBarWrapper>
        <SearchBar
          placeholder="검색하기"
          value={currentSearch}
          onChange={(e) => {
            setCurrentSearch(e.target.value);
          }}
        />
        <SearchIcon>
          <Icon>
            {currentSearch ? (
              <CgClose
                onClick={() => {
                  setCurrentSearch("");
                }}
              />
            ) : (
              <IoSearch />
            )}
          </Icon>
        </SearchIcon>
      </SearchBarWrapper>
      {/* friendList를 사용하여 원하는 방식으로 화면에 표시 */}
      {friendList.map((friendId) => (
        // 여기에서 friendId를 이용하여 원하는 방식으로 친구를 화면에 표시할 수 있습니다.
        // 예: <FriendComponent key={friendId} friendId={friendId} />
        <div key={friendId}>{friendId}</div>
      ))}
    </OnlineFriendsLists>
  );
}

export default OnlineFriendsList;

const OnlineFriendsLists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #3e3e3e;
  box-shadow: 1px 0.5px 0 #3e3e3e;
  height: 100px;
`;

const SearchBarWrapper = styled.div`
  position: relative;
  width: 90%;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  box-shadow: 0.5px 1px 0 #3e3e3e;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 40px;
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
`;

const Icon = styled.div`
  margin-left: auto; /* Pushes the icon to the right within the flex container */
`;
