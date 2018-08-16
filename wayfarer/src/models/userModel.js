import axios from "axios";

export default class UserModel  {
  static all(userObj) {
      axios.post("https://localhost:4000/api/user/login", {
          username: req.body.username,
          password: req.body.password
      })
          .then(function (response) {
              console.log(response);
            //   res.redirect(response);
              return res.json(response);
          })
          .catch(function (error) {
              console.log(error);
          });    
  }
}

export default UserModel;
