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

  if (memeData.url) {
    console.log("memeData has url: ", memeData);
    return api.post(`${API.UPLOAD}`, memeData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  console.log("memeData has file: ", memeData);

  return api.post(`${API.UPLOAD}${API.FILE}`, memeData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `multipart/form-data"`,
    },
  });
}
