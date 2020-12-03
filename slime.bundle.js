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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/slime/slime.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/audio/baseSlime.mp3":
/*!****************************************!*\
  !*** ./src/assets/audio/baseSlime.mp3 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/baseSlime.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL2Jhc2VTbGltZS5tcDM/MzRkYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9iYXNlU2xpbWUubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL2Jhc2VTbGltZS5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/baseSlime.mp3\n");

/***/ }),

/***/ "./src/assets/audio/baseSlime2.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/baseSlime2.mp3 ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/baseSlime2.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL2Jhc2VTbGltZTIubXAzPzA4YWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUF1QiIsImZpbGUiOiIuL3NyYy9hc3NldHMvYXVkaW8vYmFzZVNsaW1lMi5tcDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYXVkaW8vYmFzZVNsaW1lMi5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/baseSlime2.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime1.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime1.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime1.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lMS5tcDM/ODk5MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTEubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lMS5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime1.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime2.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime2.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime2.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lMi5tcDM/NDk3YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTIubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lMi5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime2.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime3.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime3.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime3.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lMy5tcDM/NDA0MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTMubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lMy5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime3.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime4.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime4.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime4.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lNC5tcDM/NWY4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTQubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lNC5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime4.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime5.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime5.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime5.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lNS5tcDM/MTNiNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTUubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lNS5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime5.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime6.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime6.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime6.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lNi5tcDM/ZDkwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTYubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lNi5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime6.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime7.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime7.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime7.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lNy5tcDM/ZGI0MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTcubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lNy5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime7.mp3\n");

/***/ }),

