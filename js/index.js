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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./launcher.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./launcher.ts":
/*!*********************!*\
  !*** ./launcher.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./scss/view/page.scss */ "./scss/view/page.scss");
var Page_1 = __webpack_require__(/*! ./ts/view/Page */ "./ts/view/Page.ts");
__webpack_require__(/*! ./scss/view/message-box.scss */ "./scss/view/message-box.scss");
var MessageBox_1 = __webpack_require__(/*! ./ts/view/MessageBox */ "./ts/view/MessageBox.ts");
__webpack_require__(/*! ./scss/page/main-page.scss */ "./scss/page/main-page.scss");
__webpack_require__(/*! ./ts/page/MainPage */ "./ts/page/MainPage.ts");
__webpack_require__(/*! ./scss/page/game-page.scss */ "./scss/page/game-page.scss");
__webpack_require__(/*! ./ts/page/GamePage */ "./ts/page/GamePage.ts");
__webpack_require__(/*! ./scss/page/help-page.scss */ "./scss/page/help-page.scss");
__webpack_require__(/*! ./ts/page/HelpPage */ "./ts/page/HelpPage.ts");
__webpack_require__(/*! ./scss/view/relati-effect.scss */ "./scss/view/relati-effect.scss");
if (!location.hash)
    Page_1.Page.switchTo("main");
window.MessageBox = MessageBox_1.MessageBox;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/page/game-page.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js!./scss/page/game-page.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../svg/player-O.svg */ "./svg/player-O.svg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../svg/player-X.svg */ "./svg/player-X.svg"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../svg/player-vs.svg */ "./svg/player-vs.svg"));

// Module
exports.push([module.i, "#game-page #game-players {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 60px; }\n\n#game-page #player-O,\n#game-page #player-X,\n#game-page #player-vs {\n  width: 50px;\n  height: 50px;\n  margin: 5px; }\n\n#game-page #player-O,\n#game-page #player-X {\n  box-sizing: border-box;\n  border-radius: 50px;\n  border-width: 5px;\n  border-style: solid; }\n\n#game-page #player-O::after,\n#game-page #player-X::after {\n  content: \"\";\n  display: block;\n  width: 20px;\n  height: 20px;\n  margin-top: 25px;\n  margin-left: 25px; }\n\n#game-page #player-O {\n  border-color: crimson; }\n\n#game-page #player-O::after {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n\n#game-page #player-X {\n  border-color: royalblue; }\n\n#game-page #player-X::after {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + "); }\n\n#game-page #player-vs {\n  background-image: url(" + ___CSS_LOADER_URL___2___ + "); }\n\n#game-page #game-board {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100% - 120px); }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/page/help-page.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js!./scss/page/help-page.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../svg/btn/prev.svg */ "./svg/btn/prev.svg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../svg/btn/next.svg */ "./svg/btn/next.svg"));

// Module
exports.push([module.i, "#help-page #help-desc {\n  width: 100%;\n  height: 60px; }\n\n#help-page #help-prev {\n  background-color: royalblue;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n\n#help-page #help-next {\n  background-color: crimson;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + "); }\n\n#help-page #help-board {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100% - 120px); }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/page/main-page.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js!./scss/page/main-page.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../svg/btn/play.svg */ "./svg/btn/play.svg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../svg/btn/help.svg */ "./svg/btn/help.svg"));

// Module
exports.push([module.i, "#main-page {\n  justify-content: center; }\n\n#main-page #main-title {\n  font-size: 90px;\n  font-family: sans-serif; }\n\n#main-page .to-game-page {\n  background-color: crimson;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n\n#main-page .to-help-page {\n  background-color: royalblue;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + "); }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/view/message-box.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js!./scss/view/message-box.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../svg/btn/accept.svg */ "./svg/btn/accept.svg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../svg/btn/reject.svg */ "./svg/btn/reject.svg"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../svg/btn/verify.svg */ "./svg/btn/verify.svg"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../../svg/message/confirm.svg */ "./svg/message/confirm.svg"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../../svg/message/owin.svg */ "./svg/message/owin.svg"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../../svg/message/xwin.svg */ "./svg/message/xwin.svg"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../../svg/message/draw.svg */ "./svg/message/draw.svg"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../../svg/message/wait.svg */ "./svg/message/wait.svg"));

// Module
exports.push([module.i, "#message-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  color: #888;\n  background-color: #f2f2f2;\n  width: 300px;\n  height: 200px;\n  position: fixed;\n  top: calc(50vh - 100px);\n  left: calc(50vw - 150px);\n  border-width: 2px;\n  border-color: #888;\n  border-style: solid;\n  border-radius: 5px;\n  box-sizing: border-box;\n  animation: message-box-show 0.25s; }\n\n#message-box.none,\n#message-box > *,\n#message-box .btn {\n  display: none; }\n\n#message-box.confirm .controls,\n#message-box.draw .controls,\n#message-box.owin .controls,\n#message-box.xwin .controls {\n  display: flex;\n  margin-top: 5px; }\n\n#message-box .controls .btn {\n  width: 45px;\n  height: 45px;\n  background-size: 40px; }\n\n#message-box.accept #message-accept,\n#message-box.reject #message-reject,\n#message-box.verify #message-verify {\n  display: block; }\n\n#message-box #message-accept {\n  background-color: crimson;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n\n#message-box #message-reject {\n  background-color: royalblue;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + "); }\n\n#message-box #message-verify {\n  background-color: seagreen;\n  background-image: url(" + ___CSS_LOADER_URL___2___ + "); }\n\n#message-box .confirm {\n  background-image: url(" + ___CSS_LOADER_URL___3___ + "); }\n\n#message-box .owin {\n  background-image: url(" + ___CSS_LOADER_URL___4___ + "); }\n\n#message-box .xwin {\n  background-image: url(" + ___CSS_LOADER_URL___5___ + "); }\n\n#message-box .draw {\n  background-image: url(" + ___CSS_LOADER_URL___6___ + "); }\n\n#message-box.confirm .confirm,\n#message-box.draw .draw,\n#message-box.owin .owin,\n#message-box.xwin .xwin {\n  display: block; }\n\n#message-box .message-icon {\n  width: 100%;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 60px; }\n\n#message-box #message-content {\n  display: block;\n  font-size: 14px; }\n\n#message-box.wait .wait {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n#message-box .wait::before {\n  content: \"\";\n  display: block;\n  width: 60px;\n  height: 60px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 60px;\n  background-image: url(" + ___CSS_LOADER_URL___7___ + ");\n  animation: rotate 0.5s infinite; }\n\n@keyframes message-box-show {\n  from {\n    transform: scale(0); } }\n\n@keyframes rotate {\n  from {\n    transform: rotate(180deg); } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/view/page.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js!./scss/view/page.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../svg/btn/exit.svg */ "./svg/btn/exit.svg"));

