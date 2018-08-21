// simply run: `node seed.js` from the root of this project folder.

const db = require("./models");

var city_list = [
  {
    name: "London",
    country: "UK",
    image_url:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/london-organisations/tower-bridge-exhibition/tower-bridge-homepage-image.jpg?mw=1920&hash=E19E0136A57855A8ED61B4E66EA72F1646CA8DAC"
  },

  {
    name: "Paris",
    country: "France",
    image_url:
      "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"
  },
  {
    name: "Tokyo",
    country: "Japan",
    image_url: "https://www.japan-guide.com/thumb/XYZeXYZe3009_375.jpg"
  },
  {
    name: "San Francisco",
    country: "USA",
    image_url:
      "http://baycityguide.com/media/00P0B00000uwaF6UAI/Skyline-Downtown-Close-up-1500.jpg"
  }
];

var user = {
  name: "John Doe",
  city: "San Francisco",
  username: "jdoe",
  password: "1234",
  posts: []
};

var post = {
  title: "Test Post Two",
  text: "This is the text for Post Two..."
};

// db.Post.create({title: 'Post One', text: 'Text for Post One...'}, (err, newPost) => {
//   if (err) throw err;
//   process.exit();
// })

// var newPost = new db.Post({title: 'Testing...', text: 'Post....'});
// newPost.save();
// process.exit();

// db.City.remove({}, (err, removedPosts) => {
//   if (err) throw err;
//   db.City.create(city_list, (err, newCity) => {
//     if (err) throw err;
//     db.User.remove({}, (err, removedUsers) => {
//       if (err) throw err;
//       db.User.create(user, (err, newUser) => {
//         if (err) throw err;
//         db.Post.remove({}, (err, removedPosts) => {
//           if(err) throw err;

//           // newPost.user = newUser._id;
//           // newPost.city = newCity._id;
//           // newPost.save();
//           // process.exit();
//         })
//         var newPost = new db.Post({title: 'Test Post 4', text: 'Some text...'});
//           newPost.save();
//           process.exit();
//       })
//     })
//   })
// })

db.Post.remove({}, (err, removedPosts) => {
  if (err) throw err;
  db.City.remove({}, (err, removedCities) => {
    if (err) throw err;
    db.City.create(city_list, (err, newCity) => {
      if (err) throw err;
      db.User.remove({}, (err, removedUsers) => {
        if (err) throw err;
        db.User.create(user, (err, newUser) => {
          if (err) throw err;
          db.Post.create(
            {
              title: "Test Post 4",
              text: "Some text...",
              user: newUser._id,
              city: newCity[3]._id
            },
            (err, newPost) => {
              if (err) throw err;
              process.exit();
            }
          );
        });
      });
    });
  });
});

// var post_list = [
//   {
//     user: "Carlos Ramirez",
//     title: "Land's End",
//     text:
//       "Land's End is the best place in San Francisco for a mellow hike with unbeatable scenery.",
//     city: [],
//     img:
//       "https://www.inside-guide-to-san-francisco-tourism.com/image-files/lands-end-point-san-francisco.jpg"
//   },
//   {
//     user: "Brady Jimison",
//     title: "Golden Gate Bridge",
//     text:
//       "Golden Gate Bridge is iconic and a must see for all visitors. Bring a coat, it gets chilly out there.",
//     city: [],
//     img:
//       "http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/landmark-images/golden-gate_web.jpg"
//   },
//   {
//     user: "Kenny Turner",
//     title: "Big Ben",
//     text:
//       "Big Ben is the biggest clock in the world. Just kidding, I have no clue if that is true but I recommend seeing it!",
//     city: [],
//     img:
//       "https://media.cntraveler.com/photos/571f9be4afc531496352d2a9/4:3/w_480,c_limit/GettyImages-174726708.jpg"
//   },
//   {
//     user: "Matt Trezeguet",
//     title: "Eiffel Tower",
//     text:
//       "Cliche for a reason, the Eiffel Tower is a must-see. There are restaurants, bars, and viewpoints at the top of the Tower.",
//     city: [],
//     img:
//       "http://www.traveller.com.au/content/dam/images/h/0/x/n/o/i/image.related.articleLeadwide.620x349.h0xnnj.png/1521420538895.jpg"
//   },
//   {
//     user: "Andy Bernard",
//     title: "Delicious Baguettes",
//     text:
//       "The baguettes in Paris are insanely delicious, as you could imagine. I highly recommend Le Petit Parisien.",
//     city: [],
//     img:
//       "https://cloud.lovindublin.com/images/uploads/2017/06/_relatedEntryImage2x/le-petit-parisien.jpg?mtime=20170609101932"
//   },
//   {
//     user: "Kaori Okada",
//     title: "Tokyo Skytree",
//     text:
//       "The Tokto Skytree is an observation tower in the heart of Tokyo. The Tower provides observation points and restaurants throughout.",
//     city: [],
//     img: "https://www.japanvisitor.com/images/content_images/skytree_15.jpg"
//   },
//   {
//     user: "Rina Matsumoto",
//     title: "Downtown Tokyo",
//     text:
//       "Downtown Tokyo is unlike any other big city in the world. Everything works, and the building designs are unique.",
//     city: [],
//     img:
//       "http://www.jllapsites.com/research/wp-content/uploads/2013/10/What-The-2020-Olympic-Games-Means-For-Hotels-Tourism-In-Tokyo-e1422940173312.jpg"
//   },
//   {
//     user: "Daniel Crouch",
//     title: "English Premiere League Games",
//     text:
//       "If you can, get tickets to an English Premiere League soccer game. Even if you know nothing about soccer, this is a great way to see the English culture.",
//     city: [],
//     img:
//       "https://thumbnails.trvl-media.com/ufALfXsF9fsKvZSWjWQ5802I1-g=/a.travel-assets.com/mediavault.le/media/0a46c4f0741336a1d7c388b748d4a6d24d79febb.jpeg"
//   }
// ];

