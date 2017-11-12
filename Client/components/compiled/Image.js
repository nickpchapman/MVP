"use strict";

var Image = function Image(_ref) {
  var url = _ref.url,
      deleteUrl = _ref.deleteUrl,
      analysis = _ref.analysis;
  return React.createElement(
    "div",
    null,
    React.createElement("img", { src: url, height: "200", width: "100" }),
    React.createElement(
      "div",
      null,
      JSON.parse(analysis).data.concepts.map(function (descriptor) {
        return React.createElement(Analysis, { key: descriptor.id,
          name: descriptor.name, value: descriptor.value });
      }),
      React.createElement(
        "button",
        { onClick: deleteUrl.bind(undefined, url) },
        "delete image"
      ),
      "}"
    )
  );
};
//# sourceMappingURL=Image.js.map