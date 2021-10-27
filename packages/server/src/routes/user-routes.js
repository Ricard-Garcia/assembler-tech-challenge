const { userController } = require("../controllers");
const Router = require("express").Router;

const {
  authFirebaseMiddleware,
} = require("../middlewares/firebase-middleware");

const userRouter = Router();

// Get all users
userRouter.get("/", authFirebaseMiddleware, userController.getAllUsers);

module.exports = { userRouter };
