var express = require("express"),
    app     = express(),
    path    = require('path'),
    config  = require('./config/config.js');
    mongoose  = require('mongoose'),
    bodyParser  = require("body-parser");

// Initialise mongoose schemas (not sure this is the best place?)
require('./models/trip');

//Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Connect mongoose so we can use models to handle data into our API
mongoose.connect(config.database);



/****************  Test connection to database  *******************

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

*******************************************************************/

app.use(bodyParser.urlencoded({ extended: true }));

// API routes
require('./routes/api-routes.js')(express, app);

var server = app.listen(3009, function(){
  var host = "localhost";
  var port = 3009;

  console.log('TBA app listening at http://%s:%s', host, port);
});
