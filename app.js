
const express = require('express');
const app = express();

const inventory = require('./routes/inventory');

app.use('/api/inventories', inventory);

module.exports = app;

