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
//# sourceMappingURL=Analysis.js.map