// Module
exports.push([module.i, "* {\n  user-select: none; }\n\nhtml,\nbody {\n  margin: 0;\n  width: 100vw;\n  height: 100vh; }\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f2f2f2; }\n\n.page-container {\n  color: #888;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  position: relative; }\n\n.page-container > .page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: -100%;\n  transition: left 0.5s; }\n\n.page-container > .page.active {\n  left: 0%; }\n\n.page-container > .page.active ~ .page {\n  left: 100%; }\n\n.page-container .controls {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 200px;\n  height: 60px; }\n\n.page-container .btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 5px;\n  background-color: #888;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: transform 0.5s; }\n\n.page-container .btn:active {\n  transform: scale(0.8); }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/view/relati-effect.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js!./scss/view/relati-effect.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "svg .relati-effect-line {\n  stroke-dashoffset: 0;\n  stroke-dasharray: 15;\n  opacity: 0.3;\n  animation: relati-effect-line 0.25s linear; }\n\n@keyframes relati-effect-line {\n  from {\n    stroke-dashoffset: 15; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./scss/page/game-page.scss":
/*!**********************************!*\
  !*** ./scss/page/game-page.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js!./game-page.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/page/game-page.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scss/page/help-page.scss":
/*!**********************************!*\
  !*** ./scss/page/help-page.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js!./help-page.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/page/help-page.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scss/page/main-page.scss":
/*!**********************************!*\
  !*** ./scss/page/main-page.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js!./main-page.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/page/main-page.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scss/view/message-box.scss":
/*!************************************!*\
  !*** ./scss/view/message-box.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js!./message-box.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/view/message-box.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scss/view/page.scss":
/*!*****************************!*\
  !*** ./scss/view/page.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js!./page.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/view/page.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scss/view/relati-effect.scss":
/*!**************************************!*\
  !*** ./scss/view/relati-effect.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js!./relati-effect.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scss/view/relati-effect.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./svg/btn/accept.svg":
/*!****************************!*\
  !*** ./svg/btn/accept.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjEyLjUiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlPSIjZjJmMmYyIiBmaWxsPSJub25lIj48L2NpcmNsZT4KICAgIDxzdHlsZT5zdmc6dGFyZ2V0IHsgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjsgfTwvc3R5bGU+Cjwvc3ZnPg=="

/***/ }),

/***/ "./svg/btn/exit.svg":
/*!**************************!*\
  !*** ./svg/btn/exit.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0gMjUgMTUgViAxMCBIIDEwIFYgNDAgSCAyNSBWIDM1IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZT0iI2YyZjJmMiIgZmlsbD0ibm9uZSI+PC9wYXRoPgogICAgPHBhdGggZD0iTSAxNy41IDI1IEggMzcuNSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2U9IiNmMmYyZjIiIGZpbGw9Im5vbmUiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0gMzAgMTUgTCA0MCAyNSBMIDMwIDM1IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZT0iI2YyZjJmMiIgZmlsbD0ibm9uZSI+PC9wYXRoPgogICAgPHN0eWxlPnN2Zzp0YXJnZXQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4OyB9PC9zdHlsZT4KPC9zdmc+"

/***/ }),

/***/ "./svg/btn/help.svg":
/*!**************************!*\
  !*** ./svg/btn/help.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0gMTggMjAuNSBBIDYuNCA2LjQgMCAxIDEgMjUgMjYuNSBWIDMwIiBzdHJva2U9IiNmMmYyZjIiIHN0cm9rZS13aWR0aD0iNSIgZmlsbD0ibm9uZSI+PC9wYXRoPgogICAgPGNpcmNsZSBjeD0iMjUiIGN5PSIzNSIgcj0iMi40IiBmaWxsPSIjZjJmMmYyIj48L2NpcmNsZT4KICAgIDxzdHlsZT5zdmc6dGFyZ2V0IHsgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlOyB9PC9zdHlsZT4KPC9zdmc+"

/***/ }),

/***/ "./svg/btn/next.svg":
/*!**************************!*\
  !*** ./svg/btn/next.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0gMTcuNSAxMCBMIDMyLjUgMjUgTCAxNy41IDQwIiBzdHJva2U9IiNmMmYyZjIiIHN0cm9rZS13aWR0aD0iNSIgZmlsbD0ibm9uZSI+PC9wYXRoPgogICAgPHN0eWxlPnN2Zzp0YXJnZXQgeyBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7IH08L3N0eWxlPgo8L3N2Zz4="

/***/ }),

/***/ "./svg/btn/play.svg":
/*!**************************!*\
  !*** ./svg/btn/play.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0gMTIuNSAxMi41IEwgMzcuNSAyNSBMIDEyLjUgMzcuNSBaIiBmaWxsPSIjZjJmMmYyIj48L3BhdGg+CiAgICA8c3R5bGU+c3ZnOnRhcmdldCB7IGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247IH08L3N0eWxlPgo8L3N2Zz4="

/***/ }),

/***/ "./svg/btn/prev.svg":
/*!**************************!*\
  !*** ./svg/btn/prev.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0gMzIuNSAxMCBMIDE3LjUgMjUgTCAzMi41IDQwIiBzdHJva2U9IiNmMmYyZjIiIHN0cm9rZS13aWR0aD0iNSIgZmlsbD0ibm9uZSI+PC9wYXRoPgogICAgPHN0eWxlPnN2Zzp0YXJnZXQgeyBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uOyB9PC9zdHlsZT4KPC9zdmc+"

/***/ }),

/***/ "./svg/btn/reject.svg":
/*!****************************!*\
  !*** ./svg/btn/reject.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0gMTIuNSAxMi41IEwgMzcuNSAzNy41IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZT0iI2YyZjJmMiI+PC9wYXRoPgogICAgPHBhdGggZD0iTSAxMi41IDM3LjUgTCAzNy41IDEyLjUiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlPSIjZjJmMmYyIj48L3BhdGg+CiAgICA8c3R5bGU+c3ZnOnRhcmdldCB7IGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTsgfTwvc3R5bGU+Cjwvc3ZnPg=="

/***/ }),

/***/ "./svg/btn/verify.svg":
/*!****************************!*\
  !*** ./svg/btn/verify.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0gMTAgMjUgTCAyMCAzNSBMIDQwIDE1IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZT0iI2YyZjJmMiIgZmlsbD0ibm9uZSI+PC9wYXRoPgogICAgPHN0eWxlPnN2Zzp0YXJnZXQgeyBiYWNrZ3JvdW5kLWNvbG9yOiBzZWFncmVlbjsgfTwvc3R5bGU+Cjwvc3ZnPg=="

/***/ }),

/***/ "./svg/message/confirm.svg":
/*!*********************************!*\
  !*** ./svg/message/confirm.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0gMTggMjAuNSBBIDYuNCA2LjQgMCAxIDEgMjUgMjYuNSBWIDMwIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iNSIgZmlsbD0ibm9uZSI+PC9wYXRoPgogICAgPGNpcmNsZSBjeD0iMjUiIGN5PSIzNSIgcj0iMi40IiBmaWxsPSIjODg4Ij48L2NpcmNsZT4KICAgIDxzdHlsZT5zdmc6dGFyZ2V0IHsgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgfTwvc3R5bGU+Cjwvc3ZnPg=="

/***/ }),

/***/ "./svg/message/draw.svg":
/*!******************************!*\
  !*** ./svg/message/draw.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0gMTAgMTAgTCA0MCA0MCBNIDQwIDEwIEwgMTAgNDAiIHN0cm9rZT0ic2VhZ3JlZW4iIHN0cm9rZS13aWR0aD0iMTIiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0gMTAgMTAgTCA0MCA0MCBNIDQwIDEwIEwgMTAgNDAiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLXdpZHRoPSI2Ij48L3BhdGg+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjUiIGhlaWdodD0iNTAiIGZpbGw9IiNmMmYyZjIiLz4KICAgIDxwYXRoIGQ9Ik0gMjUgMjUgbSAwIC0xNSBhIDE1IDE1IDAgMCAwLCAwIDMwIiBzdHJva2U9InNlYWdyZWVuIiBzdHJva2Utd2lkdGg9IjEyIj48L3BhdGg+CiAgICA8cGF0aCBkPSJNIDI1IDI1IG0gMCAtMTUgYSAxNSAxNSAwIDAgMCwgMCAzMCIgc3Ryb2tlPSIjZjJmMmYyIiBzdHJva2Utd2lkdGg9IjYiPjwvcGF0aD4KICAgIDxzdHlsZT5zdmc6dGFyZ2V0IHsgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgfTwvc3R5bGU+Cjwvc3ZnPg=="

/***/ }),

/***/ "./svg/message/owin.svg":
/*!******************************!*\
  !*** ./svg/message/owin.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0gMjUgMjUgbSAwIC0xNSBhIDE1IDE1IDAgMCAxLCAwIDMwIGEgMTUgMTUgMCAwIDEsIDAgLTMwIiBzdHJva2U9ImNyaW1zb24iIHN0cm9rZS13aWR0aD0iMTIiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0gMjUgMjUgbSAwIC0xNSBhIDE1IDE1IDAgMCAxLCAwIDMwIGEgMTUgMTUgMCAwIDEsIDAgLTMwIiBzdHJva2U9IiNmMmYyZjIiIHN0cm9rZS13aWR0aD0iNiI+PC9wYXRoPgogICAgPHN0eWxlPnN2Zzp0YXJnZXQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOyB9PC9zdHlsZT4KPC9zdmc+"

/***/ }),

