const { authRouter } = require("./auth-routes");
const { userRouter } = require("./user-routes");
const { memeRouter } = require("./meme-routes");
// const { tagRouter } = require("./tag-routes");

module.exports = { authRouter, userRouter, memeRouter };
