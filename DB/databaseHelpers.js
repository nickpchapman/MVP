var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
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
//use find one and update
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
});
//use query in JSON??? format
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
  callback(null, kittens)
})

}
module.exports = saveUrlToDatabase;