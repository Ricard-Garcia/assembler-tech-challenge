const { getInitialUsers } = require("./initial/initial-users");
const { getInitialMemes } = require("./initial/initial-memes");

async function seedUsers() {
  const users = getInitialUsers();
  // Delete previous documents
  await db.User.deleteMany({});
  // Insert inital values
  await db.User.create([...users]);
}

async function seedMemes() {
  const memes = getInitialMemes();
  // Delete previous documents
  await db.Meme.deleteMany({});
  // Insert inital values
  await db.Meme.create([...memes]);
}

module.exports = { seedUsers, seedMemes };
