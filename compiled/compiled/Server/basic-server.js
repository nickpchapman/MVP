'use strict';

var express = require('express');
var app = express();

app.use(express.static('/users/mr.nick/development/hackreactor/MVP'));

app.get('/', function (req, res) {

  // res.send('')
});
app.listen(3000, function () {
  return console.log('listening on port 3000');
});