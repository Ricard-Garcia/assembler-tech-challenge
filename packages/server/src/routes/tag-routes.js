const { tagController } = require("../controllers");
const Router = require("express").Router;

const {
  authFirebaseMiddleware,
} = require("../middlewares/firebase-middleware");

const tagRouter = Router();

// Get all tags
tagRouter.get("/", authFirebaseMiddleware, tagController.getAllTags);

module.exports = { tagRouter };
