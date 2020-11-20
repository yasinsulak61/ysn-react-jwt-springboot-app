import * as actionsTypes from "../../actions/user/actionsTypes"
import initialState from "./initialState"

export default function changeUserReducer(state=initialState.currentUser,action) {
    switch (action.actionsTypes) {
        case actionsTypes.CHANGE_USER:
            return action.payload
        default:
            return state;
    }
    
}