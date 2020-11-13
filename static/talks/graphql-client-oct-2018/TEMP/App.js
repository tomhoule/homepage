(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/mdx-deck/dist/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mdx-deck/dist/Box.js":
/*!*******************************************!*\
  !*** ./node_modules/mdx-deck/dist/Box.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _styledSystem = __webpack_require__(/*! styled-system */ \"styled-system\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Box = _styledComponents2.default.div([], {\n  flex: 'none'\n}, function (props) {\n  return props.css;\n}, _styledSystem.width, _styledSystem.space, _styledSystem.color);\n\nexports.default = Box;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Box.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Carousel.js":
/*!************************************************!*\
  !*** ./node_modules/mdx-deck/dist/Carousel.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Carousel = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _lodash = __webpack_require__(/*! lodash.get */ \"lodash.get\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });\n  } else {\n    obj[key] = value;\n  }return obj;\n}\n\nvar themeable = function themeable(key) {\n  return function (props) {\n    return _defineProperty({}, key, (0, _lodash2.default)(props.theme, key, props[key]));\n  };\n};\n\nvar CarouselRoot = _styledComponents2.default.div([], {\n  overflowX: 'hidden',\n  width: '100%',\n  height: '100%',\n  '@media print': {\n    height: 'auto',\n    overflowX: 'visible'\n  }\n});\n\nvar CarouselInner = _styledComponents2.default.div([], {\n  display: 'flex',\n  width: '100%',\n  height: '100%',\n  '@media print': {\n    height: 'auto',\n    display: 'block'\n  },\n  transitionProperty: 'transform'\n}, themeable('transitionTimingFunction'), themeable('transitionDuration'), function (props) {\n  return {\n    transform: 'translateX(' + -100 * props.index + '%)'\n  };\n});\n\nCarouselInner.propTypes = {\n  index: _propTypes2.default.number.isRequired\n};\n\nCarouselInner.defaultProps = {\n  transitionTimingFunction: 'ease-out',\n  transitionDuration: '.3s'\n};\n\nvar Carousel = exports.Carousel = function Carousel(props) {\n  return _react2.default.createElement(CarouselRoot, null, _react2.default.createElement(CarouselInner, props));\n};\n\nexports.default = Carousel;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Carousel.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Code.js":
/*!********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Code.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _class, _temp;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _prismLight = __webpack_require__(/*! react-syntax-highlighter/prism-light */ \"react-syntax-highlighter/prism-light\");\n\nvar _prismLight2 = _interopRequireDefault(_prismLight);\n\nvar _atomDark = __webpack_require__(/*! react-syntax-highlighter/styles/prism/atom-dark */ \"react-syntax-highlighter/styles/prism/atom-dark\");\n\nvar _atomDark2 = _interopRequireDefault(_atomDark);\n\nvar _javascript = __webpack_require__(/*! react-syntax-highlighter/languages/prism/javascript */ \"react-syntax-highlighter/languages/prism/javascript\");\n\nvar _javascript2 = _interopRequireDefault(_javascript);\n\nvar _jsx = __webpack_require__(/*! react-syntax-highlighter/languages/prism/jsx */ \"react-syntax-highlighter/languages/prism/jsx\");\n\nvar _jsx2 = _interopRequireDefault(_jsx);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nexports.default = (0, _styledComponents.withTheme)((_temp = _class = function (_React$Component) {\n  _inherits(Code, _React$Component);\n\n  function Code(props) {\n    _classCallCheck(this, Code);\n\n    var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, props));\n\n    _this.getLangauge = function (lang) {\n      return lang ? lang.replace('language-', '') : 'javascripts';\n    };\n\n    (0, _prismLight.registerLanguage)('javascript', _javascript2.default);\n    (0, _prismLight.registerLanguage)('jsx', _jsx2.default);\n    if (props.theme && props.theme.prism && props.theme.prism.languages) {\n      var languages = props.theme.prism.languages;\n      Object.keys(languages).forEach(function (key) {\n        (0, _prismLight.registerLanguage)(key, languages[key]);\n      });\n    }\n    return _this;\n  }\n\n  _createClass(Code, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          className = _props.className,\n          children = _props.children,\n          theme = _props.theme;\n\n      var language = this.getLangauge(className);\n      var style = theme.prism && theme.prism.style ? theme.prism.style : _atomDark2.default;\n      return _react2.default.createElement(_prismLight2.default, { language: language, style: style }, children);\n    }\n  }]);\n\n  return Code;\n}(_react2.default.Component), _class.propTypes = {\n  children: _propTypes2.default.string,\n  className: _propTypes2.default.string,\n  theme: _propTypes2.default.object\n}, _temp));\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Code.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Dots.js":
/*!********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Dots.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Dots = undefined;\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _styledSystem = __webpack_require__(/*! styled-system */ \"styled-system\");\n\nvar _Flex = __webpack_require__(/*! ./Flex */ \"./node_modules/mdx-deck/dist/Flex.js\");\n\nvar _Flex2 = _interopRequireDefault(_Flex);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _objectWithoutProperties(obj, keys) {\n  var target = {};for (var i in obj) {\n    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];\n  }return target;\n}\n\nvar Dot = _styledComponents2.default.button([], {\n  appearance: 'none',\n  border: '4px solid transparent',\n  backgroundClip: 'padding-box',\n  borderRadius: '9999px',\n  width: '8px',\n  height: '8px',\n  color: 'inherit',\n  '&:focus': {\n    outline: 'none',\n    boxShadow: '0 0 0 1px'\n  }\n}, function (props) {\n  return {\n    opacity: props.active ? 0.5 : 0.125\n  };\n}, _styledSystem.space, _styledSystem.color);\nDot.propTypes = _extends({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes);\nDot.defaultProps = {\n  m: 0,\n  p: 1,\n  color: 'text',\n  bg: 'text'\n};\n\nvar Dots = function Dots(_ref) {\n  var index = _ref.index,\n      length = _ref.length,\n      _onClick = _ref.onClick,\n      props = _objectWithoutProperties(_ref, ['index', 'length', 'onClick']);\n\n  return _react2.default.createElement(_Flex2.default, props, Array.from({ length: length }).map(function (n, i) {\n    return _react2.default.createElement(Dot, {\n      key: i,\n      active: i <= index,\n      title: 'go to: ' + i,\n      onClick: function onClick(e) {\n        _onClick(i);\n      }\n    });\n  }));\n};\n\nexports.Dots = Dots;\nDots.propTypes = {\n  index: _propTypes2.default.number.isRequired,\n  length: _propTypes2.default.number.isRequired,\n  onClick: _propTypes2.default.func\n};\n\nexports.default = Dots;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Dots.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Flex.js":
/*!********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Flex.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styledSystem = __webpack_require__(/*! styled-system */ \"styled-system\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Flex = _styledComponents2.default.div([], {\n  display: 'flex',\n  justifyContent: 'center',\n  '@media print': {\n    display: 'none'\n  }\n}, function (props) {\n  return props.css;\n}, _styledSystem.space, _styledSystem.width, _styledSystem.color);\n\nFlex.propTypes = _extends({\n  css: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string])\n}, _styledSystem.space.propTypes, _styledSystem.width.propTypes, _styledSystem.color.propTypes);\n\nexports.default = Flex;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Flex.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/GoogleFonts.js":
/*!***************************************************!*\
  !*** ./node_modules/mdx-deck/dist/GoogleFonts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.GoogleFonts = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _webfont = __webpack_require__(/*! @compositor/webfont */ \"@compositor/webfont\");\n\nvar _webfont2 = _interopRequireDefault(_webfont);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar GoogleFonts = exports.GoogleFonts = (0, _styledComponents.withTheme)(function (_ref) {\n  var theme = _ref.theme;\n\n  var links = [_webfont2.default.getURL(theme.font || '', theme.weights), _webfont2.default.getURL(theme.monospace || '')].filter(Boolean);\n  if (!links.length) return false;\n  return _react2.default.createElement(_react2.default.Fragment, null, links.map(function (href, i) {\n    return _react2.default.createElement('link', {\n      key: i,\n      href: href,\n      rel: 'stylesheet'\n    });\n  }));\n});\n\nexports.default = GoogleFonts;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/GoogleFonts.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Grid.js":
/*!********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Grid.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Flex = __webpack_require__(/*! ./Flex */ \"./node_modules/mdx-deck/dist/Flex.js\");\n\nvar _Flex2 = _interopRequireDefault(_Flex);\n\nvar _Box = __webpack_require__(/*! ./Box */ \"./node_modules/mdx-deck/dist/Box.js\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nvar _Slide = __webpack_require__(/*! ./Slide */ \"./node_modules/mdx-deck/dist/Slide.js\");\n\nvar _Slide2 = _interopRequireDefault(_Slide);\n\nvar _Zoom = __webpack_require__(/*! ./Zoom */ \"./node_modules/mdx-deck/dist/Zoom.js\");\n\nvar _Zoom2 = _interopRequireDefault(_Zoom);\n\nvar _Root = __webpack_require__(/*! ./Root */ \"./node_modules/mdx-deck/dist/Root.js\");\n\nvar _Root2 = _interopRequireDefault(_Root);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./node_modules/mdx-deck/dist/constants.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.default = function (_ref) {\n  var _ref$slides = _ref.slides,\n      slides = _ref$slides === undefined ? [] : _ref$slides,\n      update = _ref.update;\n  return _react2.default.createElement(_Box2.default, { bg: 'black', css: { minHeight: '100vh' } }, _react2.default.createElement(_Flex2.default, {\n    css: {\n      justifyContent: 'flex-start',\n      flexWrap: 'wrap'\n    } }, slides.map(function (Component, i) {\n    return _react2.default.createElement(_Box2.default, { key: i, css: { cursor: 'pointer' } }, _react2.default.createElement('div', { role: 'link',\n      href: '#' + i,\n      onClick: function onClick(e) {\n        update({\n          index: i,\n          mode: _constants.modes.normal\n        });\n      } }, _react2.default.createElement(_Zoom2.default, { zoom: 1 / 4 }, _react2.default.createElement(_Root2.default, { width: '100vw', height: '100vh' }, _react2.default.createElement(_Slide2.default, { index: i }, _react2.default.createElement(Component, null))))));\n  })));\n};\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Grid.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Head.js":
/*!********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Head.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Head = exports.HeadProvider = exports.Context = undefined;\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _toConsumableArray(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }return arr2;\n  } else {\n    return Array.from(arr);\n  }\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar noop = function noop() {\n  console.warn('Missing HeadProvider');\n};\n\nvar Context = exports.Context = _react2.default.createContext({\n  tags: [],\n  push: noop\n});\n\nvar HeadProvider = exports.HeadProvider = function (_React$Component) {\n  _inherits(HeadProvider, _React$Component);\n\n  function HeadProvider() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, HeadProvider);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeadProvider.__proto__ || Object.getPrototypeOf(HeadProvider)).call.apply(_ref, [this].concat(args))), _this), _this.push = function (elements) {\n      var _this$props$tags;\n\n      (_this$props$tags = _this.props.tags).push.apply(_this$props$tags, _toConsumableArray(elements));\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(HeadProvider, [{\n    key: 'render',\n    value: function render() {\n      var context = _extends({}, this.props, {\n        push: this.push\n      });\n\n      return _react2.default.createElement(Context.Provider, { value: context }, this.props.children);\n    }\n  }]);\n\n  return HeadProvider;\n}(_react2.default.Component);\n\nHeadProvider.defaultProps = {\n  tags: []\n};\n\nvar Head = exports.Head = function (_React$Component2) {\n  _inherits(Head, _React$Component2);\n\n  function Head() {\n    var _ref2;\n\n    var _temp2, _this2, _ret2;\n\n    _classCallCheck(this, Head);\n\n    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = Head.__proto__ || Object.getPrototypeOf(Head)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {\n      didMount: false\n    }, _this2.rehydrate = function () {\n      var children = _react2.default.Children.toArray(_this2.props.children);\n      var nodes = [].concat(_toConsumableArray(document.head.querySelectorAll('[data-head]')));\n\n      nodes.forEach(function (node) {\n        node.remove();\n      });\n      children.forEach(function (child) {\n        if (child.type === 'title') {\n          var title = document.head.querySelector('title');\n          if (title) title.remove();\n        }\n        if (child.type === 'meta') {\n          var name = child.props.name;\n\n          var meta = void 0;\n          if (name) meta = document.head.querySelector('meta[name=\"' + name + '\"]');\n          if (meta) meta.remove();\n        }\n      });\n\n      _this2.setState({\n        didMount: true\n      });\n    }, _temp2), _possibleConstructorReturn(_this2, _ret2);\n  }\n\n  _createClass(Head, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.rehydrate();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _children = _react2.default.Children.toArray(this.props.children).map(function (child) {\n        return _react2.default.cloneElement(child, {\n          'data-head': true\n        });\n      });\n\n      var didMount = this.state.didMount;\n\n      if (!didMount) {\n        return _react2.default.createElement(Context.Consumer, {\n          children: function children(_ref3) {\n            var push = _ref3.push;\n\n            push(_children);\n            return false;\n          }\n        });\n      }\n\n      return (0, _reactDom.createPortal)(_children, document.head);\n    }\n  }]);\n\n  return Head;\n}(_react2.default.Component);\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Head.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Mono.js":
/*!********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Mono.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Box = __webpack_require__(/*! ./Box */ \"./node_modules/mdx-deck/dist/Box.js\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.default = function (props) {\n  return _react2.default.createElement(_Box2.default, _extends({}, props, {\n    css: {\n      fontFamily: 'Menlo, monospace',\n      whiteSpace: 'pre-wrap'\n    }\n  }));\n};\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Mono.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Notes.js":
/*!*********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Notes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _context = __webpack_require__(/*! ./context */ \"./node_modules/mdx-deck/dist/context.js\");\n\nvar _updaters = __webpack_require__(/*! ./updaters */ \"./node_modules/mdx-deck/dist/updaters.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nexports.default = (0, _context.withDeck)(function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    var deck = props.deck,\n        children = props.children;\n\n    if (typeof deck.index === 'undefined') return _possibleConstructorReturn(_this);\n    deck.update((0, _updaters.setNotes)(deck.index, children));\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return false;\n    }\n  }]);\n\n  return _class;\n}(_react2.default.Component));\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Notes.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Overview.js":
/*!************************************************!*\
  !*** ./node_modules/mdx-deck/dist/Overview.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Overview = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _lodash = __webpack_require__(/*! lodash.get */ \"lodash.get\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _Box = __webpack_require__(/*! ./Box */ \"./node_modules/mdx-deck/dist/Box.js\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nvar _Flex = __webpack_require__(/*! ./Flex */ \"./node_modules/mdx-deck/dist/Flex.js\");\n\nvar _Flex2 = _interopRequireDefault(_Flex);\n\nvar _Zoom = __webpack_require__(/*! ./Zoom */ \"./node_modules/mdx-deck/dist/Zoom.js\");\n\nvar _Zoom2 = _interopRequireDefault(_Zoom);\n\nvar _Slide = __webpack_require__(/*! ./Slide */ \"./node_modules/mdx-deck/dist/Slide.js\");\n\nvar _Slide2 = _interopRequireDefault(_Slide);\n\nvar _Root = __webpack_require__(/*! ./Root */ \"./node_modules/mdx-deck/dist/Root.js\");\n\nvar _Root2 = _interopRequireDefault(_Root);\n\nvar _Mono = __webpack_require__(/*! ./Mono */ \"./node_modules/mdx-deck/dist/Mono.js\");\n\nvar _Mono2 = _interopRequireDefault(_Mono);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _objectWithoutProperties(obj, keys) {\n  var target = {};for (var i in obj) {\n    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];\n  }return target;\n}\n\nvar Overview = function Overview(_ref) {\n  var index = _ref.index,\n      length = _ref.length,\n      _ref$slides = _ref.slides,\n      slides = _ref$slides === undefined ? [] : _ref$slides,\n      mode = _ref.mode,\n      _ref$metadata = _ref.metadata,\n      metadata = _ref$metadata === undefined ? {} : _ref$metadata,\n      update = _ref.update,\n      step = _ref.step,\n      props = _objectWithoutProperties(_ref, ['index', 'length', 'slides', 'mode', 'metadata', 'update', 'step']);\n\n  var notes = (0, _lodash2.default)(metadata, index + '.notes');\n\n  return _react2.default.createElement(_Flex2.default, {\n    color: 'white',\n    bg: 'black',\n    css: {\n      alignItems: 'flex-start',\n      height: '100vh'\n    } }, _react2.default.createElement(_Box2.default, {\n    mr: 'auto',\n    px: 2,\n    py: 3,\n    css: {\n      flex: 'none',\n      height: '100vh',\n      overflowY: 'auto'\n    } }, slides.map(function (Component, i) {\n    return _react2.default.createElement(_Box2.default, {\n      key: i,\n      role: 'link',\n      p: 1,\n      style: {\n        outline: i === index ? '1px solid #07c' : null\n      },\n      css: {\n        cursor: 'pointer'\n      },\n      onClick: function onClick(e) {\n        update({ index: i });\n      } }, _react2.default.createElement(_Zoom2.default, { zoom: 1 / 6 }, _react2.default.createElement(_Root2.default, props, _react2.default.createElement(_Slide2.default, null, _react2.default.createElement(Component, null)))));\n  })), _react2.default.createElement(_Box2.default, { mx: 'auto', py: 4, width: 2 / 3 }, _react2.default.createElement(_Zoom2.default, { zoom: 2 / 3 }, _react2.default.createElement(_Root2.default, props, props.children)), _react2.default.createElement(_Flex2.default, null, _react2.default.createElement(_Box2.default, { ml: 'auto', py: 2 }, index + 1, '/', length)), _react2.default.createElement(_Box2.default, { mt: 3 }, notes)));\n};\n\nexports.Overview = Overview;\nOverview.propTypes = {\n  index: _propTypes2.default.number.isRequired,\n  length: _propTypes2.default.number.isRequired,\n  update: _propTypes2.default.func.isRequired,\n  step: _propTypes2.default.number.isRequired,\n  slides: _propTypes2.default.array,\n  mode: _propTypes2.default.string,\n  notes: _propTypes2.default.object\n};\n\nexports.default = Overview;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Overview.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Presenter.js":
/*!*************************************************!*\
  !*** ./node_modules/mdx-deck/dist/Presenter.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Presenter = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _lodash = __webpack_require__(/*! lodash.get */ \"lodash.get\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _Box = __webpack_require__(/*! ./Box */ \"./node_modules/mdx-deck/dist/Box.js\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nvar _Flex = __webpack_require__(/*! ./Flex */ \"./node_modules/mdx-deck/dist/Flex.js\");\n\nvar _Flex2 = _interopRequireDefault(_Flex);\n\nvar _Zoom = __webpack_require__(/*! ./Zoom */ \"./node_modules/mdx-deck/dist/Zoom.js\");\n\nvar _Zoom2 = _interopRequireDefault(_Zoom);\n\nvar _Slide = __webpack_require__(/*! ./Slide */ \"./node_modules/mdx-deck/dist/Slide.js\");\n\nvar _Slide2 = _interopRequireDefault(_Slide);\n\nvar _Root = __webpack_require__(/*! ./Root */ \"./node_modules/mdx-deck/dist/Root.js\");\n\nvar _Root2 = _interopRequireDefault(_Root);\n\nvar _Timer = __webpack_require__(/*! ./Timer */ \"./node_modules/mdx-deck/dist/Timer.js\");\n\nvar _Timer2 = _interopRequireDefault(_Timer);\n\nvar _Mono = __webpack_require__(/*! ./Mono */ \"./node_modules/mdx-deck/dist/Mono.js\");\n\nvar _Mono2 = _interopRequireDefault(_Mono);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _objectWithoutProperties(obj, keys) {\n  var target = {};for (var i in obj) {\n    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];\n  }return target;\n}\n\nvar Presenter = function Presenter(_ref) {\n  var index = _ref.index,\n      length = _ref.length,\n      _ref$slides = _ref.slides,\n      slides = _ref$slides === undefined ? [] : _ref$slides,\n      mode = _ref.mode,\n      _ref$metadata = _ref.metadata,\n      metadata = _ref$metadata === undefined ? {} : _ref$metadata,\n      update = _ref.update,\n      step = _ref.step,\n      props = _objectWithoutProperties(_ref, ['index', 'length', 'slides', 'mode', 'metadata', 'update', 'step']);\n\n  var Next = slides[index + 1];\n  var notes = (0, _lodash2.default)(metadata, index + '.notes');\n\n  return _react2.default.createElement(_Flex2.default, {\n    color: 'white', bg: 'black',\n    css: {\n      flexDirection: 'column',\n      height: '100vh'\n    }\n  }, _react2.default.createElement(_Flex2.default, { my: 'auto' }, _react2.default.createElement(_Box2.default, {\n    mx: 'auto',\n    width: 5 / 8,\n    css: {\n      border: '1px solid rgba(128, 128, 128, 0.25)'\n    } }, _react2.default.createElement(_Zoom2.default, { zoom: 5 / 8 }, _react2.default.createElement(_Root2.default, props, props.children))), _react2.default.createElement(_Flex2.default, {\n    width: 1 / 4,\n    mx: 'auto',\n    css: {\n      flex: 'none',\n      flexDirection: 'column'\n    } }, _react2.default.createElement(_Box2.default, {\n    mx: 'auto',\n    css: {\n      border: '1px solid rgba(128, 128, 128, 0.25)'\n    } }, _react2.default.createElement(_Zoom2.default, { zoom: 1 / 4 }, _react2.default.createElement(_Root2.default, props, Next && _react2.default.createElement(_Slide2.default, null, _react2.default.createElement(Next, null))))), _react2.default.createElement(_Box2.default, {\n    py: 3,\n    css: {\n      flex: 'auto'\n    } }, notes))), _react2.default.createElement(_Flex2.default, { mt: 'auto', px: 3, py: 3 }, _react2.default.createElement(_Mono2.default, null, 'Slide ', index + 1, ' of ', length), _react2.default.createElement(_Box2.default, { mx: 'auto' }), _react2.default.createElement(_Timer2.default, null)));\n};\n\nexports.Presenter = Presenter;\nPresenter.propTypes = {\n  index: _propTypes2.default.number.isRequired,\n  length: _propTypes2.default.number.isRequired,\n  update: _propTypes2.default.func.isRequired,\n  step: _propTypes2.default.number.isRequired,\n  slides: _propTypes2.default.array,\n  mode: _propTypes2.default.string,\n  metadata: _propTypes2.default.object\n};\n\nexports.default = Presenter;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Presenter.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Provider.js":
/*!************************************************!*\
  !*** ./node_modules/mdx-deck/dist/Provider.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _Dots = __webpack_require__(/*! ./Dots */ \"./node_modules/mdx-deck/dist/Dots.js\");\n\nvar _Dots2 = _interopRequireDefault(_Dots);\n\nvar _updaters = __webpack_require__(/*! ./updaters */ \"./node_modules/mdx-deck/dist/updaters.js\");\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./node_modules/mdx-deck/dist/constants.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Bottom = _styledComponents2.default.div([], {\n  position: 'fixed',\n  left: 0,\n  right: 0,\n  bottom: 0\n});\n\nvar Button = _styledComponents2.default.div([], {\n  cursor: 'pointer',\n  width: '64px',\n  height: '100vh'\n});\nvar Previous = (0, _styledComponents2.default)(Button)([], {\n  position: 'fixed',\n  top: 0,\n  left: 0,\n  bottom: 0\n});\nvar Next = (0, _styledComponents2.default)(Button)([], {\n  position: 'fixed',\n  top: 0,\n  right: 0,\n  bottom: 0\n});\n\nvar Provider = function (_React$Component) {\n  _inherits(Provider, _React$Component);\n\n  function Provider() {\n    _classCallCheck(this, Provider);\n\n    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));\n  }\n\n  _createClass(Provider, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          mode = _props.mode,\n          index = _props.index,\n          length = _props.length,\n          update = _props.update;\n\n      if (mode !== _constants.modes.normal) {\n        return _react2.default.createElement(_react2.default.Fragment, null, children);\n      }\n\n      return _react2.default.createElement(_react2.default.Fragment, null, children, _react2.default.createElement(Bottom, null, _react2.default.createElement(_Dots2.default, {\n        mx: 'auto',\n        mb: 2,\n        index: index,\n        length: length,\n        onClick: function onClick(index) {\n          update({ index: index });\n        }\n      })), _react2.default.createElement(Previous, {\n        role: 'button',\n        title: 'Previous Slide',\n        onClick: function onClick(e) {\n          update(_updaters.previous);\n        }\n      }), _react2.default.createElement(Next, {\n        role: 'button',\n        title: 'Next Slide',\n        onClick: function onClick(e) {\n          update(_updaters.next);\n        }\n      }));\n    }\n  }]);\n\n  return Provider;\n}(_react2.default.Component);\n\nexports.default = Provider;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Provider.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Root.js":
/*!********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Root.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Root = undefined;\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _styledSystem = __webpack_require__(/*! styled-system */ \"styled-system\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Root = exports.Root = _styledComponents2.default.div([], {\n  '@media print': {\n    fontSize: '24px',\n    height: 'auto'\n  }\n}, function (props) {\n  return props.theme.font ? {\n    fontFamily: props.theme.font\n  } : null;\n}, function (props) {\n  return props.theme.css;\n}, _styledSystem.width, _styledSystem.height, _styledSystem.color);\n\nRoot.propTypes = _extends({}, _styledSystem.width.propTypes, _styledSystem.height.propTypes, _styledSystem.color.propTypess);\n\nRoot.defaultProps = {\n  color: 'text',\n  bg: 'background'\n};\n\nexports.default = Root;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Root.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Slide.js":
/*!*********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Slide.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _styledSystem = __webpack_require__(/*! styled-system */ \"styled-system\");\n\nvar _context = __webpack_require__(/*! ./context */ \"./node_modules/mdx-deck/dist/context.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _objectWithoutProperties(obj, keys) {\n  var target = {};for (var i in obj) {\n    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];\n  }return target;\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Root = _styledComponents2.default.div([], {\n  flex: 'none',\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n  flexDirection: 'column',\n  overflow: 'hidden',\n  width: '100%',\n  height: '100%',\n  '@media print': {\n    width: '100vw',\n    height: '100vh',\n    pageBreakAfter: 'always',\n    pageBreakInside: 'avoid',\n    WebkitPrintColorAdjust: 'exact'\n  }\n}, _styledSystem.space, _styledSystem.color);\n\nvar Slide = function (_React$Component) {\n  _inherits(Slide, _React$Component);\n\n  function Slide() {\n    _classCallCheck(this, Slide);\n\n    return _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).apply(this, arguments));\n  }\n\n  _createClass(Slide, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          index = _props.index,\n          color = _props.color,\n          bg = _props.bg,\n          props = _objectWithoutProperties(_props, ['index', 'color', 'bg']);\n\n      return _react2.default.createElement(_context.Context.Provider, { value: this.props }, _react2.default.createElement(Root, {\n        color: color,\n        bg: bg,\n        px: [4, 5, 6] }, props.children));\n    }\n  }]);\n\n  return Slide;\n}(_react2.default.Component);\n\nSlide.defaultProps = {\n  addNotes: function addNotes() {},\n  update: function update() {}\n};\n\nSlide.propTypes = _extends({\n  index: _propTypes2.default.number\n}, _styledSystem.space.propTypes, _styledSystem.color.propTypes);\n\nexports.default = Slide;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Slide.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/SlideDeck.js":
/*!*************************************************!*\
  !*** ./node_modules/mdx-deck/dist/SlideDeck.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SlideDeck = undefined;\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _slicedToArray = function () {\n  function sliceIterator(arr, i) {\n    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {\n      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n        _arr.push(_s.value);if (i && _arr.length === i) break;\n      }\n    } catch (err) {\n      _d = true;_e = err;\n    } finally {\n      try {\n        if (!_n && _i[\"return\"]) _i[\"return\"]();\n      } finally {\n        if (_d) throw _e;\n      }\n    }return _arr;\n  }return function (arr, i) {\n    if (Array.isArray(arr)) {\n      return arr;\n    } else if (Symbol.iterator in Object(arr)) {\n      return sliceIterator(arr, i);\n    } else {\n      throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n    }\n  };\n}();\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _tag = __webpack_require__(/*! @mdx-js/tag */ \"@mdx-js/tag\");\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _lodash = __webpack_require__(/*! lodash.debounce */ \"lodash.debounce\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _querystring = __webpack_require__(/*! querystring */ \"querystring\");\n\nvar _querystring2 = _interopRequireDefault(_querystring);\n\nvar _reactSwipeable = __webpack_require__(/*! react-swipeable */ \"react-swipeable\");\n\nvar _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);\n\nvar _Head = __webpack_require__(/*! ./Head */ \"./node_modules/mdx-deck/dist/Head.js\");\n\nvar _Provider = __webpack_require__(/*! ./Provider */ \"./node_modules/mdx-deck/dist/Provider.js\");\n\nvar _Provider2 = _interopRequireDefault(_Provider);\n\nvar _Carousel = __webpack_require__(/*! ./Carousel */ \"./node_modules/mdx-deck/dist/Carousel.js\");\n\nvar _Carousel2 = _interopRequireDefault(_Carousel);\n\nvar _Slide = __webpack_require__(/*! ./Slide */ \"./node_modules/mdx-deck/dist/Slide.js\");\n\nvar _Slide2 = _interopRequireDefault(_Slide);\n\nvar _Dots = __webpack_require__(/*! ./Dots */ \"./node_modules/mdx-deck/dist/Dots.js\");\n\nvar _Dots2 = _interopRequireDefault(_Dots);\n\nvar _Root = __webpack_require__(/*! ./Root */ \"./node_modules/mdx-deck/dist/Root.js\");\n\nvar _Root2 = _interopRequireDefault(_Root);\n\nvar _Presenter = __webpack_require__(/*! ./Presenter */ \"./node_modules/mdx-deck/dist/Presenter.js\");\n\nvar _Presenter2 = _interopRequireDefault(_Presenter);\n\nvar _Overview = __webpack_require__(/*! ./Overview */ \"./node_modules/mdx-deck/dist/Overview.js\");\n\nvar _Overview2 = _interopRequireDefault(_Overview);\n\nvar _Grid = __webpack_require__(/*! ./Grid */ \"./node_modules/mdx-deck/dist/Grid.js\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _GoogleFonts = __webpack_require__(/*! ./GoogleFonts */ \"./node_modules/mdx-deck/dist/GoogleFonts.js\");\n\nvar _GoogleFonts2 = _interopRequireDefault(_GoogleFonts);\n\nvar _themes = __webpack_require__(/*! ./themes */ \"./node_modules/mdx-deck/dist/themes/index.js\");\n\nvar _themes2 = _interopRequireDefault(_themes);\n\nvar _components = __webpack_require__(/*! ./components */ \"./node_modules/mdx-deck/dist/components.js\");\n\nvar _components2 = _interopRequireDefault(_components);\n\nvar _updaters = __webpack_require__(/*! ./updaters */ \"./node_modules/mdx-deck/dist/updaters.js\");\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./node_modules/mdx-deck/dist/constants.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar SlideDeck = exports.SlideDeck = function (_React$Component) {\n  _inherits(SlideDeck, _React$Component);\n\n  function SlideDeck() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, SlideDeck);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlideDeck.__proto__ || Object.getPrototypeOf(SlideDeck)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      length: _this.props.slides.length,\n      index: 0,\n      mode: _constants.modes.normal,\n      // contextual metadata for slides\n      metadata: {},\n      step: 0\n    }, _this.update = function (fn) {\n      return _this.setState(fn);\n    }, _this.handleKeyDown = function (e) {\n      if (document.activeElement.tagName !== 'BODY' || _this.props.ignoreKeyEvents) {\n        return;\n      }\n\n      if (e.metaKey || e.ctrlKey) return;\n      var alt = e.altKey && !e.shiftKey;\n      var shift = e.shiftKey && !e.altKey;\n\n      if (alt) {\n        switch (e.keyCode) {\n          case _constants.keys.p:\n            _this.update((0, _updaters.toggleMode)('presenter'));\n            break;\n          case _constants.keys.o:\n            _this.update((0, _updaters.toggleMode)('overview'));\n            break;\n          case _constants.keys.g:\n            _this.update((0, _updaters.toggleMode)('grid'));\n            break;\n        }\n      } else if (shift) {\n        switch (e.keyCode) {\n          case _constants.keys.right:\n            e.preventDefault();\n            _this.update(_updaters.incrementIndex);\n            break;\n          case _constants.keys.left:\n            e.preventDefault();\n            _this.update(_updaters.decrementIndex);\n            break;\n        }\n      } else if (!alt && !shift) {\n        switch (e.keyCode) {\n          case _constants.keys.right:\n          case _constants.keys.space:\n            e.preventDefault();\n            _this.update(_updaters.next);\n            break;\n          case _constants.keys.left:\n            e.preventDefault();\n            _this.update(_updaters.previous);\n            break;\n          // shim for old Appear API\n          case _constants.keys.up:\n            _this.update(_updaters.decrementStep);\n            break;\n          case _constants.keys.down:\n            _this.update(_updaters.incrementStep);\n            break;\n        }\n      }\n    }, _this.handleHashChange = function (e) {\n      _this.isHashChange = true;\n      _this.hashToState();\n    }, _this.hashToState = function () {\n      var hash = window.location.hash;\n\n      var _hash$replace$split = hash.replace(/^#/, '').split('.'),\n          _hash$replace$split2 = _slicedToArray(_hash$replace$split, 2),\n          index_ = _hash$replace$split2[0],\n          step_ = _hash$replace$split2[1];\n\n      var index = parseInt(index_, 10);\n      var step = parseInt(step_, 10);\n      if (isNaN(index)) return;\n      _this.setState({ index: index, step: isNaN(step) ? 0 : step });\n    }, _this.getMode = function () {\n      var _querystring$parse = _querystring2.default.parse(window.location.search.replace(/^\\?/, '')),\n          mode = _querystring$parse.mode;\n\n      _this.setState({\n        mode: _constants.modes[mode] || _constants.modes.normal\n      });\n    }, _this.handleStorageChange = function (e) {\n      if (e.key === _constants.MDX_SLIDE_INDEX) {\n        var index = parseInt(e.newValue, 10);\n        _this.setState({ index: index });\n      } else if (e.key === _constants.MDX_SLIDE_STEP, 10) {\n        var step = parseInt(e.newValue, 10);\n        _this.setState({ step: step });\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(SlideDeck, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      document.body.addEventListener('keydown', this.handleKeyDown);\n      window.addEventListener('hashchange', this.handleHashChange);\n      window.addEventListener('storage', this.handleStorageChange);\n      this.hashToState();\n      this.getMode();\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      document.body.removeEventListener('keydown', this.handleKeyDown);\n      window.removeEventListener('hashchange', this.handleHashChange);\n      window.removeEventListener('storage', this.handleStorageChange);\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      if (this.isHashChange) {\n        this.isHashChange = false;\n        return;\n      }\n      var _state = this.state,\n          index = _state.index,\n          mode = _state.mode,\n          step = _state.step;\n\n      var query = '';\n      if (mode && mode !== _constants.modes.normal) {\n        query += '?' + _querystring2.default.stringify({\n          mode: (mode || '').toLowerCase()\n        });\n      } else if (mode === _constants.modes.normal) {\n        query += window.location.pathname;\n      }\n      var step_ = step !== 0 ? '.' + step : '';\n      history.pushState(null, null, query + '#' + index + step_);\n      localStorage.setItem(_constants.MDX_SLIDE_INDEX, index);\n      localStorage.setItem(_constants.MDX_SLIDE_STEP, step);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          slides = _props.slides,\n          theme = _props.theme,\n          propsComponents = _props.components,\n          PropsProvider = _props.Provider,\n          width = _props.width,\n          height = _props.height,\n          headTags = _props.headTags;\n      var _state2 = this.state,\n          index = _state2.index,\n          mode = _state2.mode,\n          metadata = _state2.metadata;\n      var _theme$components = theme.components,\n          components = _theme$components === undefined ? propsComponents : _theme$components,\n          _theme$Provider = theme.Provider,\n          Provider = _theme$Provider === undefined ? PropsProvider : _theme$Provider;\n\n      var Wrapper = _Root2.default;\n      if (mode === _constants.modes.presenter) {\n        Wrapper = _Presenter2.default;\n      } else if (mode === _constants.modes.overview) {\n        Wrapper = _Overview2.default;\n      }\n\n      var context = _extends({}, this.state, {\n        slides: slides,\n        update: this.update\n      });\n\n      return _react2.default.createElement(_Head.HeadProvider, { tags: headTags }, _react2.default.createElement(_styledComponents.ThemeProvider, { theme: theme }, _react2.default.createElement(_tag.MDXProvider, {\n        components: _extends({}, _components2.default, components) }, _react2.default.createElement(Provider, _extends({}, this.state, { update: this.update }), mode === _constants.modes.grid ? _react2.default.createElement(_Grid2.default, {\n        slides: slides,\n        update: this.update\n      }) : _react2.default.createElement(_reactSwipeable2.default, {\n        onSwipedLeft: function onSwipedLeft() {\n          return _this2.update(_updaters.previous);\n        },\n        onSwipedRight: function onSwipedRight() {\n          return _this2.update(_updaters.next);\n        } }, _react2.default.createElement(Wrapper, _extends({}, this.state, {\n        slides: slides,\n        width: width,\n        height: height,\n        update: this.update }), _react2.default.createElement(_GoogleFonts2.default, null), _react2.default.createElement(_Carousel2.default, { index: index }, slides.map(function (Component, i) {\n        return _react2.default.createElement(_Slide2.default, _extends({\n          key: i,\n          id: 'slide-' + i\n        }, context, {\n          index: i,\n          className: 'Slide',\n          active: i === index,\n          metadata: metadata[i] }), _react2.default.createElement(Component, null));\n      }))))))));\n    }\n  }]);\n\n  return SlideDeck;\n}(_react2.default.Component);\n\nSlideDeck.propTypes = {\n  slides: _propTypes2.default.array.isRequired,\n  theme: _propTypes2.default.object,\n  components: _propTypes2.default.object,\n  Provider: _propTypes2.default.func,\n  width: _propTypes2.default.string,\n  height: _propTypes2.default.string,\n  ignoreKeyEvents: _propTypes2.default.bool,\n  headTags: _propTypes2.default.array.isRequired\n};\nSlideDeck.defaultProps = {\n  slides: [],\n  theme: _themes2.default,\n  components: {},\n  Provider: _Provider2.default,\n  width: '100vw',\n  height: '100vh',\n  ignoreKeyEvents: false,\n  headTags: []\n};\nexports.default = SlideDeck;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/SlideDeck.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Timer.js":
/*!*********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Timer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _hhmmss = __webpack_require__(/*! hhmmss */ \"hhmmss\");\n\nvar _hhmmss2 = _interopRequireDefault(_hhmmss);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _styledSystem = __webpack_require__(/*! styled-system */ \"styled-system\");\n\nvar _Flex = __webpack_require__(/*! ./Flex */ \"./node_modules/mdx-deck/dist/Flex.js\");\n\nvar _Flex2 = _interopRequireDefault(_Flex);\n\nvar _Box = __webpack_require__(/*! ./Box */ \"./node_modules/mdx-deck/dist/Box.js\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nvar _Mono = __webpack_require__(/*! ./Mono */ \"./node_modules/mdx-deck/dist/Mono.js\");\n\nvar _Mono2 = _interopRequireDefault(_Mono);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Button = _styledComponents2.default.button([], {\n  appearance: 'none',\n  fontFamily: 'inherit',\n  fontSize: '12px',\n  fontWeight: 'bold',\n  borderRadius: '4px',\n  border: 'none'\n}, _styledSystem.space, _styledSystem.color);\n\nButton.propTypes = _extends({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes);\n\nButton.defaultProps = {\n  m: 0,\n  px: 2,\n  py: 1,\n  color: 'white',\n  bg: '#333'\n};\n\nvar Timer = function (_React$Component) {\n  _inherits(Timer, _React$Component);\n\n  function Timer() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Timer);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timer.__proto__ || Object.getPrototypeOf(Timer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      on: false,\n      time: new Date().toLocaleTimeString(),\n      seconds: 0\n    }, _this.toggle = function () {\n      _this.setState(function (state) {\n        return { on: !state.on };\n      });\n    }, _this.reset = function () {\n      _this.setState({ seconds: 0 });\n    }, _this.tick = function () {\n      var now = new Date();\n      _this.setState(function (state) {\n        return {\n          time: now.toLocaleTimeString(),\n          seconds: state.on ? state.seconds + 1 : state.seconds\n        };\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Timer, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.timer = setInterval(this.tick, 1000);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      if (!this.timer) return;\n      clearInterval(this.timer);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          time = _state.time,\n          seconds = _state.seconds,\n          on = _state.on;\n\n      var elapsed = (0, _hhmmss2.default)(seconds);\n\n      return _react2.default.createElement(_Flex2.default, { css: { alignItems: 'center' } }, !on && seconds > 0 && _react2.default.createElement(Button, { mr: 1, onClick: this.reset }, 'reset'), _react2.default.createElement(Button, {\n        bg: on ? '#600' : '#060',\n        onClick: this.toggle }, on ? 'stop' : 'start'), _react2.default.createElement(_Mono2.default, { px: 2 }, elapsed, ' |'), _react2.default.createElement(_Mono2.default, null, time));\n    }\n  }]);\n\n  return Timer;\n}(_react2.default.Component);\n\nexports.default = Timer;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Timer.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/Zoom.js":
/*!********************************************!*\
  !*** ./node_modules/mdx-deck/dist/Zoom.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _objectWithoutProperties(obj, keys) {\n  var target = {};for (var i in obj) {\n    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];\n  }return target;\n}\n\nvar ZoomRoot = _styledComponents2.default.div([], {\n  backgroundColor: 'white'\n}, function (props) {\n  return {\n    width: 100 * props.zoom + 'vw',\n    height: 100 * props.zoom + 'vh'\n  };\n});\n\nZoomRoot.propTypes = {\n  zoom: _propTypes2.default.number.isRequired\n};\n\nvar ZoomInner = _styledComponents2.default.div([], function (props) {\n  return {\n    transformOrigin: '0 0',\n    transform: 'scale(' + props.zoom + ')'\n  };\n});\n\nZoomInner.propTypes = {\n  zoom: _propTypes2.default.number.isRequired\n};\n\nvar Zoom = function Zoom(_ref) {\n  var zoom = _ref.zoom,\n      props = _objectWithoutProperties(_ref, ['zoom']);\n\n  return _react2.default.createElement(ZoomRoot, { zoom: zoom }, _react2.default.createElement(ZoomInner, _extends({ zoom: zoom }, props)));\n};\n\nZoom.propTypes = {\n  zoom: _propTypes2.default.number\n};\n\nZoom.defaultProps = {\n  zoom: 1\n};\n\nexports.default = Zoom;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/Zoom.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/components.js":
/*!**************************************************!*\
  !*** ./node_modules/mdx-deck/dist/components.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _styledSystem = __webpack_require__(/*! styled-system */ \"styled-system\");\n\nvar _Notes = __webpack_require__(/*! ./Notes */ \"./node_modules/mdx-deck/dist/Notes.js\");\n\nvar _Notes2 = _interopRequireDefault(_Notes);\n\nvar _Mono = __webpack_require__(/*! ./Mono */ \"./node_modules/mdx-deck/dist/Mono.js\");\n\nvar _Mono2 = _interopRequireDefault(_Mono);\n\nvar _Code = __webpack_require__(/*! ./Code */ \"./node_modules/mdx-deck/dist/Code.js\");\n\nvar _Code2 = _interopRequireDefault(_Code);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar css = function css(key) {\n  return function (props) {\n    return props.theme[key];\n  };\n};\n\nvar Heading = _styledComponents2.default.h1([], {\n  lineHeight: 1.25\n}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('heading'));\nHeading.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);\nHeading.defaultProps = {\n  color: 'heading',\n  mt: 3,\n  mb: 3\n};\n\nvar h1 = (0, _styledComponents2.default)(Heading.withComponent('h1'))([], css('h1'));\nh1.defaultProps = {\n  fontSize: 4\n};\n\nvar h2 = (0, _styledComponents2.default)(Heading.withComponent('h2'))([], css('h2'));\nh2.defaultProps = {\n  fontSize: 3\n};\n\nvar h3 = (0, _styledComponents2.default)(Heading.withComponent('h3'))([], css('h3'));\nh3.defaultProps = {\n  fontSize: 2\n};\nvar h4 = (0, _styledComponents2.default)(h3.withComponent('h4'))([], css('h4'));\nvar h5 = (0, _styledComponents2.default)(h3.withComponent('h5'))([], css('h5'));\nvar h6 = (0, _styledComponents2.default)(h3.withComponent('h6'))([], css('h6'));\n\nvar a = _styledComponents2.default.a([], _styledSystem.color, css('link'), css('a'));\na.propTypes = _extends({}, _styledSystem.color.propTypes);\na.defaultProps = {\n  color: 'link'\n};\n\nvar p = _styledComponents2.default.p([], _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('paragraph'), css('p'));\np.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);\np.defaultProps = {\n  fontSize: 2\n};\n\nvar ul = _styledComponents2.default.ul([], {\n  textAlign: 'left'\n}, _styledSystem.fontSize, css('ul'));\nul.propTypes = _extends({}, _styledSystem.fontSize.propTypes);\nul.defaultProps = {\n  fontSize: 2\n};\n\nvar ol = _styledComponents2.default.ol([], {\n  textAlign: 'left'\n}, _styledSystem.fontSize, css('ol'));\nol.propTypes = _extends({}, _styledSystem.fontSize.propTypes);\nol.defaultProps = {\n  fontSize: 2\n};\nvar li = _styledComponents2.default.li([], css('li'));\n\nvar blockquote = _styledComponents2.default.blockquote([], {\n  textAlign: 'left',\n  fontWeight: 'bold'\n}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('blockquote'), css('quote'));\nblockquote.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);\nblockquote.defaultProps = {\n  fontSize: 2,\n  px: 0,\n  mx: 0,\n  color: 'quote'\n};\n\nvar Pre = _styledComponents2.default.pre([], function (props) {\n  return {\n    fontFamily: props.theme.monospace,\n    textAlign: 'left',\n    whiteSpace: 'pre-wrap'\n  };\n}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('pre'));\nPre.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);\nPre.defaultProps = {\n  fontSize: 1,\n  m: 0,\n  p: 2,\n  color: 'pre',\n  bg: 'preBackground'\n};\n\nvar code = (0, _styledComponents.withTheme)(function (props) {\n  var theme = props.theme;\n\n  switch (props.className) {\n    case 'language-notes':\n      return _react2.default.createElement(_Notes2.default, null, _react2.default.createElement(_Mono2.default, _extends({}, props, { color: 'white' })));\n    default:\n      if (theme.prism && theme.prism.style) {\n        return _react2.default.createElement(_Code2.default, props);\n      }\n      return _react2.default.createElement(Pre, props);\n  }\n});\n\nvar inlineCode = _styledComponents2.default.code([], function (props) {\n  return {\n    fontFamily: props.theme.monospace\n  };\n}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('code'));\ninlineCode.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);\ninlineCode.defaultProps = {\n  color: 'code',\n  bg: 'codeBackground'\n};\n\nvar img = _styledComponents2.default.img([], {\n  maxWidth: '100%',\n  height: 'auto',\n  objectFit: 'cover'\n}, css('img'), css('image'));\n\nvar TableRoot = _styledComponents2.default.div([], {\n  overflowX: 'auto'\n});\nvar Table = _styledComponents2.default.table([], {\n  width: '100%',\n  borderCollapse: 'separate',\n  borderSpacing: 0,\n  '& td, & th': {\n    textAlign: 'left',\n    paddingRight: '.5em',\n    paddingTop: '.25em',\n    paddingBottom: '.25em',\n    borderBottom: '1px solid',\n    verticalAlign: 'top'\n  }\n}, css('table'));\n\nvar table = function table(props) {\n  return _react2.default.createElement(TableRoot, null, _react2.default.createElement(Table, props));\n};\n\nexports.default = {\n  h1: h1,\n  h2: h2,\n  h3: h3,\n  h4: h4,\n  h5: h5,\n  h6: h6,\n  a: a,\n  p: p,\n  blockquote: blockquote,\n  ul: ul,\n  ol: ol,\n  li: li,\n  pre: function pre(props) {\n    return props.children;\n  },\n  code: code,\n  inlineCode: inlineCode,\n  img: img,\n  table: table\n};\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/components.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/mdx-deck/dist/constants.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar modes = exports.modes = {\n  normal: 'NORMAL',\n  presenter: 'PRESENTER',\n  overview: 'OVERVIEW',\n  grid: 'GRID'\n};\nvar MDX_SLIDE_INDEX = exports.MDX_SLIDE_INDEX = 'mdx-slide-index';\nvar MDX_SLIDE_STEP = exports.MDX_SLIDE_STEP = 'mdx-slide-step';\n\nvar keys = exports.keys = {\n  'right': 39,\n  'left': 37,\n  'space': 32,\n  'p': 80,\n  'o': 79,\n  'g': 71,\n  'up': 38,\n  'down': 40\n};\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/constants.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/context.js":
/*!***********************************************!*\
  !*** ./node_modules/mdx-deck/dist/context.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.withSlide = exports.withDeck = exports.Consumer = exports.Provider = exports.Context = undefined;\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Context = exports.Context = _react2.default.createContext(null);\nvar Provider = Context.Provider,\n    Consumer = Context.Consumer;\nexports.Provider = Provider;\nexports.Consumer = Consumer;\nvar withDeck = exports.withDeck = function withDeck(Component) {\n  return function (props) {\n    return _react2.default.createElement(Consumer, null, function (deck) {\n      return _react2.default.createElement(Component, _extends({}, props, {\n        deck: deck,\n        slide: deck\n      }));\n    });\n  };\n};\n\n// alias for backwards compatibility\nvar withSlide = exports.withSlide = withDeck;\n\nexports.default = Context;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/context.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/entry.js":
/*!*********************************************!*\
  !*** ./node_modules/mdx-deck/dist/entry.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _SlideDeck = __webpack_require__(/*! ./SlideDeck */ \"./node_modules/mdx-deck/dist/SlideDeck.js\");\n\nvar _SlideDeck2 = _interopRequireDefault(_SlideDeck);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar mod = __webpack_require__(/*! ./talk.mdx */ \"./talk.mdx\");\nvar slides = mod.default;\nvar theme = mod.theme,\n    components = mod.components,\n    Provider = mod.Provider;\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(_SlideDeck2.default, _extends({}, this.props, {\n        slides: slides,\n        theme: theme,\n        components: components,\n        Provider: Provider\n      }));\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n\nif (typeof document !== 'undefined') {\n  (0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));\n}\n\nif (false) {}\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/entry.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/layouts/FullScreenCode.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdx-deck/dist/layouts/FullScreenCode.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar FullCode = _styledComponents2.default.div([], {\n  width: '100vw',\n  height: '100vh',\n  textAlign: 'left',\n  '& pre': {\n    // needed to override inline styles from syntax highlighting\n    margin: '0 !important',\n    width: '100vw',\n    height: '100vh'\n  }\n});\n\nexports.default = FullCode;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/layouts/FullScreenCode.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/layouts/Invert.js":
/*!******************************************************!*\
  !*** ./node_modules/mdx-deck/dist/layouts/Invert.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _styledSystem = __webpack_require__(/*! styled-system */ \"styled-system\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Invert = _styledComponents2.default.div([], {\n  width: '100vw',\n  height: '100vh',\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n  '& a': {\n    color: 'inherit'\n  }\n}, _styledSystem.color);\n\nInvert.defaultProps = {\n  color: 'background',\n  bg: 'text'\n};\n\nexports.default = Invert;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/layouts/Invert.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/layouts/Split.js":
/*!*****************************************************!*\
  !*** ./node_modules/mdx-deck/dist/layouts/Split.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _Flex = __webpack_require__(/*! ../Flex */ \"./node_modules/mdx-deck/dist/Flex.js\");\n\nvar _Flex2 = _interopRequireDefault(_Flex);\n\nvar _Box = __webpack_require__(/*! ../Box */ \"./node_modules/mdx-deck/dist/Box.js\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _toArray(arr) {\n  return Array.isArray(arr) ? arr : Array.from(arr);\n}\n\nvar Root = _styledComponents2.default.div([], {\n  width: '100vw',\n  height: '100vh'\n});\n\nvar Split = function Split(_ref) {\n  var children = _ref.children;\n\n  var _React$Children$toArr = _react2.default.Children.toArray(children.props.children),\n      _React$Children$toArr2 = _toArray(_React$Children$toArr),\n      a = _React$Children$toArr2[0],\n      rest = _React$Children$toArr2.slice(1);\n\n  return _react2.default.createElement(Root, null, _react2.default.createElement(_Flex2.default, {\n    css: {\n      alignItems: 'center',\n      height: '100%'\n    } }, _react2.default.createElement(_Box2.default, { width: 1 / 2 }, a), _react2.default.createElement(_Box2.default, { width: 1 / 2 }, rest)));\n};\n\nexports.default = Split;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/layouts/Split.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/layouts/SplitRight.js":
/*!**********************************************************!*\
  !*** ./node_modules/mdx-deck/dist/layouts/SplitRight.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _Flex = __webpack_require__(/*! ../Flex */ \"./node_modules/mdx-deck/dist/Flex.js\");\n\nvar _Flex2 = _interopRequireDefault(_Flex);\n\nvar _Box = __webpack_require__(/*! ../Box */ \"./node_modules/mdx-deck/dist/Box.js\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _toArray(arr) {\n  return Array.isArray(arr) ? arr : Array.from(arr);\n}\n\nvar Root = _styledComponents2.default.div([], {\n  width: '100vw',\n  height: '100vh'\n});\n\nvar SplitRight = function SplitRight(_ref) {\n  var children = _ref.children;\n\n  var _React$Children$toArr = _react2.default.Children.toArray(children.props.children),\n      _React$Children$toArr2 = _toArray(_React$Children$toArr),\n      a = _React$Children$toArr2[0],\n      rest = _React$Children$toArr2.slice(1);\n\n  return _react2.default.createElement(Root, null, _react2.default.createElement(_Flex2.default, {\n    css: {\n      alignItems: 'center',\n      height: '100%'\n    } }, _react2.default.createElement(_Box2.default, { width: 1 / 2 }, rest), _react2.default.createElement(_Box2.default, { width: 1 / 2 }, a)));\n};\n\nexports.default = SplitRight;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/layouts/SplitRight.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/layouts/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/mdx-deck/dist/layouts/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Invert = __webpack_require__(/*! ./Invert */ \"./node_modules/mdx-deck/dist/layouts/Invert.js\");\n\nObject.defineProperty(exports, 'Invert', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Invert).default;\n  }\n});\n\nvar _Split = __webpack_require__(/*! ./Split */ \"./node_modules/mdx-deck/dist/layouts/Split.js\");\n\nObject.defineProperty(exports, 'Split', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Split).default;\n  }\n});\n\nvar _SplitRight = __webpack_require__(/*! ./SplitRight */ \"./node_modules/mdx-deck/dist/layouts/SplitRight.js\");\n\nObject.defineProperty(exports, 'SplitRight', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_SplitRight).default;\n  }\n});\n\nvar _FullScreenCode = __webpack_require__(/*! ./FullScreenCode */ \"./node_modules/mdx-deck/dist/layouts/FullScreenCode.js\");\n\nObject.defineProperty(exports, 'FullScreenCode', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_FullScreenCode).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/layouts/index.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/base.js":
/*!***************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/base.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  font: 'system-ui, sans-serif',\n  monospace: 'Menlo, monospace',\n  fontSizes: ['0.75em', '1em', '1.5em', '2em', '3em'],\n  colors: {\n    text: '#000',\n    background: 'white',\n    link: '#07c',\n    pre: '#f0f',\n    preBackground: '#333',\n    code: '#f0f'\n  },\n  css: {\n    fontSize: '16px',\n    textAlign: 'center',\n    '@media screen and (min-width:64em)': {\n      fontSize: '32px'\n    }\n  },\n  ol: {\n    textAlign: 'left'\n  },\n  ul: {\n    textAlign: 'left'\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/base.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/big.js":
/*!**************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/big.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar blue = '#0af';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Bowlby One SC\", sans-serif',\n  colors: {\n    text: '#dff',\n    background: '#011',\n    blue: blue,\n    link: blue,\n    pre: blue,\n    preBackground: '#000',\n    code: blue\n  },\n  heading: {\n    fontWeight: 600\n  },\n  quote: {\n    fontWeight: 600\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/big.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/book.js":
/*!***************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/book.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar white = '#fffceb';\nvar black = '#11111f';\nvar blue = '#2d5dd7';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Crimson Text\", serif',\n  colors: {\n    text: black,\n    background: white,\n    link: blue\n  },\n  css: {\n    textAlign: 'left',\n    fontSize: '16px',\n    '@media screen and (min-width:64em)': {\n      fontSize: '32px'\n    },\n    '& .Slide > div': {\n      minWidth: '80vw',\n      minHeight: '60vh'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/book.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/code.js":
/*!***************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/code.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar blue = '#00cdf1';\nvar black = '#003d48';\nvar link = '#0800e3';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Source Code Pro\", monospace',\n  monospace: '\"Source Code Pro\", monospace',\n  colors: {\n    text: black,\n    background: blue,\n    link: link,\n    pre: blue,\n    preBackground: black\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/code.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/comic.js":
/*!****************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/comic.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar white = '#fffceb';\nvar black = '#351e38';\nvar blue = '#2d5dd7';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Gloria Hallelujah\", cursive',\n  colors: {\n    text: black,\n    background: white,\n    link: blue\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/comic.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/condensed.js":
/*!********************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/condensed.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar blue = '#0af';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Roboto Condensed\", system-ui, sans-serif',\n  monospace: '\"Roboto Mono\", monospace',\n  colors: {\n    text: '#fff',\n    background: '#000',\n    link: blue,\n    pre: blue,\n    preBackground: '#111',\n    code: blue\n  },\n  heading: {\n    textTransform: 'uppercase',\n    fontWeight: 600\n  },\n  quote: {\n    fontWeight: 600\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/condensed.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/dark.js":
/*!***************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/dark.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.default = _extends({}, _base2.default, {\n  colors: {\n    text: '#fff',\n    background: '#000',\n    link: '#08f',\n    pre: '#f0f',\n    preBackground: '#333',\n    code: '#f0f'\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/dark.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/future.js":
/*!*****************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/future.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar blue = '#0af';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Avenir Next\", system-ui, sans-serif',\n  colors: {\n    text: '#fff',\n    background: '#111',\n    blue: blue,\n    link: blue,\n    pre: blue,\n    preBackground: '#000',\n    code: blue\n  },\n  heading: {\n    textTransform: 'uppercase',\n    letterSpacing: '0.1em',\n    fontWeight: 600\n  },\n  quote: {\n    fontWeight: 600\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/future.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/hack.js":
/*!***************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/hack.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar green = '#42ff71';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"IBM Plex Mono\", monospace',\n  monospace: '\"IBM Plex Mono\", monospace',\n  colors: {\n    text: green,\n    background: '#000',\n    link: green,\n    pre: '#000',\n    preBackground: green,\n    code: '#000',\n    codeBackground: green\n  },\n  css: {\n    textAlign: 'left',\n    fontSize: '16px',\n    '@media screen and (min-width:64em)': {\n      fontSize: '32px'\n    },\n    '& .Slide > div': {\n      minWidth: '80vw',\n      minHeight: '60vh'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/hack.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_base).default;\n  }\n});\n\nvar _dark = __webpack_require__(/*! ./dark */ \"./node_modules/mdx-deck/dist/themes/dark.js\");\n\nObject.defineProperty(exports, 'dark', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_dark).default;\n  }\n});\n\nvar _future = __webpack_require__(/*! ./future */ \"./node_modules/mdx-deck/dist/themes/future.js\");\n\nObject.defineProperty(exports, 'future', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_future).default;\n  }\n});\n\nvar _condensed = __webpack_require__(/*! ./condensed */ \"./node_modules/mdx-deck/dist/themes/condensed.js\");\n\nObject.defineProperty(exports, 'condensed', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_condensed).default;\n  }\n});\n\nvar _yellow = __webpack_require__(/*! ./yellow */ \"./node_modules/mdx-deck/dist/themes/yellow.js\");\n\nObject.defineProperty(exports, 'yellow', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_yellow).default;\n  }\n});\n\nvar _swiss = __webpack_require__(/*! ./swiss */ \"./node_modules/mdx-deck/dist/themes/swiss.js\");\n\nObject.defineProperty(exports, 'swiss', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_swiss).default;\n  }\n});\n\nvar _book = __webpack_require__(/*! ./book */ \"./node_modules/mdx-deck/dist/themes/book.js\");\n\nObject.defineProperty(exports, 'book', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_book).default;\n  }\n});\n\nvar _script = __webpack_require__(/*! ./script */ \"./node_modules/mdx-deck/dist/themes/script.js\");\n\nObject.defineProperty(exports, 'script', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_script).default;\n  }\n});\n\nvar _comic = __webpack_require__(/*! ./comic */ \"./node_modules/mdx-deck/dist/themes/comic.js\");\n\nObject.defineProperty(exports, 'comic', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_comic).default;\n  }\n});\n\nvar _notes = __webpack_require__(/*! ./notes */ \"./node_modules/mdx-deck/dist/themes/notes.js\");\n\nObject.defineProperty(exports, 'notes', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_notes).default;\n  }\n});\n\nvar _code = __webpack_require__(/*! ./code */ \"./node_modules/mdx-deck/dist/themes/code.js\");\n\nObject.defineProperty(exports, 'code', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_code).default;\n  }\n});\n\nvar _lobster = __webpack_require__(/*! ./lobster */ \"./node_modules/mdx-deck/dist/themes/lobster.js\");\n\nObject.defineProperty(exports, 'lobster', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_lobster).default;\n  }\n});\n\nvar _hack = __webpack_require__(/*! ./hack */ \"./node_modules/mdx-deck/dist/themes/hack.js\");\n\nObject.defineProperty(exports, 'hack', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_hack).default;\n  }\n});\n\nvar _rye = __webpack_require__(/*! ./rye */ \"./node_modules/mdx-deck/dist/themes/rye.js\");\n\nObject.defineProperty(exports, 'rye', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_rye).default;\n  }\n});\n\nvar _big = __webpack_require__(/*! ./big */ \"./node_modules/mdx-deck/dist/themes/big.js\");\n\nObject.defineProperty(exports, 'big', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_big).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/index.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/lobster.js":
/*!******************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/lobster.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar text = '#220011';\n\nexports.default = _extends({}, _base2.default, {\n  font: 'Lobster, cursive',\n  monospace: '\"Roboto Mono\", monospace',\n  colors: {\n    text: text,\n    background: 'tomato',\n    link: text\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/lobster.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/notes.js":
/*!****************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/notes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Annie Use Your Telescope\", cursive',\n  css: {\n    fontSize: '16px',\n    textAlign: 'center',\n    '@media screen and (min-width:64em)': {\n      fontSize: '40px'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/notes.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/rye.js":
/*!**************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/rye.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar white = '#ffeec1';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Rye\", serif',\n  monospace: '\"Roboto Mono\", monospace',\n  colors: {\n    text: white,\n    background: 'black',\n    link: white\n  },\n  h1: {\n    textTransform: 'uppercase'\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/rye.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/script.js":
/*!*****************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/script.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar cream = '#fe9';\nvar black = '#320';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Yellowtail\", cursive',\n  monospace: '\"Roboto Mono\", Menlo, monospace',\n  colors: {\n    text: black,\n    background: cream,\n    link: black\n  },\n  css: {\n    fontSize: '16px',\n    textAlign: 'center',\n    '@media screen and (min-width:64em)': {\n      fontSize: '48px'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/script.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/swiss.js":
/*!****************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/swiss.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar white = '#fff';\nvar black = '#000';\nvar blue = '#2d5dd7';\nvar red = '#f00';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Helvetica Neue\", Helvetica, Arial, sans-serif',\n  colors: {\n    text: black,\n    background: white,\n    link: red\n  },\n  css: {\n    textAlign: 'left',\n    fontSize: '16px',\n    '@media screen and (min-width:64em)': {\n      fontSize: '32px'\n    },\n    '& .Slide > div': {\n      minWidth: '80vw',\n      minHeight: '60vh'\n    }\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/swiss.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/themes/yellow.js":
/*!*****************************************************!*\
  !*** ./node_modules/mdx-deck/dist/themes/yellow.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _base = __webpack_require__(/*! ./base */ \"./node_modules/mdx-deck/dist/themes/base.js\");\n\nvar _base2 = _interopRequireDefault(_base);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar yellow = '#fd0';\n\nexports.default = _extends({}, _base2.default, {\n  font: '\"Roboto Condensed\", system-ui, sans-serif',\n  weights: [400, 700],\n  monospace: '\"Roboto Mono\", monospace',\n  colors: {\n    text: '#000',\n    background: yellow,\n    link: '#333',\n    pre: yellow,\n    preBackground: '#000',\n    code: yellow,\n    codeBackground: '#000'\n  },\n  heading: {\n    textTransform: 'uppercase',\n    fontWeight: 700\n  },\n  blockquote: {\n    fontWeight: 700\n  },\n  pre: {\n    textAlign: 'left'\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/themes/yellow.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/dist/updaters.js":
/*!************************************************!*\
  !*** ./node_modules/mdx-deck/dist/updaters.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.dec = exports.inc = exports.setSteps = exports.setNotes = exports.setMetadata = exports.toggleMode = exports.incrementStep = exports.decrementStep = exports.incrementIndex = exports.decrementIndex = exports.next = exports.previous = undefined;\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _lodash = __webpack_require__(/*! lodash.get */ \"lodash.get\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./node_modules/mdx-deck/dist/constants.js\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });\n  } else {\n    obj[key] = value;\n  }return obj;\n}\n\nvar previous = exports.previous = function previous(state) {\n  var steps = (0, _lodash2.default)(state, 'metadata[' + state.index + '].steps', 0);\n  if (steps && state.step > 0) {\n    return decrementStep(state);\n  }\n  return decrementIndex(state);\n};\n\nvar next = exports.next = function next(state) {\n  var steps = (0, _lodash2.default)(state, 'metadata[' + state.index + '].steps', 0);\n  if (steps && state.step < steps) {\n    return incrementStep(state);\n  }\n  return incrementIndex(state);\n};\n\nvar decrementIndex = exports.decrementIndex = function decrementIndex(state) {\n  return state.index > 0 ? {\n    index: (state.index - 1) % state.length,\n    step: (0, _lodash2.default)(state, 'metadata[' + (state.index - 1) + '].steps', 0)\n  } : null;\n};\n\nvar incrementIndex = exports.incrementIndex = function incrementIndex(state) {\n  return state.index < state.length - 1 ? {\n    index: (state.index + 1) % state.length,\n    step: 0\n  } : null;\n};\n\nvar decrementStep = exports.decrementStep = function decrementStep(state) {\n  return state.step > 0 ? {\n    step: state.step - 1\n  } : null;\n};\n\nvar incrementStep = exports.incrementStep = function incrementStep(state) {\n  return state.step < (0, _lodash2.default)(state, 'metadata[' + state.index + '].steps') ? { step: state.step + 1 } : null;\n};\n\nvar toggleMode = exports.toggleMode = function toggleMode(key) {\n  return function (state) {\n    return {\n      mode: state.mode === _constants.modes[key] ? _constants.modes.normal : _constants.modes[key]\n    };\n  };\n};\n\nvar setMetadata = exports.setMetadata = function setMetadata(i, metadata) {\n  return function (state) {\n    return {\n      metadata: _extends({}, state.metadata, _defineProperty({}, i, _extends({}, state.metadata[i] || {}, metadata)))\n    };\n  };\n};\n\nvar setNotes = exports.setNotes = function setNotes(i, notes) {\n  return setMetadata(i, { notes: notes });\n};\nvar setSteps = exports.setSteps = function setSteps(i, steps) {\n  return setMetadata(i, { steps: steps });\n};\n\n// shims\nvar inc = exports.inc = incrementIndex;\nvar dec = exports.dec = decrementIndex;\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/dist/updaters.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/layouts.js":
/*!******************************************!*\
  !*** ./node_modules/mdx-deck/layouts.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./dist/layouts */ \"./node_modules/mdx-deck/dist/layouts/index.js\");\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/layouts.js?");

