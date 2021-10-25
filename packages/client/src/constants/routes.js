const { API_MAIN_ROUTE } = process.env;

// PAGES
export const PAGES = {
  HOME: "/",
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
