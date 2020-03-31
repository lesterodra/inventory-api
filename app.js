
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const item = require('./routes/item');
const errorHandler = require('./middlewares/errorHandler');

app.use(bodyParser());
app.use('/api/items', item);
app.use(errorHandler);

module.exports = app;

