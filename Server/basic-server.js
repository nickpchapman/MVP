 const express = require('express');
const app = express()

app.use(express.static('/users/mr.nick/development/hackreactor/MVP'))

app.get('/', (req, res) => {

  res.send('')
})
app.listen(3000, () => console.log('listening on port 3000'));
