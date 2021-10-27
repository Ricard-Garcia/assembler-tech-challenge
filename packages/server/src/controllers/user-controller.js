const db = require("../models");

// Get all users
async function getAllUsers(req, res, next) {
  try {
    const users = await db.User.find({}, { firstName: 1, _id: 1 });

    res.status(200).send({
      data: users,
    });
  } catch (error) {
    res.status(500).send({
      message: "Couldn't get users.",
      error: error.message,
    });
    next(error);
  }
}

module.exports = { getAllUsers };
