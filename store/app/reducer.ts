import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_CART_LIST
} from "../actionTypes"

import {Cart, FetchCartListPayload, ProductActions, ProductState} from "../../types/globalTypes"

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
        case FETCH_CART_LIST:
            // Get data from payload
            const {number, product}: FetchCartListPayload = action.payload

            // Check exist item in cart
            const isExist: any = state.cart.find((item: Cart) => item._id === product?._id)

            let newCart: Cart[] | any = [...state.cart]
            let newCartItem: Cart = {
                _id: product?._id,
                number: number,
                item: product,
                createdAt: new Date()
            }

            // Add to cart
            if (number === 1) {
                if (isExist) {
                    newCart = state.cart.map((item: Cart) => {
                        if(item._id === isExist._id) {
                            // @ts-ignore
                            item.number += number
                            return item
                        } else{
                            return item
                        }
                    })
                }
                else {
                    newCart = [...newCart, newCartItem]
                }
                return {
                    ...state,
                    cart: newCart
                }
            }
            // Remover to cart
            else {
                if (isExist && isExist?.number > 1) {
                    newCart = state.cart.map((item: Cart) => {
                        if(item._id === isExist._id) {
                            // @ts-ignore
                            item.number += number
                            return item
                        } else{
                            return item
                        }
                    })
                }
                else {
                    newCart.splice(isExist, 1)
                }
                return {
                    ...state,
                    cart: newCart
                }
            }
        default:
            return {
                ...state,
        }
    }
}