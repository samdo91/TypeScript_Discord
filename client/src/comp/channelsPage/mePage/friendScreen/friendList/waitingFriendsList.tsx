import React from "react";
import { initialFriendListStateAtom } from "../../../../../global/global";
import { useAtom } from "jotai";

function WaitingFriendsList() {
  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );
  return <div>WaitingFriendsList</div>;
}

export default WaitingFriendsList;
