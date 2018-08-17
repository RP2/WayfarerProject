import axios from 'axios'

class profileModel {
    static profile(username){
        let request = axios.get(`http://localhost:4000/api/users/${username}`)
        console.log('profile', username)
        return request
    }
  }

  export default profileModel