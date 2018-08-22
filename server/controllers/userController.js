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
  // console.log("req.body", req.body);
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
// POST /api/user
function signup(req, res) {
  // console.log("signup req.body", req.body);
  // create a user based on request body and send it back as JSON
  db.User.create(req.body, function(err, user) {
    if (err) {
      console.log("error", err);
    }
    res.status(200).json(user);
  });
}
// user profile
function profile(req, res) {
  db.User.findOne({ username: req.params.user_id }, function(err, foundUser) {
    if (err) {
      console.log(err);
    }
    res.status(200).json(foundUser);
  });
}

//edit profile
function updateProfile(req, res) {
  db.User.findOne({ username: req.params.user_id }, function(err, foundUser) {
    if (err) {
      console.log("userController.update error", err);
    }
    foundUser.city = req.body.city;
    foundUser.profile_pic = req.body.profile_pic;
    foundUser.save(function(err, savedUser) {
      res.status(200).json(savedUser);
    });
  });
}

function destroy(req, res) {
  db.User.findByIdAndRemove({ username: req.params.user_id }, function(
    err,
    foundUser
  ) {
    if (err) {
      console.log("userController.update error", err);
    }
    res.status(200).json(foundUser);
  });
}

module.exports = {
  index: index,
  login: login,
  signup: signup,
  profile: profile,
  updateProfile: updateProfile,
  destroy: destroy
};
