const { cloudinary } = require("../services/cloudinary");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);

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
  // TODO detect URL or file
  console.log("Meme upload req.files ", req.files);
  //   try {
  //     // Upload to cloudinary
  //     const meme = req.files["meme"][0];

  //     if (meme.mimetype === "audio/mpeg") {
  //       const memeLocation = path.join(
  //         __dirname,
  //         "../",
  //         "uploads",
  //         meme.originalname
  //       );

  //       await writeFileAsync(
  //         memeLocation,
  //         Buffer.from(new Uint8Array(meme.buffer))
  //       );

  //       const cloudMemeRes = await cloudinary.uploader.upload(memeLocation, {
  //         upload_preset: "memes-preset",
  //         resource_type: "video",
  //       });

  //       // delete uploaded file
  //       fs.unlink(memeLocation, (err) => {
  //         if (err) throw err;
  //       });

  //       // Upload to database
  //       const { firebaseId } = req.user;
  //       const { _id: userId } = await db.User.findOne({ firebaseId });
  //       // Get tag id
  //       const tag = await db.Tag.findOne({ name: req.body.tag });

  //       const memeObject = {
  //         name: req.body.name,
  //         tagId: tag._id,
  //         url: cloudMemeRes.secure_url,
  //         userId: userId,
  //       };

  //       await db.Meme.create(memeObject);

  //       res.status(200).send({
  //         message: "Uploaded meme via input file!",
  //         data: memes,
  //       });
  //     }
  //     return res
  //       .status(415)
  //       .send({ message: "This file format is not supported!" });
  //   } catch (error) {
  //     res.status(500).send({
  //       message: "Couldn't get the meme.",
  //       error: error.message,
  //     });
  //     next(error);
  //   }
}

module.exports = { getMeme, getAllMemes, uploadMeme };
