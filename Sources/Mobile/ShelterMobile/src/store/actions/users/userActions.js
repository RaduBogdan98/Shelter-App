import { showToast } from "../../../resources/utils"
import {
    CREATE_USER,
    LOGIN,
    ADD_PROVIDER_ATTRIBUTE,
    UPDATE_USER_DETAILS,
    GET_REQUEST_RESOLUTION,
    GET_USED_SERVICES,
    IS_LOADING,
    TEST
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
}

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
