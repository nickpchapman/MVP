'use strict';

var key = require('../clarifaiKey.js');
var Clarifai = require('clarifai');
var app = new Clarifai.App(key);

module.exports = {

  clarifaiImage: function clarifaiImage(url, callback) {
    console.log('called clarifai', url);

    app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(function (response) {
      // console.log('from api', response);
      callback(null, response);
    }, function (err) {
      console.error(err);
    });
  }

};
//# sourceMappingURL=apiHelper.js.map