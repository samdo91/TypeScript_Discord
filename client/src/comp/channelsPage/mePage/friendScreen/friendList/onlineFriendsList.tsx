import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import {
  initialFriendListStateAtom,
  userDataAtom,
} from "../../../../../global/global";
import styled from "@emotion/styled";
import { IoSearch } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import FriendListBoard from "./friendListBoard/friendListBoard";
import { interDetailFriendListData } from "../../../../../store/interface";

function OnlineFriendsList() {
  const [userData, setUserData] = useAtom(userDataAtom);

  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [friendList, setFriendList] = useState<interDetailFriendListData[]>([]);

  useEffect(() => {
    let filteredFriends: interDetailFriendListData[] = [];

    if (friendListState.status === "online") {
      filteredFriends = userData.detailFriendListData.filter(
        (friend) => friend.friendState === "friend" && friend.isOnline === true
      );
    } else {
      const friendStateFilter =
        friendListState.status === "allFriend"
          ? "friend"
          : friendListState.status;

      filteredFriends = userData.detailFriendListData.filter(
        (friend) => friend.friendState === friendStateFilter
      );
    }

    if (currentSearch) {
      SearchFriend(filteredFriends);
    } else {
      // currentSearch가 비어있을 때는 모든 친구를 보여줍니다.
      setFriendList(filteredFriends);
    }

    // 여기에서 friendList의 최신 상태를 올바르게 기록합니다.
    console.log("FriendListFriendList", friendList);
  }, [friendListState, userData, currentSearch]);

  const SearchFriend = (filteredFriends: any) => {
    const friendLists: any = [];

    friendList.forEach((friend) => {
      const friendNickname = friend.nickname.toString().toLowerCase();
      const currentSearchString = currentSearch.toString().toLowerCase();

      let match = true;

      // friend.nickname과 currentSearch를 철자 하나하나씩 앞에서부터 비교합니다.
      for (let i = 0; i < currentSearchString.length; i++) {
        // 만약 문자가 일치하지 않으면 match를 false로 설정하고 루프를 종료합니다.
        if (friendNickname[i] !== currentSearchString[i]) {
          match = false;
          break;
        }
      }

      // 모든 문자가 일치하면 searchFriendList에 추가합니다.
      if (match) {
        friendLists.push(friend);
      }
    });

    if (friendLists.length <= 1) {
      // filteredFriends에 friendLists를 할당합니다.
      filteredFriends = [...friendLists];
    } else {
      filteredFriends = [];
    }

    console.log("filteredFriends", filteredFriends);
  };

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
      <div>
        <FriendListBoard
          friendList={friendList}
          setFriendList={setFriendList}
        />
      </div>
    </OnlineFriendsLists>
  );
}

export default OnlineFriendsList;

const OnlineFriendsLists = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #3e3e3e;
  box-shadow: 1px 0.5px 0 #3e3e3e;
  height: 100%;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  margin: 40px auto;
`;

const SearchBar = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  box-shadow: 0.5px 1px 0 #3e3e3e;
  border-radius: 5px;
  font-size: 27px;
  padding-left: 40px;
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
`;

const Icon = styled.div`
  margin-left: auto;
  font-size: 27px;
`;