// const user_list = [
//   {
//     name: "Carlos Ramirez",
//     city: "San Francisco",
//     join_date: "2017-06-19T00:37:30.410Z",
//     username: "Carlos_10",
//     password: "carlos",
//     profile_pic:
//       "https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg"
//     // posts: ["Land's End"]
//   },
//   {
//     name: "Brady Jimison",
//     city: "San Francisco",
//     join_date: "2018-09-18T00:37:30.410Z",
//     username: "bjimison",
//     password: "brady",
//     profile_pic:
//       "https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg"
//     // posts: ["Land's End"]
//   },
//   {
//     name: "Rina Matsumoto",
//     city: "Tokyo",
//     join_date: "2017-01-18T00:37:30.410Z",
//     username: "rmatsumoto",
//     password: "rina",
//     profile_pic:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPpaW08hInm-r8kEkLs3S645pId88vy4sCURYVfHoIRRH3bAl"
//     // posts: ["Land's End"]
//   },
//   {
//     name: "Daniel Crouch",
//     city: "London",
//     join_date: "2018-01-13T00:37:09.410Z",
//     username: "D_crouch",
//     password: "daniel",
//     profile_pic:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DyUrCqw5kVs_O3e9oaug5HshVqjH5B0hP1_cXCinGjZcHBRP"
//     // posts: ["English Premiere League Games"]
//   },
//   {
//     name: "Kenny Turner",
//     city: "London",
//     join_date: "2018-01-13T00:37:09.410Z",
//     username: "kturner",
//     password: "kenny",
//     profile_pic:
//       "https://s-media-cache-ak0.pinimg.com/originals/de/6e/54/de6e54cbde9758ace45fdaff9cd3a738.jpg"
//     // posts: ["English Premiere League Games"]
//   },
//   {
//     name: "Kaori Okada",
//     city: "Tokyo",
//     join_date: "2017-03-15T00:37:02.410Z",
//     username: "K_okada",
//     password: "kaori",
//     profile_pic:
//       "https://www.australian-macadamias.org/trade/uploads/images/News%20images/Japanese_Cosumer_Profile.jpg"
//     // posts: ["Tokyo Skytree"]
//   },
//   {
//     name: "Matt Trezeguet",
//     city: "Paris",
//     join_date: "2017-12-22T00:37:06.410Z",
//     username: "M_trezeguet",
//     password: "matt",
//     profile_pic:
//       "https://hips.hearstapps.com/ell.h-cdn.co/assets/cm/15/02/768x384/54abfa3b9c7d5_-_elle-camille-lacourt-2ax5ww-v-elv.jpg?resize=480:*"
//     // posts: ["Eiffel Tower"]
//   },
//   {
//     name: "Andy Bernard",
//     city: "Paris",
//     join_date: "2016-11-22T00:37:06.410Z",
//     username: "the_nard_dog",
//     password: "andy",
//     profile_pic:
//       "https://1.bp.blogspot.com/-VC7eUIkO2NY/Vy9_F6BZBtI/AAAAAAAAISk/q-JCH6veTewDlrlXhol1CuoKgGCkE9NhQCLcB/s1600/2016-05-08-1400_Andy_Bernard_01.jpg"
//     // posts: ["Eiffel Tower"]
//   }
// ];

// db.User.remove({}, (err, post) => {
//   console.log("removed users");
//   db.User.create(user_list, (err, users) => {
//     if (err) {
//       console.log("Error from Create Users");
//       return;
//     }
//     console.log("recreated all users");
//     db.City.remove({},(err, cities) => {
//       if (err) throw err;
//       db.City.create(city_list, (err, cities) => {
//         if (err) {
//           console.log("Error from Create Users");
//           // return;
//         }
//       })
//     })
//     db.Post.remove({}, (err, post) => {
//       console.log("removed all posts");
//       post_list.forEach(postData => {
//         var post = new db.Post({
//           user: postData.user,
//           title: postData.title,
//           text: postData.text,
//           city: postData.city,
//           img: postData.img
//         });
//         db.User.findOne({ name: postData.user }, (err, foundUser) => {
//           console
//             .log
//             // "found user " + foundUser.name + " for post " + post.title
//             ();
//           if (err) {
//             console.log(err);
//             return;
//           }
//           post.user = foundUser;
//           post.save((err, savedPost) => {
//             if (err) {
//               return console.log("Error from post.save", err);
//             }
//             console.log(
//               "saved post " + post.title + "from user " + foundUser.name
//             );
//           });
//         });
//       });
//     });
//   });
// });
