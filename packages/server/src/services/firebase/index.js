const { verifyAuthToken } = require("./verify-auth-token");
const { getAuthToken } = require("./get-auth-token");

module.exports = {
  verifyAuthToken: verifyAuthToken,
  getAuthToken: getAuthToken,
};
