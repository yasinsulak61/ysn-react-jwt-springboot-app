import * as actionTypes from "../../actions/user/actions"

const initialState = {
    data: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_ALL_USER_LIST_SUCCES:
            return {
              ...state,

            };
        default:
            return state;
    }
};

export default reducer;