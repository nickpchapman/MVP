"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      urls: [{ url: "www.reddit.com" }, { url: "www.google.com" }],
      entry: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var app = this;
      axios.get('/urls').then(function (response) {
        console.log(response);
        app.setState({ urls: response.data });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "entryChange",
    value: function entryChange(event) {
      this.setState({ entry: event.target.value });
    }
  }, {
    key: "deleteUrl",
    value: function deleteUrl(url) {
      var app = this;
      axios.post('/delete', {
        url: url
      }).then(function (response) {
        console.log('returned', response);
        app.setState({ urls: response.data });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "insertUrl",
    value: function insertUrl(url) {
      var app = this;
      axios.post('/add', {
        url: this.state.entry
      }).then(function (response) {
        app.setState({ urls: response.data });
      }).catch(function (error) {
        console.log(error);
      });
      url.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "My Images"
        ),
        React.createElement(
          "div",
          null,
          React.createElement(Images, { deleteUrl: this.deleteUrl.bind(this), urls: this.state.urls })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(AddUrl, { entryChange: this.entryChange.bind(this), insertUrl: this.insertUrl.bind(this), entry: this.state.entry })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVybHMiLCJ1cmwiLCJlbnRyeSIsImFwcCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicG9zdCIsInByZXZlbnREZWZhdWx0IiwiZGVsZXRlVXJsIiwiYmluZCIsImVudHJ5Q2hhbmdlIiwiaW5zZXJ0VXJsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxDQUFDLEVBQUNDLEtBQUssZ0JBQU4sRUFBRCxFQUEwQixFQUFDQSxLQUFLLGdCQUFOLEVBQTFCLENBREs7QUFFWEMsYUFBTztBQUZJLEtBQWI7QUFGaUI7QUFNbEI7Ozs7d0NBRW1CO0FBQ2xCLFVBQUlDLE1BQU0sSUFBVjtBQUNBQyxZQUFNQyxHQUFOLENBQVUsT0FBVixFQUNDQyxJQURELENBQ00sVUFBVUMsUUFBVixFQUFvQjtBQUN4QkMsZ0JBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBSixZQUFJTyxRQUFKLENBQWEsRUFBQ1YsTUFBTU8sU0FBU0ksSUFBaEIsRUFBYjtBQUNELE9BSkQsRUFLQ0MsS0FMRCxDQUtPLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEJMLGdCQUFRQyxHQUFSLENBQVlJLEtBQVo7QUFDRCxPQVBEO0FBUUQ7OztnQ0FFV0MsSyxFQUFPO0FBQ2pCLFdBQUtKLFFBQUwsQ0FBYyxFQUFDUixPQUFPWSxNQUFNQyxNQUFOLENBQWFDLEtBQXJCLEVBQWQ7QUFDRDs7OzhCQUVTZixHLEVBQUs7QUFDYixVQUFJRSxNQUFNLElBQVY7QUFDQUMsWUFBTWEsSUFBTixDQUFXLFNBQVgsRUFBc0I7QUFDcEJoQixhQUFLQTtBQURlLE9BQXRCLEVBR0NLLElBSEQsQ0FHTSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JGLFFBQXhCO0FBQ0FKLFlBQUlPLFFBQUosQ0FBYSxFQUFDVixNQUFNTyxTQUFTSSxJQUFoQixFQUFiO0FBQ0QsT0FORCxFQU9DQyxLQVBELENBT08sVUFBVUMsS0FBVixFQUFpQjtBQUN0QkwsZ0JBQVFDLEdBQVIsQ0FBWUksS0FBWjtBQUNELE9BVEQ7QUFVRDs7OzhCQUVTWixHLEVBQUs7QUFDYixVQUFJRSxNQUFNLElBQVY7QUFDQUMsWUFBTWEsSUFBTixDQUFXLE1BQVgsRUFBbUI7QUFDakJoQixhQUFLLEtBQUtGLEtBQUwsQ0FBV0c7QUFEQyxPQUFuQixFQUdDSSxJQUhELENBR00sVUFBVUMsUUFBVixFQUFvQjtBQUN4QkosWUFBSU8sUUFBSixDQUFhLEVBQUNWLE1BQU1PLFNBQVNJLElBQWhCLEVBQWI7QUFDRCxPQUxELEVBTUNDLEtBTkQsQ0FNTyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCTCxnQkFBUUMsR0FBUixDQUFZSSxLQUFaO0FBQ0QsT0FSRDtBQVNFWixVQUFJaUIsY0FBSjtBQUNEOzs7NkJBRU07QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE1BQUQsSUFBUSxXQUFXLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFuQixFQUE4QyxNQUFNLEtBQUtyQixLQUFMLENBQVdDLElBQS9EO0FBREYsU0FGRjtBQUtFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtxQixXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxXQUFXLEtBQUtFLFNBQUwsQ0FBZUYsSUFBZixDQUFvQixJQUFwQixDQUE3RCxFQUF3RixPQUFPLEtBQUtyQixLQUFMLENBQVdHLEtBQTFHO0FBREY7QUFMRixPQURGO0FBV0Q7Ozs7RUFqRWVxQixNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmxzOiBbe3VybDogXCJ3d3cucmVkZGl0LmNvbVwifSwge3VybDogXCJ3d3cuZ29vZ2xlLmNvbVwifV0sXG4gICAgICBlbnRyeTogJydcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgYXBwID0gdGhpcztcbiAgICBheGlvcy5nZXQoJy91cmxzJylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGFwcC5zZXRTdGF0ZSh7dXJsczogcmVzcG9uc2UuZGF0YX0pXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBlbnRyeUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2VudHJ5OiBldmVudC50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgZGVsZXRlVXJsKHVybCkge1xuICAgIHZhciBhcHAgPSB0aGlzO1xuICAgIGF4aW9zLnBvc3QoJy9kZWxldGUnLCB7XG4gICAgICB1cmw6IHVybFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZygncmV0dXJuZWQnLCByZXNwb25zZSlcbiAgICAgIGFwcC5zZXRTdGF0ZSh7dXJsczogcmVzcG9uc2UuZGF0YX0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5zZXJ0VXJsKHVybCkge1xuICAgIHZhciBhcHAgPSB0aGlzO1xuICAgIGF4aW9zLnBvc3QoJy9hZGQnLCB7XG4gICAgICB1cmw6IHRoaXMuc3RhdGUuZW50cnlcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgYXBwLnNldFN0YXRlKHt1cmxzOiByZXNwb25zZS5kYXRhfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gICAgICB1cmwucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+TXkgSW1hZ2VzPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW1hZ2VzIGRlbGV0ZVVybD17dGhpcy5kZWxldGVVcmwuYmluZCh0aGlzKX0gdXJscz17dGhpcy5zdGF0ZS51cmxzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBZGRVcmwgZW50cnlDaGFuZ2U9e3RoaXMuZW50cnlDaGFuZ2UuYmluZCh0aGlzKX0gaW5zZXJ0VXJsPXt0aGlzLmluc2VydFVybC5iaW5kKHRoaXMpfSBlbnRyeT17dGhpcy5zdGF0ZS5lbnRyeX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=