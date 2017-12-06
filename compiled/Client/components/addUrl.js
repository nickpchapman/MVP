"use strict";

var AddUrl = function AddUrl(_ref) {
  var entryChange = _ref.entryChange,
      insertUrl = _ref.insertUrl,
      entry = _ref.entry;
  return React.createElement(
    "div",
    { id: "input" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0FkZFVybC5qc3giXSwibmFtZXMiOlsiQWRkVXJsIiwiZW50cnlDaGFuZ2UiLCJpbnNlcnRVcmwiLCJlbnRyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFFQyxXQUFGLFFBQUVBLFdBQUY7QUFBQSxNQUFlQyxTQUFmLFFBQWVBLFNBQWY7QUFBQSxNQUEwQkMsS0FBMUIsUUFBMEJBLEtBQTFCO0FBQUEsU0FFWDtBQUFBO0FBQUEsTUFBSyxJQUFHLE9BQVI7QUFDRTtBQUFBO0FBQUEsUUFBTSxVQUFVRCxTQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU9DLEtBQTFCLEVBQWlDLFVBQVVGLFdBQTNDO0FBRkYsT0FERjtBQUtFLHFDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBTEY7QUFERixHQUZXO0FBQUEsQ0FBYiIsImZpbGUiOiJBZGRVcmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWRkVXJsID0gKHtlbnRyeUNoYW5nZSwgaW5zZXJ0VXJsLCBlbnRyeX0pID0+IChcblxuICA8ZGl2IGlkPVwiaW5wdXRcIj5cbiAgICA8Zm9ybSBvblN1Ym1pdD17aW5zZXJ0VXJsfT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgQWRkIEltYWdlIHVybDpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2VudHJ5fSBvbkNoYW5nZT17ZW50cnlDaGFuZ2V9Lz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuXG4pIl19