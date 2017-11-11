"use strict";

var Image = function Image(_ref) {
  var url = _ref.url,
      deleteUrl = _ref.deleteUrl;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "span",
      null,
      url,
      React.createElement(
        "button",
        { onClick: deleteUrl.bind(undefined, url) },
        "delete image"
      )
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0ltYWdlLmpzeCJdLCJuYW1lcyI6WyJJbWFnZSIsInVybCIsImRlbGV0ZVVybCIsImJpbmQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxTQUFSQSxLQUFRO0FBQUEsTUFBRUMsR0FBRixRQUFFQSxHQUFGO0FBQUEsTUFBT0MsU0FBUCxRQUFPQSxTQUFQO0FBQUEsU0FFVjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBT0QsU0FBUDtBQUNFO0FBQUE7QUFBQSxVQUFRLFNBQVNDLFVBQVVDLElBQVYsWUFBcUJGLEdBQXJCLENBQWpCO0FBQUE7QUFBQTtBQURGO0FBREYsR0FGVTtBQUFBLENBQVoiLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW1hZ2UgPSAoe3VybCwgZGVsZXRlVXJsfSkgPT4gKFxuXG4gIDxkaXY+XG4gICAgPHNwYW4+e3VybH1cbiAgICAgIDxidXR0b24gb25DbGljaz17ZGVsZXRlVXJsLmJpbmQodGhpcywgdXJsKX0gPmRlbGV0ZSBpbWFnZTwvYnV0dG9uPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbikiXX0=