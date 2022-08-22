import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_CART_FAILURE } from "../actionTypes"

import { ProductActions, ProductState } from "../../types/globalTypes"

// store items
const initialState: ProductState = {
    pending: false,
    products: [],
    error: null,
    cart: []
};

export default (state = initialState, action: ProductActions) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                pending: true,
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload.products,
                error: null,
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                pending: false,
                products: [],
                error: action.payload.error,
            }
        case FETCH_CART_FAILURE:
            return {
                ...state,
                cart: action.payload.cart
            }
        default:
            return {
                ...state,
        }
    }
}