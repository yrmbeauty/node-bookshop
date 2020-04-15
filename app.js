const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes/index.js');

app.use(cors());

app.use(express.static('public'));

routes(app);

module.exports = app;