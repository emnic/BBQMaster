'use strict';

const express = require('express');
var bodyParser = require('body-parser')
var nextResponse = "No response defined";

// Constants
const PORT = 8080;

// App
const app = express();

// create application/json parser 
var jsonParser = bodyParser.json()

app.get('/*', function (req, res) {
  res.send(nextResponse);
});

app.post('/', jsonParser, function (req, res) {
    nextResponse = req.body.nextResponse;
    res.send("The following response was received: " + req.body.nextResponse);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

