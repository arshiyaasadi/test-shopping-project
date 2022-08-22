import { combineReducers } from "redux"

import productReducer from "./app/reducer"

const rootReducer = combineReducers({
    appData: productReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer