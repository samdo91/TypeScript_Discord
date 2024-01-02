/* 회원가입 유저 데이터 
 email: 유저아이디 or 이메일
  nickname: 닉네임(별명)
  userName: 유저 원래 이름
  password: 비밀번호
  sendMail: 스팸 이메일 보낼까? 말까?
  birthDate: 생년월일
  isOnline: 로그인이 되어있는지 안되어 있는지?
*/

export interface interSignupData {
  email: string;
  nickname: string;
  userName: string;
  password: string;
  sendMail: boolean;
  birthDate: string;
  isOnline: boolean;
}
// userData에 프랜드 채널에 쓸 내 친구 리스트
export interface interFriendList {
  _id: string;
  email: string;
  friendState: "friend" | "waiting" | "block";
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
  detailFriendListData: interDetailFriendListData[];
  friendList: interFriendList[];
}

//userDataAtom에 실제로 저장될 FriendListData

export interface interDetailFriendListData {
  _id: string;
  email: string;
  src: string;
  alt: string;
  href: string;
  text: string;
  isOnline: boolean;
  friendState: "friend" | "waiting" | "block";
}

//자동 로그인
export interface interRequiredFieldIndicator {
  requiredFieldIndicator: boolean;
}
// @me 창에서 searchSideBar에서 버튼 관리할때 사용
export interface interScreenState {
  status: "@me" | "store" | "shop";
}
export interface interfriendListState {
  status: "online" | "allFriend" | "waiting" | "block" | "addFriend";
}
