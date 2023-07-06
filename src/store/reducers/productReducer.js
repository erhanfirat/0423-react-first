export const PRODUCT_ACTIONS = Object.freeze({
  fetchStart: "FETCH_PRODUCTS_START",
  fetchSuccess: "FETCH_PRODUCTS_SUCCESS",
  fetchError: "FETCH_PRODUCTS_ERROR",
});

const productsInitial = {
  products: [],
  isFetching: false, // loading
  error: "",
};

export const productsReducer = (state = productsInitial, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.fetchStart:
      return { ...state, isFetching: true, error: '' };
    
    case PRODUCT_ACTIONS.fetchSuccess:
      return { ...state, isFetching: false, products: action.payload };
    
    case PRODUCT_ACTIONS.fetchError:
      return { ...state, isFetching: false, error: action.payload };
    
    default:
      return state;
  }
};