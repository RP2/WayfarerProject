const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/wayfarer",
  { useNewUrlParser: true }
);

let Post = require("./post.js");
let User = require("./user.js");

module.exports = {
  Post: Post,
  User: User,
};
