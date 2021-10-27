const db = require("../models");

// Get all tags
async function getAllTags(req, res, next) {
  try {
    const tags = await db.Tag.find({}, { name: 1, _id: 1 });

    res.status(200).send({
      data: tags,
    });
  } catch (error) {
    res.status(500).send({
      message: "Couldn't get tags.",
      error: error.message,
    });
    next(error);
  }
}

module.exports = { getAllTags };
