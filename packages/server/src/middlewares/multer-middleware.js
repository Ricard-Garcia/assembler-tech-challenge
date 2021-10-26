const multer = require("multer"); //use multer to upload blob data
const upload = multer(); // setup the multer

const multerMiddleware = upload.fields([{ name: "meme" }]);

module.exports = {
  multerMiddleware,
};
