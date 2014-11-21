var express = require('express');
var favicon = require('static-favicon');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use(express.static('./app'));
// basic request logger
app.use(function(req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(process.env.PORT || 9999);
console.log('BindoPOS.com listening @ :9999');
