const { searchController } = require("../controllers");
const Router = require("express").Router;
const { SERVER } = require("../constants/routes");

const {
  authFirebaseMiddleware,
} = require("../middlewares/firebase-middleware");

const searchRouter = Router();

// Search user
searchRouter.get(
  `${SERVER.USERS}`,
  authFirebaseMiddleware,
  searchController.searchUsers
);

// Search meme
searchRouter.get(
  `${SERVER.MEMES}`,
  authFirebaseMiddleware,
  searchController.searchMemes
);

// Search tag
searchRouter.get(
  `${SERVER.TAGS}`,
  authFirebaseMiddleware,
  searchController.searchTags
);

module.exports = { searchRouter };
