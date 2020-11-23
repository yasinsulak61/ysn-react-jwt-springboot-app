import * as actionsTypes from "../../actions/user/actionsTypes";
import initialState from "./initialState";

export default function currentUserReducer(
  state = initialState.currentUser,
  action
) {
  switch (action.actionsTypes) {
    case actionsTypes.CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}