/***/ "./svg/message/wait.svg":
/*!******************************!*\
  !*** ./svg/message/wait.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMzAiIHI9IjEwIiBmaWxsPSJjcmltc29uIi8+CiAgICA8Y2lyY2xlIGN4PSI0NSIgY3k9IjMwIiByPSIxMCIgZmlsbD0icm95YWxibHVlIi8+CiAgICA8c3R5bGU+c3ZnOnRhcmdldCB7IGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7IH08L3N0eWxlPgo8L3N2Zz4="

/***/ }),

/***/ "./svg/message/xwin.svg":
/*!******************************!*\
  !*** ./svg/message/xwin.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0gMTAgMTAgTCA0MCA0MCBNIDQwIDEwIEwgMTAgNDAiIHN0cm9rZT0icm95YWxibHVlIiBzdHJva2Utd2lkdGg9IjEyIj48L3BhdGg+CiAgICA8cGF0aCBkPSJNIDEwIDEwIEwgNDAgNDAgTSA0MCAxMCBMIDEwIDQwIiBzdHJva2U9IiNmMmYyZjIiIHN0cm9rZS13aWR0aD0iNiI+PC9wYXRoPgogICAgPHN0eWxlPnN2Zzp0YXJnZXQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOyB9PC9zdHlsZT4KPC9zdmc+"

/***/ }),

/***/ "./svg/player-O.svg":
/*!**************************!*\
  !*** ./svg/player-O.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0gMTAgMTAgbSAwIC02IGEgNiA2IDAgMCAxLCAwIDEyIGEgNiA2IDAgMCAxLCAwIC0xMiIgc3Ryb2tlPSIjZjJmMmYyIiBzdHJva2Utd2lkdGg9IjcuMiI+PC9wYXRoPgogICAgPHBhdGggZD0iTSAxMCAxMCBtIDAgLTYgYSA2IDYgMCAwIDEsIDAgMTIgYSA2IDYgMCAwIDEsIDAgLTEyIiBzdHJva2U9ImNyaW1zb24iIHN0cm9rZS13aWR0aD0iNC44Ij48L3BhdGg+CiAgICA8cGF0aCBkPSJNIDEwIDEwIG0gMCAtNiBhIDYgNiAwIDAgMSwgMCAxMiBhIDYgNiAwIDAgMSwgMCAtMTIiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLXdpZHRoPSIyLjQiPjwvcGF0aD4KICAgIDxzdHlsZT5zdmc6dGFyZ2V0IHsgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgfTwvc3R5bGU+Cjwvc3ZnPg=="

/***/ }),

/***/ "./svg/player-X.svg":
/*!**************************!*\
  !*** ./svg/player-X.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0gMyAzIEwgMTcgMTcgTSAxNyAzIEwgMyAxNyIgc3Ryb2tlPSIjZjJmMmYyIiBzdHJva2Utd2lkdGg9IjcuMiI+PC9wYXRoPgogICAgPHBhdGggZD0iTSA0IDQgTCAxNiAxNiBNIDE2IDQgTCA0IDE2IiBzdHJva2U9InJveWFsYmx1ZSIgc3Ryb2tlLXdpZHRoPSI0LjgiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0gNCA0IEwgMTYgMTYgTSAxNiA0IEwgNCAxNiIgc3Ryb2tlPSIjZjJmMmYyIiBzdHJva2Utd2lkdGg9IjIuNCI+PC9wYXRoPgogICAgPHN0eWxlPnN2Zzp0YXJnZXQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOyB9PC9zdHlsZT4KPC9zdmc+"

/***/ }),

/***/ "./svg/player-vs.svg":
/*!***************************!*\
  !*** ./svg/player-vs.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZGVidWciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMjAgTCAyNSAyNSBMIDQwIDM1IEwgMjUgNDAiIHN0cm9rZT0icm95YWxibHVlIiBzdHJva2Utd2lkdGg9IjUiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0gNyAxMCBMIDE3IDMwIEwgMjcgMTAiIHN0cm9rZT0iY3JpbXNvbiIgc3Ryb2tlLXdpZHRoPSI1Ij48L3BhdGg+CiAgICA8c3R5bGU+c3ZnOnRhcmdldCB7IGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7IH08L3N0eWxlPgo8L3N2Zz4="

/***/ }),

/***/ "./ts/core/GridBoard.ts":
/*!******************************!*\
  !*** ./ts/core/GridBoard.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 棋盤格方向
 * C: (x = 0, y = 0)
 * F: (x = x, y - 1)
 * B: (x = x, y + 1)
 * R: (x + 1, y = y)
 * L: (x - 1, y = y)
 */
var GRID_DRCT;
(function (GRID_DRCT) {
    GRID_DRCT[GRID_DRCT["DRCT_C"] = 0] = "DRCT_C";
    GRID_DRCT[GRID_DRCT["DRCT_F"] = 4096] = "DRCT_F";
    GRID_DRCT[GRID_DRCT["DRCT_B"] = 256] = "DRCT_B";
    GRID_DRCT[GRID_DRCT["DRCT_R"] = 16] = "DRCT_R";
    GRID_DRCT[GRID_DRCT["DRCT_L"] = 1] = "DRCT_L";
    GRID_DRCT[GRID_DRCT["DRCT_FR"] = 4112] = "DRCT_FR";
    GRID_DRCT[GRID_DRCT["DRCT_FL"] = 4097] = "DRCT_FL";
    GRID_DRCT[GRID_DRCT["DRCT_BR"] = 272] = "DRCT_BR";
    GRID_DRCT[GRID_DRCT["DRCT_BL"] = 257] = "DRCT_BL";
    GRID_DRCT[GRID_DRCT["DRCT_2F"] = 8192] = "DRCT_2F";
    GRID_DRCT[GRID_DRCT["DRCT_2B"] = 512] = "DRCT_2B";
    GRID_DRCT[GRID_DRCT["DRCT_2R"] = 32] = "DRCT_2R";
    GRID_DRCT[GRID_DRCT["DRCT_2L"] = 2] = "DRCT_2L";
    GRID_DRCT[GRID_DRCT["DRCT_2FR"] = 8224] = "DRCT_2FR";
    GRID_DRCT[GRID_DRCT["DRCT_2FL"] = 8194] = "DRCT_2FL";
    GRID_DRCT[GRID_DRCT["DRCT_2BR"] = 544] = "DRCT_2BR";
    GRID_DRCT[GRID_DRCT["DRCT_2BL"] = 514] = "DRCT_2BL";
    GRID_DRCT[GRID_DRCT["DRCT_FFR"] = 8208] = "DRCT_FFR";
    GRID_DRCT[GRID_DRCT["DRCT_FFL"] = 8193] = "DRCT_FFL";
    GRID_DRCT[GRID_DRCT["DRCT_BBR"] = 528] = "DRCT_BBR";
    GRID_DRCT[GRID_DRCT["DRCT_BBL"] = 513] = "DRCT_BBL";
    GRID_DRCT[GRID_DRCT["DRCT_FRR"] = 4128] = "DRCT_FRR";
    GRID_DRCT[GRID_DRCT["DRCT_FLL"] = 4098] = "DRCT_FLL";
    GRID_DRCT[GRID_DRCT["DRCT_BRR"] = 288] = "DRCT_BRR";
    GRID_DRCT[GRID_DRCT["DRCT_BLL"] = 258] = "DRCT_BLL";
})(GRID_DRCT = exports.GRID_DRCT || (exports.GRID_DRCT = {}));
/** 棋盤格 */
var Grid = /** @class */ (function () {
    function Grid(
    /** 所屬棋盤 */
    board, 
    /** X座標 */
    x, 
    /** Y座標 */
    y) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.i = x * board.height + y;
    }
    /**
     * 取得相對位置的棋盤格
     * @param drct 方向，使用 GRID_DRCT 可簡單取得
     */
    Grid.prototype.getGrid = function (drct) {
        var f = (0xF000 & drct) >> 12;
        var b = (0x0F00 & drct) >> 8;
        var r = (0x00F0 & drct) >> 4;
        var l = (0x000F & drct);
        var x = this.x + r - l;
        var y = this.y + b - f;
        return this.board.getGrid(x, y);
    };
    return Grid;
}());
exports.Grid = Grid;
/** 棋盤 */
var GridBoard = /** @class */ (function () {
    function GridBoard(
    /** 棋盤寬度 */
    width, 
    /** 棋盤高度 */
    height) {
        this.width = width;
        this.height = height;
        var grids = [];
        this.grids = grids;
        this.length = width * height;
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                var grid = new Grid(this, x, y);
                grids[grid.i] = grid;
            }
        }
    }
    /**
     * 取得絕對位置的棋盤格
     * @param x X座標
     * @param y Y座標
     */
    GridBoard.prototype.getGrid = function (x, y) {
        if (x < 0 || x >= this.width ||
            y < 0 || y >= this.height)
            return null;
        var i = x * this.height + y;
        return this.grids[i];
    };
    return GridBoard;
}());
exports.GridBoard = GridBoard;


