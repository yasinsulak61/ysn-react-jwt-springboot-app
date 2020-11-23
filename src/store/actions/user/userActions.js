//import axios from "axios";
import authHeader from "../../services/api/AuthenticationServices/auth-header";
import * as url_type from "../../services/config";
import * as actionTypes from "./actionsTypes";
const API_URL_SERVICE = url_type.API_URL_BACKEND + "user/";

export function changeUser(user){
  return {type: actionTypes.CHANGE_USER,payload:user}
}


export function getUserSucces(users) {
  return { type: actionTypes.GET_ALL_USER_LIST_SUCCES, payload: users };
}
export function getUserList() {
  return function (dispatch) {
    return fetch(API_URL_SERVICE + "getUsers.ajax", {
      headers: authHeader(),
    })
      .then((response) => response.json())
      .then((result) => dispatch(getUserSucces(result)))    
  };
}

