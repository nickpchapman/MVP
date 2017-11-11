const express = require('express');
const saveUrl = require('../DB/databaseHelpers.js');
const app = express()

app.use(express.static('/users/mr.nick/development/hackreactor/MVP'))

app.get('/', (req, res) => {

  // res.send('')
})
app.post('/', (req, res) => {
  saveUrl('www.reddit.com/r/dogs', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });

})
app.listen(3000, () => console.log('listening on port 3000'));
