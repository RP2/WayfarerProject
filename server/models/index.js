const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/user");

let post = require("./post.js");
let user = require("./user.js");

module.exports = {
  post: post,
  user: user
};
