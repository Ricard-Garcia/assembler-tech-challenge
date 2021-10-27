const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { SERVER } = require("./constants/routes");

const {
  authRouter,
  searchRouter,
  userRouter,
  tagRouter,
  memeRouter,
} = require("./routes");

// Express settings
const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(`${SERVER.API}`, authRouter);
app.use(`${SERVER.API}${SERVER.SEARCH}`, searchRouter);
app.use(`${SERVER.API}${SERVER.USERS}`, userRouter);
app.use(`${SERVER.API}${SERVER.TAGS}`, tagRouter);
app.use(`${SERVER.API}${SERVER.MEMES}`, memeRouter);

module.exports = app;
