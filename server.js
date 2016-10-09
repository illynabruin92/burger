// DEPENDENCIES


// Initialize Express app
var express = require('express');
var app = express();

// include method-override
var methodOverride = require('method-override');

//include bodyParser
var bodyParser = require('body-parser');

// bodyParser middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded