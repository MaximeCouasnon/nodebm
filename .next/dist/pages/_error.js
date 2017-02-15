'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('C:\\dev\\workspace\\nodebm\\node_modules\\next\\node_modules\\react\\react.js');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _css = require('C:\\dev\\workspace\\nodebm\\node_modules\\next\\dist\\lib\\css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _components = {
  Error: {
    displayName: 'Error'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'C:/dev/workspace/nodebm/node_modules/next/dist/pages/_error.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Error = _wrapComponent('Error')(function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);
    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      var statusCode = this.props.statusCode;

      var title = statusCode === 404 ? 'This page could not be found' : statusCode ? 'Internal Server Error' : 'An unexpected error has occurred';

      return _react3.default.createElement('div', { className: styles.error }, _react3.default.createElement('div', { className: styles.text }, statusCode ? _react3.default.createElement('h1', { className: styles.h1 }, statusCode) : null, _react3.default.createElement('div', { className: styles.desc }, _react3.default.createElement('h2', { className: styles.h2 }, title, '.'))));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;

      var statusCode = res ? res.statusCode : xhr ? xhr.status : null;
      return { statusCode: statusCode };
    }
  }]);
  return Error;
}(_react3.default.Component));

exports.default = Error;

var styles = {
  error: (0, _css2.default)({
    color: '#000',
    background: '#fff',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    textAlign: 'center',
    paddingTop: '20%'
  }),

  desc: (0, _css2.default)({
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  }),

  h1: (0, _css2.default)({
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  }),

  h2: (0, _css2.default)({
    fontSize: '14px',
    fontWeight: 'normal',
    margin: 0,
    padding: 0
  })
};