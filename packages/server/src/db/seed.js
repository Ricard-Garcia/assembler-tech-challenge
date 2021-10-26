const { getInitialUsers } = require("./initial/initial-users");
const { getInitialMemes } = require("./initial/initial-memes");
const { getInitialTags } = require("./initial/initial-tags");

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

async function seedTags() {
  const tags = getInitialTags();
  // Delete previous documents
  await db.Tag.deleteMany({});
  // Insert inital values
  await db.Tag.create([...tags]);
}

module.exports = { seedUsers, seedMemes, seedTags };
