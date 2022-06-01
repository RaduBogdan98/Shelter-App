import {
    GET_SERVICES,
    CREATE_SERVICE,
    CONFIRM_SERVICE,
    USE_SERVICE,
    GET_SERVICES_FOR_PROVIDER,
    SET_AVAILABILITY,
    DELETE_SERVICE,
    GET_NEWS,
    IS_LOADING
} from "../actions/services/servicesActionTypes";

const initialState = {
    allServices: undefined,
    news: undefined,
    isLoading: false
};

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES:
            return {
                ...state,
                allServices: action.payload,
            };
            break;
        case CREATE_SERVICE:
            return {
                ...state,
            };
            break;
        case CONFIRM_SERVICE:
            return {
                ...state,
            };
            break;
        case USE_SERVICE:
            return {
                ...state,
            };
            break;
        case GET_SERVICES_FOR_PROVIDER:
            return {
                ...state,
            };
            break;
        case SET_AVAILABILITY:
            return {
                ...state,
            };
            break;
        case DELETE_SERVICE:
            return {
                ...state,
            };
            break;
        case GET_NEWS:
            return {
                ...state,
                news: action.payload,
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

export default servicesReducer;
