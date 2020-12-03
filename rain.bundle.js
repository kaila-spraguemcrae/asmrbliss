/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/asmrbliss/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rain/rain.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/audio/rain.mp3":
/*!***********************************!*\
  !*** ./src/assets/audio/rain.mp3 ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/rain.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3JhaW4ubXAzP2VhM2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUF1QiIsImZpbGUiOiIuL3NyYy9hc3NldHMvYXVkaW8vcmFpbi5tcDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYXVkaW8vcmFpbi5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/rain.mp3\n");

/***/ }),

/***/ "./src/rain/rain.js":
/*!**************************!*\
  !*** ./src/rain/rain.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audio/rain.mp3 */ \"./src/assets/audio/rain.mp3\");\n/* harmony import */ var _assets_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet c = document.getElementById(\"canvas\");\nc.width = window.innerWidth;\nc.height = window.innerHeight;\nlet ctx = c.getContext(\"2d\");\nlet vRain = [];\nlet audio = new Audio(_assets_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_0___default.a);\naudio.loop = true;\n\nclass Rain {\n  constructor(x, y, v, l,) { \n    this.x = x;\n    this.y = y;\n    this.v = v;\n    this.l = l;\n  }\n  show() { \n    ctx.strokeStyle = 'white';\n    ctx.beginPath();\n    ctx.moveTo(this.x, this.y); \n    ctx.lineTo(this.x, this.y + this.l); \n    ctx.stroke();\n  }\n\n  fall() {\n    this.y += this.v;\n    if (this.y > c.height) {\n      this.x = Math.floor(Math.random() * c.width) + 5;\n      this.y = Math.floor(Math.random() * 100) - 100;\n      this.l = Math.floor(Math.random() * 30) + 1;\n      this.v = Math.floor(Math.random() * 12) + 4;\n    }\n  }\n\n}\nfunction loop() {\n  ctx.clearRect(0, 0, c.width, c.height);\n  for (var i = 0; i < vRain.length; i++) {\n    vRain[i].show();\n    vRain[i].fall();\n  }\n}\nfunction setup() {\n\n  for (var i = 0; i < 60; i++) {\n    vRain[i] = new Rain(\n      Math.floor(Math.random() * c.width) + 5,\n      Math.floor(Math.random() * 100) - 100,\n      Math.floor(Math.random() * 30) + 1,\n      Math.floor(Math.random() * 12) + 4,\n    );\n  }\n  setInterval(loop, 7);\n}\nsetup();\naudio.play();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmFpbi9yYWluLmpzPzAxMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCOztBQUVBO0FBQ0EsNEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVTtBQUNBO0FBQ0E7QUFDQSwrQjtBQUNBLHdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcmFpbi9yYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJhaW4gZnJvbSBcIi4uL2Fzc2V0cy9hdWRpby9yYWluLm1wM1wiXG5cbmxldCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5jLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKTtcbmxldCB2UmFpbiA9IFtdO1xubGV0IGF1ZGlvID0gbmV3IEF1ZGlvKHJhaW4pO1xuYXVkaW8ubG9vcCA9IHRydWU7XG5cbmNsYXNzIFJhaW4ge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB2LCBsLCkgeyBcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy52ID0gdjtcbiAgICB0aGlzLmwgPSBsO1xuICB9XG4gIHNob3coKSB7IFxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpOyBcbiAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55ICsgdGhpcy5sKTsgXG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgZmFsbCgpIHtcbiAgICB0aGlzLnkgKz0gdGhpcy52O1xuICAgIGlmICh0aGlzLnkgPiBjLmhlaWdodCkge1xuICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYy53aWR0aCkgKyA1O1xuICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSAtIDEwMDtcbiAgICAgIHRoaXMubCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSArIDE7XG4gICAgICB0aGlzLnYgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMikgKyA0O1xuICAgIH1cbiAgfVxuXG59XG5mdW5jdGlvbiBsb29wKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2UmFpbi5sZW5ndGg7IGkrKykge1xuICAgIHZSYWluW2ldLnNob3coKTtcbiAgICB2UmFpbltpXS5mYWxsKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldHVwKCkge1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgIHZSYWluW2ldID0gbmV3IFJhaW4oXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjLndpZHRoKSArIDUsXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIC0gMTAwLFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApICsgMSxcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyKSArIDQsXG4gICAgKTtcbiAgfVxuICBzZXRJbnRlcnZhbChsb29wLCA3KTtcbn1cbnNldHVwKCk7XG5hdWRpby5wbGF5KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/rain/rain.js\n");

/***/ })

/******/ });