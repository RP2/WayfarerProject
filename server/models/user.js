// user schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Player = require("./player.js");

let userSchema = new Schema({
  name: String,
  city: String,
  joinDate: Date,
  username: String,
  password: String,
  img: String,
  posts: [
    {
      ref: "Post",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

let User = mongoose.model("User", userSchema);

module.exports = User;
