"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\react\\react.js");

var _react2 = _interopRequireDefault(_react);

var _i18n = require("../source/shared/i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _ExpenseRow = require("../source/shared/components/expenses/ExpenseRow");

var _ExpenseRow2 = _interopRequireDefault(_ExpenseRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = (0, _i18n2.default)("fr-fr");

var ExpenseRow = (0, _ExpenseRow2.default)(_react2.default);

var actions = {
  deleteExpense: function deleteExpense() {
    alert("lol !");
  }
};

exports.default = function () {
  var props = {
    actions: actions,
    lang: lang,
    id: 1,
    date: "2016-11-15",
    payerId: "Bill",
    price: 100,
    label: "Cool stuff"
  };

  return _react2.default.createElement(
    "table",
    null,
    _react2.default.createElement(
      "tbody",
      null,
      _react2.default.createElement(ExpenseRow, props)
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxkZXZcXHdvcmtzcGFjZVxcbm9kZWJtXFxwYWdlc1xcdGVzdFBhZ2UuanMiXSwibmFtZXMiOlsibGFuZyIsIkV4cGVuc2VSb3ciLCJhY3Rpb25zIiwiZGVsZXRlRXhwZW5zZSIsImFsZXJ0IiwicHJvcHMiLCJpZCIsImRhdGUiLCJwYXllcklkIiwicHJpY2UiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUdBOzs7Ozs7QUFGQSxJQUFNQSxPQUFPLG9CQUFrQixPQUFsQixDQUFiOztBQUdBLElBQU1DLGFBQWEsMENBQW5COztBQUVBLElBQU1DLFVBQVU7QUFDZEMsaUJBQWUseUJBQU07QUFDbkJDLFVBQU8sT0FBUDtBQUNEO0FBSGEsQ0FBaEI7O2tCQU1lLFlBQU07QUFDbkIsTUFBSUMsUUFBUTtBQUNWSCxvQkFEVTtBQUVWRixjQUZVO0FBR1ZNLFFBQUksQ0FITTtBQUlWQyxVQUFNLFlBSkk7QUFLVkMsYUFBUyxNQUxDO0FBTVZDLFdBQU8sR0FORztBQU9WQyxXQUFPO0FBUEcsR0FBWjs7QUFVQSxTQUFPO0FBQUE7QUFBQTtBQUNSO0FBQUE7QUFBQTtBQUNFLG9DQUFDLFVBQUQsRUFBaUJMLEtBQWpCO0FBREY7QUFEUSxHQUFQO0FBS0QsQyIsImZpbGUiOiJ0ZXN0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9kZXYvd29ya3NwYWNlL25vZGVibSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGxhbmd1YWdlc0ZhY3RvcnkgZnJvbSBcIi4uL3NvdXJjZS9zaGFyZWQvaTE4blwiO1xuY29uc3QgbGFuZyA9IGxhbmd1YWdlc0ZhY3RvcnkoIFwiZnItZnJcIiApO1xuXG5pbXBvcnQgY3JlYXRlRXhwZW5zZVJvdyBmcm9tIFwiLi4vc291cmNlL3NoYXJlZC9jb21wb25lbnRzL2V4cGVuc2VzL0V4cGVuc2VSb3dcIjtcbmNvbnN0IEV4cGVuc2VSb3cgPSBjcmVhdGVFeHBlbnNlUm93KCBSZWFjdCApO1xuXG5jb25zdCBhY3Rpb25zID0ge1xuICBkZWxldGVFeHBlbnNlOiAoKSA9PiB7XG4gICAgYWxlcnQoIFwibG9sICFcIiApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGxldCBwcm9wcyA9IHtcbiAgICBhY3Rpb25zLFxuICAgIGxhbmcsXG4gICAgaWQ6IDEsXG4gICAgZGF0ZTogXCIyMDE2LTExLTE1XCIsXG4gICAgcGF5ZXJJZDogXCJCaWxsXCIsXG4gICAgcHJpY2U6IDEwMCxcbiAgICBsYWJlbDogXCJDb29sIHN0dWZmXCJcbiAgfVxuXG4gIHJldHVybiA8dGFibGU+XG5cdDx0Ym9keT5cblx0ICA8RXhwZW5zZVJvdyB7IC4uLnByb3BzIH0gLz5cblx0PC90Ym9keT5cbiAgPC90YWJsZT47XG59O1xuIl19