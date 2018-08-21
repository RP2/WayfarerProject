import axios from "axios";

class cityPosts {
  static findPosts(city) {
    let request = axios.get(`http://localhost:4000/api/cities/${city}/posts`);
    console.log(request);
    return request;
  }
}

export default cityPosts;
