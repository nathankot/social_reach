
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require('mongoose');
// var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/social_reach');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.use(express.static(path.join(__dirname, 'app')));
  app.use(express.static(path.join(__dirname, '.tmp'))); // Preprocessed Languages
} else {
  app.use(express.static(path.join(__dirname, 'dist')));
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
