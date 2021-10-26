import { API } from "../constants/routes";
import { getCurrentUserToken } from "../services/auth";

const axios = require("axios").default;

// Default API calls
function makeRegisterApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.REGISTER}`,
  });
}

// function makeAuthApi() {
//   return axios.create({
//     baseURL: `${API.MAIN}${API.AUTHENTICATE}`,
//   });
// }

// Create user object
export async function registerUser(userData = {}, api = makeRegisterApi()) {
  const token = await getCurrentUserToken();

  return api.post(``, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
