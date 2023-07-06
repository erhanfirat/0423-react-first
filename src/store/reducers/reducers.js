import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { productsReducer } from "./productReducer";

export const reducers = combineReducers({
  count: countReducer,
  product: productsReducer,
  // user: userReducer,
});
