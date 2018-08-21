const db = require("../models");

function index(req, res) {
  db.Post.find({}, (err, foundPosts) => {
    if (err) {
      console.log("error", err);
    }
    res.json(foundPosts);
  });
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
  // console.log(req.params.post_id);
  // res.send('Detail')
  db.Post.findById(req.params.post_id, function(err, foundPost) {
    if (err) {
      console.log("error", err);
    }
    res.json(foundPost);
  });
}

const cityPosts = (req, res) => {
  console.log(req.params.city_id);
  db.Post.find({ city: req.params.city_id }, function(err, foundCities) {
    if (err) {
      console.log("error", err);
    }
    res.json(foundCities);
  });

  // foundCities.map(post, index => {
  //   let desiredCities = []
  //   if(post.city === _id)
  // })

  // db.Post.find({ city: req.params.id })
  //   .populate("city")
  //   .exec((err, foundPosts) => {
  //     if (err) {
  //       console.log("error from city Posts: ", err);
  //     }
  //     return(foundPosts);
  //   });
};

module.exports = {
  index: index,
  create: create,
  detail: detail,
  cityPosts: cityPosts
};
