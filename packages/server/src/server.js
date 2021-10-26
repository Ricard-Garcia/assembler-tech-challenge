const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { SERVER } = require("./constants/routes");

const { authRouter, memeRouter, tagRouter } = require("./routes");

// Express settings
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(`${SERVER.API}`, authRouter);
app.use(`${SERVER.MEME}`, memeRouter);
app.use(`${SERVER.TAG}`, tagRouter);

module.exports = app;
