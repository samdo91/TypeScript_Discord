const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  nickname: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  sendMail: { type: Boolean, default: false },
  birthDate: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
