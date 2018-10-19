const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router.js');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
app.get('/', function (req, res) {
  res.render('./src/index', {});
});

mongoose.connect('mongodb://localhost/Coligo');

app.listen(port, () => console.log('Server running at http://127.0.0.1:3000'));