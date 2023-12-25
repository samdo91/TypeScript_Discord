import { useAtom } from "jotai";
import React from "react";
import { initialFriendListStateAtom } from "../../../../../global/global";

function AllFrienFriendsList() {
  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );
  return <div>AllFrienFriendsList</div>;
}

export default AllFrienFriendsList;
