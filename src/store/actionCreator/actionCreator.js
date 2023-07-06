import axios from "axios";
import { PRODUCT_ACTIONS } from "../reducers/productReducer";

export const getProductsActionCreator = () => (dispatch) => {
  dispatch({ type: PRODUCT_ACTIONS.fetchStart });
  axios
    .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
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
