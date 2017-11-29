"use strict";

var Analysis = function Analysis(_ref) {
    var name = _ref.name,
        value = _ref.value;
    return React.createElement(
        "tr",
        { id: "concept" },
        React.createElement(
            "td",
            { id: "data" },
            name
        ),
        React.createElement(
            "td",
            { id: "data" },
            (value * 100).toFixed(1),
            "%"
        )
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0NsaWVudC9jb21wb25lbnRzL0FuYWx5c2lzLmpzeCJdLCJuYW1lcyI6WyJBbmFseXNpcyIsIm5hbWUiLCJ2YWx1ZSIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsUUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsUUFBUUMsS0FBUixRQUFRQSxLQUFSO0FBQUEsV0FDYjtBQUFBO0FBQUEsVUFBSSxJQUFHLFNBQVA7QUFDSTtBQUFBO0FBQUEsY0FBSSxJQUFHLE1BQVA7QUFBZUQ7QUFBZixTQURKO0FBRUk7QUFBQTtBQUFBLGNBQUksSUFBRyxNQUFQO0FBQWUsYUFBQ0MsUUFBUSxHQUFULEVBQWNDLE9BQWQsQ0FBc0IsQ0FBdEIsQ0FBZjtBQUFBO0FBQUE7QUFGSixLQURhO0FBQUEsQ0FBZiIsImZpbGUiOiJBbmFseXNpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBbmFseXNpcyA9ICh7bmFtZSwgdmFsdWV9KSA9PiAoXG4gIDx0ciBpZD1cImNvbmNlcHRcIj5cbiAgICAgIDx0ZCBpZD1cImRhdGFcIj57bmFtZX08L3RkPlxuICAgICAgPHRkIGlkPVwiZGF0YVwiPnsodmFsdWUgKiAxMDApLnRvRml4ZWQoMSl9JTwvdGQ+XG4gIDwvdHI+XG4pIl19