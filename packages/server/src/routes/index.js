const { authRouter } = require("./auth-routes");
const { searchRouter } = require("./search-routes");
const { userRouter } = require("./user-routes");
const { memeRouter } = require("./meme-routes");

module.exports = { authRouter, searchRouter, userRouter, memeRouter };
