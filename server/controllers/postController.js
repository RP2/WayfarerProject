const db = require("../models");

function index(req, res) {
  // db.Post.find({city_id: req.params.city_id}, function(err, foundPost) {
  //   if (err) {
  //     console.log("error", err);
  //   }
  //   // posts = foundCity.posts;
  //   // console.log(posts)
  //   res.json(foundPost);
  // });
  db.Post.find({}, (err, foundPosts) => {
    if(err) throw err;
    res.json(foundPosts);
  })
}

function create(req, res) {
  db.city.findById(req.params.city_id, function(err, foundCity) {
    if (err) {
      console.log("error", err);
    }
    var newPost = new db.Post(req.body);
    foundCity.posts.push(newPost);
    foundCity.save(function(err, savedPost) {
      res.json(newPost);
    });
  });
}

module.exports = {
  index: index,
  create: create,
};
