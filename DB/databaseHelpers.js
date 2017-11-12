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

module.exports = {

  saveUrlToDatabase: function(url, callback) {
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
        Image.find(function (err, allImages) {
          if (err) return console.error(err);
          callback(null, allImages)
        })
    });
  },

  deleteUrlFromDatabase: function(url, callback) {
    console.log('going to delete:', url)
    Image.findOneAndRemove(
      {url: url},
      (err, data) => {
        if (err) {
          throw err
        }
        //return all images stored
        Image.find(function (err, allImages) {
          if (err) return console.error(err);
          callback(null, allImages)
        });
    });
  },

  getAllUrls: function(callback) {
    console.log('getAllURLS')
    Image.find(function (err, allImages) {
      if (err) return console.error(err);
      console.log('from db', allImages)
        callback(null, allImages)
      });
  }
}










