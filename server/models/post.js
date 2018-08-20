//post schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  text: String,
  city: { type: Schema.Types.ObjectId, ref: "City" },
  img: String,
});

let Post = mongoose.model("Post", postSchema);

module.exports = Post;