/***/ }),

/***/ "./node_modules/mdx-deck/themes.js":
/*!*****************************************!*\
  !*** ./node_modules/mdx-deck/themes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./dist/themes */ \"./node_modules/mdx-deck/dist/themes/index.js\");\n\n//# sourceURL=webpack:///./node_modules/mdx-deck/themes.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./api_example.rs":
/*!**************************************************!*\
  !*** ./node_modules/raw-loader!./api_example.rs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"#[derive(GraphQLQuery)]\\n#[graphql(\\n    schema_path = \\\"src/graphql/schema.json\\\",\\n    query_path = \\\"src/graphql/queries/my_query.graphql\\\",\\n)]\\npub struct MyQuery;\\n\\n// magic happens\\n\\npub mod my_query {\\n    struct ResponseData { ... }\\n    struct Variables { ... }\\n\\n    impl graphql_client::GraphQLQuery for MyQuery {\\n        ...\\n    }\\n}\\n\\nlet variables = my_query::Variables { ... };\\nlet request_body = MyQuery::build_query(variables);\\n\\nlet client = reqwest::Client::new();\\nlet mut res = client.post(\\\"/graphql\\\").json(&request_body).send()?;\\nlet response_body: Response<my_query::ResponseData> = res.json()?;\\n\"\n\n//# sourceURL=webpack:///./api_example.rs?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./interface_query.graphql":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader!./interface_query.graphql ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"# The query (GraphQL)\\n\\nquery Search($name: String!) {\\n  search(name: $name) {\\n    __typename\\n    id\\n    name\\n    ... on Person {\\n      birthday\\n    }\\n    ... on Organization {\\n      members(page: 1) {\\n        birthday\\n      }\\n    }\\n  }\\n}\\n\\n# Response (JSON)\\n\\n{\\n    \\\"data\\\": {\\n        \\\"search\\\": [\\n            {\\n                \\\"__typename\\\": \\\"Person\\\",\\n                \\\"id\\\": \\\"18551\\\",\\n                \\\"name\\\": \\\"Marie Curie\\\",\\n                \\\"birthday\\\": \\\"1867-11-07\\\"\\n            },\\n            {\\n                \\\"__typename\\\": \\\"Organization\\\",\\n                \\\"id\\\": \\\"18556\\\",\\n                \\\"name\\\": \\\"Red Cross\\\",\\n                \\\"members\\\": [{\\\"birthday\\\":\\\"1982-01-12\\\"},{\\\"birthday\\\":\\\"1996-08-13\\\"}]\\n            }\\n        ]\\n    }\\n}\\n\\n# Generated code (Rust)\\n\\n#[derive(Deserialize)]\\nstruct ResponseData {\\n    search: Vec<SearchSearch>,\\n}\\n\\n#[derive(Deserialize)]\\nstruct SearchSearch {\\n    id: String,\\n    name: String,\\n    #[serde(flatten)]\\n    on: SearchSearchOn\\n}\\n\\n#[derive(Deserialize)]\\n#[serde(tag = \\\"__typename\\\")]\\nenum SearchSearchOn {\\n    Person(SearchSearchOnPerson),\\n    Organization(SearchSearchOnOrganization),\\n}\\n\"\n\n//# sourceURL=webpack:///./interface_query.graphql?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./pants.rs":
/*!********************************************!*\
  !*** ./node_modules/raw-loader!./pants.rs ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"// 1\\n\\nfn call<Q>(\\n    &self,\\n    query: Q,\\n    variables: &Q::Variables\\n) -> Future<GraphQLQueryResult>\\nwhere Q: GraphQLQuery\\n\\nlet response = await!(client.call(RepositoriesIndex, &variables));\\n\\n// 2\\n\\nfn call<Q>(\\n    &self,\\n    variables: &Q::Variables\\n) -> Future<GraphQLQueryResult>\\nwhere Q: GraphQLQuery\\n\\nlet response = await!(client.call::<RepositoriesIndex>(&variables));\\n\"\n\n//# sourceURL=webpack:///./pants.rs?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./schema.graphql":
/*!**************************************************!*\
  !*** ./node_modules/raw-loader!./schema.graphql ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"schema {\\n    query QueryRoot\\n}\\n\\ntype QueryRoot {\\n    person(name: String!): Person\\n    entry(id: ID!): Entry\\n    search(name: String!): [SearchResult!]!\\n}\\n\\nunion Entry = Person | Organization | DeletedEntry\\n\\ninterface SearchResult {\\n    id: ID!\\n    name: String!\\n}\\n\\ntype Person implements SearchResult {\\n    id: ID!\\n    name: String!\\n    birthday: Date\\n}\\n\\ntype Organization implements SearchResult {\\n    id: ID!,\\n    name: String!\\n    members(page: Int = 1): [Person]\\n}\\n\\n\\\"\\\"\\\"\\nThis entry was deleted - it is anonymized\\n\\\"\\\"\\\"\\ntype DeletedEntry {\\n    id: ID!\\n    deletedAt: DateTime\\n}\\n\"\n\n//# sourceURL=webpack:///./schema.graphql?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./simple_query.graphql":
/*!********************************************************!*\
  !*** ./node_modules/raw-loader!./simple_query.graphql ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"# Query (GraphQL)\\n\\nquery FindSomeone($name: String!) {\\n  person(name: $name) {\\n    id\\n    name\\n    birthday\\n  }\\n}\\n\\n# Response (JSON)\\n\\n{\\n    \\\"data\\\": {\\n        \\\"person\\\": {\\n            \\\"id\\\": \\\"14928\\\",\\n            \\\"name\\\": \\\"Harrison Ford\\\",\\n            \\\"birthday\\\": \\\"1942-08-13\\\"\\n        }\\n    }\\n}\\n\\n# Generated code (Rust)\\n\\n#[derive(Deserialize)]\\nstruct ResponseData {\\n    person: Option<FindSomeonePerson>,\\n}\\n\\n#[derive(Deserialize)]\\nstruct FindSomeonePerson {\\n    id: String,\\n    name: String,\\n    birthday: Option<Date>,\\n}\\n\\nstruct Variables {\\n    name: String,\\n}\\n\"\n\n//# sourceURL=webpack:///./simple_query.graphql?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./union_query.graphql":
/*!*******************************************************!*\
  !*** ./node_modules/raw-loader!./union_query.graphql ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"# The query (GraphQL)\\n\\nquery EntryById {\\n  entry(id: \\\"301\\\") {\\n    __typename\\n    ... on Person {\\n      birthday\\n    }\\n    ... on Organization {\\n      members(page: 1) {\\n        birthday\\n      }\\n    }\\n  }\\n}\\n\\n# Response (JSON)\\n\\n{\\n    \\\"data\\\": {\\n        \\\"entry\\\": {\\n            \\\"__typename\\\": \\\"Person\\\",\\n            \\\"birthday\\\": \\\"1988-12-18\\\"\\n        }\\n    }\\n}\\n\\n# Generated code (Rust)\\n\\n#[derive(Deserialize)]\\nstruct ResponseData {\\n    entry: Option<EntryByIdEntry>,\\n}\\n\\n#[derive(Deserialize)]\\n#[serde(tag = \\\"__typename\\\")]\\nenum EntryByIdEntry {\\n    Person(EntryByIdEntryOnPerson),\\n    Organization(EntryByIdEntryOnOrganization),\\n    DeletedEntry\\n}\\n\\n#[derive(Deserialize)]\\nstruct EntryByidEntryOnPerson {\\n    birthday: Option<Date>,\\n}\\n\\n#[derive(Deserialize)]\\nstruct EntryByIdEntryOnOrganization {\\n    members: Vec<EntryByIdEntryOnOrganizationMembers>,\\n}\\n\\nstruct Variables;\\n\"\n\n//# sourceURL=webpack:///./union_query.graphql?./node_modules/raw-loader");

/***/ }),

