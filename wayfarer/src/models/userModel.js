import axios from "axios";

class UserModel {
  static all(userObj) {
    let request = axios
      .post("https://localhost:4000/api/user/login", {
        username: request.body.username,
        password: request.body.password
      })
      .then(function(response) {
        console.log(response);
        return response.json(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    return request;
  }

  static getOne(id) {
    let request = axios.get("", id);
    return request;
  }
}

export default UserModel;
