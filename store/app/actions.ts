import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_SUCCESS,
} from "../actionTypes";
import {
    FetchProductRequest,
    FetchProductSuccess,
    FetchProductSuccessPayload,
    FetchProductFailure,
    FetchProductFailurePayload,
} from "../../types/globalTypes";

export const fetchProductRequest = (): FetchProductRequest => ({
    type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (
    payload: FetchProductSuccessPayload
): FetchProductSuccess => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload,
});

export const fetchProductFailure = (
    payload: FetchProductFailurePayload
): FetchProductFailure => ({
    type: FETCH_PRODUCT_FAILURE,
    payload,
});