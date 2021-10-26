const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = require("mongoose");

const memeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Meme name is required"],
    },
    url: {
      type: String,
      trim: true,

      validate: {
        validator: (value) => validator.isURL(value),
        message: () => "Meme url is not valid",
      },
      required: [true, "Meme url is required"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "userID is required"],
    },
    tagId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tag",
      required: [true, "Tag is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Meme = mongoose.model("meme", memeSchema);

module.exports = Meme;
