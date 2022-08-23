import { all, fork } from "redux-saga/effects"

import {productSaga, cartListHandlerSaga} from "./app/sagas"

export function* rootSaga() {
    yield all([fork(productSaga), fork(cartListHandlerSaga)])
}