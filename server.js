var express = require('express');
var favicon = require('static-favicon');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongo_uri = process.env.MONGO_URI || 'mongodb://localhost/cfu';
mongoose.connect(mongo_uri);
var Schema = mongoose.Schema;
var userSchema = new Schema({}, {strict: false});
var User = mongoose.model('User', userSchema);

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

app.post('/signup', function(req, res) {
  var user = req.body.user;
  new User(user).save(function(err, data) {
    if(err) {
      req.sendStatus(500);
    } else {
      res.send({success: true});      
    }
  });
});

app.listen(process.env.PORT || 9999);
console.log('BindoPOS.com listening @ :9999');
