const db = require("../models");

function index(req, res) {
  db.City.find({}, function(err, foundCities) {
    if (err) {
      console.log("error", err);
    }
    res.json(foundCities);
  });
}

function show(req, res) {
    db.City.findById(req.params.city_id, function(err, foundCity) {
        if(err) throw err;
        res.json(foundCity)
    });
  }

module.exports = {
    index: index,
    show: show,
  };