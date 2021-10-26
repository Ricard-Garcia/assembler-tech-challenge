const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "User first name is required"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "User last name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: () => "User email is not valid",
      },
      required: [true, "User email is required"],
    },
    profilePicture: {
      type: String,
      trim: true,
      validate: {
        validator: (value) => validator.isURL(value),
        message: () => "Profile picture url is not valid",
      },
      required: [true, "Profile picture url is required"],
    },
    firebaseId: {
      type: String,
      trim: true,
      required: [true, "Firebase id is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
