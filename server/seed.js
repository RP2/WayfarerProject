// simply run: `node seed.js` from the root of this project folder.

const db = require("./models");

var post_list = [
  {
    user: "Carlos Ramirez",
    title: "Land's End",
    text:
      "Land's End is the best place in San Francisco for a mellow hike with unbeatable scenery.",
    city: "San Francisco",
    img:
      "https://www.inside-guide-to-san-francisco-tourism.com/image-files/lands-end-point-san-francisco.jpg"
  },
  {
    user: "Matt Trezeguet",
    title: "Eiffel Tower",
    text:
      "Cliche for a reason, the Eiffel Tower is a must-see. There are restaurants, bars, and viewpoints at the top of the Tower.",
    city: "Paris",
    img:
      "http://www.traveller.com.au/content/dam/images/h/0/x/n/o/i/image.related.articleLeadwide.620x349.h0xnnj.png/1521420538895.jpg"
  },
  {
    user: "Kaori Okada",
    title: "Tokyo Skytree",
    text:
      "The Tokto Skytree is an observation tower in the heart of Tokyo. The Tower provides observation points and restaurants throughout.",
    city: "Tokyo",
    img: "https://www.japanvisitor.com/images/content_images/skytree_15.jpg"
  },
  {
    user: "Daniel Crouch",
    title: "English Premiere League Games",
    text:
      "If you can, get tickets to an English Premiere League soccer game. Even if you know nothing about soccer, this is a great way to see the English culture.",
    city: "London",
    img:
      "https://thumbnails.trvl-media.com/ufALfXsF9fsKvZSWjWQ5802I1-g=/a.travel-assets.com/mediavault.le/media/0a46c4f0741336a1d7c388b748d4a6d24d79febb.jpeg"
  }
];

const user_list = [
  {
    name: "Carlos Ramirez",
    city: "San Francisco",
    join_date: "2017-06-19T00:37:30.410Z",
    username: "Carlos_10",
    password: "carlos",
    profile_pic:
      "https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg"
  },
  {
    name: "Daniel Crouch",
    city: "London",
    join_date: "2018-01-13T00:37:09.410Z",
    username: "D_crouch",
    password: "daniel",
    profile_pic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DyUrCqw5kVs_O3e9oaug5HshVqjH5B0hP1_cXCinGjZcHBRP"
  },
  {
    name: "Kaori Okada",
    city: "Tokyo",
    join_date: "2017-03-15T00:37:02.410Z",
    username: "K_okada",
    password: "kaori",
    profile_pic:
      "https://www.australian-macadamias.org/trade/uploads/images/News%20images/Japanese_Cosumer_Profile.jpg"
  },
  {
    name: "Matt Trezeguet",
    city: "Paris",
    join_date: "2017-12-22T00:37:06.410Z",
    username: "M_trezeguet",
    password: "matt",
    profile_pic:
      "https://hips.hearstapps.com/ell.h-cdn.co/assets/cm/15/02/768x384/54abfa3b9c7d5_-_elle-camille-lacourt-2ax5ww-v-elv.jpg?resize=480:*"
  }
];

db.User.remove({}, (err, post) => {
  console.log("removed users");
  db.User.create(user_list, (err, users) => {
    if (err) {
      console.log("Error from Create Users");
      return;
    }
    console.log("recreated all users");

    db.Post.remove({}, (err, post) => {
      console.log("removed all posts");
      post_list.forEach(postData => {
        var post = new db.Post({
          user: postData.user,
          title: postData.title,
          text: postData.text,
          city: postData.city,
          img: postData.img
        });
        db.User.findOne({ name: postData.user }, (err, foundUser) => {
          console.log(
            "found user " + foundUser.name + " for post " + post.title
          );
          if (err) {
            console.log(err);
            return;
          }
          post.user = foundUser;
          post.save((err, savedPost) => {
            if (err) {
              return console.log("Error from post.save", err);
            }
            console.log(
              "saved post " + post.title + "from user " + foundUser.name
            );
          });
        });
      });
    });
  });
});
