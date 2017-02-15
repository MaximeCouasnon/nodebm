webpackHotUpdate(1,{

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _regenerator = __webpack_require__(149);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(148);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(81);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(86);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(87);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(89);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(88);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _redboxReact2 = __webpack_require__(97);
	
	var _redboxReact3 = _interopRequireDefault(_redboxReact2);
	
	var _react2 = __webpack_require__(24);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformCatchErrors3 = __webpack_require__(96);
	
	var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);
	
	var _acceptLanguage = __webpack_require__(122);
	
	var _acceptLanguage2 = _interopRequireDefault(_acceptLanguage);
	
	var _i18n = __webpack_require__(116);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _Welcome = __webpack_require__(142);
	
	var _Welcome2 = _interopRequireDefault(_Welcome);
	
	var _head = __webpack_require__(118);
	
	var _head2 = _interopRequireDefault(_head);
	
	var _link = __webpack_require__(153);
	
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
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DOi9kZXYvd29ya3NwYWNlL25vZGVibS9wYWdlcy9pbmRleC5qcz83YzdmIl0sIm5hbWVzIjpbImxhbmd1YWdlcyIsIldlbGNvbWUiLCJsYW5nIiwicHJvcHMiLCJyZXEiLCJxdWVyeSIsImdldCIsImhlYWRlcnMiLCJ0cnVjIiwiQ29tcG9uZW50IiwiQ2hvdWV0dGUiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFHQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSQSwwQkFBZUEsU0FBZixDQUEwQixDQUFFLE9BQUYsRUFBVyxPQUFYLENBQTFCOztBQUtBLEtBQU1DLFVBQVUsdUNBQWhCOzs7Ozs7Ozs7Ozs7NEJBa0JXO0FBQ1IsUUFBTUMsT0FBTyxvQkFBa0IsS0FBS0MsS0FBTCxDQUFXRCxJQUE3QixDQUFiOztBQUVBLFdBQ0Q7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE1BREY7QUFJRSxtQ0FBQyxPQUFELElBQVMsTUFBT0EsSUFBaEIsR0FKRjtBQUtFO0FBQUE7QUFBQSxRQUFNLE1BQUssV0FBWDtBQUF5QkEsV0FBTSxXQUFOO0FBQXpCO0FBTEYsS0FEQztBQVNEOzs7OztTQXhCZ0NFLEcsU0FBQUEsRztTQUFLQyxLLFNBQUFBLEs7U0FDaENILEk7Ozs7O0FBQUFBLGE7OztBQUVKLGFBQUtHLE1BQU1ILElBQVgsRUFBa0I7QUFDaEJBLGlCQUFPRyxNQUFNSCxJQUFiO0FBQ0QsVUFGRCxNQUVPO0FBQ0xBLGlCQUFPLHlCQUFlSSxHQUFmLENBQW9CRixJQUFJRyxPQUFKLENBQWEsaUJBQWIsQ0FBcEIsQ0FBUDtBQUNEOzswQ0FFTSxFQUFFTCxVQUFGLEVBQVFNLE1BQU0sT0FBZCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FWVyxnQkFBTUMsUzs7QUEwQjFCOztBQUVELEtBQU1DLHdDQUFXLGdCQUFNQyxXQUFOLENBQW1CO0FBQUE7O0FBQ2xDQyxVQUFRLGtCQUFZO0FBQ25CLE9BQU1WLE9BQU8sb0JBQWtCLEtBQUtDLEtBQUwsQ0FBV0QsSUFBN0IsQ0FBYjs7QUFFQSxVQUNEO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixLQURGO0FBSUUsa0NBQUMsT0FBRCxJQUFTLE1BQU9BLElBQWhCLEdBSkY7QUFLRTtBQUFBO0FBQUEsT0FBTSxNQUFLLFdBQVg7QUFBeUJBLFVBQU0sV0FBTjtBQUF6QjtBQUxGLElBREM7QUFTRDtBQWJrQyxFQUFuQixDQUFYLENBQU47O0FBZ0JBUSxVQUFTRyxlQUFUO0FBQUEseUVBQTJCO0FBQUEsT0FBbUJULEdBQW5CLFNBQW1CQSxHQUFuQjtBQUFBLE9BQXdCQyxLQUF4QixTQUF3QkEsS0FBeEI7QUFBQSxPQUNyQkgsSUFEcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkEsV0FEcUI7OztBQUd6QixXQUFLRyxNQUFNSCxJQUFYLEVBQWtCO0FBQ25CQSxlQUFPRyxNQUFNSCxJQUFiO0FBQ0UsUUFGRCxNQUVPO0FBQ1JBLGVBQU8seUJBQWVJLEdBQWYsQ0FBb0JGLElBQUlHLE9BQUosQ0FBYSxpQkFBYixDQUFwQixDQUFQO0FBQ0U7O0FBUHdCLHlDQVNsQixFQUFFTCxVQUFGLEVBVGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBOzttQkFZZVEsUSIsImZpbGUiOiIxLmExN2Y3NzM4MTFhZWQ3MWEwNzExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBhY2NlcHRMYW5ndWFnZSBmcm9tIFwiYWNjZXB0LWxhbmd1YWdlXCI7XG5hY2NlcHRMYW5ndWFnZS5sYW5ndWFnZXMoIFsgXCJlbi1VU1wiLCBcImZyLUZSXCIgXSApO1xuXG5pbXBvcnQgbGFuZ3VhZ2VzRmFjdG9yeSBmcm9tIFwiLi4vc291cmNlL3NoYXJlZC9pMThuXCI7XG5cbmltcG9ydCBjcmVhdGVXZWxjb21lIGZyb20gXCIuLi9zb3VyY2Uvc2hhcmVkL2NvbXBvbmVudHMvV2VsY29tZVwiO1xuY29uc3QgV2VsY29tZSA9IGNyZWF0ZVdlbGNvbWUoIFJlYWN0ICk7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY2xhc3MgTWFjaGluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoIHsgcmVxLCBxdWVyeSB9ICkge1xuXHQgIGxldCBsYW5nO1xuXG5cdCAgaWYgKCBxdWVyeS5sYW5nICkge1xuXHQgICAgbGFuZyA9IHF1ZXJ5Lmxhbmc7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGxhbmcgPSBhY2NlcHRMYW5ndWFnZS5nZXQoIHJlcS5oZWFkZXJzWyBcImFjY2VwdC1sYW5ndWFnZVwiIF0gKTtcblx0ICB9XG5cdCAgXG5cdCAgcmV0dXJuIHsgbGFuZywgdHJ1YzogXCJmci1GUlwiIH07XG4gICAgfVxuXG5cdHJlbmRlciAoKSB7XG5cdCAgY29uc3QgbGFuZyA9IGxhbmd1YWdlc0ZhY3RvcnkoIHRoaXMucHJvcHMubGFuZyApO1xuXG5cdCAgcmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdCAgPEhlYWQ+XG5cdFx0ICAgIDx0aXRsZT5CaWxsbWU8L3RpdGxlPlxuXHRcdCAgPC9IZWFkPlxuXHRcdCAgPFdlbGNvbWUgbGFuZz17IGxhbmcgfSAvPlxuXHRcdCAgPExpbmsgaHJlZj1cIi90ZXN0UGFnZVwiPnsgbGFuZyggXCJUZXN0IHBhZ2VcIiApIH08L0xpbms+XG5cdFx0PC9kaXY+XG5cdCAgKTtcblx0fVxufTtcblxuY29uc3QgQ2hvdWV0dGUgPSBSZWFjdC5jcmVhdGVDbGFzcygge1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0ICBjb25zdCBsYW5nID0gbGFuZ3VhZ2VzRmFjdG9yeSggdGhpcy5wcm9wcy5sYW5nICk7XG5cblx0ICByZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0ICA8SGVhZD5cblx0XHQgICAgPHRpdGxlPkJpbGxtZTwvdGl0bGU+XG5cdFx0ICA8L0hlYWQ+XG5cdFx0ICA8V2VsY29tZSBsYW5nPXsgbGFuZyB9IC8+XG5cdFx0ICA8TGluayBocmVmPVwiL3Rlc3RQYWdlXCI+eyBsYW5nKCBcIlRlc3QgcGFnZVwiICkgfTwvTGluaz5cblx0XHQ8L2Rpdj5cblx0ICApO1xuXHR9XG59ICk7XG5cbkNob3VldHRlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICggeyByZXEsIHF1ZXJ5IH0gKSB7XG4gIGxldCBsYW5nO1xuXG4gIGlmICggcXVlcnkubGFuZyApIHtcblx0bGFuZyA9IHF1ZXJ5Lmxhbmc7XG4gIH0gZWxzZSB7XG5cdGxhbmcgPSBhY2NlcHRMYW5ndWFnZS5nZXQoIHJlcS5oZWFkZXJzWyBcImFjY2VwdC1sYW5ndWFnZVwiIF0gKTtcbiAgfVxuICBcbiAgcmV0dXJuIHsgbGFuZyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hvdWV0dGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DOi9kZXYvd29ya3NwYWNlL25vZGVibS9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=