import { combineReducers } from "redux";
import mainReducer from "./main/mainReducer";
import userListReducer from "./user/userListReducer"

const rootReducer = combineReducers({
  userListReducer,
  mainReducer
});

export default rootReducer;
