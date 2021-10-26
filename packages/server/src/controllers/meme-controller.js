const db = require("../models");

// Get meme
async function getMeme(req, res, next) {
  try {
    const { id } = req.params;

    const meme = await db.Meme.findById(
      { _id: id },
      { name: 1, tag: 1, url: 1 }
    );

    res.status(200).send({
      data: meme,
    });
  } catch (error) {
    res.status(500).send({
      message: "Couldn't get the meme.",
      error: error.message,
    });
    next(error);
  }
}

// Get all memes
async function getAllMemes(req, res, next) {
  try {
    const memes = await db.Meme.find({}, { name: 1, tag: 1, url: 1 });

    res.status(200).send({
      data: memes,
    });
  } catch (error) {
    res.status(500).send({
      message: "Couldn't get the meme.",
      error: error.message,
    });
    next(error);
  }
}

// Get upload meme
async function uploadMeme(req, res, next) {
  try {
    const memes = await db.Meme.find({}, { name: 1, tag: 1, url: 1 });

    // Upload to cloudinary

    // Upload to database
    const { firebaseId } = req.user;
    const { _id: userId } = await db.User.findOne({ firebaseId });
    // Get tag id
    const tag = await db.Tag.findOne({ name: req.body.tag });

    const memeObject = {
      name: req.body.name,
      tagId: tag._id,
      url: req.body.url,
      userId: userId,
    };

    await db.Meme.create(memeObject);

    res.status(200).send({
      data: memes,
    });
  } catch (error) {
    res.status(500).send({
      message: "Couldn't get the meme.",
      error: error.message,
    });
    next(error);
  }
}

module.exports = { getMeme, getAllMemes, uploadMeme };
