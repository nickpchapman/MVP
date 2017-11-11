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
      console.log('before', this.state);
      this.setState({ entry: event.target.value });
      console.log('current state:', this.state.entry);
    }
  }, {
    key: "insertUrl",
    value: function insertUrl(url) {
      console.log('insert this====>', this.state.entry);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVybHMiLCJlbnRyeSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJwcmV2ZW50RGVmYXVsdCIsImVudHJ5Q2hhbmdlIiwiYmluZCIsImluc2VydFVybCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sQ0FBQyxnQkFBRCxFQUFtQixnQkFBbkIsQ0FESztBQUVYQyxhQUFPO0FBRkksS0FBYjtBQUZpQjtBQU1sQjs7OztnQ0FDV0MsSyxFQUFPO0FBQ2pCQyxjQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQixLQUFLTCxLQUEzQjtBQUNBLFdBQUtNLFFBQUwsQ0FBYyxFQUFDSixPQUFPQyxNQUFNSSxNQUFOLENBQWFDLEtBQXJCLEVBQWQ7QUFDQUosY0FBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtMLEtBQUwsQ0FBV0UsS0FBekM7QUFDRDs7OzhCQUNTTyxHLEVBQUs7QUFDYkwsY0FBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDLEtBQUtMLEtBQUwsQ0FBV0UsS0FBM0M7QUFDQU8sVUFBSUMsY0FBSjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE1BQUQsSUFBUSxNQUFNLEtBQUtWLEtBQUwsQ0FBV0MsSUFBekI7QUFERixTQUZGO0FBS0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLGFBQWEsS0FBS1UsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBckIsRUFBa0QsV0FBVyxLQUFLQyxTQUFMLENBQWVELElBQWYsQ0FBb0IsSUFBcEIsQ0FBN0QsRUFBd0YsT0FBTyxLQUFLWixLQUFMLENBQVdFLEtBQTFHO0FBREY7QUFMRixPQURGO0FBV0Q7Ozs7RUE5QmVZLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVybHM6IFtcInd3dy5yZWRkaXQuY29tXCIsIFwid3d3Lmdvb2dsZS5jb21cIl0sXG4gICAgICBlbnRyeTogJydcbiAgICB9XG4gIH1cbiAgZW50cnlDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnYmVmb3JlJywgdGhpcy5zdGF0ZSlcbiAgICB0aGlzLnNldFN0YXRlKHtlbnRyeTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICBjb25zb2xlLmxvZygnY3VycmVudCBzdGF0ZTonLCB0aGlzLnN0YXRlLmVudHJ5KTtcbiAgfVxuICBpbnNlcnRVcmwodXJsKSB7XG4gICAgY29uc29sZS5sb2coJ2luc2VydCB0aGlzPT09PT4nLCB0aGlzLnN0YXRlLmVudHJ5KVxuICAgIHVybC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+TXkgSW1hZ2VzPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW1hZ2VzIHVybHM9e3RoaXMuc3RhdGUudXJsc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QWRkVXJsIGVudHJ5Q2hhbmdlPXt0aGlzLmVudHJ5Q2hhbmdlLmJpbmQodGhpcyl9IGluc2VydFVybD17dGhpcy5pbnNlcnRVcmwuYmluZCh0aGlzKX0gZW50cnk9e3RoaXMuc3RhdGUuZW50cnl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19