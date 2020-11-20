import * as actionsTypes from "../../actions/user/actionsTypes"
import initialState from "./initialState"

export default function userListReducer(state=initialState.users,action) {
    switch (action.type) {
        case actionsTypes.GET_ALL_USER_LIST_SUCCES:
            return action.payload
        default:
            return state;
    }
    
}