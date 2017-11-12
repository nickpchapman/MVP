const express = require('express');
const dbHelpers = require('../DB/databaseHelpers.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('/users/mr.nick/development/hackreactor/MVP'));

app.get('/urls', (req, res) => {
  console.log('getting urls now')
  dbHelpers.getAllUrls( (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    res.send(data);
  });
})

//Add url to database
app.post('/add', (req, res) => {
  console.log('we want to get:', req.body);
  dbHelpers.saveUrlToDatabase(req.body.url, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    res.send(data);
  });
});

//Remove url from database
app.post('/delete', (req, res) => {
  console.log('we want to delete:', req.body);
  dbHelpers.deleteUrlFromDatabase(req.body.url, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    res.send(data);
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
