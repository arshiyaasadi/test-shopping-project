import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_SUCCESS,
    FETCH_CART_LIST,
} from "../actionTypes"

import {
    FetchProductRequest,
    FetchProductSuccess,
    FetchProductSuccessPayload,
    FetchProductFailure,
    FetchProductFailurePayload,
    FetchCartList,
    FetchCartListPayload,
} from "../../types/globalTypes"

export const fetchProductRequest = (): FetchProductRequest => ({
    type: FETCH_PRODUCT_REQUEST,
})

export const fetchProductSuccess = (
    payload: FetchProductSuccessPayload
): FetchProductSuccess => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload,
})

export const fetchProductFailure = (
    payload: FetchProductFailurePayload
): FetchProductFailure => ({
    type: FETCH_PRODUCT_FAILURE,
    payload,
})

export const fetchCartItem = (
    payload: FetchCartListPayload
): FetchCartList => ({
    type: FETCH_CART_LIST,
    payload,
})