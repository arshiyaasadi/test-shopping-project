import axios from "axios"
import { all, call, put, takeLatest } from "redux-saga/effects"

import { fetchProductFailure, fetchProductSuccess } from "./actions"
import { FETCH_PRODUCT_REQUEST } from "../actionTypes"
import { Product } from "../../types/globalTypes"

const getProducts = () =>
    axios.get<Product[]>("https://api.storerestapi.com/products")

function* fetchProductSaga() {
    try {
        let response: any;
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
        );
    }
}

function* productSaga() {
    yield all([takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga)])
}

export default productSaga