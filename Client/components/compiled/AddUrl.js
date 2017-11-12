"use strict";

var AddUrl = function AddUrl(_ref) {
  var entryChange = _ref.entryChange,
      insertUrl = _ref.insertUrl,
      entry = _ref.entry;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      { onSubmit: insertUrl },
      React.createElement(
        "label",
        null,
        "Add Image url:",
        React.createElement("input", { type: "text", value: entry, onChange: entryChange })
      ),
      React.createElement("input", { type: "submit", value: "Submit" })
    )
  );
};
//# sourceMappingURL=AddUrl.js.map