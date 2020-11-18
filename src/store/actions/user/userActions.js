import * as actionTypes from "./actionTypes";
import * as url_type from "../../../services/config";

let API_URL_SERVICE = url_type.API_URL_BACKEND + "user/";
export function changeUser(user){
    return {type:actionTypes.CHANGE_USER,payload:user}

}
export function getUserSucces(user){
    return {type: actionTypes.GET_ALL_USER_LIST_SUCCES, payload: user }
}


export function getUser(){
    return function(dispatch){

        return fetch(API_URL_SERVICE).then(response =response.json()).then(result =>dispatch())


    }
}