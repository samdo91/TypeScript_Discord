const mongoose = require("mongoose");

const channelDataSchema = new mongoose.Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  href: { type: String, required: true },
  text: { type: String, required: true },
});

const defaultChannelData = {
  src: "/img/logo.svg",
  alt: "React Bootstrap logo",
  href: "/channels/@me",
  text: "Brand link",
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  nickname: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  sendMail: { type: Boolean, default: false },
  birthDate: { type: String, required: true },

  meChannelData: {
    type: [channelDataSchema],
    default: [defaultChannelData], // 특정 객체를 디폴트 값으로 지정
  },
  otherChannelData: [channelDataSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
