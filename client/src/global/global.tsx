import { atom } from "jotai";
import { interUserData } from "../store/interface";
export const loginStateAtom = atom<boolean>(false);

export const userDataAtom = atom<interUserData>({
  birthDate: "",
  email: "",
  password: "",
  nickname: "",
  sendMail: false,
  userName: "",
  _id: "",
  channelData: [{ src: "", alt: "", href: "", text: "" }],
  myChannelData: [],
});
