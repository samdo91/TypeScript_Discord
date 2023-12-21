export interface interSignupData {
  email: string;
  nickname: string;
  userName: string;
  password: string;
  sendMail: boolean;
  birthDate: string;
}

export interface interRequiredFieldIndicator {
  requiredFieldIndicator: boolean;
}

export interface interChannelData {
  src: string;
  alt: string;
  href: string;
  text: string;
}

export interface interUserData extends interSignupData {
  _id: string;
  myChannelData: interChannelData[];
  channelData: interChannelData[];
}
