const app = require("./server");
const { config } = require("./config");
const connect = require("./db/connect");
// const { seedUsers, seedMemes, seedTags } = require("./db/seed");

// Connect server
connect()
  .then(async () => {
    // Initial db seeding
    // seedUsers();
    // seedMemes();
    // seedTags();

    app.listen(config.app.port, () => {
      console.log(`Server is now running at port ${config.app.port}`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting the server: ${error}`);
  });
