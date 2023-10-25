/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader.js */ \"./src/js/dom-loader.js\");\n\r\n\r\nvar showSecret = false;\r\n\r\n_dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.secretButton.addEventListener('click', toggleSecretState);\r\nupdateSecretParagraph();\r\n\r\nfunction toggleSecretState() {\r\n    showSecret = !showSecret;\r\n    updateSecretParagraph();\r\n    updateSecretButton()\r\n}\r\n\r\nfunction updateSecretButton() {\r\n    if (showSecret) {\r\n        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.secretButton.textContent = 'Hide the Secret';\r\n    } else {\r\n        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.secretButton.textContent = 'Show the Secret';\r\n    }\r\n}\r\n\r\nfunction updateSecretParagraph() {\r\n    if (showSecret) {\r\n        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.secretParagraph.style.display = 'block';\r\n    } else {\r\n        _dom_loader_js__WEBPACK_IMPORTED_MODULE_0__.secretParagraph.style.display = 'none';\r\n    }\r\n}\n\n//# sourceURL=webpack://yt-webpack2-basics-01-starting-app/./src/js/app.js?");

/***/ }),

/***/ "./src/js/dom-loader.js":
/*!******************************!*\
  !*** ./src/js/dom-loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   secretButton: () => (/* binding */ secretButton),\n/* harmony export */   secretParagraph: () => (/* binding */ secretParagraph)\n/* harmony export */ });\nvar secretButton = document.querySelector('#secret-button');\r\nvar secretParagraph = document.querySelector('#secret-paragraph');\r\n\n\n//# sourceURL=webpack://yt-webpack2-basics-01-starting-app/./src/js/dom-loader.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;