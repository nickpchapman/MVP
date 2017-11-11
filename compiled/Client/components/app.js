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
      urls: ["www.reddit.com", "www.google.com"],
      entry: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: "entryChange",
    value: function entryChange(event) {
      // console.log('before', this.state)
      this.setState({ entry: event.target.value });
      // console.log('current state:', this.state.entry);
    }
  }, {
    key: "insertUrl",
    value: function insertUrl(url) {
      console.log('insert this====>', this.state.entry);

      axios.post('/', {
        url: this.state.entry
      }).then(function (response) {
        console.log('response ====>', response);
        // this.setState({urls: response.data})
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
          React.createElement(Images, { urls: this.state.urls })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVybHMiLCJlbnRyeSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJlbnRyeUNoYW5nZSIsImJpbmQiLCJpbnNlcnRVcmwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQW5CLENBREs7QUFFWEMsYUFBTztBQUZJLEtBQWI7QUFGaUI7QUFNbEI7Ozs7Z0NBQ1dDLEssRUFBTztBQUNqQjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDRixPQUFPQyxNQUFNRSxNQUFOLENBQWFDLEtBQXJCLEVBQWQ7QUFDQTtBQUNEOzs7OEJBQ1NDLEcsRUFBSztBQUNiQyxjQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0MsS0FBS1QsS0FBTCxDQUFXRSxLQUEzQzs7QUFFRlEsWUFBTUMsSUFBTixDQUFXLEdBQVgsRUFBZ0I7QUFDZEosYUFBSyxLQUFLUCxLQUFMLENBQVdFO0FBREYsT0FBaEIsRUFHQ1UsSUFIRCxDQUdNLFVBQVVDLFFBQVYsRUFBb0I7QUFDeEJMLGdCQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJJLFFBQTlCO0FBQ0E7QUFDRCxPQU5ELEVBT0NDLEtBUEQsQ0FPTyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCUCxnQkFBUUMsR0FBUixDQUFZTSxLQUFaO0FBQ0QsT0FURDs7QUFXRVIsVUFBSVMsY0FBSjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE1BQUQsSUFBUSxNQUFNLEtBQUtoQixLQUFMLENBQVdDLElBQXpCO0FBREYsU0FGRjtBQUtFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtnQixXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFyQixFQUFrRCxXQUFXLEtBQUtDLFNBQUwsQ0FBZUQsSUFBZixDQUFvQixJQUFwQixDQUE3RCxFQUF3RixPQUFPLEtBQUtsQixLQUFMLENBQVdFLEtBQTFHO0FBREY7QUFMRixPQURGO0FBV0Q7Ozs7RUExQ2VrQixNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmxzOiBbXCJ3d3cucmVkZGl0LmNvbVwiLCBcInd3dy5nb29nbGUuY29tXCJdLFxuICAgICAgZW50cnk6ICcnXG4gICAgfVxuICB9XG4gIGVudHJ5Q2hhbmdlKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2JlZm9yZScsIHRoaXMuc3RhdGUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZW50cnk6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnQgc3RhdGU6JywgdGhpcy5zdGF0ZS5lbnRyeSk7XG4gIH1cbiAgaW5zZXJ0VXJsKHVybCkge1xuICAgIGNvbnNvbGUubG9nKCdpbnNlcnQgdGhpcz09PT0+JywgdGhpcy5zdGF0ZS5lbnRyeSlcblxuICBheGlvcy5wb3N0KCcvJywge1xuICAgIHVybDogdGhpcy5zdGF0ZS5lbnRyeVxuICB9KVxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgPT09PT4nLCByZXNwb25zZSk7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7dXJsczogcmVzcG9uc2UuZGF0YX0pXG4gIH0pXG4gIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH0pO1xuXG4gICAgdXJsLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5NeSBJbWFnZXM8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZXMgdXJscz17dGhpcy5zdGF0ZS51cmxzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBZGRVcmwgZW50cnlDaGFuZ2U9e3RoaXMuZW50cnlDaGFuZ2UuYmluZCh0aGlzKX0gaW5zZXJ0VXJsPXt0aGlzLmluc2VydFVybC5iaW5kKHRoaXMpfSBlbnRyeT17dGhpcy5zdGF0ZS5lbnRyeX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=