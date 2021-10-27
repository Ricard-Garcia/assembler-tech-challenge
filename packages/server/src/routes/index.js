const { authRouter } = require("./auth-routes");
const { searchRouter } = require("./search-routes");
const { userRouter } = require("./user-routes");
const { tagRouter } = require("./tag-routes");
const { memeRouter } = require("./meme-routes");

module.exports = {
  authRouter,
  searchRouter,
  userRouter,
  tagRouter,
  memeRouter,
};
