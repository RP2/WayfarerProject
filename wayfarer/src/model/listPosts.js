import axios from 'axios'

class listPosts {
    static Posts(){
        let request = axios.get(`http://localhost:4000/api/posts`)
        return request
    }
  }

  export default listPosts