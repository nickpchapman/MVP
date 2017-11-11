"use strict";

var Images = function Images(_ref) {
  var urls = _ref.urls,
      deleteUrl = _ref.deleteUrl;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      urls.map(function (imageObj) {
        return React.createElement(Image, { deleteUrl: deleteUrl, key: imageObj.url, url: imageObj.url });
      })
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0ltYWdlcy5qc3giXSwibmFtZXMiOlsiSW1hZ2VzIiwidXJscyIsImRlbGV0ZVVybCIsIm1hcCIsImltYWdlT2JqIiwidXJsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE1BQU9DLFNBQVAsUUFBT0EsU0FBUDtBQUFBLFNBRVg7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQU1ELFdBQUtFLEdBQUwsQ0FBUztBQUFBLGVBQVksb0JBQUMsS0FBRCxJQUFPLFdBQVdELFNBQWxCLEVBQTZCLEtBQUtFLFNBQVNDLEdBQTNDLEVBQWdELEtBQUtELFNBQVNDLEdBQTlELEdBQVo7QUFBQSxPQUFUO0FBQU47QUFERixHQUZXO0FBQUEsQ0FBYiIsImZpbGUiOiJJbWFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW1hZ2VzID0gKHt1cmxzLGRlbGV0ZVVybH0pID0+IChcblxuICA8ZGl2PlxuICAgIDxkaXY+e3VybHMubWFwKGltYWdlT2JqID0+IDxJbWFnZSBkZWxldGVVcmw9e2RlbGV0ZVVybH0ga2V5PXtpbWFnZU9iai51cmx9IHVybD17aW1hZ2VPYmoudXJsfS8+ICl9PC9kaXY+XG4gIDwvZGl2PlxuXG4gICkiXX0=