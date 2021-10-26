import { API } from "../constants/routes";
import { getCurrentUserToken } from "../services/auth";

const axios = require("axios").default;

// Default API call
export function makeMemeApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.MEMES}`,
  });
}

// Get meme
export async function getMeme(id, api = makeMemeApi()) {
  const token = await getCurrentUserToken();

  return api.get(`/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

// Get all memes
export async function getAllMemes(api = makeMemeApi()) {
  const token = await getCurrentUserToken();

  return api.get(`/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

// Upload meme
export async function uploadMeme(memeData = {}, api = makeMemeApi()) {
  const token = await getCurrentUserToken();
  console.log("memeData: ", memeData);

  return api.post(``, memeData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
}
