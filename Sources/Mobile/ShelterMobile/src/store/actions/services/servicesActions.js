import RNFetchBlob from "rn-fetch-blob";

import { showToast } from "../../../resources/utils";
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
} from "./servicesActionTypes";

const onError = (error) => {
    showToast("error", error.message);
};

export const getServices = () => {
    return async (dispatch) => {
        const onSuccess = (data) => {
            dispatch({
                type: GET_SERVICES,
                payload: data,
            });
            return data;
        };
        try {
            const URL = 'https://192.168.1.222:8091/Gateway/Services/GetAllServices';
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

export const getNews = () => {
    return async (dispatch) => {
        const onSuccess = (data) => {
            dispatch({
                type: GET_NEWS,
                payload: data,
            });
            return data;
        };
        try {
            const URL = 'https://newsapi.org/v2/top-headlines?pageSize=6&q=refugee&apiKey=27933af303874173b2e5089206b71b09';
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

export const createService = (_ownerId, _serviceType, _serviceTitle, _serviceDescription, _serviceThumbnail) => {
    return async (dispatch) => {
        const onSuccess = (data) => {
            dispatch({
                type: CREATE_SERVICE,
                payload: data,
            });
            return data;
        };
        try {
            const URL = 'https://192.168.1.222:8091/Gateway/Services/Create';
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
                    ownerId: _ownerId,
                    serviceType: _serviceType,
                    serviceTitle: _serviceTitle,
                    serviceDescription: _serviceDescription,
                    serviceThumbnail: _serviceThumbnail,
                    available: true
                }));

            const data = JSON.parse(success.data);
            return onSuccess(data);
        } catch (error) {
            return onError(error);
        }
    };
};

