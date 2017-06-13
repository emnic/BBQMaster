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

var nextResponseFetched = false;

app.get('/connectionstatus', function (req, res) {
    console.log('connectionstatus was called');
    res.send("The server is alive");
});

app.get('/nextresponse', function (req, res) {
    nextResponseFetched = true;
    console.log('get nextresponse was called. Returned: ' + nextResponse);
    res.json({"url":req.url, "nextResponse":nextResponse});
});

app.post('/nextresponse', jsonParser, function (req, res) {
    nextResponseFetched = false;
    nextResponse = req.body.nextResponse;
    console.log('post nextresponse was called. Vaule: ' + nextResponse);
    res.send("The following response was received: " + req.body.nextResponse);
});

app.get('/nextresponsefetched', function (req, res) {
    console.log("Checked if app has fetched value from server and status is: " + nextResponseFetched);
    res.json({"url":req.url, "nextResponseFetched":nextResponseFetched});
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

