'use strict';

var express = require('express');
var dbHelpers = require('../DB/databaseHelpers.js');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static('/users/mr.nick/development/hackreactor/MVP'));

app.get('/urls', function (req, res) {
  dbHelpers.getAllUrls(function (err, data) {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

//Add url to database
app.post('/add', function (req, res) {
  dbHelpers.saveUrlToDatabase(req.body.url, function (err, data) {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

//Remove url from database
app.post('/delete', function (req, res) {
  dbHelpers.deleteUrlFromDatabase(req.body.url, function (err, data) {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

app.listen(3000, function () {
  return console.log('listening on port 3000');
});
//# sourceMappingURL=basic-server.js.map