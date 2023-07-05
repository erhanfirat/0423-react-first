import { combineReducers } from "redux";
import { countReducer } from "./countReducer";

export const reducers = combineReducers({
  count: countReducer,
  // proeduct: productReducer,
  // user: userReducer,
});
