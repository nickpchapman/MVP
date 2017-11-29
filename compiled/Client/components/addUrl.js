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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0FkZFVybC5qc3giXSwibmFtZXMiOlsiQWRkVXJsIiwiZW50cnlDaGFuZ2UiLCJpbnNlcnRVcmwiLCJlbnRyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFFQyxXQUFGLFFBQUVBLFdBQUY7QUFBQSxNQUFlQyxTQUFmLFFBQWVBLFNBQWY7QUFBQSxNQUEwQkMsS0FBMUIsUUFBMEJBLEtBQTFCO0FBQUEsU0FFWDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBTSxVQUFVRCxTQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU9DLEtBQTFCLEVBQWlDLFVBQVVGLFdBQTNDO0FBRkYsT0FERjtBQUtFLHFDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBTEY7QUFERixHQUZXO0FBQUEsQ0FBYiIsImZpbGUiOiJBZGRVcmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWRkVXJsID0gKHtlbnRyeUNoYW5nZSwgaW5zZXJ0VXJsLCBlbnRyeX0pID0+IChcblxuICA8ZGl2PlxuICAgIDxmb3JtIG9uU3VibWl0PXtpbnNlcnRVcmx9PlxuICAgICAgPGxhYmVsPlxuICAgICAgICBBZGQgSW1hZ2UgdXJsOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZW50cnl9IG9uQ2hhbmdlPXtlbnRyeUNoYW5nZX0vPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG5cbikiXX0=