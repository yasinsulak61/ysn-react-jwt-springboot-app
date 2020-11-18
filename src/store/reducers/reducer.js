import {combineReducers} from "redux"
import userReducer from "./user/reducer"
import mainReducer from "./main/reducer"


const  reducer = combineReducers({
    userReducer:userReducer,
    mainReducer:mainReducer
    
})

export default reducer;