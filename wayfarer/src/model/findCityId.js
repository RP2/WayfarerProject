import axios from "axios";

class FindCityId {
  static findId() {
    let request = axios.get(`http://localhost:4000/api/cities`);
    return request;
  }
}

export default FindCityId;
