import axios from "axios";

class UserService {
  /**
   *
   */
  static index() {
    return axios.get(process.env.REACT_APP_DOMAIN + "/users?page=1&per_page=5");
  }
  /**
   *
   */
  static show(id) {
    return axios.get(process.env.REACT_APP_DOMAIN + "/users/" + id);
  }
}

export default UserService;
