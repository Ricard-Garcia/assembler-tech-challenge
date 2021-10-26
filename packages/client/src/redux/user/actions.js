import { SET_SIGN_IN, SET_SIGN_OUT, SET_REGISTER } from "./types";

export const signIn = (value) => ({
  type: SET_SIGN_IN,
  payload: value,
});

export const register = (value) => ({
  type: SET_REGISTER,
  payload: value,
});

export const signOut = (value) => ({
  type: SET_SIGN_OUT,
});
