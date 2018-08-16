import axios from 'axios'

class loginModel {
  static login(){
    let request = axios.post(`http://localhost:4000/api/user/login`)
    return request
  }
}

class signupModel {
  static signup(){
    let request = axios.post(`http://localhost:4000/api/user/signup`)
    return request
  }
}

export default {loginModel, signupModel}