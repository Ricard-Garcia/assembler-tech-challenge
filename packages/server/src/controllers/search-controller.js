const db = require("../models");

// Search user
async function searchUsers(req, res, next) {
  try {
    const searchText = req.query?.q;

    const data = await db.User.find(
      {
        firstName: { $regex: searchText, $options: "i" },
      },
      {
        firstName: 1,
        _id: 1,
      }
    );

    return res
      .status(200)
      .send({ message: "Successfully searched users", users: data });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

// Search meme
async function searchMemes(req, res, next) {
  try {
    const searchText = req.query?.q;

    const data = await db.Meme.find(
      {
        name: { $regex: searchText, $options: "i" },
      },
      {
        name: 1,
        url: 1,
        _id: 1,
      }
    );

    return res
      .status(200)
      .send({ message: "Successfully searched memes", memes: data });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

// Search tags
async function searchTags(req, res, next) {
  try {
    const searchText = req.query?.q;

    const tag = await db.Tag.find(
      {
        name: { $regex: searchText, $options: "i" },
      },
      { name: 1, _id: 1 }
    );

    if (tag[0] !== undefined) {
      const data = await db.Meme.find(
        {
          tagId: tag[0]._id,
        },
        {
          name: 1,
          url: 1,
          _id: 1,
        }
      );

      return res
        .status(200)
        .send({ message: "Successfully searched tags", tags: data });
    }
    return res.status(200).send({ message: "Couldn't searched tags" });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

module.exports = { searchUsers, searchMemes, searchTags };
