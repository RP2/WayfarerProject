const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/wayfarer",
  { useNewUrlParser: true }
);

let post = require("./post.js");
let user = require("./user.js");

module.exports = {
  post: post,
  user: user
};
