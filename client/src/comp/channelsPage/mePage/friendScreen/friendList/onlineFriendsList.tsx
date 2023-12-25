import { useAtom } from "jotai";
import React from "react";
import { initialFriendListStateAtom } from "../../../../../global/global";

function OnlineFriendsList() {
  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );
  return <div>OnlineFriendsList</div>;
}

export default OnlineFriendsList;
