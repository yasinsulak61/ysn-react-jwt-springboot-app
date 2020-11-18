import axios from "axios";
import authHeader from "../AuthenticationServices/auth-header";

import * as url_type from "../../config";

const API_URL_SERVICE = url_type.API_URL_BACKEND + "user/";

class UserService {
  getUserList() {
    return axios.get(API_URL_SERVICE + "getUsers.ajax", {
      headers: authHeader()
    }).then(res=>{
      console.log(res.data.data);
      console.log(res.error);
    }).catch(err=>{
      console.log(err);

    });
  }

  getPublicContent() {
    return axios.get(API_URL_SERVICE + "all");
  }

  getModeratorBoard() {
    return axios.get(API_URL_SERVICE + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL_SERVICE + "admin", { headers: authHeader() });
  }
}

export default new UserService();
