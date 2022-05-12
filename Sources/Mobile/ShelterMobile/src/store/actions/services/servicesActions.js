import { showToast } from "../../resources/utils";
import {
    GET_SERVICES,
    CREATE_SERVICE,
    CONFIRM_SERVICE,
    USE_SERVICE,
    GET_SERVICES_FOR_PROVIDER,
    SET_AVAILABILITY,
    DELETE_SERVICE,
    IS_LOADING
} from "./servicesActionTypes";

const onError = (error) => {
    showToast("error", error.message);
};

export const getServices = () => {
    return async (dispatch) => {
        const onSuccess = (success) => {
            dispatch({
                type: GET_SERVICES,
                payload: data,
            });
            return success;
        };
        try {
            const success = await fetch(`${URL}/service/getAll`);
            return onSuccess(success);
        } catch (error) {
            return onError(error);
        }
    };
};
