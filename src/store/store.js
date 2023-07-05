import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { reducers } from "./reducers/reducers";
import { myLogger } from "./middleware/myLogger";
import { countReducer } from "./reducers/countReducer";
// eski versiyonlar için -> import { createStore } from 'redux';

export const store = createStore(reducers, applyMiddleware(myLogger, logger));
//export const store = createStore(countReducer, applyMiddleware(myLogger));
