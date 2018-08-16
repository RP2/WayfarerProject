const db = require("../models");

function index(req, res) {
  db.User.findById(req.params.user_id, function(err, foundUser) {
    if (err) {
      console.log("error", err);
    }
    res.json(foundUser.posts);
  });
}

module.exports = {
  index: index
};
