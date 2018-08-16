import express from "express";
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const db = require("./models");
const controllers = require("./controllers");

// ########################### ROUTES ###############################
// define a root route: localhost:3000/
app.get("/api", (req, res) => {
  res.send();
});
//login or create account/post routes
app.post('/api/user/login', controllers.user.login);
app.post("/api/user/signup", controllers.user.signup);
app.post("/api/user/:user_id/post", controllers.user.post.create);

app.get("/api/user", controllers.user);
app.get("/api/user/:id/post", controllers.user.post.create);

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log("Express server is up and running on http://localhost:3000/");
});
