//
// Create store
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger"
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './rootReducer'
import { rootSaga } from "./rootSaga"


// Create the app middleware
const bindMiddleware: any = (middleware: any) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware, logger))
    }
    return applyMiddleware(...middleware)
}

// Mount it on the Store
export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
