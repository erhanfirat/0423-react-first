import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { reducers } from "./reducers/reducers";
import { myLogger } from "./middleware/myLogger";
import { countReducer } from "./reducers/countReducer";
// eski versiyonlar için -> import { createStore } from 'redux';

export const store = createStore(reducers, applyMiddleware(thunk, myLogger, logger));
//export const store = createStore(countReducer, applyMiddleware(myLogger));
