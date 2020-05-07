
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var fs = require('fs')
global.XMLHttpRequest = require('xhr2')

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// OPERACIONES //
require('./requests/events')(app)
require('./requests/auth')(app)
// ////////// //

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
