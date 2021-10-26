const userModel = require("./user-model");
const memeModel = require("./meme-model");
const tagModel = require("./tag-model");

module.exports = {
  User: userModel,
  Meme: memeModel,
  Tag: tagModel,
};
