const { memeController } = require("../controllers");
const multer = require("multer"); //use multer to upload blob data
const upload = multer(); // setup the multer
const Router = require("express").Router;
const { SERVER } = require("../constants/routes");

const {
  authFirebaseMiddleware,
} = require("../middlewares/firebase-middleware");

const mdlUpload = upload.fields([{ name: "file" }]);

const memeRouter = Router();

// Get meme
memeRouter.get("/:id", authFirebaseMiddleware, memeController.getMeme);

// Get all memes
memeRouter.get("/", authFirebaseMiddleware, memeController.getAllMemes);

// Upload meme (file or ulr)
memeRouter.post(
  `${SERVER.UPLOAD}${SERVER.FILE}`,
  [authFirebaseMiddleware, mdlUpload],
  memeController.uploadMeme
);

memeRouter.post(
  `${SERVER.UPLOAD}`,
  authFirebaseMiddleware,
  memeController.uploadMeme
);

module.exports = { memeRouter };
