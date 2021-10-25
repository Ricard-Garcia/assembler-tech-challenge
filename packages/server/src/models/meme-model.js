const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = require("mongoose");

const memeSchema = new Schema(
  {
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
    likedBy: [{ type: mongoose.Schemma.Types.ObjectId, ref: "user" }],
  },
  {
    timestamps: true,
  }
);

const Meme = mongoose.model("meme", memeSchema);

module.exports = Meme;
