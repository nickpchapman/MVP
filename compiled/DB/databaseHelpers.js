'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('now connected');
});

var imageSchema = mongoose.Schema({
  url: String
});

var Image = mongoose.model('Image', imageSchema);

module.exports = {

  saveUrlToDatabase: function saveUrlToDatabase(url, callback) {
    console.log('called save with ', url);

    var image = new Image({ url: url });
    //update if image url is unique
    Image.findOneAndUpdate({ url: url }, { url: url }, { upsert: true }, function (err, data) {
      if (err) {
        throw err;
      }
      //return all images stored
      Image.find(function (err, allImages) {
        if (err) return console.error(err);
        callback(null, allImages);
      });
    });
  },

  deleteUrlFromDatabase: function deleteUrlFromDatabase(url, callback) {
    console.log('going to delete:', url);
    Image.findOneAndRemove({ url: url }, function (err, data) {
      if (err) {
        throw err;
      }
      //return all images stored
      Image.find(function (err, allImages) {
        if (err) return console.error(err);
        callback(null, allImages);
      });
    });
  },

  getAllUrls: function getAllUrls(callback) {
    console.log('getAllURLS');
    Image.find(function (err, allImages) {
      if (err) return console.error(err);
      console.log('from db', allImages);
      callback(null, allImages);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0RCL2RhdGFiYXNlSGVscGVycy5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJjb25uZWN0IiwiZGIiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kIiwib25jZSIsImxvZyIsImltYWdlU2NoZW1hIiwiU2NoZW1hIiwidXJsIiwiU3RyaW5nIiwiSW1hZ2UiLCJtb2RlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzYXZlVXJsVG9EYXRhYmFzZSIsImNhbGxiYWNrIiwiaW1hZ2UiLCJmaW5kT25lQW5kVXBkYXRlIiwidXBzZXJ0IiwiZXJyIiwiZGF0YSIsImZpbmQiLCJhbGxJbWFnZXMiLCJkZWxldGVVcmxGcm9tRGF0YWJhc2UiLCJmaW5kT25lQW5kUmVtb3ZlIiwiZ2V0QWxsVXJscyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxXQUFXQyxRQUFRLFVBQVIsQ0FBZjtBQUNBRCxTQUFTRSxPQUFULENBQWlCLDBCQUFqQjtBQUNBLElBQUlDLEtBQUtILFNBQVNJLFVBQWxCO0FBQ0FELEdBQUdFLEVBQUgsQ0FBTSxPQUFOLEVBQWVDLFFBQVFDLEtBQVIsQ0FBY0MsSUFBZCxDQUFtQkYsT0FBbkIsRUFBNEIsbUJBQTVCLENBQWY7QUFDQUgsR0FBR00sSUFBSCxDQUFRLE1BQVIsRUFBZ0IsWUFBVztBQUN6QkgsVUFBUUksR0FBUixDQUFZLGVBQVo7QUFDRCxDQUZEOztBQUlBLElBQUlDLGNBQWNYLFNBQVNZLE1BQVQsQ0FBZ0I7QUFDOUJDLE9BQUtDO0FBRHlCLENBQWhCLENBQWxCOztBQUlBLElBQUlDLFFBQVFmLFNBQVNnQixLQUFULENBQWUsT0FBZixFQUF3QkwsV0FBeEIsQ0FBWjs7QUFFQU0sT0FBT0MsT0FBUCxHQUFpQjs7QUFFZkMscUJBQW1CLDJCQUFTTixHQUFULEVBQWNPLFFBQWQsRUFBd0I7QUFDekNkLFlBQVFJLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0csR0FBakM7O0FBRUEsUUFBSVEsUUFBUSxJQUFJTixLQUFKLENBQVUsRUFBRUYsS0FBS0EsR0FBUCxFQUFWLENBQVo7QUFDQTtBQUNBRSxVQUFNTyxnQkFBTixDQUNFLEVBQUNULEtBQUtBLEdBQU4sRUFERixFQUVFLEVBQUNBLEtBQUtBLEdBQU4sRUFGRixFQUdFLEVBQUNVLFFBQVEsSUFBVCxFQUhGLEVBSUUsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDYixVQUFJRCxHQUFKLEVBQVM7QUFDUCxjQUFNQSxHQUFOO0FBQ0Q7QUFDRDtBQUNBVCxZQUFNVyxJQUFOLENBQVcsVUFBVUYsR0FBVixFQUFlRyxTQUFmLEVBQTBCO0FBQ25DLFlBQUlILEdBQUosRUFBUyxPQUFPbEIsUUFBUUMsS0FBUixDQUFjaUIsR0FBZCxDQUFQO0FBQ1RKLGlCQUFTLElBQVQsRUFBZU8sU0FBZjtBQUNELE9BSEQ7QUFJSCxLQWJEO0FBY0QsR0FyQmM7O0FBdUJmQyx5QkFBdUIsK0JBQVNmLEdBQVQsRUFBY08sUUFBZCxFQUF3QjtBQUM3Q2QsWUFBUUksR0FBUixDQUFZLGtCQUFaLEVBQWdDRyxHQUFoQztBQUNBRSxVQUFNYyxnQkFBTixDQUNFLEVBQUNoQixLQUFLQSxHQUFOLEVBREYsRUFFRSxVQUFDVyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNiLFVBQUlELEdBQUosRUFBUztBQUNQLGNBQU1BLEdBQU47QUFDRDtBQUNEO0FBQ0FULFlBQU1XLElBQU4sQ0FBVyxVQUFVRixHQUFWLEVBQWVHLFNBQWYsRUFBMEI7QUFDbkMsWUFBSUgsR0FBSixFQUFTLE9BQU9sQixRQUFRQyxLQUFSLENBQWNpQixHQUFkLENBQVA7QUFDVEosaUJBQVMsSUFBVCxFQUFlTyxTQUFmO0FBQ0QsT0FIRDtBQUlILEtBWEQ7QUFZRCxHQXJDYzs7QUF1Q2ZHLGNBQVksb0JBQVNWLFFBQVQsRUFBbUI7QUFDN0JkLFlBQVFJLEdBQVIsQ0FBWSxZQUFaO0FBQ0FLLFVBQU1XLElBQU4sQ0FBVyxVQUFVRixHQUFWLEVBQWVHLFNBQWYsRUFBMEI7QUFDbkMsVUFBSUgsR0FBSixFQUFTLE9BQU9sQixRQUFRQyxLQUFSLENBQWNpQixHQUFkLENBQVA7QUFDVGxCLGNBQVFJLEdBQVIsQ0FBWSxTQUFaLEVBQXVCaUIsU0FBdkI7QUFDRVAsZUFBUyxJQUFULEVBQWVPLFNBQWY7QUFDRCxLQUpIO0FBS0Q7QUE5Q2MsQ0FBakIiLCJmaWxlIjoiZGF0YWJhc2VIZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvdGVzdCcpO1xudmFyIGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbmRiLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnY29ubmVjdGlvbiBlcnJvcjonKSk7XG5kYi5vbmNlKCdvcGVuJywgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdub3cgY29ubmVjdGVkJyk7XG59KTtcblxudmFyIGltYWdlU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB1cmw6IFN0cmluZ1xufSk7XG5cbnZhciBJbWFnZSA9IG1vbmdvb3NlLm1vZGVsKCdJbWFnZScsIGltYWdlU2NoZW1hKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgc2F2ZVVybFRvRGF0YWJhc2U6IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2spIHtcbiAgICBjb25zb2xlLmxvZygnY2FsbGVkIHNhdmUgd2l0aCAnLCB1cmwpO1xuXG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKHsgdXJsOiB1cmwgfSk7XG4gICAgLy91cGRhdGUgaWYgaW1hZ2UgdXJsIGlzIHVuaXF1ZVxuICAgIEltYWdlLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7dXJsOiB1cmx9LFxuICAgICAge3VybDogdXJsfSxcbiAgICAgIHt1cHNlcnQ6IHRydWV9LFxuICAgICAgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgICAgLy9yZXR1cm4gYWxsIGltYWdlcyBzdG9yZWRcbiAgICAgICAgSW1hZ2UuZmluZChmdW5jdGlvbiAoZXJyLCBhbGxJbWFnZXMpIHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGFsbEltYWdlcylcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgfSxcblxuICBkZWxldGVVcmxGcm9tRGF0YWJhc2U6IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2spIHtcbiAgICBjb25zb2xlLmxvZygnZ29pbmcgdG8gZGVsZXRlOicsIHVybClcbiAgICBJbWFnZS5maW5kT25lQW5kUmVtb3ZlKFxuICAgICAge3VybDogdXJsfSxcbiAgICAgIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICAgIC8vcmV0dXJuIGFsbCBpbWFnZXMgc3RvcmVkXG4gICAgICAgIEltYWdlLmZpbmQoZnVuY3Rpb24gKGVyciwgYWxsSW1hZ2VzKSB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCBhbGxJbWFnZXMpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGdldEFsbFVybHM6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgY29uc29sZS5sb2coJ2dldEFsbFVSTFMnKVxuICAgIEltYWdlLmZpbmQoZnVuY3Rpb24gKGVyciwgYWxsSW1hZ2VzKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgY29uc29sZS5sb2coJ2Zyb20gZGInLCBhbGxJbWFnZXMpXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGFsbEltYWdlcylcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==