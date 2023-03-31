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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_play_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/play_game */ \"./src/scripts/play_game.js\");\n\n\n\n//Canvas\nlet canvas = document.getElementById('game-canvas');\nconst ctx = canvas.getContext('2d');\nconst background = new Image();\nbackground.src = \"./assets/room-g7ec8543d0_1920.jpg\";\nconst catState = new Image();\ncatState.src = \"./assets/cat_states.png\";\nbackground.onload = function () {\n  ctx.drawImage(background, 0, 0);\n  ctx.drawImage(catState, 234, 0, 234, 336, 270, 100, 236, 336);\n};\n\n// let cat = new Cat(catState);\nlet game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n\n//Selectors\nlet playGameButtonSelector = \".play-game-button\";\ndocument.querySelectorAll(playGameButtonSelector, game).forEach(el => {\n  new _scripts_play_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](el);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ1E7O0FBRTFDO0FBQ0EsSUFBSUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDbkQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDbkMsTUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUcsbUNBQW1DO0FBQ3BELE1BQU1DLFFBQVEsR0FBRyxJQUFJRixLQUFLLEVBQUU7QUFDNUJFLFFBQVEsQ0FBQ0QsR0FBRyxHQUFHLHlCQUF5QjtBQUN4Q0YsVUFBVSxDQUFDSSxNQUFNLEdBQUcsWUFBVTtFQUMxQk4sR0FBRyxDQUFDTyxTQUFTLENBQUNMLFVBQVUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0VBQzdCRixHQUFHLENBQUNPLFNBQVMsQ0FBQ0YsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDakUsQ0FBQzs7QUFFRDtBQUNBLElBQUlHLElBQUksR0FBRyxJQUFJYixxREFBSSxDQUFDSyxHQUFHLENBQUM7O0FBRXhCO0FBQ0EsSUFBSVMsc0JBQXNCLEdBQUcsbUJBQW1CO0FBQ2hEWCxRQUFRLENBQUNZLGdCQUFnQixDQUFDRCxzQkFBc0IsRUFBRUQsSUFBSSxDQUFDLENBQUNHLE9BQU8sQ0FBRUMsRUFBRSxJQUFLO0VBQ3BFLElBQUloQiwwREFBUSxDQUFDZ0IsRUFBRSxDQUFDO0FBQ3BCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdC10YXN0cm9waGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCBQbGF5R2FtZSBmcm9tIFwiLi9zY3JpcHRzL3BsYXlfZ2FtZVwiXG5cbi8vQ2FudmFzXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL2Fzc2V0cy9yb29tLWc3ZWM4NTQzZDBfMTkyMC5qcGdcIjtcbmNvbnN0IGNhdFN0YXRlID0gbmV3IEltYWdlKCk7XG5jYXRTdGF0ZS5zcmMgPSBcIi4vYXNzZXRzL2NhdF9zdGF0ZXMucG5nXCI7XG5iYWNrZ3JvdW5kLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLDAsMCk7ICAgXG4gICAgY3R4LmRyYXdJbWFnZShjYXRTdGF0ZSwgMjM0LCAwLCAyMzQsIDMzNiwgMjcwLCAxMDAsIDIzNiwgMzM2KTsgXG59XG5cbi8vIGxldCBjYXQgPSBuZXcgQ2F0KGNhdFN0YXRlKTtcbmxldCBnYW1lID0gbmV3IEdhbWUoY3R4KVxuXG4vL1NlbGVjdG9yc1xubGV0IHBsYXlHYW1lQnV0dG9uU2VsZWN0b3IgPSBcIi5wbGF5LWdhbWUtYnV0dG9uXCJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocGxheUdhbWVCdXR0b25TZWxlY3RvciwgZ2FtZSkuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBuZXcgUGxheUdhbWUoZWwpO1xufSk7Il0sIm5hbWVzIjpbIkdhbWUiLCJQbGF5R2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiY2F0U3RhdGUiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJnYW1lIiwicGxheUdhbWVCdXR0b25TZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    // this.cat = cat;\n    // this.setUpGame()\n  }\n\n  //Place cat in normal state in center\n  setUpGame() {}\n\n  //\n  startGame() {}\n\n  //knock - change img to knock state, increase score points \n  handleUpKey() {}\n\n  //left smash - change img to smash state - if successful, remove mouse\n  handleLeftKey() {}\n\n  //right smash - change img to smash state - if successful, remove mouse\n  handleRightKey() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZDtJQUNBO0VBQ0o7O0VBRUE7RUFDQUMsU0FBU0EsQ0FBQSxFQUFHLENBRVo7O0VBRUE7RUFDQUMsU0FBU0EsQ0FBQSxFQUFHLENBRVo7O0VBRUE7RUFDQUMsV0FBV0EsQ0FBQSxFQUFHLENBRWQ7O0VBRUE7RUFDQUMsYUFBYUEsQ0FBQSxFQUFHLENBRWhCOztFQUVBO0VBQ0FDLGNBQWNBLENBQUEsRUFBRyxDQUVqQjtBQUdKO0FBRUEsK0RBQWVQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXQtdGFzdHJvcGhlLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgLy8gdGhpcy5jYXQgPSBjYXQ7XG4gICAgICAgIC8vIHRoaXMuc2V0VXBHYW1lKClcbiAgICB9XG5cbiAgICAvL1BsYWNlIGNhdCBpbiBub3JtYWwgc3RhdGUgaW4gY2VudGVyXG4gICAgc2V0VXBHYW1lKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvL1xuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy9rbm9jayAtIGNoYW5nZSBpbWcgdG8ga25vY2sgc3RhdGUsIGluY3JlYXNlIHNjb3JlIHBvaW50cyBcbiAgICBoYW5kbGVVcEtleSgpIHtcblxuICAgIH1cblxuICAgIC8vbGVmdCBzbWFzaCAtIGNoYW5nZSBpbWcgdG8gc21hc2ggc3RhdGUgLSBpZiBzdWNjZXNzZnVsLCByZW1vdmUgbW91c2VcbiAgICBoYW5kbGVMZWZ0S2V5KCkge1xuXG4gICAgfVxuXG4gICAgLy9yaWdodCBzbWFzaCAtIGNoYW5nZSBpbWcgdG8gc21hc2ggc3RhdGUgLSBpZiBzdWNjZXNzZnVsLCByZW1vdmUgbW91c2VcbiAgICBoYW5kbGVSaWdodEtleSgpIHtcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsInNldFVwR2FtZSIsInN0YXJ0R2FtZSIsImhhbmRsZVVwS2V5IiwiaGFuZGxlTGVmdEtleSIsImhhbmRsZVJpZ2h0S2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/play_game.js":
/*!**********************************!*\
  !*** ./src/scripts/play_game.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PlayGame {\n  constructor(playGameButton, game) {\n    this.playGameButton = playGameButton;\n    this.game = game;\n    this.playGameButton.addEventListener('click', this.handleStartGame.bind(this));\n  }\n\n  //DOCUMENT QUERIES\n  // let startPage = document.querySelector(\".start-game\");\n  // let gameOverPage = document.querySelector(\"#game-over\");\n\n  handleStartGame(e) {\n    e.preventDefault();\n    let startPage = document.querySelector(\".start-game\");\n    startPage.classList.add(\"hidden\");\n    this.playGameButton.classList.add(\"hidden\");\n    startPage.classList.remove(\"start-game\");\n\n    // this.game.startGame\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayGame);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5X2dhbWUuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVEsQ0FBQztFQUNYQyxXQUFXQSxDQUFDQyxjQUFjLEVBQUVDLElBQUksRUFBRTtJQUM5QixJQUFJLENBQUNELGNBQWMsR0FBR0EsY0FBYztJQUNwQyxJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNELGNBQWMsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsZUFBZSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbEY7O0VBRUE7RUFDQTtFQUNBOztFQUVBRCxlQUFlQSxDQUFDRSxDQUFDLEVBQUU7SUFDZkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEIsSUFBSUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDckRGLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2pDLElBQUksQ0FBQ1gsY0FBYyxDQUFDVSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDM0NKLFNBQVMsQ0FBQ0csU0FBUyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDOztJQUV4QztFQUNKO0FBQ0o7O0FBRUEsK0RBQWVkLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXQtdGFzdHJvcGhlLy4vc3JjL3NjcmlwdHMvcGxheV9nYW1lLmpzP2ZiNzkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheUdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHBsYXlHYW1lQnV0dG9uLCBnYW1lKSB7XG4gICAgICAgIHRoaXMucGxheUdhbWVCdXR0b24gPSBwbGF5R2FtZUJ1dHRvblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnBsYXlHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdGFydEdhbWUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy9ET0NVTUVOVCBRVUVSSUVTXG4gICAgLy8gbGV0IHN0YXJ0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZVwiKTtcbiAgICAvLyBsZXQgZ2FtZU92ZXJQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLW92ZXJcIik7XG5cbiAgICBoYW5kbGVTdGFydEdhbWUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBzdGFydFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWVcIik7XG4gICAgICAgIHN0YXJ0UGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLnBsYXlHYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHN0YXJ0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZVwiKTtcblxuICAgICAgICAvLyB0aGlzLmdhbWUuc3RhcnRHYW1lXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5R2FtZSJdLCJuYW1lcyI6WyJQbGF5R2FtZSIsImNvbnN0cnVjdG9yIiwicGxheUdhbWVCdXR0b24iLCJnYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVN0YXJ0R2FtZSIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGFydFBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/play_game.js\n");

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