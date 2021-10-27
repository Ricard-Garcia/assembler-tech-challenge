import { API } from "../constants/routes";
import { getCurrentUserToken } from "../services/auth";

const axios = require("axios").default;

// Default API call
export function makeSearchApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.SEARCH}`,
  });
}

// Search user
export async function searchUser(search, api = makeSearchApi()) {
  const token = await getCurrentUserToken();

  return api.get(`${API.USERS}/?q=${search}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// Search meme
export async function searchMeme(search, api = makeSearchApi()) {
  const token = await getCurrentUserToken();

  return api.get(`${API.MEMES}/?q=${search}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// Search tag
export async function searchTag(search, api = makeSearchApi()) {
  const token = await getCurrentUserToken();

  return api.get(`${API.TAGS}/?q=${search}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
