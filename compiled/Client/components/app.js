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
          'Image Analyzer'
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
//# sourceMappingURL=App.js.map