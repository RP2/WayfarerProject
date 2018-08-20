import axios from 'axios'

class listPosts {
    static Posts(id){
        let request = axios.get(`http://localhost:4000/api/cities/${id}/posts`)
        return request
    }
  }

  export default listPosts