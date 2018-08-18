/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = "https://picsum.photos/200/300/?random";
document.body.appendChild(image);

var smallImage = document.createElement('img');
smallImage.src = _small2.default;
document.body.appendChild(smallImage);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;
document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "950e66609cf3ec24d951bd2dc518d8e6.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _sum2.default)(1, 3));

/***/ }
/******/ ]);