import axios from "axios";

class createPost {
  static create(username) {
    let request = axios.post(
      `http://localhost:4000/api/users/${username}/post`,
      {
        user: username,
        title: title,
        text: text,
        city: city,
        img: img
      }
    );
    return request;
  }
}

export default createPost;
