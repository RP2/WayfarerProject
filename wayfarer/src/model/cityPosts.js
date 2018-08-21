import axios from "axios";

class cityPosts {
  static findPosts(cityId) {
    let request = axios.get(`http://localhost:4000/api/cities/${cityId}/posts`);
    return request;
  }
}

export default cityPosts;
