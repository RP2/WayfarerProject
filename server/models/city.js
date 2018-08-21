const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let citySchema = new Schema({
  name: String,
  country: String,
  image_url: String
});

let City = mongoose.model("City", citySchema);

module.exports = City;
