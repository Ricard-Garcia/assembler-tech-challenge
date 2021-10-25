const { authController } = require("../controllers");
const Router = require("express").Router;
const SERVER = require("../constants/routes");

const authRouter = Router();

// Sign up
authRouter.post(SERVER.REGISTER, authController.signUp);
// Sign in
authRouter.post(SERVER.AUTHENTICATE, authController.signIn);

module.exports = { authRouter };
