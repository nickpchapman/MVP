"use strict";

var Images = function Images(_ref) {
  var urls = _ref.urls,
      deleteUrl = _ref.deleteUrl,
      imageClick = _ref.imageClick;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      urls.map(function (imageObj) {
        return React.createElement(Image, {
          deleteUrl: deleteUrl,
          key: imageObj.url,
          url: imageObj.url,
          analysis: imageObj.analysis,
          imageClick: imageClick
        });
      })
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0ltYWdlcy5qc3giXSwibmFtZXMiOlsiSW1hZ2VzIiwidXJscyIsImRlbGV0ZVVybCIsImltYWdlQ2xpY2siLCJtYXAiLCJpbWFnZU9iaiIsInVybCIsImFuYWx5c2lzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE1BQU9DLFNBQVAsUUFBT0EsU0FBUDtBQUFBLE1BQWtCQyxVQUFsQixRQUFrQkEsVUFBbEI7QUFBQSxTQUVYO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFRixXQUFLRyxHQUFMLENBQVM7QUFBQSxlQUNQLG9CQUFDLEtBQUQ7QUFDRSxxQkFBV0YsU0FEYjtBQUVFLGVBQUtHLFNBQVNDLEdBRmhCO0FBR0UsZUFBS0QsU0FBU0MsR0FIaEI7QUFJRSxvQkFBVUQsU0FBU0UsUUFKckI7QUFLRSxzQkFBYUo7QUFMZixVQURPO0FBQUEsT0FBVDtBQURGO0FBREYsR0FGVztBQUFBLENBQWIiLCJmaWxlIjoiSW1hZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEltYWdlcyA9ICh7dXJscyxkZWxldGVVcmwsIGltYWdlQ2xpY2t9KSA9PiAoXG5cbiAgPGRpdj5cbiAgICA8ZGl2PntcbiAgICAgIHVybHMubWFwKGltYWdlT2JqID0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGRlbGV0ZVVybD17ZGVsZXRlVXJsfVxuICAgICAgICAgIGtleT17aW1hZ2VPYmoudXJsfVxuICAgICAgICAgIHVybD17aW1hZ2VPYmoudXJsfVxuICAgICAgICAgIGFuYWx5c2lzPXtpbWFnZU9iai5hbmFseXNpc31cbiAgICAgICAgICBpbWFnZUNsaWNrID17aW1hZ2VDbGlja31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9PC9kaXY+XG4gIDwvZGl2PlxuXG4gICkiXX0=