/***/ "./src/slime/slime.js":
/*!****************************!*\
  !*** ./src/slime/slime.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_audio_baseSlime_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audio/baseSlime.mp3 */ \"./src/assets/audio/baseSlime.mp3\");\n/* harmony import */ var _assets_audio_baseSlime_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_baseSlime_mp3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_audio_baseSlime2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/audio/baseSlime2.mp3 */ \"./src/assets/audio/baseSlime2.mp3\");\n/* harmony import */ var _assets_audio_baseSlime2_mp3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_baseSlime2_mp3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_audio_slime1_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/audio/slime1.mp3 */ \"./src/assets/audio/slime1.mp3\");\n/* harmony import */ var _assets_audio_slime1_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime1_mp3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_audio_slime2_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/audio/slime2.mp3 */ \"./src/assets/audio/slime2.mp3\");\n/* harmony import */ var _assets_audio_slime2_mp3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime2_mp3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_audio_slime3_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/audio/slime3.mp3 */ \"./src/assets/audio/slime3.mp3\");\n/* harmony import */ var _assets_audio_slime3_mp3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime3_mp3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_audio_slime4_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/audio/slime4.mp3 */ \"./src/assets/audio/slime4.mp3\");\n/* harmony import */ var _assets_audio_slime4_mp3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime4_mp3__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_audio_slime5_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/audio/slime5.mp3 */ \"./src/assets/audio/slime5.mp3\");\n/* harmony import */ var _assets_audio_slime5_mp3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime5_mp3__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_audio_slime6_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/audio/slime6.mp3 */ \"./src/assets/audio/slime6.mp3\");\n/* harmony import */ var _assets_audio_slime6_mp3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime6_mp3__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_audio_slime7_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/audio/slime7.mp3 */ \"./src/assets/audio/slime7.mp3\");\n/* harmony import */ var _assets_audio_slime7_mp3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime7_mp3__WEBPACK_IMPORTED_MODULE_8__);\n// import audio\n\n\n\n\n\n\n\n\n\n\nconst canvas = document.getElementById('canvas1');\nconst ctx = canvas.getContext('2d');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nlet particleArray = [];\n\nlet audio = new Audio(_assets_audio_baseSlime_mp3__WEBPACK_IMPORTED_MODULE_0___default.a);\nlet audio0 = new Audio(_assets_audio_baseSlime2_mp3__WEBPACK_IMPORTED_MODULE_1___default.a);\nlet audio1 = new Audio(_assets_audio_slime1_mp3__WEBPACK_IMPORTED_MODULE_2___default.a);\nlet audio2 = new Audio(_assets_audio_slime2_mp3__WEBPACK_IMPORTED_MODULE_3___default.a);\nlet audio3 = new Audio(_assets_audio_slime3_mp3__WEBPACK_IMPORTED_MODULE_4___default.a);\nlet audio4 = new Audio(_assets_audio_slime4_mp3__WEBPACK_IMPORTED_MODULE_5___default.a);\nlet audio5 = new Audio(_assets_audio_slime5_mp3__WEBPACK_IMPORTED_MODULE_6___default.a);\nlet audio6 = new Audio(_assets_audio_slime6_mp3__WEBPACK_IMPORTED_MODULE_7___default.a);\nlet audio7 = new Audio(_assets_audio_slime7_mp3__WEBPACK_IMPORTED_MODULE_8___default.a);\nlet audioArray = [audio1, audio2, audio3, audio4, audio5, audio6, audio7];\n\nlet isMoving = false;\nlet x = 0;\nlet y = 0;\n\nconst mouse = {\n  x: null,\n  y: null,\n  radius: 100\n};\n\ncanvas.addEventListener('mousedown', function (event) {\n  x = event.offsetX;\n  y = event.offsetY;\n  isMoving = true;\n  audio0.play();\n});\n\ncanvas.addEventListener('mousemove', function (event) {\n  if (isMoving == true) {\n    requestAnimationFrame(animate);\n    animate();\n    mouse.x = event.x;\n    mouse.y = event.y;\n    let rando = Math.floor(Math.random() * Math.floor(7));\n    audioArray[rando].play();\n  }\n});\n\nwindow.addEventListener('mouseup', function () {\n  if (isMoving === true) {\n    animate();\n    audio.pause();\n    x = 0;\n    y = 0;\n    isMoving = false;\n    audio0.pause();\n  }\n});\n\nclass Particle {\n  constructor(x, y, color) {\n    this.x = x;\n    this.y = y;\n    this.size = 5;\n    this.baseX = this.x;\n    this.baseY = this.y;\n    this.density = (Math.random() * 40) + 5;\n    this.color = color;\n  }\n\n  draw() {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);\n    ctx.closePath();\n    ctx.fill();\n  }\n\n  update() {\n    let dx = mouse.x - this.x;\n    let dy = mouse.y - this.y;\n    let distance = Math.sqrt(dx * dx + dy * dy);\n    let forceDirectionX = dx / distance;\n    let forceDirectionY = dy / distance;\n    let maxDistance = mouse.radius;\n    let force = (maxDistance - distance) / maxDistance;\n    let directionX = forceDirectionX * force * this.density;\n    let directionY = forceDirectionY * force * this.density;\n\n    if (distance < mouse.radius) {\n      this.x -= directionX;\n      this.y -= directionY;\n\n    } else {\n      if (this.x !== this.baseX) {\n        let dx = this.x - this.baseX;\n        this.x -= dx / 10;\n      }\n      if (this.y !== this.basey) {\n        let dy = this.y - this.baseY;\n        this.y -= dy / 10;\n      }\n    }\n  }\n}\n\nfunction init() {\n  particleArray = [];\n  for (let i = 0; i < 15000; i++) {\n    let random = Math.floor(Math.random() * Math.floor(5));\n    let colorArray = ['coral', 'gold', 'blueviolet', 'aqua', 'magenta']\n    let color = colorArray[random];\n    let x = Math.random() * canvas.width;\n    let y = Math.random() * canvas.height;\n    particleArray.push(new Particle(x, y, color));\n  }\n}\ninit();\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  for (let i = 0; i < particleArray.length; i++) {\n    particleArray[i].draw();\n    particleArray[i].update();\n  }\n}\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpbWUvc2xpbWUuanM/ZWEzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3NEO0FBQ0U7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isa0VBQVM7QUFDL0IsdUJBQXVCLG1FQUFVO0FBQ2pDLHVCQUF1QiwrREFBTTtBQUM3Qix1QkFBdUIsK0RBQU07QUFDN0IsdUJBQXVCLCtEQUFNO0FBQzdCLHVCQUF1QiwrREFBTTtBQUM3Qix1QkFBdUIsK0RBQU07QUFDN0IsdUJBQXVCLCtEQUFNO0FBQzdCLHVCQUF1QiwrREFBTTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsV0FBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9zbGltZS9zbGltZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhdWRpb1xuaW1wb3J0IGJhc2VTbGltZSBmcm9tICcuLi9hc3NldHMvYXVkaW8vYmFzZVNsaW1lLm1wMyc7XG5pbXBvcnQgYmFzZVNsaW1lMiBmcm9tICcuLi9hc3NldHMvYXVkaW8vYmFzZVNsaW1lMi5tcDMnO1xuaW1wb3J0IHNsaW1lMSBmcm9tICcuLi9hc3NldHMvYXVkaW8vc2xpbWUxLm1wMyc7XG5pbXBvcnQgc2xpbWUyIGZyb20gJy4uL2Fzc2V0cy9hdWRpby9zbGltZTIubXAzJztcbmltcG9ydCBzbGltZTMgZnJvbSAnLi4vYXNzZXRzL2F1ZGlvL3NsaW1lMy5tcDMnO1xuaW1wb3J0IHNsaW1lNCBmcm9tICcuLi9hc3NldHMvYXVkaW8vc2xpbWU0Lm1wMyc7XG5pbXBvcnQgc2xpbWU1IGZyb20gJy4uL2Fzc2V0cy9hdWRpby9zbGltZTUubXAzJztcbmltcG9ydCBzbGltZTYgZnJvbSAnLi4vYXNzZXRzL2F1ZGlvL3NsaW1lNi5tcDMnO1xuaW1wb3J0IHNsaW1lNyBmcm9tICcuLi9hc3NldHMvYXVkaW8vc2xpbWU3Lm1wMyc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCBwYXJ0aWNsZUFycmF5ID0gW107XG5cbmxldCBhdWRpbyA9IG5ldyBBdWRpbyhiYXNlU2xpbWUpO1xubGV0IGF1ZGlvMCA9IG5ldyBBdWRpbyhiYXNlU2xpbWUyKTtcbmxldCBhdWRpbzEgPSBuZXcgQXVkaW8oc2xpbWUxKTtcbmxldCBhdWRpbzIgPSBuZXcgQXVkaW8oc2xpbWUyKTtcbmxldCBhdWRpbzMgPSBuZXcgQXVkaW8oc2xpbWUzKTtcbmxldCBhdWRpbzQgPSBuZXcgQXVkaW8oc2xpbWU0KTtcbmxldCBhdWRpbzUgPSBuZXcgQXVkaW8oc2xpbWU1KTtcbmxldCBhdWRpbzYgPSBuZXcgQXVkaW8oc2xpbWU2KTtcbmxldCBhdWRpbzcgPSBuZXcgQXVkaW8oc2xpbWU3KTtcbmxldCBhdWRpb0FycmF5ID0gW2F1ZGlvMSwgYXVkaW8yLCBhdWRpbzMsIGF1ZGlvNCwgYXVkaW81LCBhdWRpbzYsIGF1ZGlvN107XG5cbmxldCBpc01vdmluZyA9IGZhbHNlO1xubGV0IHggPSAwO1xubGV0IHkgPSAwO1xuXG5jb25zdCBtb3VzZSA9IHtcbiAgeDogbnVsbCxcbiAgeTogbnVsbCxcbiAgcmFkaXVzOiAxMDBcbn07XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgeCA9IGV2ZW50Lm9mZnNldFg7XG4gIHkgPSBldmVudC5vZmZzZXRZO1xuICBpc01vdmluZyA9IHRydWU7XG4gIGF1ZGlvMC5wbGF5KCk7XG59KTtcblxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoaXNNb3ZpbmcgPT0gdHJ1ZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICBhbmltYXRlKCk7XG4gICAgbW91c2UueCA9IGV2ZW50Lng7XG4gICAgbW91c2UueSA9IGV2ZW50Lnk7XG4gICAgbGV0IHJhbmRvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig3KSk7XG4gICAgYXVkaW9BcnJheVtyYW5kb10ucGxheSgpO1xuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChpc01vdmluZyA9PT0gdHJ1ZSkge1xuICAgIGFuaW1hdGUoKTtcbiAgICBhdWRpby5wYXVzZSgpO1xuICAgIHggPSAwO1xuICAgIHkgPSAwO1xuICAgIGlzTW92aW5nID0gZmFsc2U7XG4gICAgYXVkaW8wLnBhdXNlKCk7XG4gIH1cbn0pO1xuXG5jbGFzcyBQYXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc2l6ZSA9IDU7XG4gICAgdGhpcy5iYXNlWCA9IHRoaXMueDtcbiAgICB0aGlzLmJhc2VZID0gdGhpcy55O1xuICAgIHRoaXMuZGVuc2l0eSA9IChNYXRoLnJhbmRvbSgpICogNDApICsgNTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBsZXQgZHggPSBtb3VzZS54IC0gdGhpcy54O1xuICAgIGxldCBkeSA9IG1vdXNlLnkgLSB0aGlzLnk7XG4gICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICBsZXQgZm9yY2VEaXJlY3Rpb25YID0gZHggLyBkaXN0YW5jZTtcbiAgICBsZXQgZm9yY2VEaXJlY3Rpb25ZID0gZHkgLyBkaXN0YW5jZTtcbiAgICBsZXQgbWF4RGlzdGFuY2UgPSBtb3VzZS5yYWRpdXM7XG4gICAgbGV0IGZvcmNlID0gKG1heERpc3RhbmNlIC0gZGlzdGFuY2UpIC8gbWF4RGlzdGFuY2U7XG4gICAgbGV0IGRpcmVjdGlvblggPSBmb3JjZURpcmVjdGlvblggKiBmb3JjZSAqIHRoaXMuZGVuc2l0eTtcbiAgICBsZXQgZGlyZWN0aW9uWSA9IGZvcmNlRGlyZWN0aW9uWSAqIGZvcmNlICogdGhpcy5kZW5zaXR5O1xuXG4gICAgaWYgKGRpc3RhbmNlIDwgbW91c2UucmFkaXVzKSB7XG4gICAgICB0aGlzLnggLT0gZGlyZWN0aW9uWDtcbiAgICAgIHRoaXMueSAtPSBkaXJlY3Rpb25ZO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnggIT09IHRoaXMuYmFzZVgpIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy54IC0gdGhpcy5iYXNlWDtcbiAgICAgICAgdGhpcy54IC09IGR4IC8gMTA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy55ICE9PSB0aGlzLmJhc2V5KSB7XG4gICAgICAgIGxldCBkeSA9IHRoaXMueSAtIHRoaXMuYmFzZVk7XG4gICAgICAgIHRoaXMueSAtPSBkeSAvIDEwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBwYXJ0aWNsZUFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwMDA7IGkrKykge1xuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDUpKTtcbiAgICBsZXQgY29sb3JBcnJheSA9IFsnY29yYWwnLCAnZ29sZCcsICdibHVldmlvbGV0JywgJ2FxdWEnLCAnbWFnZW50YSddXG4gICAgbGV0IGNvbG9yID0gY29sb3JBcnJheVtyYW5kb21dO1xuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xuICAgIHBhcnRpY2xlQXJyYXkucHVzaChuZXcgUGFydGljbGUoeCwgeSwgY29sb3IpKTtcbiAgfVxufVxuaW5pdCgpO1xuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRpY2xlQXJyYXlbaV0uZHJhdygpO1xuICAgIHBhcnRpY2xlQXJyYXlbaV0udXBkYXRlKCk7XG4gIH1cbn1cbmFuaW1hdGUoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slime/slime.js\n");

/***/ })

/******/ });