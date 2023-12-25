import { useAtom } from "jotai";
import React from "react";
import { initialFriendListStateAtom } from "../../../../../global/global";

function BlockFriendsList() {
  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );
  return <div>BlockFriendsList</div>;
}

export default BlockFriendsList;
