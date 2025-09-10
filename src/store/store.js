
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import {combineReducers} from "redux";
import rootSaga from "../saga/rootSaga.js";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({

})
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware)
    }
})
sagaMiddleware.run(rootSaga);

export default store;
