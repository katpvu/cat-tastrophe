/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\nlet canvas = document.getElementById('game-canvas');\nconst ctx = canvas.getContext('2d');\n\n//Setting game-console background image\nconst background = new Image();\nbackground.src = \"./assets/room-g7ec8543d0_1920.jpg\";\nbackground.onload = function () {\n  ctx.drawImage(background, 0, 0);\n};\nlet game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFFbEMsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDbkQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7O0FBRW5DO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUcsbUNBQW1DO0FBQ3BERixVQUFVLENBQUNHLE1BQU0sR0FBRyxZQUFVO0VBQzFCTCxHQUFHLENBQUNNLFNBQVMsQ0FBQ0osVUFBVSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVELElBQUlLLElBQUksR0FBRyxJQUFJWCxxREFBSSxDQUFDSSxHQUFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXQtdGFzdHJvcGhlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4vL1NldHRpbmcgZ2FtZS1jb25zb2xlIGJhY2tncm91bmQgaW1hZ2VcbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL2Fzc2V0cy9yb29tLWc3ZWM4NTQzZDBfMTkyMC5qcGdcIjtcbmJhY2tncm91bmQub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsMCwwKTsgICBcbn1cblxubGV0IGdhbWUgPSBuZXcgR2FtZShjdHgpXG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n  }\n\n  //DOCUMENT QUERIES\n  // let startPage = document.querySelector(\".start-game\");\n  // let gameOverPage = document.querySelector(\"#game-over\");\n\n  handleStartGame(e) {\n    e.preventDefault();\n  }\n\n  // startPage.addEventListener('click', handleStartGame);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7RUFDbEI7O0VBRUE7RUFDQTtFQUNBOztFQUVBQyxlQUFlQSxDQUFDQyxDQUFDLEVBQUU7SUFDZkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7RUFFdEI7O0VBRUE7QUFHSjs7QUFFQSwrREFBZUwsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdC10YXN0cm9waGUvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIC8vRE9DVU1FTlQgUVVFUklFU1xuICAgIC8vIGxldCBzdGFydFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWVcIik7XG4gICAgLy8gbGV0IGdhbWVPdmVyUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZS1vdmVyXCIpO1xuXG4gICAgaGFuZGxlU3RhcnRHYW1lKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfVxuXG4gICAgLy8gc3RhcnRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3RhcnRHYW1lKTtcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsImhhbmRsZVN0YXJ0R2FtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdC10YXN0cm9waGUvLi9zcmMvaW5kZXguY3NzPzgwNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.css\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.css");
/******/ 	
/******/ })()
;