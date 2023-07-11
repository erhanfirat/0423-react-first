import axios from "axios";
import { PRODUCT_ACTIONS } from "../reducers/productReducer";
import { API } from "../../api/api";

export const getProductsActionCreator = () => (dispatch) => {
  dispatch({ type: PRODUCT_ACTIONS.fetchStart });
  API.get("/products")
    .then((res) =>
      dispatch({
        type: PRODUCT_ACTIONS.fetchSuccess,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: PRODUCT_ACTIONS.fetchError,
        payload: err.message,
      })
    );
};
