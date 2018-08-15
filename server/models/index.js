const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/user");

let player = require("./player.js");
let user = require("./user.js");

module.exports = {
  player: player,
  user: user
};
