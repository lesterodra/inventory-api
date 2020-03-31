
const express = require('express');
const app = express();

const item = require('./routes/item');

app.use('/api/items', item);

module.exports = app;

