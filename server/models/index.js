const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/wayfarer",
  { useNewUrlParser: true }
);

let Post = require("./post.js");
let User = require("./user.js");
let City = require("./city.js");

module.exports = {
  Post: Post,
  User: User,
  City: City,
};
