// 회원가입 유저 데이터
export interface interSignupData {
  email: string;
  nickname: string;
  userName: string;
  password: string;
  sendMail: boolean;
  birthDate: string;
  isOnline: boolean;
}
//자동 로그인
export interface interRequiredFieldIndicator {
  requiredFieldIndicator: boolean;
}
// 회원가입 시 체널 데이터
export interface interChannelData {
  src: string;
  alt: string;
  href: string;
  text: string;
}
// 완성된 유저데이터
export interface interUserData extends interSignupData {
  _id: string;
  meChannelData: interChannelData[];
  otherChannelData: interChannelData[];
}

// @me 창에서 searchSideBar에서 버튼 관리할때 사용
export interface interScreenState {
  status: "@me" | "store" | "shop";
}
export interface interfriendListState {
  status: "online" | "allFriend" | "waiting" | "block";
}
