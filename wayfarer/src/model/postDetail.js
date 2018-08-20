import axios from "axios";

class postDetail {
  static postDetail(post_id) {
    let request = axios.get(`http://localhost:4000/api/posts/${post_id}`);
    return request;
  }
}

export default postDetail;