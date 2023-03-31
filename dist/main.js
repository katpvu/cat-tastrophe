/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("let startPage = document.querySelector(\".start-game\");\nlet gameOverPage = document.querySelector(\"#game-over\");\nlet canvas = document.getElementById('game-canvas');\nconst ctx = canvas.getContext('2d');\n\n//Setting game-console background image\nconst background = new Image();\nbackground.src = \"./src/assets/room-g7ec8543d0_1920.jpg\";\nbackground.onload = function () {\n  ctx.drawImage(background, 0, 0);\n};\nlet game = new Game(startPage, gameOverPage, ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJzdGFydFBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lT3ZlclBhZ2UiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJnYW1lIiwiR2FtZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2F0LXRhc3Ryb3BoZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBzdGFydFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWVcIilcbmxldCBnYW1lT3ZlclBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWUtb3ZlclwiKVxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuLy9TZXR0aW5nIGdhbWUtY29uc29sZSBiYWNrZ3JvdW5kIGltYWdlXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvYXNzZXRzL3Jvb20tZzdlYzg1NDNkMF8xOTIwLmpwZ1wiO1xuYmFja2dyb3VuZC5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwwLDApOyAgIFxufVxuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKHN0YXJ0UGFnZSwgZ2FtZU92ZXJQYWdlLCBjdHgpXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDckQsSUFBSUMsWUFBWSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDdkQsSUFBSUUsTUFBTSxHQUFHSCxRQUFRLENBQUNJLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFFbkQsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUM7O0FBRW5DO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtBQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUcsdUNBQXVDO0FBQ3hERixVQUFVLENBQUNHLE1BQU0sR0FBRyxZQUFVO0VBQzFCTCxHQUFHLENBQUNNLFNBQVMsQ0FBQ0osVUFBVSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVELElBQUlLLElBQUksR0FBRyxJQUFJQyxJQUFJLENBQUNkLFNBQVMsRUFBRUcsWUFBWSxFQUFFRyxHQUFHLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdC10YXN0cm9waGUvLi9zcmMvaW5kZXguY3NzPzgwNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.css\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.css"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;