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
    key: "entryChange",
    value: function entryChange(event) {
      this.setState({ entry: event.target.value });
    }
  }, {
    key: "deleteUrl",
    value: function deleteUrl(url) {
      console.log('url', url);
      console.log('delete me');
    }
  }, {
    key: "insertUrl",
    value: function insertUrl(url) {
      console.log('insert this====>', this.state.entry);
      var app = this;
      axios.post('/', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVybHMiLCJ1cmwiLCJlbnRyeSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJhcHAiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInByZXZlbnREZWZhdWx0IiwiZGVsZXRlVXJsIiwiYmluZCIsImVudHJ5Q2hhbmdlIiwiaW5zZXJ0VXJsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxDQUFDLEVBQUNDLEtBQUssZ0JBQU4sRUFBRCxFQUEwQixFQUFDQSxLQUFLLGdCQUFOLEVBQTFCLENBREs7QUFFWEMsYUFBTztBQUZJLEtBQWI7QUFGaUI7QUFNbEI7Ozs7Z0NBRVdDLEssRUFBTztBQUNqQixXQUFLQyxRQUFMLENBQWMsRUFBQ0YsT0FBT0MsTUFBTUUsTUFBTixDQUFhQyxLQUFyQixFQUFkO0FBQ0Q7Ozs4QkFFU0wsRyxFQUFLO0FBQ2JNLGNBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CUCxHQUFuQjtBQUNBTSxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNEOzs7OEJBRVNQLEcsRUFBSztBQUNiTSxjQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0MsS0FBS1QsS0FBTCxDQUFXRyxLQUEzQztBQUNBLFVBQUlPLE1BQU0sSUFBVjtBQUNGQyxZQUFNQyxJQUFOLENBQVcsR0FBWCxFQUFnQjtBQUNkVixhQUFLLEtBQUtGLEtBQUwsQ0FBV0c7QUFERixPQUFoQixFQUdDVSxJQUhELENBR00sVUFBVUMsUUFBVixFQUFvQjtBQUN4QkosWUFBSUwsUUFBSixDQUFhLEVBQUNKLE1BQU1hLFNBQVNDLElBQWhCLEVBQWI7QUFDRCxPQUxELEVBTUNDLEtBTkQsQ0FNTyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCVCxnQkFBUUMsR0FBUixDQUFZUSxLQUFaO0FBQ0QsT0FSRDtBQVNFZixVQUFJZ0IsY0FBSjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE1BQUQsSUFBUSxXQUFXLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFuQixFQUE4QyxNQUFNLEtBQUtwQixLQUFMLENBQVdDLElBQS9EO0FBREYsU0FGRjtBQUtFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtvQixXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxXQUFXLEtBQUtFLFNBQUwsQ0FBZUYsSUFBZixDQUFvQixJQUFwQixDQUE3RCxFQUF3RixPQUFPLEtBQUtwQixLQUFMLENBQVdHLEtBQTFHO0FBREY7QUFMRixPQURGO0FBV0Q7Ozs7RUE3Q2VvQixNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmxzOiBbe3VybDogXCJ3d3cucmVkZGl0LmNvbVwifSwge3VybDogXCJ3d3cuZ29vZ2xlLmNvbVwifV0sXG4gICAgICBlbnRyeTogJydcbiAgICB9XG4gIH1cblxuICBlbnRyeUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2VudHJ5OiBldmVudC50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgZGVsZXRlVXJsKHVybCkge1xuICAgIGNvbnNvbGUubG9nKCd1cmwnLCB1cmwpXG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZSBtZScpXG4gIH1cblxuICBpbnNlcnRVcmwodXJsKSB7XG4gICAgY29uc29sZS5sb2coJ2luc2VydCB0aGlzPT09PT4nLCB0aGlzLnN0YXRlLmVudHJ5KVxuICAgIHZhciBhcHAgPSB0aGlzO1xuICBheGlvcy5wb3N0KCcvJywge1xuICAgIHVybDogdGhpcy5zdGF0ZS5lbnRyeVxuICB9KVxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBhcHAuc2V0U3RhdGUoe3VybHM6IHJlc3BvbnNlLmRhdGF9KTtcbiAgfSlcbiAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSk7XG4gICAgdXJsLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5NeSBJbWFnZXM8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZXMgZGVsZXRlVXJsPXt0aGlzLmRlbGV0ZVVybC5iaW5kKHRoaXMpfSB1cmxzPXt0aGlzLnN0YXRlLnVybHN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFkZFVybCBlbnRyeUNoYW5nZT17dGhpcy5lbnRyeUNoYW5nZS5iaW5kKHRoaXMpfSBpbnNlcnRVcmw9e3RoaXMuaW5zZXJ0VXJsLmJpbmQodGhpcyl9IGVudHJ5PXt0aGlzLnN0YXRlLmVudHJ5fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==