"use strict";

var Image = function Image(_ref) {
  var url = _ref.url,
      deleteUrl = _ref.deleteUrl,
      analysis = _ref.analysis;
  return React.createElement(
    "div",
    null,
    React.createElement("img", { src: url, height: "100", width: "100" }),
    React.createElement(
      "span",
      null,
      React.createElement(
        "button",
        { onClick: deleteUrl.bind(undefined, url) },
        "delete image"
      )
    ),
    React.createElement(
      "div",
      null,
      JSON.parse(analysis).outputs[0].data.concepts.map(function (keywordObj) {
        return React.createElement(Analysis, { key: keywordObj.id, name: keywordObj.name, value: keywordObj.value });
      })
    )
  );
};
//# sourceMappingURL=Image.js.map