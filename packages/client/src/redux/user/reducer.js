import { SET_SIGN_IN, SET_SIGN_OUT } from "./types";

import initialState from "./state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGN_IN:
      return { ...state, ...action.payload };
    case SET_SIGN_OUT:
      return initialState;
    default:
      break;
  }
  return state;
};

export default reducer;
