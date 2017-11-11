"use strict";

var Images = function Images(_ref) {
  var urls = _ref.urls;
  return React.createElement("div", null, React.createElement("div", null, urls.map(function (url) {
    return React.createElement(Image, { url: url });
  })));
};