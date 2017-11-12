'use strict';

var Clarifai = require('clarifai');

var app = new Clarifai.App({
  apiKey: 'dc32b282076149e9908231361004bc4f'
});

module.exports = {

  clarifaiImage: function clarifaiImage(url, callback) {
    console.log(url);
    // app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
    //   function(response) {
    //     console.log(response);
    //     callback(response);
    //   },
    //   function(err) {
    //     console.error(err);
    //   }
    // );
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0RCL2FwaUhlbHBlci5qcyJdLCJuYW1lcyI6WyJDbGFyaWZhaSIsInJlcXVpcmUiLCJhcHAiLCJBcHAiLCJhcGlLZXkiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xhcmlmYWlJbWFnZSIsInVybCIsImNhbGxiYWNrIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7O0FBRUEsSUFBTUMsTUFBTSxJQUFJRixTQUFTRyxHQUFiLENBQWlCO0FBQzVCQyxVQUFRO0FBRG9CLENBQWpCLENBQVo7O0FBSUFDLE9BQU9DLE9BQVAsR0FBaUI7O0FBRWZDLGlCQUFlLHVCQUFTQyxHQUFULEVBQWNDLFFBQWQsRUFBd0I7QUFDckNDLFlBQVFDLEdBQVIsQ0FBWUgsR0FBWjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNHO0FBYmMsQ0FBakIiLCJmaWxlIjoiYXBpSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2xhcmlmYWkgPSByZXF1aXJlKCdjbGFyaWZhaScpO1xuXG5jb25zdCBhcHAgPSBuZXcgQ2xhcmlmYWkuQXBwKHtcbiBhcGlLZXk6ICdkYzMyYjI4MjA3NjE0OWU5OTA4MjMxMzYxMDA0YmM0Zidcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBjbGFyaWZhaUltYWdlOiBmdW5jdGlvbih1cmwsIGNhbGxiYWNrKSB7XG4gICAgY29uc29sZS5sb2codXJsKTtcbi8vIGFwcC5tb2RlbHMucHJlZGljdChDbGFyaWZhaS5HRU5FUkFMX01PREVMLCAnaHR0cHM6Ly9zYW1wbGVzLmNsYXJpZmFpLmNvbS9tZXRyby1ub3J0aC5qcGcnKS50aGVuKFxuLy8gICBmdW5jdGlvbihyZXNwb25zZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbi8vICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4vLyAgIH0sXG4vLyAgIGZ1bmN0aW9uKGVycikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbi8vICAgfVxuLy8gKTtcbiAgfVxufSJdfQ==