/***/ "./talk.mdx":
/*!******************!*\
  !*** ./talk.mdx ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.meta = exports.theme = undefined;\n\nvar _themes = __webpack_require__(/*! mdx-deck/themes */ \"./node_modules/mdx-deck/themes.js\");\n\nObject.defineProperty(exports, 'theme', {\n  enumerable: true,\n  get: function get() {\n    return _themes.swiss;\n  }\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _tag = __webpack_require__(/*! @mdx-js/tag */ \"@mdx-js/tag\");\n\nvar _layouts = __webpack_require__(/*! mdx-deck/layouts */ \"./node_modules/mdx-deck/layouts.js\");\n\nvar _mdxDeckCodeSurfer = __webpack_require__(/*! mdx-deck-code-surfer */ \"mdx-deck-code-surfer\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar meta = exports.meta = {};\n\nexports.default = [function (_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'p', components: components },\n      'graphql-client'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- name\\n- first time talking on a meetup\\n- I want to talk about a small library I started early June\\n'\n      )\n    )\n  );\n}, function (_ref2) {\n  var components = _ref2.components,\n      props = _objectWithoutProperties(_ref2, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Why?'\n    ),\n    _react2.default.createElement('video', {\n      autoPlay: true,\n      loop: true,\n      src: './assets/cat-box.mp4'\n    }),\n    _react2.default.createElement(\n      'div',\n      null,\n      'no graphql client in Rust'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- If it fits, I sits\\n- I like GraphQL\\n- I had ideas about GraphQL servers\\n- Noticed there is no client in Rust\\n'\n      )\n    )\n  );\n}, function (_ref3) {\n  var components = _ref3.components,\n      props = _objectWithoutProperties(_ref3, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'pure Rust (?)'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"metaString\": null } },\n        '------------------------------------\\n Language                    Lines\\n------------------------------------\\n JSON                        47193\\n Rust                         4782\\n------------------------------------\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'small',\n      null,\n      'counted with ',\n      _react2.default.createElement(\n        'a',\n        { href: 'https://github.com/Aaronepower/tokei' },\n        'tokei'\n      )\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- even though the line count may suggest otherwise\\n- you might wonder why there is so much JSON\\n- let\\'s backtrack a bit\\n'\n      )\n    )\n  );\n}, function (_ref4) {\n  var components = _ref4.components,\n      props = _objectWithoutProperties(_ref4, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement('img', {\n      src: './assets/GraphQL_Logo.svg.png',\n      height: '150'\n    }),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'ul', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'A query language and a specification for building APIs'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'All the data you need for a view in one request (client-centric)'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Developed at Facebook, open sourced in 2015'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Very rich, growing ecosystem, fast adoption (Github, Shopify, Facebook, Twitter...)'\n      )\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- Technology for building APIs, with clients requesting data from a servers\\n- Spec defining two languages, a type system and the behaviour of servers\\n- One query -> query a graph objecst and fields\\n- Client-centric\\n  - Fetch exactly what you need\\n  - Nesting (post -> comment -> author -> posts)\\n- Makes it easy to evolve your API\\n- Transport agnostic, but most of the time JSON over HTTP\\n'\n      )\n    )\n  );\n}, function (_ref5) {\n  var components = _ref5.components,\n      props = _objectWithoutProperties(_ref5, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'p', components: components },\n      'Example'\n    ),\n    _react2.default.createElement(_tag.MDXTag, { name: 'img', components: components, props: { \"src\": \"./assets/github-graphiql-example.png\", \"alt\": null } }),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- You get what you ask for (client-centric)\\n- Nesting -> you query an object tree\\n'\n      )\n    )\n  );\n}, function (_ref6) {\n  var components = _ref6.components,\n      props = _objectWithoutProperties(_ref6, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h2', components: components },\n      'Why you want a client library'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'ul', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Correctness'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Take advantage of behaviour defined in the spec (error handling...)'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Caching'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        _react2.default.createElement(\n          _tag.MDXTag,\n          { name: 'em', components: components, parentName: 'li' },\n          'Strong typing'\n        )\n      )\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- It\\'s easy to make wrong requests\\n- That\\'s a small part of the library\\n- No caching yet\\n- Strong typing is what I want to talk about\\n'\n      )\n    )\n  );\n}, function (_ref7) {\n  var components = _ref7.components,\n      props = _objectWithoutProperties(_ref7, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h2', components: components },\n      'How it works - introspection'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'ul', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'GraphQL is typed'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Introspection is defined by the spec and meant to be used for code generation'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'With a GraphQL query and the schema, we can generate a struct for the response shape'\n      )\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- GraphQL has a type system - defined by the spec so it\\'s shared between all server implementations\\n- You can ask a server, at runtime, what API it exposes (also in the spec)\\n- It returns a structured response you can generate code for a client from - think mini-SDK.\\n- Why you need both query and schema (selection)\\n'\n      )\n    )\n  );\n}, function (_ref8) {\n  var components = _ref8.components,\n      props = _objectWithoutProperties(_ref8, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      notes: 'Prelude: what\\'s the API?',\n      lang: 'rust',\n      code: __webpack_require__(/*! raw-loader!./api_example.rs */ \"./node_modules/raw-loader/index.js!./api_example.rs\"),\n      showNumbers: true,\n      steps: [{ range: [1, 6], notes: 'Say where your query and your schema are' }, { range: [8, 8], notes: 'A module gets generated' }, { range: [10, 17], notes: 'It contains all you need for typed requests and responses with the query' }, { range: [19, 20], notes: 'You can easily build your query' }, { range: [19, 24], notes: 'And get the response' }]\n    }),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- Magic happens at compile time\\n'\n      )\n    )\n  );\n}, function (_ref9) {\n  var components = _ref9.components,\n      props = _objectWithoutProperties(_ref9, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Chapter 1 - Objects'\n    ),\n    _react2.default.createElement('video', {\n      src: './assets/objects.mp4',\n      autoPlay: true,\n      loop: true\n    })\n  );\n}, function (_ref10) {\n  var components = _ref10.components,\n      props = _objectWithoutProperties(_ref10, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      notes: 'Our API - an address book',\n      lang: 'graphql',\n      code: __webpack_require__(/*! raw-loader!./schema.graphql */ \"./node_modules/raw-loader/index.js!./schema.graphql\"),\n      showNumbers: true,\n      steps: [{ range: [1, 3], notes: 'We first define the root field: QueryRoot' }, { range: [5, 9], notes: 'The fields can take arguments at any depth' }, { lines: [6], notes: \"Let's start here\" }, { range: [18, 22], notes: \"Object types are like structs\" }]\n    }),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- Explain query, mutations, subscriptions\\n'\n      )\n    )\n  );\n}, function (_ref11) {\n  var components = _ref11.components,\n      props = _objectWithoutProperties(_ref11, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      lang: 'graphql',\n      code: __webpack_require__(/*! raw-loader!./simple_query.graphql */ \"./node_modules/raw-loader/index.js!./simple_query.graphql\"),\n      showNumbers: true,\n      steps: [{ range: [0, 21], notes: 'Request-response' }, { tokens: { 3: [2] }, notes: 'name the query' }, { tokens: { 3: [3, 4, 5, 6, 7, 8] }, notes: 'declare variables (parameters)' }, { range: [4, 8], notes: 'select what we want' }, { range: [11, 21], notes: 'get what we asked for' }, { range: [23, 35], notes: 'put it in convenient Rust data structures' }]\n    }),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- Why we have this naming scheme\\n- Lots of small interesting challenges like that\\n'\n      )\n    )\n  );\n}, function (_ref12) {\n  var components = _ref12.components,\n      props = _objectWithoutProperties(_ref12, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      lang: 'rust',\n      notes: 'how we would use it',\n      code: '\\nfn get_birthday_from_api(name: String) -> Result<Option<Date>, failure::Error> {\\n  let response = make_request(name)?;\\n  Ok(response.data.and_then(|data| data.person).and_then(|person| person.birthday))\\n}\\n  ',\n      showNumbers: true\n    })\n  );\n}, function (_ref13) {\n  var components = _ref13.components,\n      props = _objectWithoutProperties(_ref13, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Chapter 2 - Unions'\n    ),\n    _react2.default.createElement(_tag.MDXTag, { name: 'img', components: components, props: { \"src\": \"./assets/unions.jpg\", \"alt\": null } })\n  );\n}, function (_ref14) {\n  var components = _ref14.components,\n      props = _objectWithoutProperties(_ref14, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      notes: 'Remember our api',\n      lang: 'graphql',\n      code: __webpack_require__(/*! raw-loader!./schema.graphql */ \"./node_modules/raw-loader/index.js!./schema.graphql\"),\n      showNumbers: true,\n      steps: [{ range: [5, 9], notes: 'Our root fields' }, { lines: [6], notes: \"we just did this\" }, { lines: [7], notes: \"let's do that\" }, { lines: [11], notes: \"unions are a bit like untagged unions in Rust\" }, { range: [18, 36], notes: \"any one of these types\" }]\n    })\n  );\n}, function (_ref15) {\n  var components = _ref15.components,\n      props = _objectWithoutProperties(_ref15, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      lang: 'graphql',\n      code: __webpack_require__(/*! raw-loader!./union_query.graphql */ \"./node_modules/raw-loader/index.js!./union_query.graphql\"),\n      showNumbers: true,\n      steps: [{ range: [0, 26], notes: 'Request-response' }, { range: [1, 15], notes: 'the query looks different' }, { range: [6, 13], notes: 'we have to discriminate which fields we select by type' }, { range: [5, 5], notes: 'we can ask the name of the type we get (introspection)' }, { range: [17, 26], notes: 'we get what we asked for' }, { range: [28, 33], notes: 'put it in convenient Rust data structures' }, { range: [35, 41], notes: 'we have a tag, serde can give us an enum' }, { range: [43, 51], notes: 'selections on objects work like before' }]\n    })\n  );\n}, function (_ref16) {\n  var components = _ref16.components,\n      props = _objectWithoutProperties(_ref16, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      lang: 'rust',\n      notes: 'how we would use it',\n      code: '\\nfn get_birthday_from_api() -> Result<(), failure::Error> {\\n  let response = make_request()?;\\n  response.data\\n    .and_then(|data| data.entry)\\n    .map(|entry| {\\n      match entry {\\n        EntryByIdEntry::Person(person) => send_birthday_card(person),\\n        EntryByIdEntry::Organization(organization) =>\\n            send_birthday_card_to_members(organization),\\n        EntryByIdEntry::DeletedEntry =>\\n            return Err(format_err!(\"The entry was deleted\")),\\n      }\\n    });\\n  Ok(())\\n}\\n  ',\n      showNumbers: true,\n      steps: [{ range: [7, 13] }]\n    })\n  );\n}, function (_ref17) {\n  var components = _ref17.components,\n      props = _objectWithoutProperties(_ref17, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Chapter 3 - Interfaces'\n    ),\n    _react2.default.createElement(_tag.MDXTag, { name: 'img', components: components, props: { \"src\": \"./assets/interfaces.jpg\", \"alt\": null } })\n  );\n}, function (_ref18) {\n  var components = _ref18.components,\n      props = _objectWithoutProperties(_ref18, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      notes: 'A new challenger appears',\n      lang: 'graphql',\n      code: __webpack_require__(/*! raw-loader!./schema.graphql */ \"./node_modules/raw-loader/index.js!./schema.graphql\"),\n      showNumbers: true,\n      steps: [{ range: [5, 9], notes: 'Our root fields' }, { lines: [6, 7], notes: \"we did that\" }, { lines: [8], notes: \"let's do the last one\" }, { range: [13, 16], notes: \"interfaces are like unions, but...\" }, { range: [14, 15], notes: \"they define common fields\" }, { range: [18, 22], notes: \"and the members are defined differently\" }, { lines: [18], notes: \"and the members are defined differently\" }, { range: [13, 28], notes: \"and the members are defined differently\" }]\n    })\n  );\n}, function (_ref19) {\n  var components = _ref19.components,\n      props = _objectWithoutProperties(_ref19, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      lang: 'graphql',\n      code: __webpack_require__(/*! raw-loader!./interface_query.graphql */ \"./node_modules/raw-loader/index.js!./interface_query.graphql\"),\n      showNumbers: true,\n      steps: [{ range: [0, 38], notes: 'Request-response' }, { range: [0, 17], notes: 'Request' }, { range: [6, 7], notes: 'We can ask for the common fields' }, { range: [0, 17], notes: 'Otherwise nothing new' }, { range: [19, 38], notes: 'the response looks like a union response' }, { range: [40, 100], notes: 'now for the generated code' }, { range: [42, 45], notes: \"It's a non-null array\" }, { lines: [47, 48, 49, 50, 53], notes: \"Interfaces are like objects\" }, { range: [55, 60], notes: \"Interfaces are also like enums\" }, { range: [47, 53], notes: 'FUUUUUSION!' }]\n    }),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- How do you combine the enum and the struct? You can\\'t... but serde has got us covered\\n'\n      )\n    )\n  );\n}, function (_ref20) {\n  var components = _ref20.components,\n      props = _objectWithoutProperties(_ref20, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Takeaways'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'ul', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Serde is awesome'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Rust is really good at playing with other languages'\n      )\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- I don\\'t think I could have done it without all the serde annotations\\n'\n      )\n    )\n  );\n}, function (_ref21) {\n  var components = _ref21.components,\n      props = _objectWithoutProperties(_ref21, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Question to the audience'\n    ),\n    _react2.default.createElement('video', {\n      autoPlay: true,\n      loop: true,\n      src: './assets/intermission.mp4'\n    })\n  );\n}, function (_ref22) {\n  var components = _ref22.components,\n      props = _objectWithoutProperties(_ref22, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(_mdxDeckCodeSurfer.CodeSurfer, {\n      notes: 'if a GraphQL query wore pants...',\n      lang: 'rust',\n      code: __webpack_require__(/*! raw-loader!./pants.rs */ \"./node_modules/raw-loader/index.js!./pants.rs\"),\n      steps: [{ range: [1, 10], notes: 'would it wear them like this?' }, { range: [11, 21], notes: 'or like this?' }, { range: [1, 21], notes: 'vote' }]\n    })\n  );\n}, function (_ref23) {\n  var components = _ref23.components,\n      props = _objectWithoutProperties(_ref23, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Conclusion: Learnings'\n    )\n  );\n}, function (_ref24) {\n  var components = _ref24.components,\n      props = _objectWithoutProperties(_ref24, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Be prepared for contributors'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'ul', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Not enough time invested in a CONTRIBUTING.md'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Be ready to comment and review a lot'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'I thought the library was ready at 0.1 (wrong)'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Underestimated the work - even for a small project like this'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'Shoutout to all those who contributed, and in particular to @h-michael, @LegNeato and @mathstuf'\n      )\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- Thought it was ready - wrong\\n- Underestimated the work\\n'\n      )\n    )\n  );\n}, function (_ref25) {\n  var components = _ref25.components,\n      props = _objectWithoutProperties(_ref25, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', Layout: _layouts.Split, layoutProps: props, components: components },\n    _react2.default.createElement(_tag.MDXTag, { name: 'img', components: components, props: { \"src\": \"./assets/issue_screenshot_1.png\", \"alt\": null } }),\n    _react2.default.createElement(_tag.MDXTag, { name: 'img', components: components, props: { \"src\": \"./assets/issue_screenshot_2.png\", \"alt\": null } }),\n    _react2.default.createElement(_tag.MDXTag, { name: 'img', components: components, props: { \"src\": \"./assets/surprised_bubz_small.jpg\", \"alt\": null } })\n  );\n}, function (_ref26) {\n  var components = _ref26.components,\n      props = _objectWithoutProperties(_ref26, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Ecosystem'\n    ),\n    _react2.default.createElement('video', {\n      autoPlay: true,\n      loop: true,\n      src: './assets/ecosystem_synergy.mp4'\n    }),\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'small',\n        null,\n        'Useful crates'\n      )\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- Other learning: the ecosystem\\n- We have a really awesome ecosystem of basic building blocks like serde\\n- We can build higher-level libraries on top\\n- In graphql, graphql-parser\\n'\n      )\n    )\n  );\n}, function (_ref27) {\n  var components = _ref27.components,\n      props = _objectWithoutProperties(_ref27, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Error handling - failure'\n    ),\n    _react2.default.createElement('video', {\n      autoPlay: true,\n      loop: true,\n      src: './assets/corgi-failure.mp4'\n    })\n  );\n}, function (_ref28) {\n  var components = _ref28.components,\n      props = _objectWithoutProperties(_ref28, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Macros - Cargo expand'\n    ),\n    _react2.default.createElement(_tag.MDXTag, { name: 'img', components: components, props: { \"src\": \"./assets/cargo_expand.jpg\", \"alt\": null } })\n  );\n}, function (_ref29) {\n  var components = _ref29.components,\n      props = _objectWithoutProperties(_ref29, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Dependencies - cargo-edit'\n    ),\n    _react2.default.createElement('video', {\n      autoPlay: true,\n      loop: true,\n      src: './assets/cargo-edit.mp4'\n    })\n  );\n}, function (_ref30) {\n  var components = _ref30.components,\n      props = _objectWithoutProperties(_ref30, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Future'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'ul', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'clients everywhere!'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'normalized cache shared between implementations'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'build script, CLI and possibly proc macro-based codegen workflows'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'codegen as an npm package'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'better query validation'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'friendlier error messages'\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        '...'\n      )\n    )\n  );\n}, function (_ref31) {\n  var components = _ref31.components,\n      props = _objectWithoutProperties(_ref31, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      'small',\n      null,\n      'halp'\n    )\n  );\n}, function (_ref32) {\n  var components = _ref32.components,\n      props = _objectWithoutProperties(_ref32, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Naming'\n    ),\n    _react2.default.createElement('video', {\n      autoPlay: true,\n      loop: true,\n      src: './assets/naming.mp4'\n    })\n  );\n}, function (_ref33) {\n  var components = _ref33.components,\n      props = _objectWithoutProperties(_ref33, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Documentation management'\n    ),\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement('img', { src: './assets/ghostbusters_library_1.gif' }),\n      _react2.default.createElement('img', { src: './assets/ghostbusters_library_2.gif' })\n    )\n  );\n}, function (_ref34) {\n  var components = _ref34.components,\n      props = _objectWithoutProperties(_ref34, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'CLI and build script APIs'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'pre', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'code', components: components, parentName: 'pre', props: { \"className\": \"language-notes\", \"metaString\": \"\" } },\n        '- people with graphql experience: what do you think?\\n'\n      )\n    )\n  );\n}, function (_ref35) {\n  var components = _ref35.components,\n      props = _objectWithoutProperties(_ref35, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Hacktoberfest'\n    )\n  );\n}, function (_ref36) {\n  var components = _ref36.components,\n      props = _objectWithoutProperties(_ref36, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Keep in touch'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'ul', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'graphql-client: ',\n        _react2.default.createElement(\n          _tag.MDXTag,\n          { name: 'a', components: components, parentName: 'li', props: { \"href\": \"https://github.com/graphql-rust/graphql-client\" } },\n          'https://github.com/graphql-rust/graphql-client'\n        )\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'mastodon: ',\n        _react2.default.createElement(\n          _tag.MDXTag,\n          { name: 'a', components: components, parentName: 'li', props: { \"href\": \"https://eldritch.cafe/web/accounts/30706\" } },\n          '@vache_a_lemmes@eldritch.cafe'\n        )\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'twitter: ',\n        _react2.default.createElement(\n          _tag.MDXTag,\n          { name: 'a', components: components, parentName: 'li', props: { \"href\": \"https://twitter.com/_tomhoule\" } },\n          '@_tomhoule'\n        )\n      )\n    )\n  );\n}, function (_ref37) {\n  var components = _ref37.components,\n      props = _objectWithoutProperties(_ref37, ['components']);\n\n  return _react2.default.createElement(\n    _tag.MDXTag,\n    { name: 'wrapper', components: components },\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'h3', components: components },\n      'Links'\n    ),\n    _react2.default.createElement(\n      _tag.MDXTag,\n      { name: 'ul', components: components },\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        'GraphQL guide: ',\n        _react2.default.createElement(\n          _tag.MDXTag,\n          { name: 'a', components: components, parentName: 'li', props: { \"href\": \"https://graphql.org\" } },\n          'https://graphql.org'\n        )\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        _react2.default.createElement(\n          _tag.MDXTag,\n          { name: 'a', components: components, parentName: 'li', props: { \"href\": \"https://blog.apollographql.com/why-you-might-want-a-graphql-client-e864050f789c\" } },\n          'Why you might want a GraphQL client'\n        )\n      ),\n      _react2.default.createElement(\n        _tag.MDXTag,\n        { name: 'li', components: components, parentName: 'ul' },\n        _react2.default.createElement(\n          _tag.MDXTag,\n          { name: 'a', components: components, parentName: 'li', props: { \"href\": \"https://serde.rs\" } },\n          'serde.rs'\n        )\n      )\n    )\n  );\n}];\n\n//# sourceURL=webpack:///./talk.mdx?");

