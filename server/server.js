// require Express, create an Express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// add the body-parser middleware to the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require the models directory in server.js
const db = require('./models');
const controllers = require('./controllers');

// ########################### ROUTES ###############################
//login or create account/post routes
app.post('/api/user/login', controllers.user.login);
app.post("/api/user/signup", controllers.user.signup);
app.post("/api/user/:user_id/post", controllers.user.post.create);

app.get("/api/user", controllers.user.index);
app.get("/api/user/:user_id/:post_id", contollers.user.post.index)

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 4000, () => {
  console.log("Express server is up and running on http://localhost:4000/");
});