/***/ }),

/***/ "./ts/core/SVGProcess.ts":
/*!*******************************!*\
  !*** ./ts/core/SVGProcess.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SVGNS = "http://www.w3.org/2000/svg";
/**
 * 建立SVG元素
 * @param tagName SVG標籤名稱
 * @param attribute SVG屬性
 */
function createSVG(tagName, attribute) {
    var element = document.createElementNS(SVGNS, tagName);
    if (attribute)
        updateSVG(element, attribute);
    return element;
}
exports.createSVG = createSVG;
/**
 * 變更SVG屬性
 * @param element SVG元素
 * @param attribute SVG屬性
 */
function updateSVG(element, attribute) {
    for (var name_1 in attribute) {
        element.setAttribute(name_1, attribute[name_1]);
    }
}
exports.updateSVG = updateSVG;
/**
 * 增加SVG子元素
 * @param element SVG元素
 * @param childElements SVG子元素
 */
function appendSVGChild(element, childElements) {
    for (var _i = 0, childElements_1 = childElements; _i < childElements_1.length; _i++) {
        var childElement = childElements_1[_i];
        element.appendChild(childElement);
    }
}
exports.appendSVGChild = appendSVGChild;
/**
 * 移除SVG子元素
 * @param element SVG元素
 */
function removeSVGChild(element) {
    var elementCount = element.childNodes.length;
    while (elementCount-- > 0) {
        element.removeChild(element.childNodes[0]);
    }
}
exports.removeSVGChild = removeSVGChild;


/***/ }),

/***/ "./ts/main/RelatiBoard.ts":
/*!********************************!*\
  !*** ./ts/main/RelatiBoard.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GridBoard_1 = __webpack_require__(/*! ../core/GridBoard */ "./ts/core/GridBoard.ts");
var RelatiGrid = /** @class */ (function (_super) {
    __extends(RelatiGrid, _super);
    function RelatiGrid(board, x, y) {
        var _this = _super.call(this, board, x, y) || this;
        /** 符號 */
        _this.symbol = "";
        /** 狀態存儲 */
        _this.status = {};
        return _this;
    }
    RelatiGrid.prototype.is = function (statusName, matchType) {
        if (typeof statusName === "string")
            return this.status[statusName];
        var statusNameList = statusName;
        if (matchType === "all") {
            for (var _i = 0, statusNameList_1 = statusNameList; _i < statusNameList_1.length; _i++) {
                var status_1 = statusNameList_1[_i];
                if (!this.status[status_1])
                    return false;
            }
            return true;
        }
        else {
            for (var _a = 0, statusNameList_2 = statusNameList; _a < statusNameList_2.length; _a++) {
                var status_2 = statusNameList_2[_a];
                if (this.status[status_2])
                    return true;
            }
            return false;
        }
    };
    RelatiGrid.prototype.gain = function (statusName) {
        if (typeof statusName === "string") {
            return this.status[statusName] = true;
        }
        var statusNameList = statusName;
        for (var _i = 0, statusNameList_3 = statusNameList; _i < statusNameList_3.length; _i++) {
            var status_3 = statusNameList_3[_i];
            this.status[status_3] = true;
        }
    };
    RelatiGrid.prototype.lost = function (statusName) {
        if (typeof statusName === "string") {
            return this.status[statusName] = false;
        }
        var statusNameList = statusName;
        for (var _i = 0, statusNameList_4 = statusNameList; _i < statusNameList_4.length; _i++) {
            var status_4 = statusNameList_4[_i];
            this.status[status_4] = false;
        }
    };
    Object.defineProperty(RelatiGrid.prototype, "isSpace", {
        /** 該格視為空格 */
        get: function () {
            return (this.symbol === "" ||
                !this.is(["relati-receiver", "relati-launcher"], "any"));
        },
        enumerable: true,
        configurable: true
    });
    return RelatiGrid;
}(GridBoard_1.Grid));
exports.RelatiGrid = RelatiGrid;
var RelatiBoard = /** @class */ (function (_super) {
    __extends(RelatiBoard, _super);
    function RelatiBoard(width, height) {
        var _this = _super.call(this, width, height) || this;
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                var grid = new RelatiGrid(_this, x, y);
                _this.grids[grid.i] = grid;
            }
        }
        return _this;
    }
    return RelatiBoard;
}(GridBoard_1.GridBoard));
exports.RelatiBoard = RelatiBoard;


/***/ }),

/***/ "./ts/main/RelatiDefs.ts":
/*!*******************************!*\
  !*** ./ts/main/RelatiDefs.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatiStatusList = [
    "relati-launcher",
    "relati-repeater",
    "relati-receiver"
];
exports.AllRelatiStatus = exports.RelatiStatusList;
exports.RelatiSymbolList = ["", "O", "X"];


/***/ }),

/***/ "./ts/main/RelatiGame.ts":
/*!*******************************!*\
  !*** ./ts/main/RelatiGame.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var RelatiDefs_1 = __webpack_require__(/*! ./RelatiDefs */ "./ts/main/RelatiDefs.ts");
var WinnerDecision_1 = __webpack_require__(/*! ./rule/WinnerDecision */ "./ts/main/rule/WinnerDecision.ts");
var Relati_1 = __webpack_require__(/*! ./skill/Relati */ "./ts/main/skill/Relati.ts");
var Placement_1 = __webpack_require__(/*! ./skill/Placement */ "./ts/main/skill/Placement.ts");
/** 角色固有技能 */
var roleInitEffects = [];
/** 角色行動 */
var roleActions = [
    Placement_1.Placement
];
/** 角色觸發技能 */
var rolePassEffects = [
    Relati_1.DestoryRepeater,
    Relati_1.RestoreRepeater
];
/** 遊戲主體 */
var RelatiGame = /** @class */ (function () {
    function RelatiGame(
    /** 棋盤 */
    board, 
    /** 玩家 */
    players, 
    /** Relati路徑類型 */
    routeType) {
        this.board = board;
        this.players = players;
        this.routeType = routeType;
        /** 回合 */
        this.turn = 0;
        /** 紀錄 */
        this.history = [];
        this.start();
    }
    /** 開始 */
    RelatiGame.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gameResult, grid, _i, roleInitEffects_1, effect, actionValid, _a, roleActions_1, action, _b, rolePassEffects_1, effect;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        gameResult = WinnerDecision_1.GAME_RESULT_NONE;
                        if (this.onstart)
                            this.onstart();
                        _c.label = 1;
                    case 1:
                        if (!(gameResult == WinnerDecision_1.GAME_RESULT_NONE)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.gridSelect()];
                    case 2:
                        grid = _c.sent();
                        if (this.onturnstart)
                            this.onturnstart(grid);
                        this.selectedGrid = grid;
                        _i = 0, roleInitEffects_1 = roleInitEffects;
                        _c.label = 3;
                    case 3:
                        if (!(_i < roleInitEffects_1.length)) return [3 /*break*/, 6];
                        effect = roleInitEffects_1[_i];
                        return [4 /*yield*/, effect.do(this)];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        this.selectedGrid = grid;
                        actionValid = false;
                        _a = 0, roleActions_1 = roleActions;
                        _c.label = 7;
                    case 7:
                        if (!(_a < roleActions_1.length)) return [3 /*break*/, 10];
                        action = roleActions_1[_a];
                        return [4 /*yield*/, action.do(grid, this)];
                    case 8:
                        if (_c.sent()) {
                            actionValid = true;
                            return [3 /*break*/, 10];
                        }
                        _c.label = 9;
                    case 9:
                        _a++;
                        return [3 /*break*/, 7];
                    case 10:
                        if (!actionValid)
                            return [3 /*break*/, 1];
                        this.selectedGrid = grid;
                        _b = 0, rolePassEffects_1 = rolePassEffects;
                        _c.label = 11;
                    case 11:
                        if (!(_b < rolePassEffects_1.length)) return [3 /*break*/, 14];
                        effect = rolePassEffects_1[_b];
                        return [4 /*yield*/, effect.do(this)];
                    case 12:
                        _c.sent();
                        _c.label = 13;
                    case 13:
                        _b++;
                        return [3 /*break*/, 11];
                    case 14:
                        delete this.selectedGrid;
                        gameResult = WinnerDecision_1.WinnerDecision.state(this);
                        if (this.onturnend)
                            this.onturnend(grid);
                        return [3 /*break*/, 1];
                    case 15:
                        if (this.onover)
                            this.onover(gameResult);
                        return [2 /*return*/, gameResult];
                }
            });
        });
    };
    /** 重新開始 */
    RelatiGame.prototype.restart = function () {
        this.turn = 0;
        for (var _i = 0, _a = this.board.grids; _i < _a.length; _i++) {
            var grid = _a[_i];
            grid.symbol = "";
            grid.lost(RelatiDefs_1.AllRelatiStatus);
        }
        this.start();
    };
    /** 等待格子選取 */
    RelatiGame.prototype.gridSelect = function () {
        var _this = this;
        return new Promise(function (select) { return _this.selectGrid = select; });
    };
    Object.defineProperty(RelatiGame.prototype, "nowPlayer", {
        /** 目前玩家 */
        get: function () {
            return this.players[this.turn % 2];
        },
        enumerable: true,
        configurable: true
    });
    return RelatiGame;
}());
exports.RelatiGame = RelatiGame;


