import axios from "axios"
import { all, call, put, takeLatest } from "redux-saga/effects"

import {fetchProductFailure, fetchCartItem, fetchProductSuccess} from "./actions"
import { FETCH_PRODUCT_REQUEST, FETCH_CART_LIST } from "../actionTypes"
import { Product } from "../../types/global"
import { FetchCartList } from "../../types/action"

const getProducts = () =>
    axios.get<Product[]>("https://api.storerestapi.com/products")

function* fetchProductSaga() {
    try {
        let response: any
        // @ts-ignore
        response = yield call(getProducts)
        yield put(
            fetchProductSuccess({
                products: response.data?.data,
            })
        );
    } catch (e: any) {
        yield put(
            fetchProductFailure({
                error: e,
            })
        )
    }
}

function* fetchCartItemSaga(action: FetchCartList) {
    const {number, product} = action?.payload
    fetchCartItem({
        number,
        product
    })
}

export function* productSaga() {
    yield all([takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga)])
}

export function* cartListHandlerSaga() {
    yield all([takeLatest(FETCH_CART_LIST, fetchCartItemSaga)])
}