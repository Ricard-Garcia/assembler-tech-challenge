const { authController } = require("../controllers");
const Router = require("express").Router;
const SERVER = require("../constants/routes");

const authRouter = Router();

// Sign up
authRouter.post(SERVER.REGISTER);

module.exports = { authRouter };
