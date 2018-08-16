import axios from 'axios'

class signupModel {
    static signup(){
      let request = axios.post(`http://localhost:4000/api/user/signup`)
      return request
    }
  }

  export default signupModel