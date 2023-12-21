import { atom } from "jotai";
import { interUserData, interScreenState } from "../store/interface";
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
