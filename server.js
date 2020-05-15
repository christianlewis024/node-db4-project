const express = require("express");
const helmet = require("helmet");
const Router = require("./data/router");
const db = require("./data/db-config.js");

const server = express();

server.use(express.json());
server.use("/api/recipes", Router);
server.get("/", (req, res) => {
  res.send(`<h2>This is the message for a general server get request</h2>`);
});

module.exports = server;
