const db = require("../models");

async function signUp(req, res, next) {
  // Target firebaseId
  const { firebaseId } = req.user;
  const { firstName, lastName, email } = req.body;

  try {
    await db.User.create({
      ...req.user,
      firstName,
      lastName,
      email,
      profilePicture: "",
    });

    return res
      .status(200)
      .send({ message: `Successfully signed up user with email ${email}` });
  } catch (error) {
    res.status(500).send({
      message: "Couldn't sign up.",
      error: error.message,
    });
    next(error);
  }
}

async function signIn(req, res, next) {
  // Target firebaseId
  const { firebaseId } = req.user;

  try {
    const data = await db.User.findOne(
      { firebaseId },
      { firstName: 1, lastName: 1, _id: 1 }
    );
    return res
      .status(200)
      .send({ message: "Successfully signed in.", data: data });
  } catch (error) {
    console.log("NOT REGISTERING");
    res.status(500).send({
      message: "Couldn't sign in.",
      error: error.message,
    });
    next(error);
  }
}

module.exports = { signUp: signUp, signIn: signIn };
