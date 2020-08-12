const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

const routes = require("./routes/index.js");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

routes(app);

module.exports = app;