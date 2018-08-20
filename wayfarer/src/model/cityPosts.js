import axios from "axios";

class cityPosts {
  static Posts() {
    let request = axios.get(`http://localhost:4000/api/cities/:city_id/posts`);
    return request;
  }
}

export default cityPosts;
