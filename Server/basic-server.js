const express = require('express');
const saveUrl = require('../DB/databaseHelpers.js');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('/users/mr.nick/development/hackreactor/MVP'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
})

app.post('/', (req, res) => {
  console.log('we want to get:', req.body);
  saveUrl(req.body.url, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    res.send(data);
  });

})
app.listen(3000, () => console.log('listening on port 3000'));
