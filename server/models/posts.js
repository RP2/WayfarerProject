const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema({
  title: String,
  text: String,
  city: String,
  img: String
});

let Post = mongoose.model("Post", postSchema);

module.exports = Post;