/***/ }),

/***/ "@compositor/webfont":
/*!**************************************!*\
  !*** external "@compositor/webfont" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@compositor/webfont\");\n\n//# sourceURL=webpack:///external_%22@compositor/webfont%22?");

/***/ }),

/***/ "@mdx-js/tag":
/*!******************************!*\
  !*** external "@mdx-js/tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mdx-js/tag\");\n\n//# sourceURL=webpack:///external_%22@mdx-js/tag%22?");

/***/ }),

/***/ "hhmmss":
/*!*************************!*\
  !*** external "hhmmss" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hhmmss\");\n\n//# sourceURL=webpack:///external_%22hhmmss%22?");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.debounce\");\n\n//# sourceURL=webpack:///external_%22lodash.debounce%22?");

/***/ }),

/***/ "lodash.get":
/*!*****************************!*\
  !*** external "lodash.get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.get\");\n\n//# sourceURL=webpack:///external_%22lodash.get%22?");

/***/ }),

/***/ "mdx-deck-code-surfer":
/*!***************************************!*\
  !*** external "mdx-deck-code-surfer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mdx-deck-code-surfer\");\n\n//# sourceURL=webpack:///external_%22mdx-deck-code-surfer%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-swipeable":
/*!**********************************!*\
  !*** external "react-swipeable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-swipeable\");\n\n//# sourceURL=webpack:///external_%22react-swipeable%22?");

/***/ }),