/***/ }),

/***/ "./ts/main/RelatiPlayer.ts":
/*!*********************************!*\
  !*** ./ts/main/RelatiPlayer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RelatiPlayer = /** @class */ (function () {
    function RelatiPlayer(symbol) {
        this.symbol = symbol;
        this.status = {};
        this.points = {};
        this.params = {};
    }
    return RelatiPlayer;
}());
exports.RelatiPlayer = RelatiPlayer;


/***/ }),

/***/ "./ts/main/rule/PlacementRule.ts":
/*!***************************************!*\
  !*** ./ts/main/rule/PlacementRule.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RelatiRouteRule_1 = __webpack_require__(/*! ./RelatiRouteRule */ "./ts/main/rule/RelatiRouteRule.ts");
var placementStatus = ["relati-repeater"];
/** 設置判定 */
exports.PlacementRule = {
    /**
     * 判定棋盤格是否可設置符號
     * @param grid 棋盤格
     * @param symbol 符號
     * @param routeType 連結路徑類型
     */
    allow: function (grid, symbol, routeType) {
        return grid.isSpace && RelatiRouteRule_1.RelatiRouteRule.allow(grid, symbol, placementStatus, routeType);
    },
    /**
     * 取得可設置符號的棋盤格
     * @param game 遊戲主體
     * @param symbol 符號
     * @param routeType 連結路徑類型
     */
    trace: function (game, symbol, routeType) {
        var grids = [];
        for (var _i = 0, _a = game.board.grids; _i < _a.length; _i++) {
            var grid = _a[_i];
            if (exports.PlacementRule.allow(grid, symbol, routeType || game.routeType))
                grids.push(grid);
        }
        return grids;
    }
};


/***/ }),

/***/ "./ts/main/rule/RelatiRouteRule.ts":
/*!*****************************************!*\
  !*** ./ts/main/rule/RelatiRouteRule.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridBoard_1 = __webpack_require__(/*! ../../core/GridBoard */ "./ts/core/GridBoard.ts");
var DRCT_F = GridBoard_1.GRID_DRCT.DRCT_F, DRCT_B = GridBoard_1.GRID_DRCT.DRCT_B, DRCT_R = GridBoard_1.GRID_DRCT.DRCT_R, DRCT_L = GridBoard_1.GRID_DRCT.DRCT_L, DRCT_FR = GridBoard_1.GRID_DRCT.DRCT_FR, DRCT_FL = GridBoard_1.GRID_DRCT.DRCT_FL, DRCT_BR = GridBoard_1.GRID_DRCT.DRCT_BR, DRCT_BL = GridBoard_1.GRID_DRCT.DRCT_BL, DRCT_2F = GridBoard_1.GRID_DRCT.DRCT_2F, DRCT_2B = GridBoard_1.GRID_DRCT.DRCT_2B, DRCT_2R = GridBoard_1.GRID_DRCT.DRCT_2R, DRCT_2L = GridBoard_1.GRID_DRCT.DRCT_2L, DRCT_2FR = GridBoard_1.GRID_DRCT.DRCT_2FR, DRCT_2FL = GridBoard_1.GRID_DRCT.DRCT_2FL, DRCT_2BR = GridBoard_1.GRID_DRCT.DRCT_2BR, DRCT_2BL = GridBoard_1.GRID_DRCT.DRCT_2BL, DRCT_FFR = GridBoard_1.GRID_DRCT.DRCT_FFR, DRCT_FFL = GridBoard_1.GRID_DRCT.DRCT_FFL, DRCT_BBR = GridBoard_1.GRID_DRCT.DRCT_BBR, DRCT_BBL = GridBoard_1.GRID_DRCT.DRCT_BBL, DRCT_FRR = GridBoard_1.GRID_DRCT.DRCT_FRR, DRCT_FLL = GridBoard_1.GRID_DRCT.DRCT_FLL, DRCT_BRR = GridBoard_1.GRID_DRCT.DRCT_BRR, DRCT_BLL = GridBoard_1.GRID_DRCT.DRCT_BLL;
/** 一般Relati路徑 */
var NORMAL_ROUTES = [
    DRCT_F, DRCT_B, DRCT_R, DRCT_L,
    DRCT_FR, DRCT_FL, DRCT_BR, DRCT_BL
];
/** 遠程Relati路徑 */
var REMOTE_NORMAL_ROUTES = [
    [DRCT_2F, DRCT_F],
    [DRCT_2B, DRCT_B],
    [DRCT_2R, DRCT_R],
    [DRCT_2L, DRCT_L],
    [DRCT_2FR, DRCT_FR],
    [DRCT_2FL, DRCT_FL],
    [DRCT_2BR, DRCT_BR],
    [DRCT_2BL, DRCT_BL]
];
/** 遠程穩定Relati路徑 */
var REMOTE_STABLE_ROUTES = [
    [DRCT_FFR, DRCT_2F, DRCT_F],
    [DRCT_FFR, DRCT_FR, DRCT_F],
    [DRCT_FFR, DRCT_FR, DRCT_R],
    [DRCT_FFL, DRCT_2F, DRCT_F],
    [DRCT_FFL, DRCT_FL, DRCT_F],
    [DRCT_FFL, DRCT_FL, DRCT_L],
    [DRCT_BBR, DRCT_2B, DRCT_B],
    [DRCT_BBR, DRCT_BR, DRCT_B],
    [DRCT_BBR, DRCT_BR, DRCT_R],
    [DRCT_BBL, DRCT_2B, DRCT_B],
    [DRCT_BBL, DRCT_BL, DRCT_B],
    [DRCT_BBL, DRCT_BL, DRCT_L],
    [DRCT_FRR, DRCT_FR, DRCT_F],
    [DRCT_FRR, DRCT_2R, DRCT_R],
    [DRCT_FRR, DRCT_FR, DRCT_R],
    [DRCT_FLL, DRCT_FL, DRCT_F],
    [DRCT_FLL, DRCT_2L, DRCT_L],
    [DRCT_FLL, DRCT_FL, DRCT_L],
    [DRCT_BRR, DRCT_BR, DRCT_B],
    [DRCT_BRR, DRCT_2R, DRCT_R],
    [DRCT_BRR, DRCT_BR, DRCT_R],
    [DRCT_BLL, DRCT_BL, DRCT_B],
    [DRCT_BLL, DRCT_2L, DRCT_L],
    [DRCT_BLL, DRCT_BL, DRCT_L]
];
/** 使用一般Relati路徑類型 */
exports.BY_NORMAL_RELATI = 0;
/** 使用通用Relati路徑類型 */
exports.BY_COMMON_RELATI = 1;
/** 連結路徑規範 */
exports.RelatiRouteRule = {
    /** 判斷是否符合連結路徑規範 */
    allow: function (grid, symbol, statusList, routeType) {
        switch (routeType) {
            case exports.BY_COMMON_RELATI:
                for (var i = 0; i < 24; i++) {
                    var targetGrid = grid.getGrid(REMOTE_STABLE_ROUTES[i][0]);
                    var middleGrid1 = grid.getGrid(REMOTE_STABLE_ROUTES[i][1]);
                    var middleGrid2 = grid.getGrid(REMOTE_STABLE_ROUTES[i][2]);
                    if (targetGrid &&
                        targetGrid.symbol == symbol &&
                        targetGrid.is(statusList, "any") &&
                        middleGrid1.isSpace &&
                        middleGrid2.isSpace)
                        return true;
                }
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(REMOTE_NORMAL_ROUTES[i][0]);
                    var middleGrid = grid.getGrid(REMOTE_NORMAL_ROUTES[i][1]);
                    if (targetGrid &&
                        targetGrid.symbol == symbol &&
                        targetGrid.is(statusList, "any") &&
                        middleGrid.isSpace)
                        return true;
                }
            case exports.BY_NORMAL_RELATI:
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(NORMAL_ROUTES[i]);
                    if (targetGrid &&
                        targetGrid.symbol == symbol &&
                        targetGrid.is(statusList, "any"))
                        return true;
                }
        }
        return false;
    },
    /** 取得符合連結路徑規範的路徑 */
    trace: function (grid, symbol, statusList, routeType) {
        var routes = [];
        switch (routeType) {
            case exports.BY_COMMON_RELATI:
                for (var i = 0; i < 24; i++) {
                    var targetGrid = grid.getGrid(REMOTE_STABLE_ROUTES[i][0]);
                    var middleGrid1 = grid.getGrid(REMOTE_STABLE_ROUTES[i][1]);
                    var middleGrid2 = grid.getGrid(REMOTE_STABLE_ROUTES[i][2]);
                    if (targetGrid &&
                        targetGrid.symbol == symbol &&
                        targetGrid.is(statusList, "any") &&
                        middleGrid1.isSpace &&
                        middleGrid2.isSpace)
                        routes.push({
                            type: "remote-stable",
                            grids: [targetGrid, middleGrid1, middleGrid2]
                        });
                }
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(REMOTE_NORMAL_ROUTES[i][0]);
                    var middleGrid = grid.getGrid(REMOTE_NORMAL_ROUTES[i][1]);
                    if (targetGrid &&
                        targetGrid.symbol == symbol &&
                        targetGrid.is(statusList, "any") &&
                        middleGrid.isSpace)
                        routes.push({
                            type: "remote-normal",
                            grids: [targetGrid, middleGrid]
                        });
                }
            case exports.BY_NORMAL_RELATI:
                for (var i = 0; i < 8; i++) {
                    var targetGrid = grid.getGrid(NORMAL_ROUTES[i]);
                    if (targetGrid &&
                        targetGrid.symbol == symbol &&
                        targetGrid.is(statusList, "any"))
                        routes.push({
                            type: "normal",
                            grids: [targetGrid]
                        });
                }
        }
        return routes;
    }
};


