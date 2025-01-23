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

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/***/ (() => {

eval("\ndocument.addEventListener('DOMContentLoaded', () => {\n    const button = document.getElementById('actionButton');\n    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {\n        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {\n            const activeTab = tabs[0];\n            if (activeTab.id) {\n                chrome.tabs.sendMessage(activeTab.id, { action: 'getData' }, (response) => {\n                    console.log('Response from content script:', response);\n                });\n            }\n        });\n    });\n});\n\n\n//# sourceURL=webpack://video-help/./src/popup.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/popup.ts"]();
/******/ 	
/******/ })()
;