// user schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Post = require("./post.js");

let userSchema = new Schema({
  name: String,
  city: String,
  join_date: {type: Date, default: Date.now},
  username: String,
  password: String,
  img: String,
  posts: [
    {
      ref: Post,
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

let User = mongoose.model("User", userSchema);

module.exports = User;
