
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const item = require('./routes/item');

app.use(bodyParser());
app.use('/api/items', item);

module.exports = app;

