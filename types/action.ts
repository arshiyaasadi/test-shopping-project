//
// action types
import { Product } from './global'
import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_CART_LIST,
    FETCH_CART_DATA,
} from "../store/actionTypes"

export interface Cart {
    _id?: any | string
    number?: number
    item?: Product
    createdAt?: any | string
}

export interface ProductState {
    pending: boolean
    products: Product[]
    error: string | null
    cart: Cart[]
}

//
export interface FetchProductSuccessPayload {
    products: Product[]
}

export type FetchProductSuccess = {
    type: typeof FETCH_PRODUCT_SUCCESS
    payload: FetchProductSuccessPayload
}

//
export interface FetchProductFailurePayload {
    error: string
}

export type FetchProductFailure = {
    type: typeof FETCH_PRODUCT_FAILURE
    payload: FetchProductFailurePayload
}

//
export interface FetchCartListPayload {
    product?: Product
    number?: number
}

export type FetchCartList = {
    type: typeof FETCH_CART_LIST
    payload: FetchCartListPayload
}

export interface FetchCartDataPayload {
    cart: Cart[]
}

export type FetchCartData = {
    type: typeof FETCH_CART_DATA
    payload: FetchCartDataPayload
}

export interface FetchProductRequest {
    type: typeof FETCH_PRODUCT_REQUEST
}


export type ProductActions = | FetchProductRequest | FetchProductSuccess | FetchProductFailure | FetchCartList | FetchCartData