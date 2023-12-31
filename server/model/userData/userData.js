const mongoose = require("mongoose");

const channelDataSchema = new mongoose.Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  href: { type: String, required: true },
  text: { type: String, required: true },
});

const friendListSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  friendState: { type: String, required: true },
  friendRequestType: { type: String, required: true },
});

const defaultChannelData = {
  src: "https://image.edaily.co.kr/images/Photo/files/NP/S/2021/03/PS21032600411.jpg",
  alt: "@me_Channels_icon",
  href: "/channels/@me",
  text: "@me_Channels_icon",
};
const detailFriendListDataSchema = new mongoose.Schema({
  _id: { type: String },
  email: { type: String, required: true },
  src: { type: String, required: true },
  alt: { type: String, required: true },
  href: { type: String, required: true },
  text: { type: String, required: true },
  isOnline: { type: Boolean, required: true },
  friendState: { type: String, required: true },
  friendRequestType: { type: String, required: true },
  nickname: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  nickname: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  sendMail: { type: Boolean, default: false },
  birthDate: { type: String, required: true },
  isOnline: { type: Boolean, default: false },

  meChannelData: {
    type: [channelDataSchema],
    default: [defaultChannelData], // 특정 객체를 디폴트 값으로 지정
  },
  friendList: [friendListSchema],
  detailFriendListData: [detailFriendListDataSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
