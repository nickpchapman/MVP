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
      urls: ["www.reddit.com", "www.google.com"]
    };
    return _this;
  }

  _createClass(App, [{
    key: "insertUrl",
    value: function insertUrl(url) {
      console.log('insert this====>', url);
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
          React.createElement(AddUrl, { insertUrl: this.insertUrl.bind(this) })
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInVybHMiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiaW5zZXJ0VXJsIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sQ0FBQyxnQkFBRCxFQUFtQixnQkFBbkI7QUFESyxLQUFiO0FBRmlCO0FBS2xCOzs7OzhCQUVTQyxHLEVBQUs7QUFDYkMsY0FBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDRixHQUFoQztBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE1BQUQsSUFBUSxNQUFNLEtBQUtGLEtBQUwsQ0FBV0MsSUFBekI7QUFERixTQUZGO0FBS0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsTUFBRCxJQUFRLFdBQVcsS0FBS0ksU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQW5CO0FBREY7QUFMRixPQURGO0FBV0Q7Ozs7RUF4QmVDLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVybHM6IFtcInd3dy5yZWRkaXQuY29tXCIsIFwid3d3Lmdvb2dsZS5jb21cIl1cbiAgICB9XG4gIH1cblxuICBpbnNlcnRVcmwodXJsKSB7XG4gICAgY29uc29sZS5sb2coJ2luc2VydCB0aGlzPT09PT4nLCB1cmwpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5NeSBJbWFnZXM8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZXMgdXJscz17dGhpcy5zdGF0ZS51cmxzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBZGRVcmwgaW5zZXJ0VXJsPXt0aGlzLmluc2VydFVybC5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==