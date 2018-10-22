var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./router.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.get('/', (req, res) => res.send("Hey"));

mongoose.connect('mongodb://localhost/Coligo').then(
	() => {console.log("Successfully connected to the database");}
	).catch(err => {console.log('Could not connect to the database. Exiting now...');
	process.exit();});

app.listen(3000, () => console.log('Server running at localhost:3000'));