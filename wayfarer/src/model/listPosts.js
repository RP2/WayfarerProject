import axios from "axios";

class listPosts {
<<<<<<< HEAD
  static Posts() {
    let request = axios.get(`http://localhost:4000/api/posts`);
    return request;
=======
    static Posts(){
        let request = axios.get(`http://localhost:4000/api/posts`)
        return request
    }
>>>>>>> upstream/master
  }
}

export default listPosts;