/***/ }),

/***/ "./ts/main/rule/WinnerDecision.ts":
/*!****************************************!*\
  !*** ./ts/main/rule/WinnerDecision.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlacementRule_1 = __webpack_require__(/*! ./PlacementRule */ "./ts/main/rule/PlacementRule.ts");
/** 尚無結果 */
exports.GAME_RESULT_NONE = 0;
/** 玩家O勝利 */
exports.GAME_RESULT_OWIN = 1;
/** 玩家X勝利 */
exports.GAME_RESULT_XWIN = 2;
/** 平手 */
exports.GAME_RESULT_DRAW = 3;
/** 勝負判定 */
exports.WinnerDecision = {
    /**
     * 判定遊戲是否已分出勝負
     * @param game 遊戲主體
     */
    state: function (game) {
        if (game.turn < 2)
            return exports.GAME_RESULT_NONE;
        var nowPlayer = game.nowPlayer;
        var playerOPlaceableGrids = PlacementRule_1.PlacementRule.trace(game, "O");
        var playerXPlaceableGrids = PlacementRule_1.PlacementRule.trace(game, "X");
        var playerOHasPlaceableGrid = playerOPlaceableGrids[0] != undefined;
        var playerXHasPlaceableGrid = playerXPlaceableGrids[0] != undefined;
        if (playerOHasPlaceableGrid &&
            playerXHasPlaceableGrid)
            return exports.GAME_RESULT_NONE;
        if (nowPlayer.symbol == "O") {
            if (playerOHasPlaceableGrid)
                return exports.GAME_RESULT_NONE;
            else if (playerXHasPlaceableGrid)
                return exports.GAME_RESULT_XWIN;
        }
        else if (nowPlayer.symbol == "X") {
            if (playerXHasPlaceableGrid)
                return exports.GAME_RESULT_NONE;
            else if (playerOHasPlaceableGrid)
                return exports.GAME_RESULT_OWIN;
        }
        return exports.GAME_RESULT_DRAW;
    }
};


/***/ }),

/***/ "./ts/main/skill/Placement.ts":
/*!************************************!*\
  !*** ./ts/main/skill/Placement.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlacementRule_1 = __webpack_require__(/*! ../rule/PlacementRule */ "./ts/main/rule/PlacementRule.ts");
exports.Placement = {
    do: function (grid, game) {
        if (!grid.isSpace)
            return false;
        var symbol = game.nowPlayer.symbol, routeType = game.routeType;
        if (game.turn < 2) {
            grid.symbol = symbol;
            grid.gain("relati-launcher");
        }
        else if (PlacementRule_1.PlacementRule.allow(grid, symbol, routeType)) {
            grid.symbol = symbol;
            grid.gain("relati-receiver");
        }
        else
            return false;
        game.history.push({
            turn: game.turn,
            type: "placement",
            grid: grid
        });
        game.turn++;
        return true;
    }
};


/***/ }),

/***/ "./ts/main/skill/Relati.ts":
/*!*********************************!*\
  !*** ./ts/main/skill/Relati.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RelatiRouteRule_1 = __webpack_require__(/*! ../rule/RelatiRouteRule */ "./ts/main/rule/RelatiRouteRule.ts");
var restoreStatus = ["relati-receiver"];
/**
 * 恢復棋盤格Relati的中繼機能
 * @param grid 棋盤格
 * @param routeType 路徑類型
 */
function restore(grid, routeType) {
    if (grid.is("relati-repeater"))
        return;
    grid.gain("relati-repeater");
    console.log(grid.x, grid.y);
    var traces = RelatiRouteRule_1.RelatiRouteRule.trace(grid, grid.symbol, restoreStatus, routeType);
    console.log(traces);
    for (var _i = 0, traces_1 = traces; _i < traces_1.length; _i++) {
        var route = traces_1[_i];
        restore(route.grids[0], routeType);
    }
}
/** 恢復Relati中繼機能 */
exports.RestoreRepeater = {
    do: function (_a) {
        var board = _a.board, routeType = _a.routeType;
        for (var _i = 0, _b = board.grids; _i < _b.length; _i++) {
            var grid = _b[_i];
            if (grid.is("relati-launcher")) {
                restore(grid, routeType);
            }
        }
    }
};
/** 破壞Relati中繼機能 */
exports.DestoryRepeater = {
    do: function (_a) {
        var board = _a.board;
        for (var _i = 0, _b = board.grids; _i < _b.length; _i++) {
            var grid = _b[_i];
            grid.lost("relati-repeater");
        }
    }
};


