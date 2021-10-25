const { API_MAIN_ROUTE } = process.env;

// PAGES
export const PAGES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  FOUND: "/found",
  NOT_FOUND: "/not-found",
};

// API
export const API = {
  MAIN: API_MAIN_ROUTE,
  REGISTER: "/register",
  AUTHENTICATE: "/authenticate",
  SEARCH: "/search",
  UPLOAD: "/upload",
};
