import {
    CREATE_USER,
    LOGIN,
    ADD_PROVIDER_ATTRIBUTE,
    UPDATE_USER_DETAILS,
    GET_REQUEST_RESOLUTION,
    GET_USED_SERVICES,
    IS_LOADING
} from "../actions/users/userActionTypes";

const initialState = {
    user: undefined,
    isLoading: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
            };
            break;
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            };
            break;
        case ADD_PROVIDER_ATTRIBUTE:
            return {
                ...state,
            };
            break;
        case UPDATE_USER_DETAILS:
            return {
                ...state,
                user: action.payload,
            };
            break;
        case GET_REQUEST_RESOLUTION:
            return {
                ...state,
            };
            break;
        case GET_USED_SERVICES:
            return {
                ...state,
            };
            break;
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            };
            break;
        default:
            return state;
    }
};

export default userReducer;