/***/ }),

/***/ "./ts/page/GamePage.ts":
/*!*****************************!*\
  !*** ./ts/page/GamePage.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(/*! ../view/Page */ "./ts/view/Page.ts");
var RelatiGame_1 = __webpack_require__(/*! ../main/RelatiGame */ "./ts/main/RelatiGame.ts");
var RelatiBoard_1 = __webpack_require__(/*! ../main/RelatiBoard */ "./ts/main/RelatiBoard.ts");
var RelatiPlayer_1 = __webpack_require__(/*! ../main/RelatiPlayer */ "./ts/main/RelatiPlayer.ts");
var RelatiRouteRule_1 = __webpack_require__(/*! ../main/rule/RelatiRouteRule */ "./ts/main/rule/RelatiRouteRule.ts");
var RelatiBoardView_1 = __webpack_require__(/*! ../view/RelatiBoardView */ "./ts/view/RelatiBoardView.ts");
var RelatiEffectView_1 = __webpack_require__(/*! ../view/RelatiEffectView */ "./ts/view/RelatiEffectView.ts");
var PlacementRule_1 = __webpack_require__(/*! ../main/rule/PlacementRule */ "./ts/main/rule/PlacementRule.ts");
var MessageBox_1 = __webpack_require__(/*! ../view/MessageBox */ "./ts/view/MessageBox.ts");
var toMainPageButton = document.getElementById("game-to-main");
toMainPageButton.addEventListener("click", function (event) {
    MessageBox_1.MessageBox.show("confirm accept reject", "確認離開？", function (message) {
        if (message == "accept")
            Page_1.Page.switchTo("main");
    });
});
var board = new RelatiBoard_1.RelatiBoard(9, 9);
var players = [new RelatiPlayer_1.RelatiPlayer("O"), new RelatiPlayer_1.RelatiPlayer("X")];
var game = new RelatiGame_1.RelatiGame(board, players, RelatiRouteRule_1.BY_COMMON_RELATI);
var container = document.getElementById("game-board");
var boardView = new RelatiBoardView_1.RelatiBoardView(game, container);
window.addEventListener("hashchange", function () {
    if (location.hash == "#game")
        game.restart();
});
boardView.context.addEventListener("click", function (event) {
    var x = Math.floor(event.offsetX / 5), y = Math.floor(event.offsetY / 5), grid = board.getGrid(x, y);
    if (game.selectGrid)
        game.selectGrid(grid);
});
game.onstart = function () {
    boardView.remove();
};
game.onover = function (gameResult) {
    var messageIcon = "";
    var messageContent = "";
    switch (gameResult) {
        case 1:
            messageIcon = "owin";
            messageContent = "圈方獲勝";
            break;
        case 2:
            messageIcon = "xwin";
            messageContent = "叉方獲勝";
            break;
        case 3:
            messageIcon = "draw";
            messageContent = "無人獲勝";
            break;
    }
    MessageBox_1.MessageBox.show(messageIcon + " accept reject", messageContent, function (message) {
        if (message == "accept")
            game.restart();
    });
};
var prevPlayerSymbol = "";
game.onturnstart = function () { return prevPlayerSymbol = game.nowPlayer.symbol; };
game.onturnend = function () {
    boardView.update();
    var symbol = game.nowPlayer.symbol;
    var grids = PlacementRule_1.PlacementRule.trace(game, symbol, RelatiRouteRule_1.BY_COMMON_RELATI);
    RelatiEffectView_1.createHintEffect(grids, symbol, boardView.layers[1]);
    RelatiEffectView_1.createRelatiEffect(prevPlayerSymbol, boardView.layers[0], game);
};


/***/ }),

/***/ "./ts/page/HelpPage.ts":
/*!*****************************!*\
  !*** ./ts/page/HelpPage.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(/*! ../view/Page */ "./ts/view/Page.ts");
var toMainPageButton = document.getElementById("help-to-main");
toMainPageButton.addEventListener("click", function (event) { return Page_1.Page.switchTo("main"); });


/***/ }),

/***/ "./ts/page/MainPage.ts":
/*!*****************************!*\
  !*** ./ts/page/MainPage.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(/*! ../view/Page */ "./ts/view/Page.ts");
var toGamePageButton = document.getElementById("main-to-game");
var toHelpPageButton = document.getElementById("main-to-help");
toGamePageButton.addEventListener("click", function (event) { return Page_1.Page.switchTo("game"); });
toHelpPageButton.addEventListener("click", function (event) { return Page_1.Page.switchTo("help"); });


/***/ }),

/***/ "./ts/view/MessageBox.ts":
/*!*******************************!*\
  !*** ./ts/view/MessageBox.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MessageBox;
(function (MessageBox) {
    MessageBox.view = document.getElementById("message-box");
    MessageBox.messageContent = document.getElementById("message-content");
    MessageBox.acceptButton = document.getElementById("message-accept");
    MessageBox.rejectButton = document.getElementById("message-reject");
    MessageBox.verifyButton = document.getElementById("message-verify");
    var callback;
    function show(type, message, response) {
        MessageBox.view.className = type;
        MessageBox.messageContent.innerText = message;
        MessageBox.messageContent.style.display = message ? "" : "none";
        callback = response;
    }
    MessageBox.show = show;
    function hide() {
        MessageBox.view.className = "none";
    }
    MessageBox.hide = hide;
    function response(result) {
        if (callback)
            callback(result);
        callback = null;
        hide();
    }
    MessageBox.response = response;
    MessageBox.acceptButton.addEventListener("click", function (event) { return response("accept"); });
    MessageBox.rejectButton.addEventListener("click", function (event) { return response("reject"); });
    MessageBox.verifyButton.addEventListener("click", function (event) { return response("verify"); });
})(MessageBox = exports.MessageBox || (exports.MessageBox = {}));


/***/ }),

/***/ "./ts/view/Page.ts":
/*!*************************!*\
  !*** ./ts/view/Page.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Page;
(function (Page) {
    function switchTo(pageName) {
        location.hash = pageName;
    }
    Page.switchTo = switchTo;
    function switchToPage() {
        var activePage;
        activePage = document.getElementsByClassName("page active")[0];
        if (activePage)
            activePage.classList.remove("active");
        activePage = document.querySelector(location.hash + "-page");
        if (activePage)
            activePage.classList.add("active");
    }
    window.addEventListener("hashchange", switchToPage);
    switchToPage();
})(Page = exports.Page || (exports.Page = {}));


/***/ }),

/***/ "./ts/view/RelatiBoardView.ts":
/*!************************************!*\
  !*** ./ts/view/RelatiBoardView.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var SVGProcess_1 = __webpack_require__(/*! ../core/SVGProcess */ "./ts/core/SVGProcess.ts");
