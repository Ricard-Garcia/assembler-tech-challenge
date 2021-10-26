const db = require("../models");

// Sign up
async function signUp(req, res, next) {
  const { firstName, lastName, email, profilePicture } = req.body;
  try {
    await db.User.create({
      ...req.user,
      firstName,
      lastName,
      email,
      profilePicture,
    });

    return res
      .status(200)
      .send({ message: `Successfully signed up user: ${req.body}` });
  } catch (error) {
    res.status(500).send({
      message: "Couldn't sign up.",
      error: error.message,
    });
    next(error);
  }
}

// Sign in
async function signIn(req, res, next) {
  const { firebaseId } = req.user;
  try {
    const data = await db.User.findOne(
      { firebaseId },
      { firstName: 1, email: 1, profilePicture: 1, _id: 1 }
    );
    return res
      .status(200)
      .send({ message: "Successfully signed in.", data: data });
  } catch (error) {
    res.status(500).send({
      message: "Couldn't sign in.",
      error: error.message,
    });
    next(error);
  }
}

module.exports = { signUp: signUp, signIn: signIn };
