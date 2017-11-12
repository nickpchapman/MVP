var key = require('../clarifaiKey.js');
const Clarifai = require('clarifai');
const app = new Clarifai.App(key);


module.exports = {

 clarifaiImage: function(url, callback) {
    console.log('called clarifai', url);

    app.models.predict(Clarifai.GENERAL_MODEL, url).then(
      function(response) {
        // console.log('from api', response);
        callback(null, response);
      },
      function(err) {
        console.error(err);
      }
    );
  }


}
