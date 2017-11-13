"use strict";

var Image = function Image(_ref) {
  var url = _ref.url,
      deleteUrl = _ref.deleteUrl,
      analysis = _ref.analysis,
      imageClick = _ref.imageClick;
  return React.createElement(
    "div",
    { id: "singleEntry" },
    React.createElement("img", { onClick: imageClick.bind(undefined, url), id: "image", src: url, height: "503", width: "auto" }),
    React.createElement(
      "table",
      { id: "table" },
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Concept"
          ),
          React.createElement(
            "th",
            null,
            "Probability"
          )
        ),
        JSON.parse(analysis).outputs[0].data.concepts.map(function (keywordObj) {
          return React.createElement(Analysis, { key: keywordObj.id, name: keywordObj.name, value: keywordObj.value });
        })
      )
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { id: "delete", onClick: deleteUrl.bind(undefined, url) },
        "delete image"
      )
    )
  );
};
//# sourceMappingURL=Image.js.map