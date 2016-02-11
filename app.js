var express = require("express"),
    app     = express(),
    path    = require('path'),
    config  = require('./config/config.js');
    mongoose  = require('mongoose'),
    bodyParser  = require("body-parser");

// Initialise mongoose schemas
require('./models/trip');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: true }));

// API routes
require('./routes/trip')(express, app);

var server = app.listen(3009, function(){
  var host = "localhost";
  var port = 8080;

  console.log('TBA app listening at http://%s:%s', host, port);
});
