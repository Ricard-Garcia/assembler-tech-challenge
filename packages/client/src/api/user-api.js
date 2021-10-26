import { API } from "../constants/routes";
import { getCurrentUserToken } from "../services/auth";

const axios = require("axios").default;

// Default API calls
function makeRegisterApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.REGISTER}`,
  });
}

function makeProfilePictureApi() {
  return axios.create({
    baseURL: `${API.PROFILE_PICTURE_API}`,
  });
}

// Sign up
export async function registerUser(userData = {}, api = makeRegisterApi()) {
  const token = await getCurrentUserToken();
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

// Random profile picture
export function getRandomPicture(api = makeProfilePictureApi()) {
  return api.get(``);
}
