var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('now connected');
});

var imageSchema = mongoose.Schema({
    url: String
});

var Image = mongoose.model('Image', imageSchema);

var saveUrlToDatabase = function(url, callback) {
  console.log('called save with ', url);

  var image = new Image({ url: url });
  //update if image url is unique
  Image.findOneAndUpdate(
    {url: url},
    {url: url},
    {upsert: true},
    (err, data) => {
      if (err) {
        throw err
      }
      //return all images stored
      Image.find(function (err, kittens) {
        if (err) return console.error(err);
          // console.log(kittens);
        callback(null, kittens)
      })
  });
}
module.exports = saveUrlToDatabase;