const express = require("express");
const router = require("./router.js");
const bodyParser = require("body-parser");

const app = express();
// const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017";

app.use(bodyParser.json());

app.use(router);

module.exports = app;
