import { all, fork } from "redux-saga/effects"

import productSaga from "./app/sagas"

export function* rootSaga() {
    yield all([fork(productSaga)])
}