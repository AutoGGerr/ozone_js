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

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/price */ \"./src/modules/price.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_price__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://ozon/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/cart.js"
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n    const cartBtn = document.getElementById('cart')\r\n    const cartModal = document.querySelector('.cart')\r\n    const cartCloseBtn = cartModal.querySelector('.cart-close')\r\n\r\n    const openCart = () => {\r\n        cartModal.style.display = 'flex'\r\n    }\r\n\r\n    const closeCart = () => {\r\n        cartModal.style.display = ''\r\n    }\r\n\r\n    cartBtn.addEventListener('click', openCart)\r\n    cartCloseBtn.addEventListener('click', closeCart)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?\n}");

/***/ },

/***/ "./src/modules/catalog.js"
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const btnCatalog = document.querySelector('.catalog-button > button')\r\n    const catalogModal = document.querySelector('.catalog')\r\n    const catalogModalItem = document.querySelectorAll('.catalog li')\r\n\r\n    let isOpen = false\r\n\r\n    btnCatalog.addEventListener('click', () => {\r\n        isOpen = !isOpen\r\n        if(isOpen){\r\n            catalogModal.style.display = 'block'\r\n        } else{\r\n            catalogModal.style.display = ''\r\n        }\r\n    })\r\n\r\n    catalogModalItem.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n        \r\n        const value = item.textContent\r\n        \r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, value))\r\n            })\r\n        })\r\n        \r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?\n}");

/***/ },

/***/ "./src/modules/filters.js"
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   priceFilter: () => (/* binding */ priceFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.title.includes(value)\r\n    })\r\n}\r\n\r\nconst categoryFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.category === value\r\n    })\r\n}\r\n\r\nconst priceFilter = (goods, valueMin, valueMax) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.price >= valueMin && goodsItem.price <= valueMax\r\n    })\r\n}\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?\n}");

/***/ },

/***/ "./src/modules/getData.js"
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\r\n    return fetch(\r\n        `https://js-project-ozon-default-rtdb.firebaseio.com/goods.json`\r\n    )\r\n        .then((response) => {\r\n            return response.json()\r\n        });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?\n}");

/***/ },

/***/ "./src/modules/load.js"
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    const cartBtn = document.getElementById('cart')\r\n\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data)\r\n    })   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?\n}");

/***/ },

/***/ "./src/modules/postData.js"
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/modules/load.js\");\n\r\n\r\nconst postData = () => {\r\n    return fetch('http://localhost:3000/goods', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n        title: \"Ведьмак 3\",\r\n        price: 3000,\r\n        sale: true,\r\n        img: \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\r\n        category: \"Игры и софт\"\r\n    }),\r\n    headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    })\r\n    .then(res => res.json())  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?\n}");

/***/ },

/***/ "./src/modules/price.js"
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst price = () => {\r\n    let valueMax = Infinity\r\n    let valueMin\r\n\r\n    const minSearchInput = document.getElementById('min') \r\n    const maxSearchInput = document.getElementById('max') \r\n\r\n    minSearchInput.addEventListener('input', (event) =>{\r\n        const priceMin = event.target.value\r\n        valueMin = Number(priceMin)\r\n\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, valueMax, valueMin))\r\n        })\r\n\r\n    })\r\n\r\n    maxSearchInput.addEventListener('input', (event) =>{\r\n        const priceMax = event.target.value\r\n        valueMax = Number(priceMax)\r\n\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, valueMin, valueMax))\r\n        })        \r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (price);\n\n//# sourceURL=webpack://ozon/./src/modules/price.js?\n}");

/***/ },

/***/ "./src/modules/renderGoods.js"
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods')\r\n\r\n    goodsWrapper.innerHTML = ''\r\n\r\n    goods.forEach((goodsItem)=> {\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n                    \t${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t\t\t\t\t<span class=\"card-img-top\"\r\n\t\t\t\t\t\t\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price}</div>\r\n\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n            `)\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?\n}");

/***/ },

/***/ "./src/modules/search.js"
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector('.search-wrapper_input') \r\n\r\n    searchInput.addEventListener('input', (event) =>{\r\n        const value = event.target.value\r\n\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;