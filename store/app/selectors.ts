import { createSelector } from "reselect"

import { AppState } from "../rootReducer"

const getPending = (state: AppState) => state.appData.pending
export const getPendingSelector = createSelector(getPending, (pending) => pending)

const getProducts = (state: AppState) => state.appData.products
export const getProductSelector = createSelector(getProducts, (products: any) => products?.data)

const getError = (state: AppState) => state.appData.error
export const getErrorSelector = createSelector(getError, (error) => error)


const getCart = (state: AppState) => state.appData.error
export const getCartSelector = createSelector(getCart, (cart) => cart)


