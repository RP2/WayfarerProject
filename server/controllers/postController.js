const db = require("../models");

function index(req, res) {
  db.Post.find({}, (err, foundPosts) => {
    if (err) {
      console.log("error", err);
    }
    res.json(foundPosts);
  })
}

function create(req, res) {
  db.Post.findById(req.params.post_id, function(err, foundPost) {
    if (err) {
      console.log("error", err);
    }
    var newPost = new db.Post(req.body);
    foundPost.posts.push(newPost);
    foundPost.save(function(err, savedPost) {
      res.json(newPost);
    });
  });
}

function detail(req, res) {
  db.Post.findById(req.params.post_id, function(err, foundPost){
    if (err) {
      console.log("error", err);
    }
    res.json(foundPost);
  })
}

module.exports = {
  index: index,
  create: create,
  detail: detail,
};
