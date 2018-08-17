import axios from 'axios'

class editProfileModel {
  static edit(username, city, profile_pic){
    let request = axios.post(`http://localhost:4000/api/users/${username}/update`,
      {
        username:username,
        city:city,
        profile_pic:profile_pic,
      }
    )
    return request;
  }
}

export default editProfileModel