/***/ "react-syntax-highlighter/languages/prism/javascript":
/*!**********************************************************************!*\
  !*** external "react-syntax-highlighter/languages/prism/javascript" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-syntax-highlighter/languages/prism/javascript\");\n\n//# sourceURL=webpack:///external_%22react-syntax-highlighter/languages/prism/javascript%22?");

/***/ }),

/***/ "react-syntax-highlighter/languages/prism/jsx":
/*!***************************************************************!*\
  !*** external "react-syntax-highlighter/languages/prism/jsx" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-syntax-highlighter/languages/prism/jsx\");\n\n//# sourceURL=webpack:///external_%22react-syntax-highlighter/languages/prism/jsx%22?");

/***/ }),

/***/ "react-syntax-highlighter/prism-light":
/*!*******************************************************!*\
  !*** external "react-syntax-highlighter/prism-light" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-syntax-highlighter/prism-light\");\n\n//# sourceURL=webpack:///external_%22react-syntax-highlighter/prism-light%22?");

/***/ }),

/***/ "react-syntax-highlighter/styles/prism/atom-dark":
/*!******************************************************************!*\
  !*** external "react-syntax-highlighter/styles/prism/atom-dark" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-syntax-highlighter/styles/prism/atom-dark\");\n\n//# sourceURL=webpack:///external_%22react-syntax-highlighter/styles/prism/atom-dark%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-system\");\n\n//# sourceURL=webpack:///external_%22styled-system%22?");

/***/ })

/******/ });
});