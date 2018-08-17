const db = require("../models");

// GET /api/user
function index(req, res) {
  // access database and pull out all users
  db.User.find({}, function(err, allUsers) {
    if (err) {
      console.log("error", err);
    }
    res.json(allUsers);
  });
}
//login function
function login(req, res) {
  console.log("req.body", req.body);
  db.User.findOne(
    { username: req.body.username, password: req.body.password },
    function(err, foundUser) {
      if (err) {
        return err;
        console.log("error", err);
      }
      if (foundUser) {
        console.log("in if", foundUser);
        // if (foundUser.password === req.body.password){
        res.status(200).json(foundUser);
      } else {
        console.log("in else");
        res.status(404).send("not found");
      }
    }
  );
}

function profile(req, res) {
  db.User.findOne({ username: req.params.user_id }, function(err, foundUser) {
    if (err) {
      console.log(err);
    }
    res.status(200).json(foundUser);
  });
}

function profile(req, res) {
  db.User.find({ username: req.username }, function(err, foundUser) {
    if (err) {
      console.log(err);
    }
    res.status(200).json(foundUser);
  });
}

// user profile
function updateProfile(req, res) {
  db.User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      console.log("userController.update error", err);
    }
    foundUser.username = req.body.username;
    foundUser.city = req.body.city;
    foundUser.picture = req.body.picture;
    foundUser.save(function(err, savedUser) {
      res.status(200).json(savedUser);
    });
  });
}

module.exports = {
  index: index,
  login: login,
  signup: signup,
  profile: profile,
  updateProfile: updateProfile
};
