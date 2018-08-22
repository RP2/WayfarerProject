import axios from "axios";

class createPost {
  static create(user) {
    let request = axios.post(
      `http://localhost:4000/api/users/${user.userId}/post`,
      user
    );
    console.log(request);
    return request;
  }
}

export default createPost;
