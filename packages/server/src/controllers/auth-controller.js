const db = require("../models");

async function signUp(req, res, next) {
  // Target firebaseId
  // const {firebaseId} = req.user;
  try {
    const { email } = req.body;
    await db.User.create({
      ...req.user,
      ...req.body,
      //   profilePicture: profilePictureUrl,
    });

    return res
      .status(200)
      .send({ message: `Successfully signed up user with email ${email}` });
  } catch (error) {
    res.status(500).sen;
    d({ error: error.message });
    next(error);
  }
}

async function signIn(req, res, next) {
  // Target firebaseId
  // const {firebaseId} = req.user;
  try {
    const data = await db.User.findOne(
      { firebaseId },
      { firstName: 1, lastName: 1, _id: 1 }
    );
    return res
      .status(200)
      .send({ message: "Successfully signed in.", data: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
    next(error);
  }
}

module.exports = { signUp: signUp, signIn: signIn };
