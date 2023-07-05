const initialState = {
  counter: 333,
  increment: 1,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, counter: state.counter + 1 };

    case "DECREASE":
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};
