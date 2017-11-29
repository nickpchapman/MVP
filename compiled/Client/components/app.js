'use strict';

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
      urls: [],
      entry: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var app = this;
      axios.get('/urls').then(function (response) {
        console.log(response);
        app.setState({ urls: response.data.reverse() });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'entryChange',
    value: function entryChange(event) {
      this.setState({ entry: event.target.value });
    }
  }, {
    key: 'deleteUrl',
    value: function deleteUrl(url) {
      var app = this;
      axios.post('/delete', {
        url: url
      }).then(function (response) {
        console.log('returned', response);
        app.setState({ urls: response.data.reverse() });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'insertUrl',
    value: function insertUrl(url) {
      var app = this;
      axios.post('/add', {
        url: this.state.entry
      }).then(function (response) {
        app.setState({ urls: response.data.reverse() });
      }).catch(function (error) {
        console.log(error);
      });
      this.state.entry = "";
      url.preventDefault();
    }
  }, {
    key: 'handleImageClick',
    value: function handleImageClick(url) {
      window.open(url);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Image Bot'
        ),
        React.createElement(
          'div',
          { id: 'addUrl' },
          React.createElement(AddUrl, { entryChange: this.entryChange.bind(this), insertUrl: this.insertUrl.bind(this), entry: this.state.entry })
        ),
        React.createElement(
          'h3',
          null,
          'My Stored Images:'
        ),
        React.createElement(
          'div',
          null,
          React.createElement(Images, { imageClick: this.handleImageClick.bind(this), deleteUrl: this.deleteUrl.bind(this), urls: this.state.urls })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVybHMiLCJlbnRyeSIsImFwcCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZGF0YSIsInJldmVyc2UiLCJjYXRjaCIsImVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVybCIsInBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsIm9wZW4iLCJlbnRyeUNoYW5nZSIsImJpbmQiLCJpbnNlcnRVcmwiLCJoYW5kbGVJbWFnZUNsaWNrIiwiZGVsZXRlVXJsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU87QUFGSSxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUVtQjtBQUNsQixVQUFJQyxNQUFNLElBQVY7QUFDQUMsWUFBTUMsR0FBTixDQUFVLE9BQVYsRUFDQ0MsSUFERCxDQUNNLFVBQVVDLFFBQVYsRUFBb0I7QUFDeEJDLGdCQUFRQyxHQUFSLENBQVlGLFFBQVo7QUFDQUosWUFBSU8sUUFBSixDQUFhLEVBQUNULE1BQU1NLFNBQVNJLElBQVQsQ0FBY0MsT0FBZCxFQUFQLEVBQWI7QUFDRCxPQUpELEVBS0NDLEtBTEQsQ0FLTyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCTixnQkFBUUMsR0FBUixDQUFZSyxLQUFaO0FBQ0QsT0FQRDtBQVFEOzs7Z0NBRVdDLEssRUFBTztBQUNqQixXQUFLTCxRQUFMLENBQWMsRUFBQ1IsT0FBT2EsTUFBTUMsTUFBTixDQUFhQyxLQUFyQixFQUFkO0FBQ0Q7Ozs4QkFFU0MsRyxFQUFLO0FBQ2IsVUFBSWYsTUFBTSxJQUFWO0FBQ0FDLFlBQU1lLElBQU4sQ0FBVyxTQUFYLEVBQXNCO0FBQ3BCRCxhQUFLQTtBQURlLE9BQXRCLEVBR0NaLElBSEQsQ0FHTSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JGLFFBQXhCO0FBQ0FKLFlBQUlPLFFBQUosQ0FBYSxFQUFDVCxNQUFNTSxTQUFTSSxJQUFULENBQWNDLE9BQWQsRUFBUCxFQUFiO0FBQ0QsT0FORCxFQU9DQyxLQVBELENBT08sVUFBVUMsS0FBVixFQUFpQjtBQUN0Qk4sZ0JBQVFDLEdBQVIsQ0FBWUssS0FBWjtBQUNELE9BVEQ7QUFVRDs7OzhCQUVTSSxHLEVBQUs7QUFDYixVQUFJZixNQUFNLElBQVY7QUFDQUMsWUFBTWUsSUFBTixDQUFXLE1BQVgsRUFBbUI7QUFDakJELGFBQUssS0FBS2xCLEtBQUwsQ0FBV0U7QUFEQyxPQUFuQixFQUdDSSxJQUhELENBR00sVUFBVUMsUUFBVixFQUFvQjtBQUN4QkosWUFBSU8sUUFBSixDQUFhLEVBQUNULE1BQU1NLFNBQVNJLElBQVQsQ0FBY0MsT0FBZCxFQUFQLEVBQWI7QUFDRCxPQUxELEVBTUNDLEtBTkQsQ0FNTyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCTixnQkFBUUMsR0FBUixDQUFZSyxLQUFaO0FBQ0QsT0FSRDtBQVNBLFdBQUtkLEtBQUwsQ0FBV0UsS0FBWCxHQUFtQixFQUFuQjtBQUNFZ0IsVUFBSUUsY0FBSjtBQUNEOzs7cUNBRWdCRixHLEVBQUs7QUFDcEJHLGFBQU9DLElBQVAsQ0FBWUosR0FBWjtBQUNEOzs7NkJBRU07QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLElBQUcsUUFBUjtBQUNFLDhCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtLLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXJCLEVBQWtELFdBQVcsS0FBS0MsU0FBTCxDQUFlRCxJQUFmLENBQW9CLElBQXBCLENBQTdELEVBQXdGLE9BQU8sS0FBS3hCLEtBQUwsQ0FBV0UsS0FBMUc7QUFERixTQUZGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGO0FBTUU7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLFlBQVksS0FBS3dCLGdCQUFMLENBQXNCRixJQUF0QixDQUEyQixJQUEzQixDQUFwQixFQUFzRCxXQUFXLEtBQUtHLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixJQUFwQixDQUFqRSxFQUE0RixNQUFNLEtBQUt4QixLQUFMLENBQVdDLElBQTdHO0FBREY7QUFORixPQURGO0FBWUQ7Ozs7RUF2RWUyQixNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmxzOiBbXSxcbiAgICAgIGVudHJ5OiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBhcHAgPSB0aGlzO1xuICAgIGF4aW9zLmdldCgnL3VybHMnKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgYXBwLnNldFN0YXRlKHt1cmxzOiByZXNwb25zZS5kYXRhLnJldmVyc2UoKX0pXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBlbnRyeUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2VudHJ5OiBldmVudC50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgZGVsZXRlVXJsKHVybCkge1xuICAgIHZhciBhcHAgPSB0aGlzO1xuICAgIGF4aW9zLnBvc3QoJy9kZWxldGUnLCB7XG4gICAgICB1cmw6IHVybFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZygncmV0dXJuZWQnLCByZXNwb25zZSlcbiAgICAgIGFwcC5zZXRTdGF0ZSh7dXJsczogcmVzcG9uc2UuZGF0YS5yZXZlcnNlKCl9KTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluc2VydFVybCh1cmwpIHtcbiAgICB2YXIgYXBwID0gdGhpcztcbiAgICBheGlvcy5wb3N0KCcvYWRkJywge1xuICAgICAgdXJsOiB0aGlzLnN0YXRlLmVudHJ5XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGFwcC5zZXRTdGF0ZSh7dXJsczogcmVzcG9uc2UuZGF0YS5yZXZlcnNlKCl9KTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLmVudHJ5ID0gXCJcIlxuICAgICAgdXJsLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlSW1hZ2VDbGljayh1cmwpIHtcbiAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkltYWdlIEJvdDwvaDE+XG4gICAgICAgIDxkaXYgaWQ9XCJhZGRVcmxcIj5cbiAgICAgICAgICA8QWRkVXJsIGVudHJ5Q2hhbmdlPXt0aGlzLmVudHJ5Q2hhbmdlLmJpbmQodGhpcyl9IGluc2VydFVybD17dGhpcy5pbnNlcnRVcmwuYmluZCh0aGlzKX0gZW50cnk9e3RoaXMuc3RhdGUuZW50cnl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz5NeSBTdG9yZWQgSW1hZ2VzOjwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlcyBpbWFnZUNsaWNrPXt0aGlzLmhhbmRsZUltYWdlQ2xpY2suYmluZCh0aGlzKX0gZGVsZXRlVXJsPXt0aGlzLmRlbGV0ZVVybC5iaW5kKHRoaXMpfSB1cmxzPXt0aGlzLnN0YXRlLnVybHN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19