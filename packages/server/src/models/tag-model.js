const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const tagSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Meme name is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;
