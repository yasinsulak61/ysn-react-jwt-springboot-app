import axios from "axios";
import authHeader from "../AuthenticationServices/auth-header";
import * as actionTypes from "../../../actions/user/actions";
import * as url_type from "../../config";

const API_URL_SERVICE = url_type.API_URL_BACKEND + "user/";

class UserService {
  getAllUserSucces(users) {
    return { type: actionTypes.GET_ALL_USER_LIST_SUCCES, payload: users };
  }
  getAllUser(dispatch) {
    return axios
      .get(API_URL_SERVICE + "getUsers.ajax", { headers: authHeader() })
      .then((Response) => Response.json())
      .then((result) => dispatch(this.getAllUserSucces(result)));
  }
}

export default new UserService();
