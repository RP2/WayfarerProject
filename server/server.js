// require Express, create an Express app
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());

// add the body-parser middleware to the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require the models directory in server.js
const db = require("./models");
const controllers = require("./controllers");

// ########################### ROUTES ###############################

//login or create account/post routes
app.post("/api/users/login", controllers.user.login);
app.post("/api/users/signup", controllers.user.signup);
app.post("/api/users/:user_id/update", controllers.user.updateProfile);
app.post("/api/users/:user_id/post", controllers.post.create);

// user routes
app.get("/api/users", controllers.user.index);
app.get("/api/users/:user_id", controllers.user.profile);

// city routes
app.get("/api/cities", controllers.city.index);
app.get("/api/cities/:city_id", controllers.city.show);
app.get("/api/cities/:city_id/posts", controllers.post.cityPosts);

// post routes
app.get("/api/posts", controllers.post.index);
app.get("/api/posts/:post_id", controllers.post.detail);

// create posts

// delete routes
app.delete("/api/posts/:post_id", controllers.post.destroy);

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 4000, () => {
  console.log("Express server is up and running on http://localhost:4000/");
});
