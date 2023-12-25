import { atom } from "jotai";
import {
  interUserData,
  interScreenState,
  interfriendListState,
} from "../store/interface";
export const loginStateAtom = atom<boolean>(false);

export const userDataAtom = atom<interUserData>({
  birthDate: "",
  email: "",
  password: "",
  nickname: "",
  sendMail: false,
  userName: "",
  _id: "",
  otherChannelData: [],
  meChannelData: [],
});

export const screenStateAtom = atom<interScreenState>({
  status: "@me",
});

// 초기 상태를 "online"으로 설정
export const initialFriendListStateAtom = atom<interfriendListState>({
  status: "online",
});
