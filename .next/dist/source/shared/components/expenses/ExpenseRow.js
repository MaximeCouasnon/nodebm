"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\react\\react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (React) {
  return function (_ref) {
    var actions = _ref.actions;
    var lang = _ref.lang;
    var id = _ref.id;
    var _ref$payerId = _ref.payerId;
    var payerId = _ref$payerId === undefined ? "" : _ref$payerId;
    var _ref$date = _ref.date;
    var date = _ref$date === undefined ? "" : _ref$date;
    var _ref$label = _ref.label;
    var label = _ref$label === undefined ? "" : _ref$label;
    var _ref$price = _ref.price;
    var price = _ref$price === undefined ? 0 : _ref$price;
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        { className: "expense-delete" },
        React.createElement(
          "span",
          { onClick: function onClick() {
              return actions.deleteExpense(id);
            } },
          lang("del.")
        )
      ),
      React.createElement(
        "td",
        { className: "expense-payerId" },
        payerId
      ),
      React.createElement(
        "td",
        { className: "expense-date" },
        date
      ),
      React.createElement(
        "td",
        { className: "expense-label" },
        label
      ),
      React.createElement(
        "td",
        { className: "expense-price" },
        price
      )
    );
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxkZXZcXHdvcmtzcGFjZVxcbm9kZWJtXFxzb3VyY2VcXHNoYXJlZFxcY29tcG9uZW50c1xcZXhwZW5zZXNcXEV4cGVuc2VSb3cuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsImxhbmciLCJpZCIsInBheWVySWQiLCJkYXRlIiwibGFiZWwiLCJwcmljZSIsImRlbGV0ZUV4cGVuc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFBZTtBQUFBLFNBQVM7QUFBQSxRQUN0QkEsT0FEc0IsUUFDdEJBLE9BRHNCO0FBQUEsUUFFdEJDLElBRnNCLFFBRXRCQSxJQUZzQjtBQUFBLFFBR3RCQyxFQUhzQixRQUd0QkEsRUFIc0I7QUFBQSw0QkFJdEJDLE9BSnNCO0FBQUEsUUFJdEJBLE9BSnNCLGdDQUlaLEVBSlk7QUFBQSx5QkFLdEJDLElBTHNCO0FBQUEsUUFLdEJBLElBTHNCLDZCQUtmLEVBTGU7QUFBQSwwQkFNdEJDLEtBTnNCO0FBQUEsUUFNdEJBLEtBTnNCLDhCQU1kLEVBTmM7QUFBQSwwQkFPdEJDLEtBUHNCO0FBQUEsUUFPdEJBLEtBUHNCLDhCQU9kLENBUGM7QUFBQSxXQVN0QjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLGdCQUFkO0FBQ0U7QUFBQTtBQUFBLFlBQU0sU0FBVTtBQUFBLHFCQUFNTixRQUFRTyxhQUFSLENBQXVCTCxFQUF2QixDQUFOO0FBQUEsYUFBaEI7QUFDSUQsZUFBTSxNQUFOO0FBREo7QUFERixPQURGO0FBTUU7QUFBQTtBQUFBLFVBQUksV0FBVSxpQkFBZDtBQUFrQ0U7QUFBbEMsT0FORjtBQU9FO0FBQUE7QUFBQSxVQUFJLFdBQVUsY0FBZDtBQUErQkM7QUFBL0IsT0FQRjtBQVFFO0FBQUE7QUFBQSxVQUFJLFdBQVUsZUFBZDtBQUFnQ0M7QUFBaEMsT0FSRjtBQVNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsZUFBZDtBQUFnQ0M7QUFBaEM7QUFURixLQVRzQjtBQUFBLEdBQVQ7QUFBQSxDIiwiZmlsZSI6IkV4cGVuc2VSb3cuanMiLCJzb3VyY2VSb290IjoiQzovZGV2L3dvcmtzcGFjZS9ub2RlYm0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBSZWFjdCA9PiAoIHtcbiAgYWN0aW9ucyxcbiAgbGFuZyxcbiAgaWQsXG4gIHBheWVySWQgPSBcIlwiLFxuICBkYXRlID0gXCJcIixcbiAgbGFiZWwgPSBcIlwiLFxuICBwcmljZSA9IDBcbn0gKSA9PiAoXG4gIDx0cj5cbiAgICA8dGQgY2xhc3NOYW1lPVwiZXhwZW5zZS1kZWxldGVcIj5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9eyAoKSA9PiBhY3Rpb25zLmRlbGV0ZUV4cGVuc2UoIGlkICkgfT5cbiAgICAgICAgeyBsYW5nKCBcImRlbC5cIiApIH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJleHBlbnNlLXBheWVySWRcIj57IHBheWVySWQgfTwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cImV4cGVuc2UtZGF0ZVwiPnsgZGF0ZSB9PC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPVwiZXhwZW5zZS1sYWJlbFwiPnsgbGFiZWwgfTwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cImV4cGVuc2UtcHJpY2VcIj57IHByaWNlIH08L3RkPlxuICA8L3RyPlxuKTtcbiJdfQ==