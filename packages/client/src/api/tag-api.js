import { API } from "../constants/routes";
import { getCurrentUserToken } from "../services/auth";

const axios = require("axios").default;

// Default API call
export function makeTagApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.TAGS}`,
  });
}

// Get all memes
export async function getAllTags(api = makeTagApi()) {
  const token = await getCurrentUserToken();

  return api.get("/", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
