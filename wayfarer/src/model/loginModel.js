import axios from 'axios'

class loginModel {
  static login(username, password){
    let request = axios.post(`http://localhost:4000/api/user/login`,
      {
        username:username,
        password:password,
      }
    )
    return request;
  }
}

export default loginModel