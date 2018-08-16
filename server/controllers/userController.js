const db = require("../models");

// GET /api/user
function index(res) {
    // access database and pull out all users
    db.User.find({}, function(err, allUsers) {
        if (err) { console.log('error', err); }
        res.json(allUsers);
    });
  }
  //login function
  function login(req,res) {
    console.log(req.body)
    db.User.findOne({username: req.body.username}, function(err, foundUser){
      if (err) { console.log('error', err); }
      if (foundUser){
        if (foundUser.password === req.body.password){
          res.json(foundUser);
        } else {res.status(400)}
      }
    })
  }
  
  // POST /api/user
  function signup(req, res) {
    // create a user based on request body and send it back as JSON
    db.User.signup(req.body, function(err, user) {
      if (err) { console.log('error', err); }
      res.json(user);
    });
  }

module.exports = {
    index: index,
    login: login,
    signup: signup,
};
