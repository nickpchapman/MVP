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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0ltYWdlLmpzeCJdLCJuYW1lcyI6WyJJbWFnZSIsInVybCIsImRlbGV0ZVVybCIsImFuYWx5c2lzIiwiaW1hZ2VDbGljayIsImJpbmQiLCJKU09OIiwicGFyc2UiLCJvdXRwdXRzIiwiZGF0YSIsImNvbmNlcHRzIiwibWFwIiwia2V5d29yZE9iaiIsImlkIiwibmFtZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQUVDLEdBQUYsUUFBRUEsR0FBRjtBQUFBLE1BQU9DLFNBQVAsUUFBT0EsU0FBUDtBQUFBLE1BQWtCQyxRQUFsQixRQUFrQkEsUUFBbEI7QUFBQSxNQUE0QkMsVUFBNUIsUUFBNEJBLFVBQTVCO0FBQUEsU0FFVjtBQUFBO0FBQUEsTUFBSyxJQUFHLGFBQVI7QUFDRSxpQ0FBSyxTQUFTQSxXQUFXQyxJQUFYLFlBQXNCSixHQUF0QixDQUFkLEVBQTBDLElBQUcsT0FBN0MsRUFBcUQsS0FBS0EsR0FBMUQsRUFBK0QsUUFBTyxLQUF0RSxFQUE0RSxPQUFNLE1BQWxGLEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBTyxJQUFHLE9BQVY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsU0FERjtBQUlRSyxhQUFLQyxLQUFMLENBQVdKLFFBQVgsRUFBcUJLLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDQyxJQUFoQyxDQUFxQ0MsUUFBckMsQ0FBOENDLEdBQTlDLENBQWtELFVBQVNDLFVBQVQsRUFBcUI7QUFDN0UsaUJBQU8sb0JBQUMsUUFBRCxJQUFVLEtBQUtBLFdBQVdDLEVBQTFCLEVBQThCLE1BQU1ELFdBQVdFLElBQS9DLEVBQXFELE9BQU9GLFdBQVdHLEtBQXZFLEdBQVA7QUFDRCxTQUZPO0FBSlI7QUFERixLQUZGO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQVEsSUFBRyxRQUFYLEVBQW9CLFNBQVNiLFVBQVVHLElBQVYsWUFBcUJKLEdBQXJCLENBQTdCO0FBQUE7QUFBQTtBQURGO0FBWEYsR0FGVTtBQUFBLENBQVoiLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW1hZ2UgPSAoe3VybCwgZGVsZXRlVXJsLCBhbmFseXNpcywgaW1hZ2VDbGlja30pID0+IChcblxuICA8ZGl2IGlkPVwic2luZ2xlRW50cnlcIj5cbiAgICA8aW1nIG9uQ2xpY2s9e2ltYWdlQ2xpY2suYmluZCh0aGlzLCB1cmwpfSBpZD1cImltYWdlXCIgc3JjPXt1cmx9IGhlaWdodD1cIjUwM1wiIHdpZHRoPVwiYXV0b1wiLz5cbiAgICA8dGFibGUgaWQ9XCJ0YWJsZVwiPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPkNvbmNlcHQ8L3RoPlxuICAgICAgICAgIDx0aD5Qcm9iYWJpbGl0eTwvdGg+XG4gICAgICAgIDwvdHI+e0pTT04ucGFyc2UoYW5hbHlzaXMpLm91dHB1dHNbMF0uZGF0YS5jb25jZXB0cy5tYXAoZnVuY3Rpb24oa2V5d29yZE9iaikge1xuICAgICAgICByZXR1cm4gPEFuYWx5c2lzIGtleT17a2V5d29yZE9iai5pZH0gbmFtZT17a2V5d29yZE9iai5uYW1lfSB2YWx1ZT17a2V5d29yZE9iai52YWx1ZX0vPlxuICAgICAgfSl9PC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlXCIgb25DbGljaz17ZGVsZXRlVXJsLmJpbmQodGhpcywgdXJsKX0+ZGVsZXRlIGltYWdlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4pIl19