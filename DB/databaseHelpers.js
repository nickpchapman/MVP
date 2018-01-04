const api = require("../API/apiHelper.js");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("now connected");
});

var imageSchema = mongoose.Schema({
  url: String,
  analysis: String
});

var Image = mongoose.model("Image", imageSchema);

module.exports = {
  saveUrlToDatabase: function(url, callback) {
    api.clarifaiImage(url, (err, data) => {
      if (err) {
        console.log(err);
      }
      var data = JSON.stringify(data);

      var image = new Image({ url: url, analysis: data });

      //update if image url is unique
      Image.findOneAndUpdate(
        { url: url, analysis: data },
        { url: url, analysis: data },
        { upsert: true },
        (err, data) => {
          if (err) {
            throw err;
          }
          //return all images stored
          Image.find(function(err, allImages) {
            if (err) return console.error(err);
            callback(null, allImages);
          });
        }
      );
    });
  },

  deleteUrlFromDatabase: function(url, callback) {
    Image.findOneAndRemove({ url: url }, (err, data) => {
      if (err) {
        throw err;
      }
      //return all images stored
      Image.find(function(err, allImages) {
        if (err) return console.error(err);
        callback(null, allImages);
      });
    });
  },

  getAllUrls: function(callback) {
    Image.find(function(err, allImages) {
      if (err) return console.error(err);
      callback(null, allImages);
    });
  }
};
