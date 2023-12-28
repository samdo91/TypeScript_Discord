import { useAtom } from "jotai";
import React from "react";
import { initialFriendListStateAtom } from "../../../../../global/global";

function AddFriend() {
  const [friendListState, setFriendListState] = useAtom(
    initialFriendListStateAtom
  );
  return <div>AddFriend</div>;
}

export default AddFriend;
