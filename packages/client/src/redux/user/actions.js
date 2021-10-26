import { SET_SIGN_IN, SET_SIGN_OUT } from "./types";

export const signInAction = (value) => ({
  type: SET_SIGN_IN,
  payload: value,
});

export const signOutAction = (value) => ({
  type: SET_SIGN_OUT,
});
