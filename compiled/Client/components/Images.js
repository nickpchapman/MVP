"use strict";

var Images = function Images(_ref) {
  var urls = _ref.urls;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      urls.map(function (url) {
        return React.createElement(Image, { key: url, url: url });
      })
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0ltYWdlcy5qc3giXSwibmFtZXMiOlsiSW1hZ2VzIiwidXJscyIsIm1hcCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxTQUVYO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFNQSxXQUFLQyxHQUFMLENBQVM7QUFBQSxlQUFPLG9CQUFDLEtBQUQsSUFBTyxLQUFLQyxHQUFaLEVBQWlCLEtBQUtBLEdBQXRCLEdBQVA7QUFBQSxPQUFUO0FBQU47QUFERixHQUZXO0FBQUEsQ0FBYiIsImZpbGUiOiJJbWFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW1hZ2VzID0gKHt1cmxzfSkgPT4gKFxuXG4gIDxkaXY+XG4gICAgPGRpdj57dXJscy5tYXAodXJsID0+IDxJbWFnZSBrZXk9e3VybH0gdXJsPXt1cmx9Lz4pfTwvZGl2PlxuICA8L2Rpdj5cblxuICApIl19