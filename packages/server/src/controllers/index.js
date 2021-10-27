const authController = require("./auth-controller");
const searchController = require("./search-controller");
const userController = require("./user-controller");
const tagController = require("./tag-controller");
const memeController = require("./meme-controller");

module.exports = {
  authController: authController,
  searchController: searchController,
  userController: userController,
  tagController: tagController,
  memeController: memeController,
};
