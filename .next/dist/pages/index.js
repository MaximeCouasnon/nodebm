"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require("redbox-react");

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\react\\react.js");

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require("react-transform-catch-errors");

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _acceptLanguage = require("accept-language");

var _acceptLanguage2 = _interopRequireDefault(_acceptLanguage);

var _i18n = require("../source/shared/i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _Welcome = require("../source/shared/components/Welcome");

var _Welcome2 = _interopRequireDefault(_Welcome);

var _head = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _link = require("C:\\dev\\workspace\\nodebm\\node_modules\\next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
	Machin: {
		displayName: "Machin"
	},
	_component: {}
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	filename: "C:/dev/workspace/nodebm/pages/index.js",
	components: _components,
	locals: [],
	imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformCatchErrors2(Component, id);
	};
}

_acceptLanguage2.default.languages(["en-US", "fr-FR"]);

var Welcome = (0, _Welcome2.default)(_react3.default);

var Machin = _wrapComponent("Machin")(function (_React$Component) {
	(0, _inherits3.default)(Machin, _React$Component);

	function Machin() {
		(0, _classCallCheck3.default)(this, Machin);
		return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Machin).apply(this, arguments));
	}

	(0, _createClass3.default)(Machin, [{
		key: "render",
		value: function render() {
			var lang = (0, _i18n2.default)(this.props.lang);

			return _react3.default.createElement(
				"div",
				null,
				_react3.default.createElement(
					_head2.default,
					null,
					_react3.default.createElement(
						"title",
						null,
						"Billme"
					)
				),
				_react3.default.createElement(Welcome, { lang: lang }),
				_react3.default.createElement(
					_link2.default,
					{ href: "/testPage" },
					lang("Test page")
				)
			);
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
				var req = _ref2.req;
				var query = _ref2.query;
				var lang;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								lang = void 0;


								if (query.lang) {
									lang = query.lang;
								} else {
									lang = _acceptLanguage2.default.get(req.headers["accept-language"]);
								}

								return _context.abrupt("return", { lang: lang, truc: "fr-FR" });

							case 3:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);
	return Machin;
}(_react3.default.Component));

;

var Chouette = _wrapComponent("_component")(_react3.default.createClass({
	displayName: "Chouette",

	render: function render() {
		var lang = (0, _i18n2.default)(this.props.lang);

		return _react3.default.createElement(
			"div",
			null,
			_react3.default.createElement(
				_head2.default,
				null,
				_react3.default.createElement(
					"title",
					null,
					"Billme"
				)
			),
			_react3.default.createElement(Welcome, { lang: lang }),
			_react3.default.createElement(
				_link2.default,
				{ href: "/testPage" },
				lang("Test page")
			)
		);
	}
}));

Chouette.getInitialProps = function () {
	var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref4) {
		var req = _ref4.req;
		var query = _ref4.query;
		var lang;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						lang = void 0;


						if (query.lang) {
							lang = query.lang;
						} else {
							lang = _acceptLanguage2.default.get(req.headers["accept-language"]);
						}

						return _context2.abrupt("return", { lang: lang });

					case 3:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function (_x2) {
		return _ref3.apply(this, arguments);
	};
}();

exports.default = Chouette;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxkZXZcXHdvcmtzcGFjZVxcbm9kZWJtXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOlsibGFuZ3VhZ2VzIiwiV2VsY29tZSIsImxhbmciLCJwcm9wcyIsInJlcSIsInF1ZXJ5IiwiZ2V0IiwiaGVhZGVycyIsInRydWMiLCJDb21wb25lbnQiLCJDaG91ZXR0ZSIsImNyZWF0ZUNsYXNzIiwicmVuZGVyIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFHQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSQSx5QkFBZUEsU0FBZixDQUEwQixDQUFFLE9BQUYsRUFBVyxPQUFYLENBQTFCOztBQUtBLElBQU1DLFVBQVUsdUNBQWhCOzs7Ozs7Ozs7Ozs7MkJBa0JXO0FBQ1IsT0FBTUMsT0FBTyxvQkFBa0IsS0FBS0MsS0FBTCxDQUFXRCxJQUE3QixDQUFiOztBQUVBLFVBQ0Q7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBREY7QUFJRSxrQ0FBQyxPQUFELElBQVMsTUFBT0EsSUFBaEIsR0FKRjtBQUtFO0FBQUE7QUFBQSxPQUFNLE1BQUssV0FBWDtBQUF5QkEsVUFBTSxXQUFOO0FBQXpCO0FBTEYsSUFEQztBQVNEOzs7OztRQXhCZ0NFLEcsU0FBQUEsRztRQUFLQyxLLFNBQUFBLEs7UUFDaENILEk7Ozs7O0FBQUFBLFk7OztBQUVKLFlBQUtHLE1BQU1ILElBQVgsRUFBa0I7QUFDaEJBLGdCQUFPRyxNQUFNSCxJQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0xBLGdCQUFPLHlCQUFlSSxHQUFmLENBQW9CRixJQUFJRyxPQUFKLENBQWEsaUJBQWIsQ0FBcEIsQ0FBUDtBQUNEOzt5Q0FFTSxFQUFFTCxVQUFGLEVBQVFNLE1BQU0sT0FBZCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFWVyxnQkFBTUMsUzs7QUEwQjFCOztBQUVELElBQU1DLHdDQUFXLGdCQUFNQyxXQUFOLENBQW1CO0FBQUE7O0FBQ2xDQyxTQUFRLGtCQUFZO0FBQ25CLE1BQU1WLE9BQU8sb0JBQWtCLEtBQUtDLEtBQUwsQ0FBV0QsSUFBN0IsQ0FBYjs7QUFFQSxTQUNEO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixJQURGO0FBSUUsaUNBQUMsT0FBRCxJQUFTLE1BQU9BLElBQWhCLEdBSkY7QUFLRTtBQUFBO0FBQUEsTUFBTSxNQUFLLFdBQVg7QUFBeUJBLFNBQU0sV0FBTjtBQUF6QjtBQUxGLEdBREM7QUFTRDtBQWJrQyxDQUFuQixDQUFYLENBQU47O0FBZ0JBUSxTQUFTRyxlQUFUO0FBQUEsd0VBQTJCO0FBQUEsTUFBbUJULEdBQW5CLFNBQW1CQSxHQUFuQjtBQUFBLE1BQXdCQyxLQUF4QixTQUF3QkEsS0FBeEI7QUFBQSxNQUNyQkgsSUFEcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkEsVUFEcUI7OztBQUd6QixVQUFLRyxNQUFNSCxJQUFYLEVBQWtCO0FBQ25CQSxjQUFPRyxNQUFNSCxJQUFiO0FBQ0UsT0FGRCxNQUVPO0FBQ1JBLGNBQU8seUJBQWVJLEdBQWYsQ0FBb0JGLElBQUlHLE9BQUosQ0FBYSxpQkFBYixDQUFwQixDQUFQO0FBQ0U7O0FBUHdCLHdDQVNsQixFQUFFTCxVQUFGLEVBVGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztrQkFZZVEsUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOi9kZXYvd29ya3NwYWNlL25vZGVibSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGFjY2VwdExhbmd1YWdlIGZyb20gXCJhY2NlcHQtbGFuZ3VhZ2VcIjtcbmFjY2VwdExhbmd1YWdlLmxhbmd1YWdlcyggWyBcImVuLVVTXCIsIFwiZnItRlJcIiBdICk7XG5cbmltcG9ydCBsYW5ndWFnZXNGYWN0b3J5IGZyb20gXCIuLi9zb3VyY2Uvc2hhcmVkL2kxOG5cIjtcblxuaW1wb3J0IGNyZWF0ZVdlbGNvbWUgZnJvbSBcIi4uL3NvdXJjZS9zaGFyZWQvY29tcG9uZW50cy9XZWxjb21lXCI7XG5jb25zdCBXZWxjb21lID0gY3JlYXRlV2VsY29tZSggUmVhY3QgKTtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jbGFzcyBNYWNoaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICggeyByZXEsIHF1ZXJ5IH0gKSB7XG5cdCAgbGV0IGxhbmc7XG5cblx0ICBpZiAoIHF1ZXJ5LmxhbmcgKSB7XG5cdCAgICBsYW5nID0gcXVlcnkubGFuZztcblx0ICB9IGVsc2Uge1xuXHQgICAgbGFuZyA9IGFjY2VwdExhbmd1YWdlLmdldCggcmVxLmhlYWRlcnNbIFwiYWNjZXB0LWxhbmd1YWdlXCIgXSApO1xuXHQgIH1cblx0ICBcblx0ICByZXR1cm4geyBsYW5nLCB0cnVjOiBcImZyLUZSXCIgfTtcbiAgICB9XG5cblx0cmVuZGVyICgpIHtcblx0ICBjb25zdCBsYW5nID0gbGFuZ3VhZ2VzRmFjdG9yeSggdGhpcy5wcm9wcy5sYW5nICk7XG5cblx0ICByZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0ICA8SGVhZD5cblx0XHQgICAgPHRpdGxlPkJpbGxtZTwvdGl0bGU+XG5cdFx0ICA8L0hlYWQ+XG5cdFx0ICA8V2VsY29tZSBsYW5nPXsgbGFuZyB9IC8+XG5cdFx0ICA8TGluayBocmVmPVwiL3Rlc3RQYWdlXCI+eyBsYW5nKCBcIlRlc3QgcGFnZVwiICkgfTwvTGluaz5cblx0XHQ8L2Rpdj5cblx0ICApO1xuXHR9XG59O1xuXG5jb25zdCBDaG91ZXR0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKCB7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHQgIGNvbnN0IGxhbmcgPSBsYW5ndWFnZXNGYWN0b3J5KCB0aGlzLnByb3BzLmxhbmcgKTtcblxuXHQgIHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHQgIDxIZWFkPlxuXHRcdCAgICA8dGl0bGU+QmlsbG1lPC90aXRsZT5cblx0XHQgIDwvSGVhZD5cblx0XHQgIDxXZWxjb21lIGxhbmc9eyBsYW5nIH0gLz5cblx0XHQgIDxMaW5rIGhyZWY9XCIvdGVzdFBhZ2VcIj57IGxhbmcoIFwiVGVzdCBwYWdlXCIgKSB9PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQgICk7XG5cdH1cbn0gKTtcblxuQ2hvdWV0dGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCB7IHJlcSwgcXVlcnkgfSApIHtcbiAgbGV0IGxhbmc7XG5cbiAgaWYgKCBxdWVyeS5sYW5nICkge1xuXHRsYW5nID0gcXVlcnkubGFuZztcbiAgfSBlbHNlIHtcblx0bGFuZyA9IGFjY2VwdExhbmd1YWdlLmdldCggcmVxLmhlYWRlcnNbIFwiYWNjZXB0LWxhbmd1YWdlXCIgXSApO1xuICB9XG4gIFxuICByZXR1cm4geyBsYW5nIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaG91ZXR0ZTtcbiJdfQ==