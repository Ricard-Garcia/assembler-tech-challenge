const { authController } = require("../controllers");
const Router = require("express").Router;
const { SERVER } = require("../constants/routes");

const {
  authFirebaseMiddleware,
  authRegisterMiddleware,
} = require("../middlewares/firebase-middleware");

const authRouter = Router();

// Sign up
authRouter.post(
  `${SERVER.REGISTER}`,
  authRegisterMiddleware,
  authController.signUp
);
// Sign in
authRouter.get(
  `${SERVER.AUTHENTICATE}`,
  authFirebaseMiddleware,
  authController.signIn
);

module.exports = { authRouter };
