const { memeController } = require("../controllers");
const Router = require("express").Router;

const {
  authFirebaseMiddleware,
} = require("../middlewares/firebase-middleware");

const memeRouter = Router();

// Get meme
memeRouter.get("/:id", authFirebaseMiddleware, memeController.getMeme);

// Get all memes
memeRouter.get("/", authFirebaseMiddleware, memeController.getAllMemes);

// Upload meme
memeRouter.post("/", authFirebaseMiddleware, memeController.uploadMeme);

module.exports = { memeRouter };
