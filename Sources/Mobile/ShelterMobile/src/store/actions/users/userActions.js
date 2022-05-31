import { showToast } from "../../../resources/utils";
import {
    CREATE_USER,
    LOGIN,
    ADD_PROVIDER_ATTRIBUTE,
    UPDATE_USER_DETAILS,
    GET_REQUEST_RESOLUTION,
    GET_USED_SERVICES,
    IS_LOADING,
    TEST,
} from "./userActionTypes";

const onError = (error) => {
    showToast("error", error.message);
};

export const test = (data) => {
    return async (dispatch) => {
        dispatch({
            type: TEST,
            payload: data,
        });
    };
};

export const login = (email, password) => {
    return async (dispatch) => {
        const onSuccess = (success) => {
            dispatch({
                type: LOGIN,
                payload: data,
            });
            return success;
        };
        try {
            const URL = `https://192.168.1.222:8091/Gateway/Services/GetAllServices`;
            console.log("🚀 ~ file: userActions.js ~ line 37 ~ return ~ URL", URL);
            const success = await fetch(URL);
            console.log(
                "🚀 ~ file: userActions.js ~ line 37 ~ return ~ success",
                success
            );
            return onSuccess(success);
        } catch (error) {
            console.log(
                "🚀 ~ file: userActions.js ~ line 42 ~ return ~ error",
                error
            );
            return onError(error);
        }
    };
};

export const register = () => {
    return async (dispatch) => {
        const onSuccess = (success) => {
            dispatch({
                type: CREATE_USER,
                payload: data,
            });
            return success;
        };
        try {
            const success = await fetch(`${URL}/user/register`);
            return onSuccess(success);
        } catch (error) {
            return onError(error);
        }
    };
};
