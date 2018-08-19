// user schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Post = require("./post.js");

let userSchema = new Schema({
  name: String,
  city: { type: String, default: "" },
  join_date: { type: Date, default: Date.now },
  username: String,
  password: String,
  profile_pic: String,
  posts: [
    {
      ref: Post,
      type: Schema.Types.ObjectId
    }
  ]
});

let User = mongoose.model("User", userSchema);

module.exports = User;
