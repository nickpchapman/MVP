"use strict";

var Images = function Images(_ref) {
  var urls = _ref.urls,
      deleteUrl = _ref.deleteUrl,
      imageClick = _ref.imageClick;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      urls.map(function (imageObj) {
        return React.createElement(Image, {
          deleteUrl: deleteUrl,
          key: imageObj.url,
          url: imageObj.url,
          analysis: imageObj.analysis,
          imageClick: imageClick
        });
      })
    )
  );
};
//# sourceMappingURL=Images.js.map