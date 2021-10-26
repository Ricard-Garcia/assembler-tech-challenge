const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { SERVER } = require("./constants/routes");

const { authRouter, memeRouter /* , tagRouter */ } = require("./routes");

// Express settings
const app = express();

app.use(express.json());
// app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(`${SERVER.API}`, authRouter);
app.use(`${SERVER.API}${SERVER.MEMES}`, memeRouter);
// app.use(`${SERVER.TAGS}`, tagRouter);

module.exports = app;