var RelatiBoardView = /** @class */ (function () {
    function RelatiBoardView(game, container) {
        this.game = game;
        this.container = container;
        this.context = SVGProcess_1.createSVG("svg");
        this.gridViews = [];
        var board = game.board;
        SVGProcess_1.updateSVG(this.context, {
            "width": "" + board.width * 5,
            "height": "" + board.height * 5
        });
        var routesLayer = SVGProcess_1.createSVG("g");
        var dotsLayer = SVGProcess_1.createSVG("g");
        var linesLayer = SVGProcess_1.createSVG("g");
        var gridsLayer = SVGProcess_1.createSVG("g");
        appendGridLine(board, linesLayer);
        this.layers = [routesLayer, dotsLayer, linesLayer, gridsLayer];
        SVGProcess_1.appendSVGChild(this.context, this.layers);
        for (var _i = 0, _a = board.grids; _i < _a.length; _i++) {
            var grid = _a[_i];
            var gridView = new RelatiGridView(grid);
            gridsLayer.appendChild(gridView.context);
            this.gridViews.push(gridView);
        }
        this.container.appendChild(this.context);
        this.resize();
        window.addEventListener("resize", this.resize.bind(this));
    }
    RelatiBoardView.prototype.resize = function () {
        var _a = this, container = _a.container, _b = _a.game.board, width = _b.width, height = _b.height;
        this.context.style.transform = "scale(" + Math.min(container.clientWidth / (width * 5), container.clientHeight / (height * 5)) * 0.95 + ")";
    };
    RelatiBoardView.prototype.update = function () {
        for (var _i = 0, _a = this.gridViews; _i < _a.length; _i++) {
            var gridView = _a[_i];
            gridView.update();
        }
    };
    RelatiBoardView.prototype.remove = function () {
        for (var _i = 0, _a = this.gridViews; _i < _a.length; _i++) {
            var gridView = _a[_i];
            gridView.remove();
        }
        SVGProcess_1.removeSVGChild(this.layers[0]);
        SVGProcess_1.removeSVGChild(this.layers[1]);
    };
    return RelatiBoardView;
}());
exports.RelatiBoardView = RelatiBoardView;
var lineAttr = {
    "d": "",
    "stroke": "#888",
    "stroke-width": "0.4"
};
function appendGridLine(board, linesLayer) {
    for (var x = 1; x < board.width; x++) {
        lineAttr["d"] = "M " + x * 5 + " 0 V " + board.height * 5;
        var line = SVGProcess_1.createSVG("path", lineAttr);
        linesLayer.appendChild(line);
    }
    for (var y = 1; y < board.height; y++) {
        lineAttr["d"] = "M 0 " + y * 5 + " H " + board.width * 5;
        var line = SVGProcess_1.createSVG("path", lineAttr);
        linesLayer.appendChild(line);
    }
}
var RelatiGridView = /** @class */ (function () {
    function RelatiGridView(grid) {
        this.grid = grid;
        this.context = SVGProcess_1.createSVG("g");
        this.symbol = "";
        this.status = {};
        this.symbol = grid.symbol;
        this.status = __assign({}, grid.status);
    }
    RelatiGridView.prototype.update = function () {
        var grid = this.grid;
        if (this.symbol == grid.symbol &&
            this.status["relati-launcher"] ==
                grid.status["relati-launcher"] &&
            this.status["relati-repeater"] ==
                grid.status["relati-repeater"] &&
            this.status["relati-receiver"] ==
                grid.status["relati-receiver"])
            return;
        var symbolAttr = {
            "d": "",
            "fill": "none",
            "stroke": "",
            "stroke-width": "0.6"
        };
        var srtX = grid.x * 5 + 1;
        var srtY = grid.y * 5 + 1;
        var endX = grid.x * 5 + 4;
        var endY = grid.y * 5 + 4;
        switch (grid.symbol) {
            case "": {
                SVGProcess_1.removeSVGChild(this.context);
                break;
            }
            case "O": {
                symbolAttr["d"] = ("M " + (srtX + 1.5) + " " + (srtY + 1.5) + " " +
                    "m 0 -1.5 " +
                    "a 1.5 1.5 0 0 1, 0 3 " +
                    "a 1.5 1.5 0 0 1, 0 -3");
                symbolAttr["stroke"] = "crimson";
                break;
            }
            case "X": {
                symbolAttr["d"] = ("M " + srtX + " " + srtY + " L " + endX + " " + endY + " " +
                    ("M " + endX + " " + srtY + " L " + srtX + " " + endY));
                symbolAttr["stroke"] = "royalblue";
                break;
            }
        }
        if (!this.symbol) {
            if (!grid.isSpace) {
                if (grid.is("relati-launcher")) {
                    symbolAttr["stroke-width"] = "1.2";
                    this.context.appendChild(SVGProcess_1.createSVG("path", symbolAttr));
                    symbolAttr["stroke-width"] = "0.6";
                    symbolAttr["stroke"] = "#f2f2f2";
                    this.context.appendChild(SVGProcess_1.createSVG("path", symbolAttr));
                }
                else if (grid.is("relati-repeater")) {
                    this.context.appendChild(SVGProcess_1.createSVG("path", symbolAttr));
                }
                else {
                    symbolAttr["stroke"] = "#666";
                    this.context.appendChild(SVGProcess_1.createSVG("path", symbolAttr));
                }
            }
        }
        else if (!grid.is("relati-launcher")) {
            var color = symbolAttr["stroke"];
            if (!grid.is("relati-repeater"))
                color = "#666";
            SVGProcess_1.updateSVG(this.context.childNodes[0], { "stroke": color });
        }
        this.symbol = grid.symbol;
        this.status = __assign({}, grid.status);
    };
    RelatiGridView.prototype.remove = function () {
        this.symbol = "";
        this.status = {};
        SVGProcess_1.removeSVGChild(this.context);
    };
    return RelatiGridView;
}());
exports.RelatiGridView = RelatiGridView;


/***/ }),

/***/ "./ts/view/RelatiEffectView.ts":
/*!*************************************!*\
  !*** ./ts/view/RelatiEffectView.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SVGProcess_1 = __webpack_require__(/*! ../core/SVGProcess */ "./ts/core/SVGProcess.ts");
var RelatiRouteRule_1 = __webpack_require__(/*! ../main/rule/RelatiRouteRule */ "./ts/main/rule/RelatiRouteRule.ts");
var SYMBOL_COLOR = {
    "": "#666",
    "O": "crimson",
    "X": "royalblue"
};
var dotAttr = {
    "cx": "",
    "cy": "",
    "r": "0.5",
    "fill": ""
};
function createDot(x, y, color) {
    dotAttr["cx"] = "" + (x * 5 + 2.5);
    dotAttr["cy"] = "" + (y * 5 + 2.5);
    dotAttr["fill"] = color;
    return SVGProcess_1.createSVG("circle", dotAttr);
}
function createHintEffect(grids, symbol, view) {
    var color = SYMBOL_COLOR[symbol];
    SVGProcess_1.removeSVGChild(view);
    for (var _i = 0, grids_1 = grids; _i < grids_1.length; _i++) {
        var _a = grids_1[_i], x = _a.x, y = _a.y;
        view.appendChild(createDot(x, y, color));
    }
}
exports.createHintEffect = createHintEffect;
var lineAttr = {
    "d": "",
    "stroke-width": "0.5",
    "stroke": "",
    "fill": "none",
    "class": "relati-effect-line"
};
function createLine(source, traces, color, view) {
    lineAttr["d"] = "M " + (source.x * 5 + 2.5) + " " + (source.y * 5 + 2.5);
    lineAttr["stroke"] = color;
    for (var _i = 0, traces_1 = traces; _i < traces_1.length; _i++) {
        var grid = traces_1[_i];
        lineAttr["d"] += " L " + (grid.x * 5 + 2.5) + " " + (grid.y * 5 + 2.5);
    }
    var path = SVGProcess_1.createSVG("path", lineAttr);
    view.appendChild(path);
}
function createRelatiLine(grid, color, view, routeType, turn, game) {
    if (grid.is("effect-activate") || game.turn > turn)
        return;
    grid.gain("effect-activate");
    setTimeout(function () {
        if (game.turn > turn)
            return;
        var traces = RelatiRouteRule_1.RelatiRouteRule.trace(grid, grid.symbol, ["relati-receiver"], routeType);
        for (var _i = 0, traces_2 = traces; _i < traces_2.length; _i++) {
            var grids = traces_2[_i].grids;
            grids.reverse();
            var targetGrid = grids[grids.length - 1];
            if (!targetGrid.is("effect-activate")) {
                createLine(grid, grids, color, view);
                createRelatiLine(targetGrid, color, view, routeType, turn, game);
            }
        }
    }, 250);
}
function createRelatiEffect(symbol, view, game) {
    var grids = game.board.grids, routeType = game.routeType, turn = game.turn;
    var color = SYMBOL_COLOR[symbol];
    SVGProcess_1.removeSVGChild(view);
    for (var _i = 0, grids_2 = grids; _i < grids_2.length; _i++) {
        var grid = grids_2[_i];
        grid.lost("effect-activate");
    }
    for (var _a = 0, grids_3 = grids; _a < grids_3.length; _a++) {
        var grid = grids_3[_a];
        if (grid.is("relati-launcher") && grid.symbol == symbol) {
            createRelatiLine(grid, color, view, routeType, turn, game);
        }
    }
}
exports.createRelatiEffect = createRelatiEffect;


/***/ })

/******/ });
//# sourceMappingURL=index.js.map