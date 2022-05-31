import RNFetchBlob from "rn-fetch-blob";

import { showToast } from "../../../resources/utils";
import {
    CREATE_USER,
    LOGIN,
    ADD_PROVIDER_ATTRIBUTE,
    UPDATE_USER_DETAILS,
    GET_REQUEST_RESOLUTION,
    GET_USED_SERVICES,
    IS_LOADING,
} from "./userActionTypes";

const onError = (error) => {
    showToast("error", error.message);
};

export const register = (_name, _email, _password, _phone) => {
    return async (dispatch) => {
        const onSuccess = (success) => {
            dispatch({
                type: CREATE_USER,
                payload: data,
            });
            return success;
        };
        try {
            const URL = "https://localhost:8091/Gateway/Users/Register";
            const success = await RNFetchBlob.config({
                trusty: true,
            }).fetch(
                "POST",
                URL,
                {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                JSON.stringify({
                    name: _name,
                    email: _email,
                    password: _password,
                    phoneNumber: _phone,
                    company: "",
                    address: "",
                    type: 0,
                    profilePicture: "",
                })
            );

            const data = JSON.parse(success.data);
            return onSuccess(data);
        } catch (error) {
            return onError(error);
        }
    };
};

export const login = (_email, _password) => {
    return async (dispatch) => {
        const onSuccess = (data) => {
            dispatch({
                type: LOGIN,
                payload: data,
            });
            return data;
        };
        try {
            const URL = `https://192.168.1.222:8091/Gateway/Users/Authenticate/${_email}/${_password}`;
            const success = await RNFetchBlob.config({
                trusty: true,
            }).fetch(
                "GET",
                URL,
                {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                });

            const data = JSON.parse(success.data);
            return onSuccess(data);
        } catch (error) {
            return onError(error);
        }
    };
};

export const updateUser = (_name, _email, _password, _phone, _company, _address) => {
    return async (dispatch) => {
        const onSuccess = (success) => {
            dispatch({
                type: UPDATE_USER,
                payload: data,
            });
            return success;
        };
        try {
            const URL = "https://localhost:8091/Gateway/Users/Update";
            const success = await RNFetchBlob.config({
                trusty: true,
            }).fetch(
                "PUT",
                URL,
                {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                JSON.stringify({
                    name: _name,
                    email: _email,
                    password: _password,
                    phoneNumber: _phone,
                    company: _company,
                    address: _address,
                    type: 0,
                    profilePicture: "",
                })
            );

            const data = JSON.parse(success.data);
            return onSuccess(data);
        } catch (error) {
            return onError(error);
        }
    };
};
