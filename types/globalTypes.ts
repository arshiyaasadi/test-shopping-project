//
// Global Types

export interface ToastMessageProps {
    type: string,
    message: string
}

export interface LayoutDashboardProps {
    children: any,
    onRefresh?: any,
    error?: any,
    loading?: any,
    setNotify?: any
}

export interface Category {
    _id?: string
    name?: string
    slug?: string
}

export interface Creator {
    role?: string
    _id?: string
    name?: string
}

export interface Product {
    _id?: null | string
    title?: null | string
    price?: null |string | number
    category?: null | Category
    description?: null | string
    createdBy?: null | Creator
    createdAt?: null | string
    updatedAt?: null | string
    slug?: null | string
    image?: null | string
}


// action types
import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE, FETCH_CART_FAILURE,
} from "../store/actionTypes"


export interface Cart {
    _id?: string
    Number?: number
    item?: Product
    createdAt?: null | string
}

export interface ProductState {
    pending: boolean
    products: Product[]
    error: string | null
    cart: Cart[]
}

export interface FetchProductSuccessPayload {
    products: Product[]
}

export interface FetchProductFailurePayload {
    error: string;
}

export interface FetchCartFailurePayload {
    cart: Cart[];
}

export interface FetchProductRequest {
    type: typeof FETCH_PRODUCT_REQUEST
}

export type FetchProductSuccess = {
    type: typeof FETCH_PRODUCT_SUCCESS
    payload: FetchProductSuccessPayload
};

export type FetchProductFailure = {
    type: typeof FETCH_PRODUCT_FAILURE
    payload: FetchProductFailurePayload
}

export type FetchCartFailure = {
    type: typeof FETCH_CART_FAILURE
    payload: FetchCartFailurePayload
}

export type ProductActions = | FetchProductRequest | FetchProductSuccess | FetchProductFailure | FetchCartFailure