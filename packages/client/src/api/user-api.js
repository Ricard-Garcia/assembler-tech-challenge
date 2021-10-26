import { API } from "../constants/routes";
import { getCurrentUserToken } from "../services/auth";

const axios = require("axios").default;

// Default API calls
function makeRegisterApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.REGISTER}`,
  });
}

// Sign up
export async function registerUser(userData = {}, api = makeRegisterApi()) {
  const token = await getCurrentUserToken();

  console.log(userData);
  return api.post(``, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// Sign in
export function authenticateUser(token) {
  return axios.get(`${API.MAIN}${API.AUTHENTICATE}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
