var mongoose = require('mongoose');
mongoose.connect('http://localhost:3000/');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('now connected');
});

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var saveUrlToDatabase = function(callback) {
  console.log('called save Url')


var fluffy = new Kitten({ name: 'fluffy' });

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
});

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
  callback(kittens)
})

}
module.exports = saveUrlToDatabase;