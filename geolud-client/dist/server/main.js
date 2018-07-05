(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js ***!
  \***********************************************************************/
/*! exports provided: NgbAlertConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return NgbAlertConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Configuration service for the NgbAlert component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the alerts used in the application.
 */
var NgbAlertConfig = /** @class */ (function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    NgbAlertConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbAlertConfig;
}());

//# sourceMappingURL=alert-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js ***!
  \****************************************************************/
/*! exports provided: NgbAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return NgbAlert; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js");


/**
 * Alerts can be used to provide feedback messages.
 */
var NgbAlert = /** @class */ (function () {
    function NgbAlert(config) {
        /**
           * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
           */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
    NgbAlert.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-alert',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div [class]=\"'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbAlert.ctorParameters = function () { return [
        { type: _alert_config__WEBPACK_IMPORTED_MODULE_1__["NgbAlertConfig"], },
    ]; };
    NgbAlert.propDecorators = {
        "dismissible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "close": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbAlert;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./alert */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js");
var i3 = __webpack_require__(/*! ./alert-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js");
var styles_NgbAlert = [];
var RenderType_NgbAlert = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbAlert, data: {} });
exports.RenderType_NgbAlert = RenderType_NgbAlert;
function View_NgbAlert_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeHandler() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"]))], null, null); }
function View_NgbAlert_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["role", "alert"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbAlert_1)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.dismissible; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("alert alert-" + _co.type) + (_co.dismissible ? " alert-dismissible" : "")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbAlert_0 = View_NgbAlert_0;
function View_NgbAlert_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-alert", [], null, null, null, View_NgbAlert_0, RenderType_NgbAlert)), i0.ɵdid(1, 49152, null, 0, i2.NgbAlert, [i3.NgbAlertConfig], null, null)], null, null); }
exports.View_NgbAlert_Host_0 = View_NgbAlert_Host_0;
var NgbAlertNgFactory = i0.ɵccf("ngb-alert", i2.NgbAlert, View_NgbAlert_Host_0, { dismissible: "dismissible", type: "type" }, { close: "close" }, ["*"]);
exports.NgbAlertNgFactory = NgbAlertNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js ***!
  \*********************************************************************************/
/*! exports provided: NgbDatepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return NgbDatepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Configuration service for the NgbDatepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
var NgbDatepickerConfig = /** @class */ (function () {
    function NgbDatepickerConfig() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
    NgbDatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDatepickerConfig;
}());

//# sourceMappingURL=datepicker-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js ***!
  \***********************************************************************************/
/*! exports provided: NgbDatepickerDayView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerDayView", function() { return NgbDatepickerDayView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var NgbDatepickerDayView = /** @class */ (function () {
    function NgbDatepickerDayView() {
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    NgbDatepickerDayView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[ngbDatepickerDayView]',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;\n      border-radius: 0.25rem;\n      background: transparent;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
                    host: {
                        'class': 'btn-light',
                        '[class.bg-primary]': 'selected',
                        '[class.text-white]': 'selected',
                        '[class.text-muted]': 'isMuted()',
                        '[class.outside]': 'isMuted()',
                        '[class.active]': 'focused'
                    },
                    template: "{{ date.day }}"
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerDayView.propDecorators = {
        "currentMonth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focused": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbDatepickerDayView;
}());

//# sourceMappingURL=datepicker-day-view.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.ngfactory.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.ngfactory.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./datepicker-day-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js");
var styles_NgbDatepickerDayView = ["[_nghost-%COMP%] {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;\n      border-radius: 0.25rem;\n      background: transparent;\n    }\n    .outside[_nghost-%COMP%] {\n      opacity: 0.5;\n    }"];
var RenderType_NgbDatepickerDayView = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepickerDayView, data: {} });
exports.RenderType_NgbDatepickerDayView = RenderType_NgbDatepickerDayView;
function View_NgbDatepickerDayView_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵted(0, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.date.day; _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbDatepickerDayView_0 = View_NgbDatepickerDayView_0;
function View_NgbDatepickerDayView_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "btn-light"], ["ngbDatepickerDayView", ""]], [[2, "bg-primary", null], [2, "text-white", null], [2, "text-muted", null], [2, "outside", null], [2, "active", null]], null, null, View_NgbDatepickerDayView_0, RenderType_NgbDatepickerDayView)), i0.ɵdid(1, 49152, null, 0, i1.NgbDatepickerDayView, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).selected; var currVal_1 = i0.ɵnov(_v, 1).selected; var currVal_2 = i0.ɵnov(_v, 1).isMuted(); var currVal_3 = i0.ɵnov(_v, 1).isMuted(); var currVal_4 = i0.ɵnov(_v, 1).focused; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
exports.View_NgbDatepickerDayView_Host_0 = View_NgbDatepickerDayView_Host_0;
var NgbDatepickerDayViewNgFactory = i0.ɵccf("[ngbDatepickerDayView]", i1.NgbDatepickerDayView, View_NgbDatepickerDayView_Host_0, { currentMonth: "currentMonth", date: "date", disabled: "disabled", focused: "focused", selected: "selected" }, {}, []);
exports.NgbDatepickerDayViewNgFactory = NgbDatepickerDayViewNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js ***!
  \*******************************************************************************/
/*! exports provided: NgbDatepickerI18n, NgbDatepickerI18nDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return NgbDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18nDefault", function() { return NgbDatepickerI18nDefault; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 */
var NgbDatepickerI18n = /** @class */ (function () {
    function NgbDatepickerI18n() {
    }
    NgbDatepickerI18n.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDatepickerI18n;
}());

var NgbDatepickerI18nDefault = /** @class */ (function (_super) {
    __extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault(_locale, _datePipe) {
        var _this = _super.call(this) || this;
        _this._locale = _locale;
        _this._datePipe = _datePipe;
        var weekdaysStartingOnSunday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleDayNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Short);
        _this._weekdaysShort = weekdaysStartingOnSunday.map(function (day, index) { return weekdaysStartingOnSunday[(index + 1) % 7]; });
        _this._monthsShort = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Abbreviated);
        _this._monthsFull = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Wide);
        return _this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return this._weekdaysShort[weekday - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return this._monthsShort[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return this._monthsFull[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getDayAriaLabel = function (date) {
        var jsDate = new Date(date.year, date.month - 1, date.day);
        return this._datePipe.transform(jsDate, 'fullDate', null, this._locale);
    };
    NgbDatepickerI18nDefault.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerI18nDefault.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] },] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], },
    ]; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));

//# sourceMappingURL=datepicker-i18n.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js ***!
  \*****************************************************************************************/
/*! exports provided: NgbDatepickerKeyMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerKeyMapService", function() { return NgbDatepickerKeyMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");




var Key;
(function (Key) {
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Space"] = 32] = "Space";
    Key[Key["PageUp"] = 33] = "PageUp";
    Key[Key["PageDown"] = 34] = "PageDown";
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NgbDatepickerKeyMapService = /** @class */ (function () {
    function NgbDatepickerKeyMapService(_service, _calendar) {
        var _this = this;
        this._service = _service;
        this._calendar = _calendar;
        _service.model$.subscribe(function (model) {
            _this._minDate = model.minDate;
            _this._maxDate = model.maxDate;
            _this._firstViewDate = model.firstDate;
            _this._lastViewDate = model.lastDate;
        });
    }
    NgbDatepickerKeyMapService.prototype.processKey = function (event) {
        if (Key[Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toString"])(event.which)]) {
            switch (event.which) {
                case Key.PageUp:
                    this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);
                    break;
                case Key.PageDown:
                    this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);
                    break;
                case Key.End:
                    this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);
                    break;
                case Key.Home:
                    this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);
                    break;
                case Key.ArrowLeft:
                    this._service.focusMove('d', -1);
                    break;
                case Key.ArrowUp:
                    this._service.focusMove('d', -this._calendar.getDaysPerWeek());
                    break;
                case Key.ArrowRight:
                    this._service.focusMove('d', 1);
                    break;
                case Key.ArrowDown:
                    this._service.focusMove('d', this._calendar.getDaysPerWeek());
                    break;
                case Key.Enter:
                case Key.Space:
                    this._service.focusSelect();
                    break;
                default:
                    return;
            }
            event.preventDefault();
            event.stopPropagation();
        }
    };
    NgbDatepickerKeyMapService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerKeyMapService.ctorParameters = function () { return [
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], },
    ]; };
    return NgbDatepickerKeyMapService;
}());

//# sourceMappingURL=datepicker-keymap-service.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js ***!
  \*************************************************************************************/
/*! exports provided: NgbDatepickerMonthView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerMonthView", function() { return NgbDatepickerMonthView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");



var NgbDatepickerMonthView = /** @class */ (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!day.context.disabled && !this.isHidden(day)) {
            this.select.emit(_ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(day.date));
        }
    };
    NgbDatepickerMonthView.prototype.isCollapsed = function (week) {
        return this.outsideDays === 'collapsed' && week.days[0].date.month !== this.month.number &&
            week.days[week.days.length - 1].date.month !== this.month.number;
    };
    NgbDatepickerMonthView.prototype.isHidden = function (day) {
        return (this.outsideDays === 'hidden' || this.outsideDays === 'collapsed') && this.month.number !== day.date.month;
    };
    NgbDatepickerMonthView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-month-view',
                    host: { 'class': 'd-block', 'role': 'grid' },
                    styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n      text-align: center;\n      font-style: italic;\n    }\n    .ngb-dp-weekday {\n      color: #5bc0de;\n      color: var(--info);\n    }\n    .ngb-dp-week {\n      border-radius: 0.25rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-weekdays {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden {\n      cursor: default;\n    }\n  "],
                    template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays bg-light\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!isCollapsed(week)\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ week.number }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"isHidden(day)\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!isHidden(day)\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerMonthView.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerMonthView.propDecorators = {
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "month": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerMonthView;
}());

//# sourceMappingURL=datepicker-month-view.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.ngfactory.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./datepicker-month-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js");
var i3 = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
var styles_NgbDatepickerMonthView = [".ngb-dp-weekday[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%] {\n      line-height: 2rem;\n      text-align: center;\n      font-style: italic;\n    }\n    .ngb-dp-weekday[_ngcontent-%COMP%] {\n      color: #5bc0de;\n      color: var(--info);\n    }\n    .ngb-dp-week[_ngcontent-%COMP%] {\n      border-radius: 0.25rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-weekdays[_ngcontent-%COMP%] {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0rem;\n    }\n    .ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%] {\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-day[_ngcontent-%COMP%] {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled[_ngcontent-%COMP%], .ngb-dp-day.hidden[_ngcontent-%COMP%] {\n      cursor: default;\n    }"];
var RenderType_NgbDatepickerMonthView = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepickerMonthView, data: {} });
exports.RenderType_NgbDatepickerMonthView = RenderType_NgbDatepickerMonthView;
function View_NgbDatepickerMonthView_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "ngb-dp-weekday ngb-dp-showweek"]], null, null, null, null, null))], null, null); }
function View_NgbDatepickerMonthView_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ngb-dp-weekday small"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i18n.getWeekdayShortName(_v.context.$implicit); _ck(_v, 1, 0, currVal_0); }); }
function View_NgbDatepickerMonthView_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ngb-dp-week ngb-dp-weekdays bg-light"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_2)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_3)), i0.ɵdid(4, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showWeekNumbers; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.month.weekdays; _ck(_v, 4, 0, currVal_1); }, null); }
function View_NgbDatepickerMonthView_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ngb-dp-week-number small text-muted"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.number; _ck(_v, 1, 0, currVal_0); }); }
function View_NgbDatepickerMonthView_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbDatepickerMonthView_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_9)), i0.ɵdid(1, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit.context; var currVal_1 = _co.dayTemplate; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_NgbDatepickerMonthView_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["class", "ngb-dp-day"], ["role", "gridcell"]], [[2, "disabled", null], [8, "tabIndex", 0], [2, "hidden", null], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.doSelect(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_8)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = !_co.isHidden(_v.context.$implicit); _ck(_v, 2, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.context.disabled; var currVal_1 = _v.context.$implicit.tabindex; var currVal_2 = _co.isHidden(_v.context.$implicit); var currVal_3 = _v.context.$implicit.ariaLabel; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_NgbDatepickerMonthView_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ngb-dp-week"], ["role", "row"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_6)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_7)), i0.ɵdid(4, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showWeekNumbers; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit.days; _ck(_v, 4, 0, currVal_1); }, null); }
function View_NgbDatepickerMonthView_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_5)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isCollapsed(_v.context.$implicit); _ck(_v, 1, 0, currVal_0); }, null); }
function View_NgbDatepickerMonthView_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_4)), i0.ɵdid(3, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showWeekdays; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.month.weeks; _ck(_v, 3, 0, currVal_1); }, null); }
exports.View_NgbDatepickerMonthView_0 = View_NgbDatepickerMonthView_0;
function View_NgbDatepickerMonthView_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-month-view", [["class", "d-block"], ["role", "grid"]], null, null, null, View_NgbDatepickerMonthView_0, RenderType_NgbDatepickerMonthView)), i0.ɵdid(1, 49152, null, 0, i2.NgbDatepickerMonthView, [i3.NgbDatepickerI18n], null, null)], null, null); }
exports.View_NgbDatepickerMonthView_Host_0 = View_NgbDatepickerMonthView_Host_0;
var NgbDatepickerMonthViewNgFactory = i0.ɵccf("ngb-datepicker-month-view", i2.NgbDatepickerMonthView, View_NgbDatepickerMonthView_Host_0, { dayTemplate: "dayTemplate", month: "month", outsideDays: "outsideDays", showWeekdays: "showWeekdays", showWeekNumbers: "showWeekNumbers" }, { select: "select" }, []);
exports.NgbDatepickerMonthViewNgFactory = NgbDatepickerMonthViewNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js ***!
  \********************************************************************************************/
/*! exports provided: NgbDatepickerNavigationSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigationSelect", function() { return NgbDatepickerNavigationSelect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");




var NgbDatepickerNavigationSelect = /** @class */ (function () {
    function NgbDatepickerNavigationSelect(i18n) {
        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](this.date.year, Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(year), this.date.month, 1)); };
    NgbDatepickerNavigationSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation-select',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host>select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n      display: inline-block;\n    }\n  "],
                    template: "\n    <select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.month\"\n      (change)=\"changeMonth($event.target.value)\">\n        <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthShortName(m) }}</option>\n    </select><select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.year\"\n      (change)=\"changeYear($event.target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerNavigationSelect.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerNavigationSelect.propDecorators = {
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "months": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "years": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerNavigationSelect;
}());

//# sourceMappingURL=datepicker-navigation-select.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.ngfactory.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.ngfactory.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./datepicker-navigation-select */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js");
var i4 = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
var styles_NgbDatepickerNavigationSelect = ["[_nghost-%COMP%] > select[_ngcontent-%COMP%] {\n      \n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.25;\n      \n      height: inherit;\n      width: 50%;\n      display: inline-block;\n    }"];
var RenderType_NgbDatepickerNavigationSelect = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepickerNavigationSelect, data: {} });
exports.RenderType_NgbDatepickerNavigationSelect = RenderType_NgbDatepickerNavigationSelect;
function View_NgbDatepickerNavigationSelect_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "option", [], null, null, null, null, null)), i0.ɵdid(1, 147456, null, 0, i1.NgSelectOption, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), i0.ɵdid(2, 147456, null, 0, i1.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.i18n.getMonthShortName(_v.context.$implicit); _ck(_v, 3, 0, currVal_2); }); }
function View_NgbDatepickerNavigationSelect_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "option", [], null, null, null, null, null)), i0.ɵdid(1, 147456, null, 0, i1.NgSelectOption, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), i0.ɵdid(2, 147456, null, 0, i1.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 3, 0, currVal_2); }); }
function View_NgbDatepickerNavigationSelect_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "select", [["class", "custom-select"]], [[8, "disabled", 0], [8, "value", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.changeMonth($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigationSelect_1)), i0.ɵdid(2, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 2, "select", [["class", "custom-select"]], [[8, "disabled", 0], [8, "value", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.changeYear($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigationSelect_2)), i0.ɵdid(5, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.months; _ck(_v, 2, 0, currVal_2); var currVal_5 = _co.years; _ck(_v, 5, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.disabled; var currVal_1 = ((_co.date == null) ? null : _co.date.month); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _co.disabled; var currVal_4 = ((_co.date == null) ? null : _co.date.year); _ck(_v, 3, 0, currVal_3, currVal_4); }); }
exports.View_NgbDatepickerNavigationSelect_0 = View_NgbDatepickerNavigationSelect_0;
function View_NgbDatepickerNavigationSelect_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-navigation-select", [], null, null, null, View_NgbDatepickerNavigationSelect_0, RenderType_NgbDatepickerNavigationSelect)), i0.ɵdid(1, 49152, null, 0, i3.NgbDatepickerNavigationSelect, [i4.NgbDatepickerI18n], null, null)], null, null); }
exports.View_NgbDatepickerNavigationSelect_Host_0 = View_NgbDatepickerNavigationSelect_Host_0;
var NgbDatepickerNavigationSelectNgFactory = i0.ɵccf("ngb-datepicker-navigation-select", i3.NgbDatepickerNavigationSelect, View_NgbDatepickerNavigationSelect_Host_0, { date: "date", disabled: "disabled", months: "months", years: "years" }, { select: "select" }, []);
exports.NgbDatepickerNavigationSelectNgFactory = NgbDatepickerNavigationSelectNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js ***!
  \*************************************************************************************/
/*! exports provided: NgbDatepickerNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigation", function() { return NgbDatepickerNavigation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datepicker_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-view-model */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");




// The -ms- and -webkit- element for the CSS can be removed if we are generating the CSS using SASS.
var NgbDatepickerNavigation = /** @class */ (function () {
    function NgbDatepickerNavigation(i18n) {
        this.i18n = i18n;
        this.navigation = _datepicker_view_model__WEBPACK_IMPORTED_MODULE_1__["NavigationEvent"];
        this.months = [];
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerNavigation.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      height: 2rem;\n      line-height: 1.85rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-navigation-chevron {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      display: inline-block;\n      width: 0.75em;\n      height: 0.75em;\n      margin-left: 0.25em;\n      margin-right: 0.15em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n    }\n    .right .ngb-dp-navigation-chevron {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n      margin-left: 0.15em;\n      margin-right: 0.25em;\n    }\n    .ngb-dp-arrow {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex-basis: auto;\n      flex-grow: 1;\n      padding-right: 0px;\n      padding-left: 0px;\n      margin: 0px;\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-arrow.right {\n      -webkit-box-pack: end;\n      -ms-flex-pack: end;\n      justify-content: flex-end;\n    }\n    .ngb-dp-arrow-btn {\n      padding: 0rem 0.25rem;\n      margin: 0rem 0.5rem;\n      border: none;\n      background-color: transparent;\n      z-index: 1;\n    }\n    .ngb-dp-arrow-btn:focus {\n      outline-style: auto;\n      outline-width: 1px;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    .ngb-dp-navigation-select {\n      -webkit-box-flex: 1 1 9rem;\n      -ms-flex:  1 1 9rem;\n      flex-grow: 1;\n      flex-basis: 9rem;\n    }\n  "],
                    template: "\n  <div class=\"ngb-dp-arrow\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!navigate.emit(navigation.PREV)\" [disabled]=\"prevDisabled\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n  </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"d-block ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name d-block\">\n        {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!navigate.emit(navigation.NEXT)\" [disabled]=\"nextDisabled\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerNavigation.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerNavigation.propDecorators = {
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "months": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "prevDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "nextDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectBoxes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerNavigation;
}());

//# sourceMappingURL=datepicker-navigation.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.ngfactory.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./datepicker-navigation-select.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.ngfactory.js");
var i2 = __webpack_require__(/*! ./datepicker-navigation-select */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js");
var i3 = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ./datepicker-navigation */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js");
var styles_NgbDatepickerNavigation = ["[_nghost-%COMP%] {\n      height: 2rem;\n      line-height: 1.85rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-navigation-chevron[_ngcontent-%COMP%] {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      display: inline-block;\n      width: 0.75em;\n      height: 0.75em;\n      margin-left: 0.25em;\n      margin-right: 0.15em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n    }\n    .right[_ngcontent-%COMP%]   .ngb-dp-navigation-chevron[_ngcontent-%COMP%] {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n      margin-left: 0.15em;\n      margin-right: 0.25em;\n    }\n    .ngb-dp-arrow[_ngcontent-%COMP%] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex-basis: auto;\n      flex-grow: 1;\n      padding-right: 0px;\n      padding-left: 0px;\n      margin: 0px;\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-arrow.right[_ngcontent-%COMP%] {\n      -webkit-box-pack: end;\n      -ms-flex-pack: end;\n      justify-content: flex-end;\n    }\n    .ngb-dp-arrow-btn[_ngcontent-%COMP%] {\n      padding: 0rem 0.25rem;\n      margin: 0rem 0.5rem;\n      border: none;\n      background-color: transparent;\n      z-index: 1;\n    }\n    .ngb-dp-arrow-btn[_ngcontent-%COMP%]:focus {\n      outline-style: auto;\n      outline-width: 1px;\n    }\n    .ngb-dp-month-name[_ngcontent-%COMP%] {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    .ngb-dp-navigation-select[_ngcontent-%COMP%] {\n      -webkit-box-flex: 1 1 9rem;\n      -ms-flex:  1 1 9rem;\n      flex-grow: 1;\n      flex-basis: 9rem;\n    }"];
var RenderType_NgbDatepickerNavigation = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepickerNavigation, data: {} });
exports.RenderType_NgbDatepickerNavigation = RenderType_NgbDatepickerNavigation;
function View_NgbDatepickerNavigation_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-navigation-select", [["class", "d-block ngb-dp-navigation-select"]], null, [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.select.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_NgbDatepickerNavigationSelect_0, i1.RenderType_NgbDatepickerNavigationSelect)), i0.ɵdid(1, 49152, null, 0, i2.NgbDatepickerNavigationSelect, [i3.NgbDatepickerI18n], { date: [0, "date"], disabled: [1, "disabled"], months: [2, "months"], years: [3, "years"] }, { select: "select" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.date; var currVal_1 = _co.disabled; var currVal_2 = _co.selectBoxes.months; var currVal_3 = _co.selectBoxes.years; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_NgbDatepickerNavigation_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "ngb-dp-arrow"]], null, null, null, null, null))], null, null); }
function View_NgbDatepickerNavigation_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "ngb-dp-arrow"]], null, null, null, null, null))], null, null); }
function View_NgbDatepickerNavigation_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_4)), i0.ɵdid(1, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(2, 0, null, null, 1, "div", [["class", "ngb-dp-month-name d-block"]], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, [" ", " ", " "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_5)), i0.ɵdid(5, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.index > 0); _ck(_v, 1, 0, currVal_0); var currVal_3 = (_v.context.index !== (_co.months.length - 1)); _ck(_v, 5, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.i18n.getMonthFullName(_v.context.$implicit.number); var currVal_2 = _v.context.$implicit.year; _ck(_v, 3, 0, currVal_1, currVal_2); }); }
function View_NgbDatepickerNavigation_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_3)), i0.ɵdid(1, 802816, null, 0, i4.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.months; _ck(_v, 1, 0, currVal_0); }, null); }
function View_NgbDatepickerNavigation_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["class", "ngb-dp-arrow"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "button", [["class", "btn btn-link ngb-dp-arrow-btn"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (!!_co.navigate.emit(_co.navigation.PREV) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "span", [["class", "ngb-dp-navigation-chevron"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_1)), i0.ɵdid(4, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_2)), i0.ɵdid(6, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(7, 0, null, null, 2, "div", [["class", "ngb-dp-arrow right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 1, "button", [["class", "btn btn-link ngb-dp-arrow-btn"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (!!_co.navigate.emit(_co.navigation.NEXT) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 0, "span", [["class", "ngb-dp-navigation-chevron"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.showSelect; _ck(_v, 4, 0, currVal_1); var currVal_2 = !_co.showSelect; _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.prevDisabled; _ck(_v, 1, 0, currVal_0); var currVal_3 = _co.nextDisabled; _ck(_v, 8, 0, currVal_3); }); }
exports.View_NgbDatepickerNavigation_0 = View_NgbDatepickerNavigation_0;
function View_NgbDatepickerNavigation_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-navigation", [], null, null, null, View_NgbDatepickerNavigation_0, RenderType_NgbDatepickerNavigation)), i0.ɵdid(1, 49152, null, 0, i5.NgbDatepickerNavigation, [i3.NgbDatepickerI18n], null, null)], null, null); }
exports.View_NgbDatepickerNavigation_Host_0 = View_NgbDatepickerNavigation_Host_0;
var NgbDatepickerNavigationNgFactory = i0.ɵccf("ngb-datepicker-navigation", i5.NgbDatepickerNavigation, View_NgbDatepickerNavigation_Host_0, { date: "date", disabled: "disabled", months: "months", showSelect: "showSelect", prevDisabled: "prevDisabled", nextDisabled: "nextDisabled", selectBoxes: "selectBoxes" }, { navigate: "navigate", select: "select" }, []);
exports.NgbDatepickerNavigationNgFactory = NgbDatepickerNavigationNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js ***!
  \**********************************************************************************/
/*! exports provided: NgbDatepickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerService", function() { return NgbDatepickerService; });
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _datepicker_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-tools */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");








var NgbDatepickerService = /** @class */ (function () {
    function NgbDatepickerService(_calendar, _i18n) {
        this._calendar = _calendar;
        this._i18n = _i18n;
        this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._select$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._state = {
            disabled: false,
            displayMonths: 1,
            firstDayOfWeek: 1,
            focusVisible: false,
            months: [],
            navigation: 'select',
            prevDisabled: false,
            nextDisabled: false,
            selectBoxes: { years: [], months: [] },
            selectedDate: null
        };
    }
    Object.defineProperty(NgbDatepickerService.prototype, "model$", {
        get: function () { return this._model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (model) { return model.months.length > 0; })); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "select$", {
        get: function () { return this._select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (date) { return date !== null; })); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "disabled", {
        set: function (disabled) {
            if (this._state.disabled !== disabled) {
                this._nextState({ disabled: disabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "displayMonths", {
        set: function (displayMonths) {
            displayMonths = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toInteger"])(displayMonths);
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
                this._nextState({ displayMonths: displayMonths });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
        set: function (firstDayOfWeek) {
            firstDayOfWeek = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toInteger"])(firstDayOfWeek);
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
                this._nextState({ firstDayOfWeek: firstDayOfWeek });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "focusVisible", {
        set: function (focusVisible) {
            if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
                this._nextState({ focusVisible: focusVisible });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "maxDate", {
        set: function (date) {
            var maxDate = this.toValidDate(date, null);
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.maxDate, maxDate)) {
                this._nextState({ maxDate: maxDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "markDisabled", {
        set: function (markDisabled) {
            if (this._state.markDisabled !== markDisabled) {
                this._nextState({ markDisabled: markDisabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "minDate", {
        set: function (date) {
            var minDate = this.toValidDate(date, null);
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.minDate, minDate)) {
                this._nextState({ minDate: minDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "navigation", {
        set: function (navigation) {
            if (this._state.navigation !== navigation) {
                this._nextState({ navigation: navigation });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbDatepickerService.prototype.focus = function (date) {
        if (!this._state.disabled && this._calendar.isValid(date) && Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.focusDate, date)) {
            this._nextState({ focusDate: date });
        }
    };
    NgbDatepickerService.prototype.focusMove = function (period, number) {
        this.focus(this._calendar.getNext(this._state.focusDate, period, number));
    };
    NgbDatepickerService.prototype.focusSelect = function () {
        if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(this._state.focusDate, this._state)) {
            this.select(this._state.focusDate, { emitEvent: true });
        }
    };
    NgbDatepickerService.prototype.open = function (date) {
        var firstDate = this.toValidDate(date, this._calendar.getToday());
        if (!this._state.disabled) {
            this._nextState({ firstDate: firstDate });
        }
    };
    NgbDatepickerService.prototype.select = function (date, options) {
        if (options === void 0) { options = {}; }
        var selectedDate = this.toValidDate(date, null);
        if (!this._state.disabled) {
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.selectedDate, selectedDate)) {
                this._nextState({ selectedDate: selectedDate });
            }
            if (options.emitEvent && Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(selectedDate, this._state)) {
                this._select$.next(selectedDate);
            }
        }
    };
    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
        var ngbDate = _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    };
    NgbDatepickerService.prototype._nextState = function (patch) {
        var newState = this._updateState(patch);
        this._patchContexts(newState);
        this._state = newState;
        this._model$.next(this._state);
    };
    NgbDatepickerService.prototype._patchContexts = function (state) {
        state.months.forEach(function (month) {
            month.weeks.forEach(function (week) {
                week.days.forEach(function (day) {
                    // patch focus flag
                    if (state.focusDate) {
                        day.context.focused = state.focusDate.equals(day.date) && state.focusVisible;
                    }
                    day.tabindex =
                        (!state.disabled && day.date.equals(state.focusDate) && state.focusDate.month === month.number) ? 0 : -1;
                    // override context disabled
                    if (state.disabled === true) {
                        day.context.disabled = true;
                    }
                    // patch selection flag
                    if (state.selectedDate !== undefined) {
                        day.context.selected = state.selectedDate !== null && state.selectedDate.equals(day.date);
                    }
                });
            });
        });
    };
    NgbDatepickerService.prototype._updateState = function (patch) {
        // patching fields
        var state = Object.assign({}, this._state, patch);
        var startDate = state.firstDate;
        // min/max dates changed
        if ('minDate' in patch || 'maxDate' in patch) {
            Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkMinBeforeMax"])(state.minDate, state.maxDate);
            state.focusDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // initial rebuild via 'select()'
        if ('selectedDate' in patch && this._state.months.length === 0) {
            startDate = state.selectedDate;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            var forceRebuild = 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch ||
                'maxDate' in patch || 'disabled' in patch;
            var months = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["buildMonths"])(this._calendar, startDate, state, this._i18n, forceRebuild);
            // updating months and boundary dates
            state.months = months;
            state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
            state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;
            // reset selected date if 'markDisabled' returns true
            if ('selectedDate' in patch && !Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(state.selectedDate, state)) {
                state.selectedDate = null;
            }
            // adjusting focus after months were built
            if ('firstDate' in patch) {
                if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
                    state.focusDate.after(state.lastDate)) {
                    state.focusDate = startDate;
                }
            }
            // adjusting months/years for the select box navigation
            var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
            var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
            if (state.navigation === 'select') {
                // years ->  boundaries (min/max were changed)
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                    state.selectBoxes.years = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["generateSelectBoxYears"])(state.focusDate, state.minDate, state.maxDate);
                }
                // months -> when current year or boundaries change
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                    state.selectBoxes.months =
                        Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["generateSelectBoxMonths"])(this._calendar, state.focusDate, state.minDate, state.maxDate);
                }
            }
            else {
                state.selectBoxes = { years: [], months: [] };
            }
            // updating navigation arrows -> boundaries change (min/max) or month/year changes
            if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                state.prevDisabled = state.disabled || Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["prevMonthDisabled"])(this._calendar, state.firstDate, state.minDate);
                state.nextDisabled = state.disabled || Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["nextMonthDisabled"])(this._calendar, state.lastDate, state.maxDate);
            }
        }
        return state;
    };
    NgbDatepickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerService.ctorParameters = function () { return [
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"], },
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerI18n"], },
    ]; };
    return NgbDatepickerService;
}());

//# sourceMappingURL=datepicker-service.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js ***!
  \********************************************************************************/
/*! exports provided: isChangedDate, dateComparator, checkMinBeforeMax, checkDateInRange, isDateSelectable, generateSelectBoxMonths, generateSelectBoxYears, nextMonthDisabled, prevMonthDisabled, buildMonths, buildMonth, getFirstViewDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChangedDate", function() { return isChangedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateComparator", function() { return dateComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMinBeforeMax", function() { return checkMinBeforeMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDateInRange", function() { return checkDateInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateSelectable", function() { return isDateSelectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSelectBoxMonths", function() { return generateSelectBoxMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSelectBoxYears", function() { return generateSelectBoxYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextMonthDisabled", function() { return nextMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevMonthDisabled", function() { return prevMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMonths", function() { return buildMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMonth", function() { return buildMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstViewDate", function() { return getFirstViewDate; });
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


function isChangedDate(prev, next) {
    return !dateComparator(prev, next);
}
function dateComparator(prev, next) {
    return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}
function checkMinBeforeMax(minDate, maxDate) {
    if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error("'maxDate' " + maxDate + " should be greater than 'minDate' " + minDate);
    }
}
function checkDateInRange(date, minDate, maxDate) {
    if (date && minDate && date.before(minDate)) {
        return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(minDate);
    }
    if (date && maxDate && date.after(maxDate)) {
        return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(maxDate);
    }
    return date;
}
function isDateSelectable(date, state) {
    var minDate = state.minDate, maxDate = state.maxDate, disabled = state.disabled, markDisabled = state.markDisabled;
    // clang-format off
    return !(!Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(date) ||
        disabled ||
        (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
        (minDate && date.before(minDate)) ||
        (maxDate && date.after(maxDate)));
    // clang-format on
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var months = calendar.getMonths();
    if (minDate && date.year === minDate.year) {
        var index = months.findIndex(function (month) { return month === minDate.month; });
        months = months.slice(index);
    }
    if (maxDate && date.year === maxDate.year) {
        var index = months.findIndex(function (month) { return month === maxDate.month; });
        months = months.slice(0, index + 1);
    }
    return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var start = minDate && minDate.year || date.year - 10;
    var end = maxDate && maxDate.year || date.year + 10;
    return Array.from({ length: end - start + 1 }, function (e, i) { return start + i; });
}
function nextMonthDisabled(calendar, date, maxDate) {
    return maxDate && calendar.getNext(date, 'm').after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
    var prevDate = calendar.getPrev(date, 'm');
    return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
        prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, i18n, force) {
    var displayMonths = state.displayMonths, months = state.months;
    var newMonths = [];
    var _loop_1 = function (i) {
        var newDate = calendar.getNext(date, 'm', i);
        var index = months.findIndex(function (month) { return month.firstDate.equals(newDate); });
        if (force || index === -1) {
            newMonths.push(buildMonth(calendar, newDate, state, i18n));
        }
        else {
            newMonths.push(months[index]);
        }
    };
    for (var i = 0; i < displayMonths; i++) {
        _loop_1(i);
    }
    return newMonths;
}
function buildMonth(calendar, date, state, i18n) {
    var minDate = state.minDate, maxDate = state.maxDate, firstDayOfWeek = state.firstDayOfWeek, markDisabled = state.markDisabled;
    var month = { firstDate: null, lastDate: null, number: date.month, year: date.year, weeks: [], weekdays: [] };
    date = getFirstViewDate(calendar, date, firstDayOfWeek);
    // month has weeks
    for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
        var days = [];
        // week has days
        for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
            if (week === 0) {
                month.weekdays.push(calendar.getWeekday(date));
            }
            var newDate = new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year, date.month, date.day);
            var nextDate = calendar.getNext(newDate);
            var ariaLabel = i18n.getDayAriaLabel(newDate);
            // marking date as disabled
            var disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
            if (!disabled && markDisabled) {
                disabled = markDisabled(newDate, { month: month.number, year: month.year });
            }
            // saving first date of the month
            if (month.firstDate === null && newDate.month === month.number) {
                month.firstDate = newDate;
            }
            // saving last date of the month
            if (newDate.month === month.number && nextDate.month !== month.number) {
                month.lastDate = newDate;
            }
            days.push({
                date: newDate,
                context: {
                    date: { year: newDate.year, month: newDate.month, day: newDate.day },
                    currentMonth: month.number,
                    disabled: disabled,
                    focused: false,
                    selected: false
                },
                tabindex: -1, ariaLabel: ariaLabel
            });
            date = nextDate;
        }
        month.weeks.push({ number: calendar.getWeekNumber(days.map(function (day) { return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(day.date); }), firstDayOfWeek), days: days });
    }
    return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
    var daysPerWeek = calendar.getDaysPerWeek();
    var firstMonthDate = new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year, date.month, 1);
    var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
    return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
//# sourceMappingURL=datepicker-tools.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js ***!
  \*************************************************************************************/
/*! exports provided: NavigationEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationEvent", function() { return NavigationEvent; });
// clang-format on
// clang-format on
var NavigationEvent;
// clang-format on
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
//# sourceMappingURL=datepicker-view-model.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js ***!
  \**************************************************************************/
/*! exports provided: NgbDatepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return NgbDatepicker; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker-keymap-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js");
/* harmony import */ var _datepicker_view_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datepicker-view-model */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var _datepicker_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* harmony import */ var _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var _datepicker_tools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datepicker-tools */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");












var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgbDatepicker; }),
    multi: true
};
/**
 * A lightweight and highly configurable datepicker directive
 */
var NgbDatepicker = /** @class */ (function () {
    function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd, _elementRef, _ngbDateAdapter, _ngZone) {
        var _this = this;
        this._keyMapService = _keyMapService;
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._cd = _cd;
        this._elementRef = _elementRef;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._ngZone = _ngZone;
        /**
           * An event fired when navigation happens and currently displayed month changes.
           * See NgbDatepickerNavigateEvent for the payload info.
           */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
           * An event fired when user selects a date using keyboard or mouse.
           * The payload of the event is currently selected NgbDateStruct.
           */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = function (_) { };
        this.onTouched = function () { };
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
            .forEach(function (input) { return _this[input] = config[input]; });
        this._selectSubscription = _service.select$.subscribe(function (date) { _this.select.emit(date.toStruct()); });
        this._subscription = _service.model$.subscribe(function (model) {
            var newDate = model.firstDate;
            var oldDate = _this.model ? _this.model.firstDate : null;
            var newSelectedDate = model.selectedDate;
            var oldSelectedDate = _this.model ? _this.model.selectedDate : null;
            var newFocusedDate = model.focusDate;
            var oldFocusedDate = _this.model ? _this.model.focusDate : null;
            _this.model = model;
            // handling selection change
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_11__["isChangedDate"])(newSelectedDate, oldSelectedDate)) {
                _this.onTouched();
                _this.onChange(_this._ngbDateAdapter.toModel(newSelectedDate));
            }
            // handling focus change
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_11__["isChangedDate"])(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                _this.focus();
            }
            // emitting navigation event if the first month changes
            if (!newDate.equals(oldDate)) {
                _this.navigate.emit({
                    current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                    next: { year: newDate.year, month: newDate.month }
                });
            }
            _cd.markForCheck();
        });
    }
    /**
     * Manually focus the focusable day in the datepicker
     */
    /**
       * Manually focus the focusable day in the datepicker
       */
    NgbDatepicker.prototype.focus = /**
       * Manually focus the focusable day in the datepicker
       */
    function () {
        var _this = this;
        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function () {
            var elementToFocus = _this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
            if (elementToFocus) {
                elementToFocus.focus();
            }
        });
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    NgbDatepicker.prototype.navigateTo = /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    function (date) { this._service.open(_ngb_date__WEBPACK_IMPORTED_MODULE_4__["NgbDate"].from(date)); };
    NgbDatepicker.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
        this._selectSubscription.unsubscribe();
    };
    NgbDatepicker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.model === undefined) {
            ['displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate'].forEach(function (input) { return _this._service[input] = _this[input]; });
            this.navigateTo(this.startDate);
        }
    };
    NgbDatepicker.prototype.ngOnChanges = function (changes) {
        var _this = this;
        ['displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate']
            .filter(function (input) { return input in changes; })
            .forEach(function (input) { return _this._service[input] = _this[input]; });
        if ('startDate' in changes) {
            this.navigateTo(this.startDate);
        }
    };
    NgbDatepicker.prototype.onDateSelect = function (date) {
        this._service.focus(date);
        this._service.select(date, { emitEvent: true });
    };
    NgbDatepicker.prototype.onKeyDown = function (event) { this._keyMapService.processKey(event); };
    NgbDatepicker.prototype.onNavigateDateSelect = function (date) { this._service.open(date); };
    NgbDatepicker.prototype.onNavigateEvent = function (event) {
        switch (event) {
            case _datepicker_view_model__WEBPACK_IMPORTED_MODULE_7__["NavigationEvent"].PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case _datepicker_view_model__WEBPACK_IMPORTED_MODULE_7__["NavigationEvent"].NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    };
    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this._service.disabled = isDisabled; };
    NgbDatepicker.prototype.showFocus = function (focusVisible) { this._service.focusVisible = focusVisible; };
    NgbDatepicker.prototype.writeValue = function (value) { this._service.select(_ngb_date__WEBPACK_IMPORTED_MODULE_4__["NgbDate"].from(this._ngbDateAdapter.fromModel(value))); };
    NgbDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    exportAs: 'ngbDatepicker',
                    selector: 'ngb-datepicker',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0.25rem;\n      display: inline-block;\n    }\n    .ngb-dp-month {\n      pointer-events: none;\n    }\n    .ngb-dp-header {\n      border-bottom: 0px;\n      border-radius: .25rem 0.25rem 0rem 0rem;\n      padding-top: 0.25rem;\n    }\n    ngb-datepicker-month-view {\n      pointer-events: auto;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    /deep/ .ngb-dp-month + .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week {\n      padding-left: 1rem;\n    }\n    /deep/ .ngb-dp-month + .ngb-dp-month > .ngb-dp-month-name {\n      padding-left: 1rem;\n    }\n    /deep/ .ngb-dp-month:last-child .ngb-dp-week {\n      padding-right: .25rem;\n    }\n    /deep/ .ngb-dp-month:first-child .ngb-dp-week {\n      padding-left: .25rem;\n    }\n    /deep/ .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week:last-child {\n      padding-bottom: .25rem;\n    }\n    .ngb-dp-months {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n  "],
                    template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header bg-light\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-months\" (keydown)=\"onKeyDown($event)\" (focusin)=\"showFocus(true)\" (focusout)=\"showFocus(false)\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month d-block\">\n          <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\"\n                class=\"ngb-dp-month-name bg-light\">\n            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [outsideDays]=\"(displayMonths === 1 ? outsideDays : 'hidden')\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n  ",
                    providers: [NGB_DATEPICKER_VALUE_ACCESSOR, _datepicker_service__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerService"], _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerKeyMapService"]]
                },] },
    ];
    /** @nocollapse */
    NgbDatepicker.ctorParameters = function () { return [
        { type: _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerKeyMapService"], },
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"], },
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerI18n"], },
        { type: _datepicker_config__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_9__["NgbDateAdapter"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    NgbDatepicker.propDecorators = {
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "displayMonths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "firstDayOfWeek": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "markDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "navigation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "startDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return NgbDatepicker;
}());

//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./datepicker-day-view.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.ngfactory.js");
var i2 = __webpack_require__(/*! ./datepicker-day-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js");
var i3 = __webpack_require__(/*! ./datepicker-navigation.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.ngfactory.js");
var i4 = __webpack_require__(/*! ./datepicker-navigation */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js");
var i5 = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
var i6 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i7 = __webpack_require__(/*! ./datepicker-month-view.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.ngfactory.js");
var i8 = __webpack_require__(/*! ./datepicker-month-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js");
var i9 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i10 = __webpack_require__(/*! ./datepicker */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js");
var i11 = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
var i12 = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
var i13 = __webpack_require__(/*! ./datepicker-keymap-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js");
var i14 = __webpack_require__(/*! ./datepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
var i15 = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
var styles_NgbDatepicker = ["[_nghost-%COMP%] {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0.25rem;\n      display: inline-block;\n    }\n    .ngb-dp-month[_ngcontent-%COMP%] {\n      pointer-events: none;\n    }\n    .ngb-dp-header[_ngcontent-%COMP%] {\n      border-bottom: 0px;\n      border-radius: .25rem 0.25rem 0rem 0rem;\n      padding-top: 0.25rem;\n    }\n    ngb-datepicker-month-view[_ngcontent-%COMP%] {\n      pointer-events: auto;\n    }\n    .ngb-dp-month-name[_ngcontent-%COMP%] {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n      .ngb-dp-month + .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week {\n      padding-left: 1rem;\n    }\n      .ngb-dp-month + .ngb-dp-month > .ngb-dp-month-name {\n      padding-left: 1rem;\n    }\n      .ngb-dp-month:last-child .ngb-dp-week {\n      padding-right: .25rem;\n    }\n      .ngb-dp-month:first-child .ngb-dp-week {\n      padding-left: .25rem;\n    }\n      .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week:last-child {\n      padding-bottom: .25rem;\n    }\n    .ngb-dp-months[_ngcontent-%COMP%] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }"];
var RenderType_NgbDatepicker = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepicker, data: {} });
exports.RenderType_NgbDatepicker = RenderType_NgbDatepicker;
function View_NgbDatepicker_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "btn-light"], ["ngbDatepickerDayView", ""]], [[2, "bg-primary", null], [2, "text-white", null], [2, "text-muted", null], [2, "outside", null], [2, "active", null]], null, null, i1.View_NgbDatepickerDayView_0, i1.RenderType_NgbDatepickerDayView)), i0.ɵdid(1, 49152, null, 0, i2.NgbDatepickerDayView, [], { currentMonth: [0, "currentMonth"], date: [1, "date"], disabled: [2, "disabled"], focused: [3, "focused"], selected: [4, "selected"] }, null)], function (_ck, _v) { var currVal_5 = _v.context.currentMonth; var currVal_6 = _v.context.date; var currVal_7 = _v.context.disabled; var currVal_8 = _v.context.focused; var currVal_9 = _v.context.selected; _ck(_v, 1, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).selected; var currVal_1 = i0.ɵnov(_v, 1).selected; var currVal_2 = i0.ɵnov(_v, 1).isMuted(); var currVal_3 = i0.ɵnov(_v, 1).isMuted(); var currVal_4 = i0.ɵnov(_v, 1).focused; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_NgbDatepicker_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-navigation", [], null, [[null, "navigate"], [null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("navigate" === en)) {
        var pd_0 = (_co.onNavigateEvent($event) !== false);
        ad = (pd_0 && ad);
    } if (("select" === en)) {
        var pd_1 = (_co.onNavigateDateSelect($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_NgbDatepickerNavigation_0, i3.RenderType_NgbDatepickerNavigation)), i0.ɵdid(1, 49152, null, 0, i4.NgbDatepickerNavigation, [i5.NgbDatepickerI18n], { date: [0, "date"], disabled: [1, "disabled"], months: [2, "months"], showSelect: [3, "showSelect"], prevDisabled: [4, "prevDisabled"], nextDisabled: [5, "nextDisabled"], selectBoxes: [6, "selectBoxes"] }, { navigate: "navigate", select: "select" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model.firstDate; var currVal_1 = _co.model.disabled; var currVal_2 = _co.model.months; var currVal_3 = (_co.model.navigation === "select"); var currVal_4 = _co.model.prevDisabled; var currVal_5 = _co.model.nextDisabled; var currVal_6 = _co.model.selectBoxes; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, null); }
function View_NgbDatepicker_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ngb-dp-month-name bg-light"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i18n.getMonthFullName(_v.parent.context.$implicit.number); var currVal_1 = _v.parent.context.$implicit.year; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NgbDatepicker_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ngb-dp-month d-block"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepicker_4)), i0.ɵdid(2, 16384, null, 0, i6.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 1, "ngb-datepicker-month-view", [["class", "d-block"], ["role", "grid"]], null, [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.onDateSelect($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_NgbDatepickerMonthView_0, i7.RenderType_NgbDatepickerMonthView)), i0.ɵdid(4, 49152, null, 0, i8.NgbDatepickerMonthView, [i5.NgbDatepickerI18n], { dayTemplate: [0, "dayTemplate"], month: [1, "month"], outsideDays: [2, "outsideDays"], showWeekdays: [3, "showWeekdays"], showWeekNumbers: [4, "showWeekNumbers"] }, { select: "select" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.navigation === "none") || ((_co.displayMonths > 1) && (_co.navigation === "select"))); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.dayTemplate || i0.ɵnov(_v.parent, 0)); var currVal_2 = _v.context.$implicit; var currVal_3 = ((_co.displayMonths === 1) ? _co.outsideDays : "hidden"); var currVal_4 = _co.showWeekdays; var currVal_5 = _co.showWeekNumbers; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_NgbDatepicker_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵand(0, [["dt", 2]], null, 0, null, View_NgbDatepicker_1)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "div", [["class", "ngb-dp-header bg-light"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepicker_2)), i0.ɵdid(3, 16384, null, 0, i6.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(4, 0, null, null, 2, "div", [["class", "ngb-dp-months"]], null, [[null, "keydown"], [null, "focusin"], [null, "focusout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_co.onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (_co.showFocus(true) !== false);
        ad = (pd_1 && ad);
    } if (("focusout" === en)) {
        var pd_2 = (_co.showFocus(false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepicker_3)), i0.ɵdid(6, 802816, null, 0, i6.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.navigation !== "none"); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.model.months; _ck(_v, 6, 0, currVal_1); }, null); }
exports.View_NgbDatepicker_0 = View_NgbDatepicker_0;
function View_NgbDatepicker_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "ngb-datepicker", [], null, null, null, View_NgbDatepicker_0, RenderType_NgbDatepicker)), i0.ɵprd(5120, null, i9.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i10.NgbDatepicker]), i0.ɵprd(512, null, i11.NgbDatepickerService, i11.NgbDatepickerService, [i12.NgbCalendar, i5.NgbDatepickerI18n]), i0.ɵprd(512, null, i13.NgbDatepickerKeyMapService, i13.NgbDatepickerKeyMapService, [i11.NgbDatepickerService, i12.NgbCalendar]), i0.ɵdid(4, 770048, null, 0, i10.NgbDatepicker, [i13.NgbDatepickerKeyMapService, i11.NgbDatepickerService, i12.NgbCalendar, i5.NgbDatepickerI18n, i14.NgbDatepickerConfig, i0.ChangeDetectorRef, i0.ElementRef, i15.NgbDateAdapter, i0.NgZone], null, null)], function (_ck, _v) { _ck(_v, 4, 0); }, null); }
exports.View_NgbDatepicker_Host_0 = View_NgbDatepicker_Host_0;
var NgbDatepickerNgFactory = i0.ɵccf("ngb-datepicker", i10.NgbDatepicker, View_NgbDatepicker_Host_0, { dayTemplate: "dayTemplate", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", markDisabled: "markDisabled", maxDate: "maxDate", minDate: "minDate", navigation: "navigation", outsideDays: "outsideDays", showWeekdays: "showWeekdays", showWeekNumbers: "showWeekNumbers", startDate: "startDate" }, { navigate: "navigate", select: "select" }, []);
exports.NgbDatepickerNgFactory = NgbDatepickerNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js ***!
  \****************************************************************************/
/*! exports provided: NgbCalendar, NgbCalendarGregorian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return NgbCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarGregorian", function() { return NgbCalendarGregorian; });
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function fromJSDate(jsDate) {
    return new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    var jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
var NgbCalendar = /** @class */ (function () {
    function NgbCalendar() {
    }
    NgbCalendar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NgbCalendar;
}());

var NgbCalendarGregorian = /** @class */ (function (_super) {
    __extends(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        var jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year + number, 1, 1);
            case 'm':
                jsDate = new Date(date.year, date.month + number - 1, 1, 12);
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                break;
            default:
                return date;
        }
        return fromJSDate(jsDate);
    };
    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarGregorian.prototype.getWeekday = function (date) {
        var jsDate = toJSDate(date);
        var day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
    NgbCalendarGregorian.prototype.isValid = function (date) {
        if (!date || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.year) || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.month) || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.day)) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    NgbCalendarGregorian.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NgbCalendarGregorian;
}(NgbCalendar));

//# sourceMappingURL=ngb-calendar.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js ***!
  \********************************************************************************/
/*! exports provided: NgbDateAdapter, NgbDateStructAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return NgbDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateStructAdapter", function() { return NgbDateStructAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Abstract type serving as a DI token for the service converting from your application Date model to internal
 * NgbDateStruct model.
 * A default implementation converting from and to NgbDateStruct is provided for retro-compatibility,
 * but you can provide another implementation to use an alternative format, ie for using with native Date Object.
 */
var NgbDateAdapter = /** @class */ (function () {
    function NgbDateAdapter() {
    }
    NgbDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDateAdapter;
}());

var NgbDateStructAdapter = /** @class */ (function (_super) {
    __extends(NgbDateStructAdapter, _super);
    function NgbDateStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.fromModel = /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.toModel = /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    NgbDateStructAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDateStructAdapter;
}(NgbDateAdapter));

//# sourceMappingURL=ngb-date-adapter.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js ***!
  \************************************************************************/
/*! exports provided: NgbDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDate", function() { return NgbDate; });
var NgbDate = /** @class */ (function () {
    function NgbDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    NgbDate.from = function (date) {
        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
    };
    NgbDate.prototype.equals = function (other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    };
    NgbDate.prototype.before = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    };
    NgbDate.prototype.after = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    };
    NgbDate.prototype.toStruct = function () { return { year: this.year, month: this.month, day: this.day }; };
    NgbDate.prototype.toString = function () { return this.year + "-" + this.month + "-" + this.day; };
    return NgbDate;
}());

//# sourceMappingURL=ngb-date.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js ***!
  \*************************************************************************/
/*! exports provided: NgbModalBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalBackdrop", function() { return NgbModalBackdrop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var NgbModalBackdrop = /** @class */ (function () {
    function NgbModalBackdrop() {
    }
    NgbModalBackdrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-modal-backdrop',
                    template: '',
                    host: { '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")' }
                },] },
    ];
    /** @nocollapse */
    NgbModalBackdrop.propDecorators = {
        "backdropClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbModalBackdrop;
}());

//# sourceMappingURL=modal-backdrop.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./modal-backdrop */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js");
var styles_NgbModalBackdrop = [];
var RenderType_NgbModalBackdrop = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbModalBackdrop, data: {} });
exports.RenderType_NgbModalBackdrop = RenderType_NgbModalBackdrop;
function View_NgbModalBackdrop_0(_l) { return i0.ɵvid(0, [], null, null); }
exports.View_NgbModalBackdrop_0 = View_NgbModalBackdrop_0;
function View_NgbModalBackdrop_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-modal-backdrop", [], [[8, "className", 0]], null, null, View_NgbModalBackdrop_0, RenderType_NgbModalBackdrop)), i0.ɵdid(1, 49152, null, 0, i1.NgbModalBackdrop, [], null, null)], null, function (_ck, _v) { var currVal_0 = ("modal-backdrop fade show" + (i0.ɵnov(_v, 1).backdropClass ? (" " + i0.ɵnov(_v, 1).backdropClass) : "")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbModalBackdrop_Host_0 = View_NgbModalBackdrop_Host_0;
var NgbModalBackdropNgFactory = i0.ɵccf("ngb-modal-backdrop", i1.NgbModalBackdrop, View_NgbModalBackdrop_Host_0, { backdropClass: "backdropClass" }, {}, []);
exports.NgbModalBackdropNgFactory = NgbModalBackdropNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js ***!
  \********************************************************************************/
/*! exports provided: ModalDismissReasons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return ModalDismissReasons; });
var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
//# sourceMappingURL=modal-dismiss-reasons.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js ***!
  \***********************************************************************/
/*! exports provided: NgbModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalWindow", function() { return NgbModalWindow; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-dismiss-reasons */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js");



var NgbModalWindow = /** @class */ (function () {
    function NgbModalWindow(document, _elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._document = document;
    }
    NgbModalWindow.prototype.backdropClick = function ($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK);
        }
    };
    NgbModalWindow.prototype.escKey = function ($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC);
        }
    };
    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
    NgbModalWindow.prototype.ngOnInit = function () {
        this._elWithFocus = this._document.activeElement;
        this._renderer.addClass(this._document.body, 'modal-open');
    };
    NgbModalWindow.prototype.ngAfterViewInit = function () {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
        }
    };
    NgbModalWindow.prototype.ngOnDestroy = function () {
        var body = this._document.body;
        var elWithFocus = this._elWithFocus;
        var elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        }
        else {
            elementToFocus = body;
        }
        elementToFocus['focus'].apply(elementToFocus, []);
        this._elWithFocus = null;
        this._renderer.removeClass(body, 'modal-open');
    };
    NgbModalWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngb-modal-window',
                    host: {
                        '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
                        'role': 'dialog',
                        'tabindex': '-1',
                        '(keyup.esc)': 'escKey($event)',
                        '(click)': 'backdropClick($event)'
                    },
                    template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbModalWindow.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    ]; };
    NgbModalWindow.propDecorators = {
        "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "centered": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "keyboard": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "windowClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "dismissEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dismiss',] },],
    };
    return NgbModalWindow;
}());

//# sourceMappingURL=modal-window.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./modal-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var styles_NgbModalWindow = [];
var RenderType_NgbModalWindow = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbModalWindow, data: {} });
exports.RenderType_NgbModalWindow = RenderType_NgbModalWindow;
function View_NgbModalWindow_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["role", "document"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "modal-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("modal-dialog" + (_co.size ? (" modal-" + _co.size) : "")) + (_co.centered ? " modal-dialog-centered" : "")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbModalWindow_0 = View_NgbModalWindow_0;
function View_NgbModalWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-modal-window", [["role", "dialog"], ["tabindex", "-1"]], [[8, "className", 0]], [[null, "keyup.esc"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("keyup.esc" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).escKey($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).backdropClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_NgbModalWindow_0, RenderType_NgbModalWindow)), i0.ɵdid(1, 4440064, null, 0, i1.NgbModalWindow, [i2.DOCUMENT, i0.ElementRef, i0.Renderer2], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = ("modal fade show d-block" + (i0.ɵnov(_v, 1).windowClass ? (" " + i0.ɵnov(_v, 1).windowClass) : "")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbModalWindow_Host_0 = View_NgbModalWindow_Host_0;
var NgbModalWindowNgFactory = i0.ɵccf("ngb-modal-window", i1.NgbModalWindow, View_NgbModalWindow_Host_0, { backdrop: "backdrop", centered: "centered", keyboard: "keyboard", size: "size", windowClass: "windowClass" }, { dismissEvent: "dismiss" }, ["*"]);
exports.NgbModalWindowNgFactory = NgbModalWindowNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js ***!
  \***************************************************************************/
/*! exports provided: NgbPopoverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return NgbPopoverConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = /** @class */ (function () {
    function NgbPopoverConfig() {
        this.placement = 'top';
        this.triggers = 'click';
        this.disablePopover = false;
    }
    NgbPopoverConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbPopoverConfig;
}());

//# sourceMappingURL=popover-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js ***!
  \********************************************************************/
/*! exports provided: NgbPopoverWindow, NgbPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverWindow", function() { return NgbPopoverWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return NgbPopover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/triggers */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js");





var nextId = 0;
var NgbPopoverWindow = /** @class */ (function () {
    function NgbPopoverWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbPopoverWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
    };
    NgbPopoverWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-popover-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class]': '"popover bs-popover-" + placement.split("-")[0]+" bs-popover-" + placement',
                        'role': 'tooltip',
                        '[id]': 'id'
                    },
                    template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\">{{title}}</h3><div class=\"popover-body\"><ng-content></ng-content></div>",
                    styles: ["\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -5px;\n    }\n\n    :host.bs-popover-top-left .arrow, :host.bs-popover-bottom-left .arrow {\n      left: 2em;\n    }\n\n    :host.bs-popover-top-right .arrow, :host.bs-popover-bottom-right .arrow {\n      left: auto;\n      right: 2em;\n    }\n\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -5px;\n    }\n\n    :host.bs-popover-left-top .arrow, :host.bs-popover-right-top .arrow {\n      top: 0.7em;\n    }\n\n    :host.bs-popover-left-bottom .arrow, :host.bs-popover-right-bottom .arrow {\n      top: auto;\n      bottom: 0.7em;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbPopoverWindow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    NgbPopoverWindow.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbPopoverWindow;
}());

/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var NgbPopover = /** @class */ (function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the popover is shown
           */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * Emits an event when the popover is hidden
           */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disablePopover = config.disablePopover;
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_3__["PopupService"](NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    NgbPopover.prototype._isDisabled = function () {
        if (this.disablePopover) {
            return true;
        }
        if (!this.ngbPopover && !this.popoverTitle) {
            return true;
        }
        return false;
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     */
    /**
       * Opens an element’s popover. This is considered a “manual” triggering of the popover.
       * The context is an optional value to be injected into the popover template when it is created.
       */
    NgbPopover.prototype.open = /**
       * Opens an element’s popover. This is considered a “manual” triggering of the popover.
       * The context is an optional value to be injected into the popover template when it is created.
       */
    function (context) {
        if (!this._windowRef && !this._isDisabled()) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position popover along the element
            this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     */
    /**
       * Closes an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.close = /**
       * Closes an element’s popover. This is considered a “manual” triggering of the popover.
       */
    function () {
        if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
     */
    /**
       * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.toggle = /**
       * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
       */
    function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the popover is currently being shown
     */
    /**
       * Returns whether or not the popover is currently being shown
       */
    NgbPopover.prototype.isOpen = /**
       * Returns whether or not the popover is currently being shown
       */
    function () { return this._windowRef != null; };
    NgbPopover.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(_util_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggers"])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbPopover.prototype.ngOnChanges = function (changes) {
        // close popover if title and content become empty, or disablePopover set to true
        if ((changes['ngbPopover'] || changes['popoverTitle'] || changes['disablePopover']) && this._isDisabled()) {
            this.close();
        }
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    NgbPopover.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] },
    ];
    /** @nocollapse */
    NgbPopover.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _popover_config__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbPopover.propDecorators = {
        "ngbPopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "popoverTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disablePopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbPopover;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./popover */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js");
var styles_NgbPopoverWindow = [".bs-popover-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: 50%;\n      margin-left: -5px;\n    }\n\n    .bs-popover-top-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-bottom-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: 2em;\n    }\n\n    .bs-popover-top-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-bottom-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: auto;\n      right: 2em;\n    }\n\n    .bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: 50%;\n      margin-top: -5px;\n    }\n\n    .bs-popover-left-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-right-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: 0.7em;\n    }\n\n    .bs-popover-left-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-right-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: auto;\n      bottom: 0.7em;\n    }"];
var RenderType_NgbPopoverWindow = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbPopoverWindow, data: {} });
exports.RenderType_NgbPopoverWindow = RenderType_NgbPopoverWindow;
function View_NgbPopoverWindow_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "arrow"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "h3", [["class", "popover-header"]], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "popover-body"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); }); }
exports.View_NgbPopoverWindow_0 = View_NgbPopoverWindow_0;
function View_NgbPopoverWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-popover-window", [["role", "tooltip"]], [[8, "className", 0], [8, "id", 0]], null, null, View_NgbPopoverWindow_0, RenderType_NgbPopoverWindow)), i0.ɵdid(1, 49152, null, 0, i1.NgbPopoverWindow, [i0.ElementRef, i0.Renderer2], null, null)], null, function (_ck, _v) { var currVal_0 = ((("popover bs-popover-" + i0.ɵnov(_v, 1).placement.split("-")[0]) + " bs-popover-") + i0.ɵnov(_v, 1).placement); var currVal_1 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
exports.View_NgbPopoverWindow_Host_0 = View_NgbPopoverWindow_Host_0;
var NgbPopoverWindowNgFactory = i0.ɵccf("ngb-popover-window", i1.NgbPopoverWindow, View_NgbPopoverWindow_Host_0, { placement: "placement", title: "title", id: "id" }, {}, ["*"]);
exports.NgbPopoverWindowNgFactory = NgbPopoverWindowNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js ***!
  \***************************************************************************/
/*! exports provided: NgbTooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return NgbTooltipConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Configuration service for the NgbTooltip directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = /** @class */ (function () {
    function NgbTooltipConfig() {
        this.placement = 'top';
        this.triggers = 'hover';
        this.disableTooltip = false;
    }
    NgbTooltipConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbTooltipConfig;
}());

//# sourceMappingURL=tooltip-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js ***!
  \********************************************************************/
/*! exports provided: NgbTooltipWindow, NgbTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipWindow", function() { return NgbTooltipWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return NgbTooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/triggers */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");





var nextId = 0;
var NgbTooltipWindow = /** @class */ (function () {
    function NgbTooltipWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbTooltipWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
    };
    NgbTooltipWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-tooltip-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class]': '"tooltip show bs-tooltip-" + placement.split("-")[0]+" bs-tooltip-" + placement',
                        'role': 'tooltip',
                        '[id]': 'id'
                    },
                    template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
                    styles: ["\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: calc(50% - 0.4rem);\n    }\n\n    :host.bs-tooltip-top-left .arrow, :host.bs-tooltip-bottom-left .arrow {\n      left: 1em;\n    }\n\n    :host.bs-tooltip-top-right .arrow, :host.bs-tooltip-bottom-right .arrow {\n      left: auto;\n      right: 0.8rem;\n    }\n\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: calc(50% - 0.4rem);\n    }\n\n    :host.bs-tooltip-left-top .arrow, :host.bs-tooltip-right-top .arrow {\n      top: 0.4rem;\n    }\n\n    :host.bs-tooltip-left-bottom .arrow, :host.bs-tooltip-right-bottom .arrow {\n      top: auto;\n      bottom: 0.4rem;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbTooltipWindow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    NgbTooltipWindow.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTooltipWindow;
}());

/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
var NgbTooltip = /** @class */ (function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the tooltip is shown
           */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * Emits an event when the tooltip is hidden
           */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disableTooltip = config.disableTooltip;
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_3__["PopupService"](NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: function () { return this._ngbTooltip; },
        set: /**
           * Content to be displayed as tooltip. If falsy, the tooltip won't open.
           */
        function (value) {
            this._ngbTooltip = value;
            if (!value && this._windowRef) {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * The context is an optional value to be injected into the tooltip template when it is created.
     */
    /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * The context is an optional value to be injected into the tooltip template when it is created.
       */
    NgbTooltip.prototype.open = /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * The context is an optional value to be injected into the tooltip template when it is created.
       */
    function (context) {
        if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._windowRef.instance.placement = Array.isArray(this.placement) ? this.placement[0] : this.placement;
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position tooltip along the element
            this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.close = /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    function () {
        if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.toggle = /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    /**
       * Returns whether or not the tooltip is currently being shown
       */
    NgbTooltip.prototype.isOpen = /**
       * Returns whether or not the tooltip is currently being shown
       */
    function () { return this._windowRef != null; };
    NgbTooltip.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(_util_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggers"])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    };
    NgbTooltip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] },
    ];
    /** @nocollapse */
    NgbTooltip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _tooltip_config__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbTooltip.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ngbTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTooltip;
}());

//# sourceMappingURL=tooltip.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./tooltip */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js");
var styles_NgbTooltipWindow = [".bs-tooltip-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: calc(50% - 0.4rem);\n    }\n\n    .bs-tooltip-top-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-bottom-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: 1em;\n    }\n\n    .bs-tooltip-top-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-bottom-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: auto;\n      right: 0.8rem;\n    }\n\n    .bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: calc(50% - 0.4rem);\n    }\n\n    .bs-tooltip-left-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-right-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: 0.4rem;\n    }\n\n    .bs-tooltip-left-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-right-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: auto;\n      bottom: 0.4rem;\n    }"];
var RenderType_NgbTooltipWindow = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbTooltipWindow, data: {} });
exports.RenderType_NgbTooltipWindow = RenderType_NgbTooltipWindow;
function View_NgbTooltipWindow_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "arrow"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "tooltip-inner"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_NgbTooltipWindow_0 = View_NgbTooltipWindow_0;
function View_NgbTooltipWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-tooltip-window", [["role", "tooltip"]], [[8, "className", 0], [8, "id", 0]], null, null, View_NgbTooltipWindow_0, RenderType_NgbTooltipWindow)), i0.ɵdid(1, 49152, null, 0, i1.NgbTooltipWindow, [i0.ElementRef, i0.Renderer2], null, null)], null, function (_ck, _v) { var currVal_0 = ((("tooltip show bs-tooltip-" + i0.ɵnov(_v, 1).placement.split("-")[0]) + " bs-tooltip-") + i0.ɵnov(_v, 1).placement); var currVal_1 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
exports.View_NgbTooltipWindow_Host_0 = View_NgbTooltipWindow_Host_0;
var NgbTooltipWindowNgFactory = i0.ɵccf("ngb-tooltip-window", i1.NgbTooltipWindow, View_NgbTooltipWindow_Host_0, { placement: "placement", id: "id" }, {}, ["*"]);
exports.NgbTooltipWindowNgFactory = NgbTooltipWindowNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js ***!
  \************************************************************************/
/*! exports provided: NgbHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return NgbHighlight; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbHighlight = /** @class */ (function () {
    function NgbHighlight() {
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var resultStr = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["toString"])(this.result);
        var resultLC = resultStr.toLowerCase();
        var termLC = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["toString"])(this.term).toLowerCase();
        var currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp("(" + Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["regExpEscape"])(termLC) + ")")).map(function (part) {
                var originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        }
        else {
            this.parts = [resultStr];
        }
    };
    NgbHighlight.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-highlight',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                        "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><ng-template [ngIf]=\"!isOdd\">{{part}}</ng-template>" +
                        "</ng-template>",
                    // template needs to be formatted in a certain way so we don't add empty text nodes
                    styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbHighlight.propDecorators = {
        "highlightClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "result": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "term": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbHighlight;
}());

//# sourceMappingURL=highlight.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.ngfactory.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./highlight */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js");
var styles_NgbHighlight = [".ngb-highlight[_ngcontent-%COMP%] {\n      font-weight: bold;\n    }"];
var RenderType_NgbHighlight = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbHighlight, data: {} });
exports.RenderType_NgbHighlight = RenderType_NgbHighlight;
function View_NgbHighlight_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "", _co.highlightClass, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_NgbHighlight_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(0, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 0, 0, currVal_0); }); }
function View_NgbHighlight_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbHighlight_2)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbHighlight_3)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.odd; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_v.context.odd; _ck(_v, 3, 0, currVal_1); }, null); }
function View_NgbHighlight_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbHighlight_1)), i0.ɵdid(1, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.parts; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_NgbHighlight_0 = View_NgbHighlight_0;
function View_NgbHighlight_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-highlight", [], null, null, null, View_NgbHighlight_0, RenderType_NgbHighlight)), i0.ɵdid(1, 573440, null, 0, i2.NgbHighlight, [], null, null)], null, null); }
exports.View_NgbHighlight_Host_0 = View_NgbHighlight_Host_0;
var NgbHighlightNgFactory = i0.ɵccf("ngb-highlight", i2.NgbHighlight, View_NgbHighlight_Host_0, { highlightClass: "highlightClass", result: "result", term: "term" }, {}, []);
exports.NgbHighlightNgFactory = NgbHighlightNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js ***!
  \*******************************************************************************/
/*! exports provided: NgbTypeaheadWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadWindow", function() { return NgbTypeaheadWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbTypeaheadWindow = /** @class */ (function () {
    function NgbTypeaheadWindow() {
        this.activeIdx = 0;
        /**
           * Flag indicating if the first row should be active initially
           */
        this.focusFirst = true;
        /**
           * A function used to format a given result before display. This function should return a formatted string without any
           * HTML markup
           */
        this.formatter = _util_util__WEBPACK_IMPORTED_MODULE_1__["toString"];
        /**
           * Event raised when user selects a particular result row
           */
        this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbTypeaheadWindow.prototype.hasActive = function () { return this.activeIdx > -1 && this.activeIdx < this.results.length; };
    NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.next = function () {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.prev = function () {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.resetActive = function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
    NgbTypeaheadWindow.prototype.ngOnInit = function () { this.resetActive(); };
    NgbTypeaheadWindow.prototype._activeChanged = function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    NgbTypeaheadWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-typeahead-window',
                    exportAs: 'ngbTypeaheadWindow',
                    host: { 'class': 'dropdown-menu show', 'role': 'listbox', '[id]': 'id' },
                    template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbTypeaheadWindow.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirst": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "results": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "term": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resultTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['select',] },],
        "activeChangeEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['activeChange',] },],
    };
    return NgbTypeaheadWindow;
}());

//# sourceMappingURL=typeahead-window.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./highlight.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.ngfactory.js");
var i2 = __webpack_require__(/*! ./highlight */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./typeahead-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js");
var styles_NgbTypeaheadWindow = [];
var RenderType_NgbTypeaheadWindow = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbTypeaheadWindow, data: {} });
exports.RenderType_NgbTypeaheadWindow = RenderType_NgbTypeaheadWindow;
function View_NgbTypeaheadWindow_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-highlight", [], null, null, null, i1.View_NgbHighlight_0, i1.RenderType_NgbHighlight)), i0.ɵdid(1, 573440, null, 0, i2.NgbHighlight, [], { result: [0, "result"], term: [1, "term"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.formatter(_v.context.result); var currVal_1 = _v.context.term; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_NgbTypeaheadWindow_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbTypeaheadWindow_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "button", [["class", "dropdown-item"], ["role", "option"], ["type", "button"]], [[8, "id", 0], [2, "active", null]], [[null, "mouseenter"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.markActive(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.select(_v.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_NgbTypeaheadWindow_3)), i0.ɵdid(2, 540672, null, 0, i3.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { result: 0, term: 1, formatter: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 3, 0, _v.context.$implicit, _co.term, _co.formatter); var currVal_3 = (_co.resultTemplate || i0.ɵnov(_v.parent, 0)); _ck(_v, 2, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.id + "-") + _v.context.index); var currVal_1 = (_v.context.index === _co.activeIdx); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_NgbTypeaheadWindow_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, [["rt", 2]], null, 0, null, View_NgbTypeaheadWindow_1)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTypeaheadWindow_2)), i0.ɵdid(2, 802816, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.results; _ck(_v, 2, 0, currVal_0); }, null); }
exports.View_NgbTypeaheadWindow_0 = View_NgbTypeaheadWindow_0;
function View_NgbTypeaheadWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-typeahead-window", [["class", "dropdown-menu show"], ["role", "listbox"]], [[8, "id", 0]], null, null, View_NgbTypeaheadWindow_0, RenderType_NgbTypeaheadWindow)), i0.ɵdid(1, 114688, null, 0, i4.NgbTypeaheadWindow, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbTypeaheadWindow_Host_0 = View_NgbTypeaheadWindow_Host_0;
var NgbTypeaheadWindowNgFactory = i0.ɵccf("ngb-typeahead-window", i4.NgbTypeaheadWindow, View_NgbTypeaheadWindow_Host_0, { id: "id", focusFirst: "focusFirst", results: "results", term: "term", formatter: "formatter", resultTemplate: "resultTemplate" }, { selectEvent: "select", activeChangeEvent: "activeChange" }, []);
exports.NgbTypeaheadWindowNgFactory = NgbTypeaheadWindowNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js ***!
  \***************************************************************/
/*! exports provided: ContentRef, PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

var PopupService = /** @class */ (function () {
    function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver) {
        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    PopupService.prototype.open = function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    };
    PopupService.prototype.close = function () {
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
        }
    };
    PopupService.prototype._getContentRef = function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js ***!
  \*********************************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var 
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    // get the availble placements of the target element in the viewport dependeing on the host element
    // get the availble placements of the target element in the viewport dependeing on the host element
    Positioning.prototype.getAvailablePlacements = 
    // get the availble placements of the target element in the viewport dependeing on the host element
    function (hostElement, targetElement) {
        var availablePlacements = [];
        var hostElemClientRect = hostElement.getBoundingClientRect();
        var targetElemClientRect = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        // left: check if target width can be placed between host left and viewport start and also height of target is
        // inside viewport
        if (targetElemClientRect.width < hostElemClientRect.left) {
            // check for left only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'left');
            }
            // check for left-top and left-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        }
        // top: target height is less than host top
        if (targetElemClientRect.height < hostElemClientRect.top) {
            availablePlacements.splice(availablePlacements.length, 1, 'top');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        }
        // right: check if target width can be placed between host right and viewport end and also height of target is
        // inside viewport
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.right > targetElemClientRect.width) {
            // check for right only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'right');
            }
            // check for right-top and right-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        }
        // bottom: check if there is enough space between host bottom and viewport end for target height
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.bottom > targetElemClientRect.height) {
            availablePlacements.splice(availablePlacements.length, 1, 'bottom');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }
        return availablePlacements;
    };
    /**
     * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
     * primaryplacement: left|right
     * availablePlacementArr: array in which available placemets to be set
     */
    /**
       * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
       * primaryplacement: left|right
       * availablePlacementArr: array in which available placemets to be set
       */
    Positioning.prototype.setSecondaryPlacementForLeftRight = /**
       * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
       * primaryplacement: left|right
       * availablePlacementArr: array in which available placemets to be set
       */
    function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
    };
    /**
     * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
     * primaryplacement: top|bottom
     * availablePlacementArr: array in which available placemets to be set
     */
    /**
       * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
       * primaryplacement: top|bottom
       * availablePlacementArr: array in which available placemets to be set
       */
    Positioning.prototype.setSecondaryPlacementForTopBottom = /**
       * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
       * primaryplacement: top|bottom
       * availablePlacementArr: array in which available placemets to be set
       */
    function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.left >= targetElemClientRect.width) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }
        if (targetElemClientRect.width <= hostElemClientRect.right) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
    };
    return Positioning;
}());
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js

var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order 'top', 'bottom', 'left', 'right'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var placementVals = Array.isArray(placement) ? placement : [placement];
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        ['top', 'right', 'bottom', 'left'].forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj + '|^' + obj + '-') !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    var topVal = 0, leftVal = 0;
    var appliedPlacement;
    // get available placements
    var availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);
    var _loop_1 = function (item, index) {
        // check if passed placement is present in the available placement or otherwise apply the last placement in the
        // passed placement list
        if ((availablePlacements.find(function (val) { return val === item; }) != null) || (placementVals.length === index + 1)) {
            appliedPlacement = item;
            var pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
            topVal = pos.top;
            leftVal = pos.left;
            return "break";
        }
    };
    // iterate over all the passed placements
    for (var _i = 0, _a = toItemIndexes(placementVals); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b.item, index = _b.index;
        var state_1 = _loop_1(item, index);
        if (state_1 === "break")
            break;
    }
    targetElement.style.top = topVal + "px";
    targetElement.style.left = leftVal + "px";
    return appliedPlacement;
}
// function to get index and item of an array
function toItemIndexes(a) {
    return a.map(function (item, index) { return ({ item: item, index: index }); });
}
//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js ***!
  \******************************************************************/
/*! exports provided: Trigger, parseTriggers, listenToTriggers, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());

var DEFAULT_ALIASES = {
    'hover': ['mouseenter', 'mouseleave']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
var noopFn = function () { };
var ɵ0 = noopFn;
function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return noopFn;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
        }
        else {
            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
        }
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}

//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js ***!
  \**************************************************************/
/*! exports provided: toInteger, toString, getValueInRange, isString, isNumber, isInteger, isDefined, padNumber, regExpEscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInteger", function() { return toInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueInRange", function() { return getValueInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padNumber", function() { return padNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpEscape", function() { return regExpEscape; });
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
    return Math.max(Math.min(value, max), min);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
__webpack_require__(/*! rxjs/add/operator/map */ "rxjs/add/operator/map");
var block_ui_instance_service_1 = __webpack_require__(/*! ../../services/block-ui-instance.service */ "./node_modules/ng-block-ui/lib/services/block-ui-instance.service.js");
var block_ui_actions_constant_1 = __webpack_require__(/*! ../../constants/block-ui-actions.constant */ "./node_modules/ng-block-ui/lib/constants/block-ui-actions.constant.js");
var block_ui_default_name_constant_1 = __webpack_require__(/*! ../../constants/block-ui-default-name.constant */ "./node_modules/ng-block-ui/lib/constants/block-ui-default-name.constant.js");
var block_ui_content_component_style_1 = __webpack_require__(/*! ./block-ui-content.component.style */ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.style.js");
var block_ui_content_component_template_1 = __webpack_require__(/*! ./block-ui-content.component.template */ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.template.js");
var BlockUIContentComponent = /** @class */ (function () {
    function BlockUIContentComponent(blockUI, resolver, changeDetectionRef) {
        this.blockUI = blockUI;
        this.resolver = resolver;
        this.changeDetectionRef = changeDetectionRef;
        this.name = block_ui_default_name_constant_1.BlockUIDefaultName;
        this.delayStart = 0;
        this.delayStop = 0;
        this.timeouts = { delayStart: null, delayStop: null };
        this.active = false;
    }
    BlockUIContentComponent.prototype.ngOnInit = function () {
        this.settings = this.blockUI.getSettings();
        this.blockUISubscription = this.subscribeToBlockUI(this.blockUI.observe());
    };
    BlockUIContentComponent.prototype.ngAfterViewInit = function () {
        try {
            if (this.templateCmp) {
                if (this.templateCmp instanceof core_1.TemplateRef) {
                    this.templateOutlet.createEmbeddedView(this.templateCmp);
                }
                else {
                    var templateComp = this.resolver.resolveComponentFactory(this.templateCmp);
                    this.templateCompRef = this.templateOutlet.createComponent(templateComp);
                    this.updateBlockTemplate(this.message);
                }
            }
        }
        catch (error) {
            console.error('ng-block-ui:', error);
        }
    };
    BlockUIContentComponent.prototype.ngAfterViewChecked = function () {
        this.changeDetectionRef.detectChanges();
    };
    BlockUIContentComponent.prototype.subscribeToBlockUI = function (blockUI$) {
        var _this = this;
        return blockUI$
            .subscribe(function (event) { return _this.onDispatchedEvent(event); });
    };
    BlockUIContentComponent.prototype.onDispatchedEvent = function (event) {
        switch (event.action) {
            case (block_ui_actions_constant_1.BlockUIActions.START):
                this.delay('delayStart', this.delayStart, event)(this.onStart.bind(this));
                break;
            case (block_ui_actions_constant_1.BlockUIActions.STOP):
                this.delay('delayStop', this.delayStop, event)(this.onStop.bind(this));
                break;
            case (block_ui_actions_constant_1.BlockUIActions.UPDATE):
                this.onUpdate(event);
                break;
            case (block_ui_actions_constant_1.BlockUIActions.RESET):
                this.onStop(event);
                break;
            case (block_ui_actions_constant_1.BlockUIActions.UNSUBSCRIBE):
                this.onStop(event);
                this.onUnsubscribe(event.name);
                break;
        }
    };
    BlockUIContentComponent.prototype.onStart = function (_a) {
        var name = _a.name, message = _a.message;
        if (name === this.name) {
            this.active = true;
            this.message = message || this.defaultMessage || this.settings.message;
            this.updateBlockTemplate(this.message);
            this.changeDetectionRef.detectChanges();
        }
    };
    BlockUIContentComponent.prototype.onStop = function (_a) {
        var name = _a.name, action = _a.action;
        var delayStart = this.timeouts.delayStart;
        if (name === this.name || action === block_ui_actions_constant_1.BlockUIActions.RESET) {
            delayStart && clearTimeout(delayStart);
            this.active = false;
            this.changeDetectionRef.detectChanges();
        }
    };
    BlockUIContentComponent.prototype.onUpdate = function (_a) {
        var name = _a.name, message = _a.message;
        if (name === this.name) {
            this.active = true;
            this.message = message || this.defaultMessage || this.settings.message;
            this.updateBlockTemplate(this.message);
            this.changeDetectionRef.detectChanges();
        }
    };
    BlockUIContentComponent.prototype.updateBlockTemplate = function (msg) {
        if (this.templateCompRef && this.templateCompRef instanceof core_1.ComponentRef) {
            this.templateCompRef.instance.message = msg;
        }
    };
    BlockUIContentComponent.prototype.onUnsubscribe = function (name) {
        if (this.blockUISubscription && name === this.name) {
            this.blockUISubscription.unsubscribe();
        }
    };
    BlockUIContentComponent.prototype.delay = function (type, delay, event) {
        var _this = this;
        return function (action) {
            delay = delay || _this.settings[type] || 0;
            if (delay) {
                _this.timeouts[type] = setTimeout(function (event) {
                    action(event);
                }, delay, event);
            }
            else {
                action(event);
            }
        };
    };
    BlockUIContentComponent.prototype.ngOnDestroy = function () {
        this.onUnsubscribe(this.name);
    };
    BlockUIContentComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'block-ui-content',
                    template: block_ui_content_component_template_1.template,
                    styles: [block_ui_content_component_style_1.styles],
                    // TODO: Find how to bundle styles for npm
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    BlockUIContentComponent.ctorParameters = function () { return [
        { type: block_ui_instance_service_1.BlockUIInstanceService, },
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    BlockUIContentComponent.propDecorators = {
        "name": [{ type: core_1.Input },],
        "delayStart": [{ type: core_1.Input },],
        "delayStop": [{ type: core_1.Input },],
        "defaultMessage": [{ type: core_1.Input, args: ['message',] },],
        "templateCmp": [{ type: core_1.Input, args: ['template',] },],
        "templateOutlet": [{ type: core_1.ViewChild, args: ['templateOutlet', { read: core_1.ViewContainerRef },] },],
    };
    return BlockUIContentComponent;
}());
exports.BlockUIContentComponent = BlockUIContentComponent;


/***/ }),

/***/ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.ngfactory.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.ngfactory.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./block-ui-content.component */ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.js");
var i3 = __webpack_require__(/*! ../../services/block-ui-instance.service */ "./node_modules/ng-block-ui/lib/services/block-ui-instance.service.js");
var styles_BlockUIContentComponent = ["\n.block-ui-wrapper {\n  display: none;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.70);\n  z-index: 30000;\n  cursor: wait;\n}\n\n.block-ui-wrapper.block-ui-wrapper--element {\n  position: absolute;\n}\n\n.block-ui-wrapper.active {\n  display: block;\n}\n\n.block-ui-wrapper.block-ui-main {\n  position: fixed;\n}\n\n.block-ui-spinner,\n.block-ui-template {\n  position: absolute;\n  top: 40%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.block-ui-spinner > .message {\n  font-size: 1.3em;\n  text-align: center;\n  color: #fff;\n}\n\n.block-ui__element {\n  position: relative;\n}\n\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n.loader {\n  margin: 7px auto;\n  font-size: 5px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n"];
var RenderType_BlockUIContentComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_BlockUIContentComponent, data: {} });
exports.RenderType_BlockUIContentComponent = RenderType_BlockUIContentComponent;
function View_BlockUIContentComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "message"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.message || _co.defaultMessage); _ck(_v, 1, 0, currVal_0); }); }
function View_BlockUIContentComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "block-ui-spinner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "div", [["class", "loader"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_BlockUIContentComponent_2)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.message || _co.defaultMessage); _ck(_v, 3, 0, currVal_0); }, null); }
function View_BlockUIContentComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_BlockUIContentComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, [[1, 3], ["templateOutlet", 2]], null, 0, null, View_BlockUIContentComponent_4)), (_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_BlockUIContentComponent_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { templateOutlet: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 6, "div", [], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "active": 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_BlockUIContentComponent_1)), i0.ɵdid(5, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_BlockUIContentComponent_3)), i0.ɵdid(7, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(2, "block-ui-wrapper ", _co.name, " ", _co.className, ""); var currVal_1 = _ck(_v, 3, 0, _co.active); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = !_co.templateCmp; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.templateCmp; _ck(_v, 7, 0, currVal_3); }, null); }
exports.View_BlockUIContentComponent_0 = View_BlockUIContentComponent_0;
function View_BlockUIContentComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "block-ui-content", [], null, null, null, View_BlockUIContentComponent_0, RenderType_BlockUIContentComponent)), i0.ɵdid(1, 12828672, null, 0, i2.BlockUIContentComponent, [i3.BlockUIInstanceService, i0.ComponentFactoryResolver, i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_BlockUIContentComponent_Host_0 = View_BlockUIContentComponent_Host_0;
var BlockUIContentComponentNgFactory = i0.ɵccf("block-ui-content", i2.BlockUIContentComponent, View_BlockUIContentComponent_Host_0, { name: "name", delayStart: "delayStart", delayStop: "delayStop", defaultMessage: "message", templateCmp: "template" }, {}, []);
exports.BlockUIContentComponentNgFactory = BlockUIContentComponentNgFactory;


/***/ }),

/***/ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.style.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.style.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Spinner style - https://github.com/lukehaas/css-loaders
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = "\n.block-ui-wrapper {\n  display: none;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.70);\n  z-index: 30000;\n  cursor: wait;\n}\n\n.block-ui-wrapper.block-ui-wrapper--element {\n  position: absolute;\n}\n\n.block-ui-wrapper.active {\n  display: block;\n}\n\n.block-ui-wrapper.block-ui-main {\n  position: fixed;\n}\n\n.block-ui-spinner,\n.block-ui-template {\n  position: absolute;\n  top: 40%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.block-ui-spinner > .message {\n  font-size: 1.3em;\n  text-align: center;\n  color: #fff;\n}\n\n.block-ui__element {\n  position: relative;\n}\n\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n.loader {\n  margin: 7px auto;\n  font-size: 5px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";


/***/ }),

/***/ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.template.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.template.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.template = "\n<div class=\"block-ui-wrapper {{name}} {{className}}\" [ngClass]=\"{ 'active': active }\">\n  <div class=\"block-ui-spinner\" *ngIf=\"!templateCmp\">\n    <div class=\"loader\"></div>\n    <div *ngIf=\"message || defaultMessage\" class=\"message\">\n      {{ message || defaultMessage }}\n    </div>\n  </div>\n  <ng-template *ngIf=\"templateCmp\" #templateOutlet></ng-template>\n</div>\n";


/***/ }),

/***/ "./node_modules/ng-block-ui/lib/components/block-ui/block-ui.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-block-ui/lib/components/block-ui/block-ui.component.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var block_ui_instance_service_1 = __webpack_require__(/*! ../../services/block-ui-instance.service */ "./node_modules/ng-block-ui/lib/services/block-ui-instance.service.js");
var block_ui_default_name_constant_1 = __webpack_require__(/*! ../../constants/block-ui-default-name.constant */ "./node_modules/ng-block-ui/lib/constants/block-ui-default-name.constant.js");
var BlockUIComponent = /** @class */ (function () {
    function BlockUIComponent(blockUI) {
        this.blockUI = blockUI;
    }
    BlockUIComponent.prototype.ngOnInit = function () {
        this.name = this.name || block_ui_default_name_constant_1.BlockUIDefaultName;
        this.template = this.template || this.blockUI.blockUISettings.template;
    };
    BlockUIComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'block-ui',
                    template: "\n    <ng-content></ng-content>\n    <block-ui-content\n      [name]=\"name\"\n      [message]=\"message\"\n      [template]=\"template\"\n      [delayStart]=\"delayStart\"\n      [delayStop]=\"delayStop\"\n    >\n    </block-ui-content>\n  ",
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    BlockUIComponent.ctorParameters = function () { return [
        { type: block_ui_instance_service_1.BlockUIInstanceService, },
    ]; };
    BlockUIComponent.propDecorators = {
        "name": [{ type: core_1.Input },],
        "message": [{ type: core_1.Input },],
        "delayStart": [{ type: core_1.Input },],
        "delayStop": [{ type: core_1.Input },],
        "template": [{ type: core_1.Input },],
    };
    return BlockUIComponent;
}());
exports.BlockUIComponent = BlockUIComponent;


/***/ }),

/***/ "./node_modules/ng-block-ui/lib/components/block-ui/block-ui.component.ngfactory.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/ng-block-ui/lib/components/block-ui/block-ui.component.ngfactory.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../block-ui-content/block-ui-content.component.ngfactory */ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../block-ui-content/block-ui-content.component */ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.js");
var i3 = __webpack_require__(/*! ../../services/block-ui-instance.service */ "./node_modules/ng-block-ui/lib/services/block-ui-instance.service.js");
var i4 = __webpack_require__(/*! ./block-ui.component */ "./node_modules/ng-block-ui/lib/components/block-ui/block-ui.component.js");
var styles_BlockUIComponent = [];
var RenderType_BlockUIComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_BlockUIComponent, data: {} });
exports.RenderType_BlockUIComponent = RenderType_BlockUIComponent;
function View_BlockUIComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0), (_l()(), i0.ɵeld(1, 0, null, null, 1, "block-ui-content", [], null, null, null, i1.View_BlockUIContentComponent_0, i1.RenderType_BlockUIContentComponent)), i0.ɵdid(2, 12828672, null, 0, i2.BlockUIContentComponent, [i3.BlockUIInstanceService, i0.ComponentFactoryResolver, i0.ChangeDetectorRef], { name: [0, "name"], delayStart: [1, "delayStart"], delayStop: [2, "delayStop"], defaultMessage: [3, "defaultMessage"], templateCmp: [4, "templateCmp"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.name; var currVal_1 = _co.delayStart; var currVal_2 = _co.delayStop; var currVal_3 = _co.message; var currVal_4 = _co.template; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }, null); }
exports.View_BlockUIComponent_0 = View_BlockUIComponent_0;
function View_BlockUIComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "block-ui", [], null, null, null, View_BlockUIComponent_0, RenderType_BlockUIComponent)), i0.ɵdid(1, 114688, null, 0, i4.BlockUIComponent, [i3.BlockUIInstanceService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_BlockUIComponent_Host_0 = View_BlockUIComponent_Host_0;
var BlockUIComponentNgFactory = i0.ɵccf("block-ui", i4.BlockUIComponent, View_BlockUIComponent_Host_0, { name: "name", message: "message", delayStart: "delayStart", delayStop: "delayStop", template: "template" }, {}, ["*"]);
exports.BlockUIComponentNgFactory = BlockUIComponentNgFactory;


/***/ }),

/***/ "./node_modules/ng-block-ui/lib/constants/block-ui-actions.constant.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ng-block-ui/lib/constants/block-ui-actions.constant.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlockUIActions = /** @class */ (function () {
    function BlockUIActions() {
    }
    BlockUIActions.START = 'start';
    BlockUIActions.STOP = 'stop';
    BlockUIActions.UPDATE = 'update';
    BlockUIActions.RESET = 'reset';
    BlockUIActions.UNSUBSCRIBE = 'unsubscribe';
    return BlockUIActions;
}());
exports.BlockUIActions = BlockUIActions;


/***/ }),

/***/ "./node_modules/ng-block-ui/lib/constants/block-ui-default-name.constant.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-block-ui/lib/constants/block-ui-default-name.constant.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockUIDefaultName = "block-ui-main";


/***/ }),

/***/ "./node_modules/ng-block-ui/lib/services/block-ui-instance.service.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng-block-ui/lib/services/block-ui-instance.service.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ReplaySubject_1 = __webpack_require__(/*! rxjs/ReplaySubject */ "rxjs/ReplaySubject");
var block_ui_actions_constant_1 = __webpack_require__(/*! ../constants/block-ui-actions.constant */ "./node_modules/ng-block-ui/lib/constants/block-ui-actions.constant.js");
var block_ui_default_name_constant_1 = __webpack_require__(/*! ../constants/block-ui-default-name.constant */ "./node_modules/ng-block-ui/lib/constants/block-ui-default-name.constant.js");
var BlockUIInstanceService = /** @class */ (function () {
    function BlockUIInstanceService() {
        this.blockUISettings = {};
        this.blockUIInstances = [];
        this.blockUISubject = new ReplaySubject_1.ReplaySubject();
        this.blockUIObservable = this.blockUISubject.asObservable();
        this.blockUIObservable.subscribe(this.blockUIMiddleware.bind(this));
    }
    BlockUIInstanceService.prototype.getSettings = function () {
        return this.blockUISettings;
    };
    BlockUIInstanceService.prototype.updateSettings = function (settings) {
        if (settings === void 0) { settings = {}; }
        this.blockUISettings = __assign({}, this.blockUISettings, settings);
    };
    BlockUIInstanceService.prototype.decorate = function (name) {
        if (name === void 0) { name = block_ui_default_name_constant_1.BlockUIDefaultName; }
        var blockUI = {
            name: name,
            isActive: false,
            start: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.START, name),
            update: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.UPDATE, name),
            stop: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.STOP, name),
            reset: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.RESET, name),
            unsubscribe: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.UNSUBSCRIBE, name)
        };
        this.blockUIInstances.push(blockUI);
        return blockUI;
    };
    BlockUIInstanceService.prototype.observe = function () {
        return this.blockUIObservable;
    };
    BlockUIInstanceService.prototype.blockUIMiddleware = function (_a) {
        var action = _a.action, name = _a.name;
        var isActive = null;
        switch (action) {
            case (block_ui_actions_constant_1.BlockUIActions.START):
                isActive = true;
                break;
            case (block_ui_actions_constant_1.BlockUIActions.STOP):
            case (block_ui_actions_constant_1.BlockUIActions.RESET):
                isActive = false;
                break;
        }
        if (isActive !== null) {
            this.blockUIInstances.forEach(function (i) {
                return i.isActive = i.name === name ? isActive : i.isActive;
            });
        }
    };
    BlockUIInstanceService.prototype.dispatch = function (subject, action, name) {
        if (name === void 0) { name = block_ui_default_name_constant_1.BlockUIDefaultName; }
        return function (message) {
            subject.next({
                name: name,
                action: action,
                message: message
            });
        };
    };
    BlockUIInstanceService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BlockUIInstanceService.ctorParameters = function () { return []; };
    return BlockUIInstanceService;
}());
exports.BlockUIInstanceService = BlockUIInstanceService;


/***/ }),

/***/ "./src/app/app-config.service.ts":
/*!***************************************!*\
  !*** ./src/app/app-config.service.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var environment_1 = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var AppConfigService = /** @class */ (function () {
    function AppConfigService(httpClient) {
        this.httpClient = httpClient;
    }
    AppConfigService.prototype.loadConfig = function () {
        return this.httpClient.get('/api/app-config')
            .toPromise()
            .then(function (appConfig) {
            environment_1.environment.appConfig = appConfig;
            return appConfig;
        }).catch(function (error) {
            console.error('failed to load app config: ' + JSON.stringify(error));
        });
    };
    return AppConfigService;
}());
exports.AppConfigService = AppConfigService;


/***/ }),

/***/ "./src/app/app-config.ts":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    return AppConfig;
}());
exports.AppConfig = AppConfig;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/collapse/collapse */ "@ng-bootstrap/ng-bootstrap/collapse/collapse");
var i5 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 56, "nav", [["class", "navbar navbar-expand-lg bg-secondary fixed-top text-uppercase"], ["id", "mainNav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 55, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "a", [["class", "navbar-brand"], ["fragment", "page-top"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { fragment: [0, "fragment"], routerLink: [1, "routerLink"] }, null), i1.ɵpad(4, 1), (_l()(), i1.ɵted(-1, null, ["Georg Ludewig"])), (_l()(), i1.ɵeld(6, 0, null, null, 2, "button", [["aria-controls", "navbarResponsive"], ["aria-expanded", "false"], ["aria-label", "Toggle navigation"], ["class", "navbar-toggler text-uppercase bg-primary text-white rounded"], ["type", "button"]], [[1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.navbarCollapsed = !_co.navbarCollapsed) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, [" Menu "])), (_l()(), i1.ɵeld(8, 0, null, null, 0, "i", [["class", "fa fa-bars"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 47, "div", [["class", "collapse navbar-collapse  justify-content-end"], ["id", "navbarResponsive"]], [[2, "collapse", null], [2, "show", null]], null, null, null, null)), i1.ɵdid(10, 16384, null, 0, i4.NgbCollapse, [], { collapsed: [0, "collapsed"] }, null), (_l()(), i1.ɵeld(11, 0, null, null, 45, "ul", [["class", "navbar-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 8, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 7, "a", [["class", "nav-link rounded"], ["fragment", "aboutme"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ((_co.navbarCollapsed = true) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(14, 671744, [[2, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { fragment: [0, "fragment"], routerLink: [1, "routerLink"] }, null), i1.ɵpad(15, 1), i1.ɵdid(16, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), i1.ɵpad(19, 1), (_l()(), i1.ɵted(-1, null, ["About me"])), (_l()(), i1.ɵeld(21, 0, null, null, 8, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 7, "a", [["class", "nav-link rounded"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ((_co.navbarCollapsed = true) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(23, 671744, [[4, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(24, 1), i1.ɵdid(25, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 3, { links: 1 }), i1.ɵqud(603979776, 4, { linksWithHrefs: 1 }), i1.ɵpad(28, 1), (_l()(), i1.ɵted(-1, null, ["Resume"])), (_l()(), i1.ɵeld(30, 0, null, null, 8, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 7, "a", [["class", "nav-link rounded"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ((_co.navbarCollapsed = true) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(32, 671744, [[6, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(33, 1), i1.ɵdid(34, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 5, { links: 1 }), i1.ɵqud(603979776, 6, { linksWithHrefs: 1 }), i1.ɵpad(37, 1), (_l()(), i1.ɵted(-1, null, ["Projects"])), (_l()(), i1.ɵeld(39, 0, null, null, 8, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 7, "a", [["class", "nav-link rounded"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 41).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ((_co.navbarCollapsed = true) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(41, 671744, [[8, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(42, 1), i1.ɵdid(43, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 7, { links: 1 }), i1.ɵqud(603979776, 8, { linksWithHrefs: 1 }), i1.ɵpad(46, 1), (_l()(), i1.ɵted(-1, null, ["Chat"])), (_l()(), i1.ɵeld(48, 0, null, null, 8, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 7, "a", [["class", "nav-link rounded"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 50).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ((_co.navbarCollapsed = true) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(50, 671744, [[10, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(51, 1), i1.ɵdid(52, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 9, { links: 1 }), i1.ɵqud(603979776, 10, { linksWithHrefs: 1 }), i1.ɵpad(55, 1), (_l()(), i1.ɵted(-1, null, ["Contact"])), (_l()(), i1.ɵeld(57, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(59, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(60, 0, null, null, 39, "footer", [["class", "footer text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 31, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 30, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 6, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 1, "h3", [["class", "text-uppercase"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Location"])), (_l()(), i1.ɵeld(66, 0, null, null, 3, "p", [["class", "lead"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["3005 Bern "])), (_l()(), i1.ɵeld(68, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Switzerland"])), (_l()(), i1.ɵeld(70, 0, null, null, 12, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 1, "h3", [["class", "text-uppercase"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Around the Web"])), (_l()(), i1.ɵeld(73, 0, null, null, 9, "ul", [["class", "list-inline"]], null, null, null, null, null)), (_l()(), i1.ɵeld(74, 0, null, null, 2, "li", [["class", "list-inline-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 1, "a", [["class", "btn btn-outline-light btn-social text-center rounded-circle"], ["href", "https://github.com/fischermatte"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 0, "i", [["class", "fa fa-fw fa-github"]], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 2, "li", [["class", "list-inline-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 1, "a", [["class", "btn btn-outline-light btn-social text-center rounded-circle"], ["href", "https://twitter.com/fischermatte"]], null, null, null, null, null)), (_l()(), i1.ɵeld(79, 0, null, null, 0, "i", [["class", "fa fa-fw fa-twitter"]], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, null, null, 2, "li", [["class", "list-inline-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 1, "a", [["class", "btn btn-outline-light btn-social text-center rounded-circle"], ["href", "https://stackoverflow.com/users/524906/fischermatte"]], null, null, null, null, null)), (_l()(), i1.ɵeld(82, 0, null, null, 0, "i", [["class", "fa fa-fw fa-stack-overflow"]], null, null, null, null, null)), (_l()(), i1.ɵeld(83, 0, null, null, 9, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(84, 0, null, null, 1, "h3", [["class", "text-uppercase"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact"])), (_l()(), i1.ɵeld(86, 0, null, null, 6, "p", [["class", "lead"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Georg Ludewig "])), (_l()(), i1.ɵeld(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(89, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 90).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(90, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(91, 1), (_l()(), i1.ɵted(-1, null, ["Contact me!"])), (_l()(), i1.ɵeld(93, 0, null, null, 6, "div", [["class", "footer-below"]], null, null, null, null, null)), (_l()(), i1.ɵeld(94, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(95, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(96, 0, null, null, 3, "div", [["class", "col-lg-12 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Copyright \u00A9 Georg Ludewig 2017"])), (_l()(), i1.ɵeld(98, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Version 1.4.4 "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "page-top"; var currVal_3 = _ck(_v, 4, 0, "/home"); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_7 = _co.navbarCollapsed; _ck(_v, 10, 0, currVal_7); var currVal_10 = "aboutme"; var currVal_11 = _ck(_v, 15, 0, "/home"); _ck(_v, 14, 0, currVal_10, currVal_11); var currVal_12 = _ck(_v, 19, 0, "active"); _ck(_v, 16, 0, currVal_12); var currVal_15 = _ck(_v, 24, 0, "/resume"); _ck(_v, 23, 0, currVal_15); var currVal_16 = _ck(_v, 28, 0, "active"); _ck(_v, 25, 0, currVal_16); var currVal_19 = _ck(_v, 33, 0, "/projects"); _ck(_v, 32, 0, currVal_19); var currVal_20 = _ck(_v, 37, 0, "active"); _ck(_v, 34, 0, currVal_20); var currVal_23 = _ck(_v, 42, 0, "/chat"); _ck(_v, 41, 0, currVal_23); var currVal_24 = _ck(_v, 46, 0, "active"); _ck(_v, 43, 0, currVal_24); var currVal_27 = _ck(_v, 51, 0, "/contact"); _ck(_v, 50, 0, currVal_27); var currVal_28 = _ck(_v, 55, 0, "active"); _ck(_v, 52, 0, currVal_28); _ck(_v, 59, 0); var currVal_31 = _ck(_v, 91, 0, "/contact"); _ck(_v, 90, 0, currVal_31); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = !_co.navbarCollapsed; _ck(_v, 6, 0, currVal_4); var currVal_5 = true; var currVal_6 = !i1.ɵnov(_v, 10).collapsed; _ck(_v, 9, 0, currVal_5, currVal_6); var currVal_8 = i1.ɵnov(_v, 14).target; var currVal_9 = i1.ɵnov(_v, 14).href; _ck(_v, 13, 0, currVal_8, currVal_9); var currVal_13 = i1.ɵnov(_v, 23).target; var currVal_14 = i1.ɵnov(_v, 23).href; _ck(_v, 22, 0, currVal_13, currVal_14); var currVal_17 = i1.ɵnov(_v, 32).target; var currVal_18 = i1.ɵnov(_v, 32).href; _ck(_v, 31, 0, currVal_17, currVal_18); var currVal_21 = i1.ɵnov(_v, 41).target; var currVal_22 = i1.ɵnov(_v, 41).href; _ck(_v, 40, 0, currVal_21, currVal_22); var currVal_25 = i1.ɵnov(_v, 50).target; var currVal_26 = i1.ɵnov(_v, 50).href; _ck(_v, 49, 0, currVal_25, currVal_26); var currVal_29 = i1.ɵnov(_v, 90).target; var currVal_30 = i1.ɵnov(_v, 90).href; _ck(_v, 89, 0, currVal_29, currVal_30); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 114688, null, 0, i5.AppComponent, [i2.Router, i1.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i5.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, platformId) {
        this.router = router;
        this.platformId = platformId;
        this.navbarCollapsed = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.router.events.subscribe(function (evt) {
                if (evt instanceof router_1.NavigationEnd) {
                    window.scrollTo(0, 0);
                }
            });
        }
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_config_service_1 = __webpack_require__(/*! ./app-config.service */ "./src/app/app-config.service.ts");
function loadConfig(appConfigService) {
    return function () { return appConfigService.loadConfig(); };
}
exports.loadConfig = loadConfig;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js");
var i4 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory.js");
var i5 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory.js");
var i6 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory.js");
var i7 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory.js");
var i8 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory.js");
var i9 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory.js");
var i10 = __webpack_require__(/*! ../../node_modules/ng-block-ui/lib/components/block-ui/block-ui.component.ngfactory */ "./node_modules/ng-block-ui/lib/components/block-ui/block-ui.component.ngfactory.js");
var i11 = __webpack_require__(/*! ../../node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.ngfactory */ "./node_modules/ng-block-ui/lib/components/block-ui-content/block-ui-content.component.ngfactory.js");
var i12 = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
var i13 = __webpack_require__(/*! ./resume/resume.component.ngfactory */ "./src/app/resume/resume.component.ngfactory.js");
var i14 = __webpack_require__(/*! ./projects/projects.component.ngfactory */ "./src/app/projects/projects.component.ngfactory.js");
var i15 = __webpack_require__(/*! ./chat/chat.component.ngfactory */ "./src/app/chat/chat.component.ngfactory.js");
var i16 = __webpack_require__(/*! ./contact/contact.component.ngfactory */ "./src/app/contact/contact.component.ngfactory.js");
var i17 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i18 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i19 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i20 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal-stack */ "@ng-bootstrap/ng-bootstrap/modal/modal-stack");
var i21 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal */ "@ng-bootstrap/ng-bootstrap/modal/modal");
var i22 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert-config */ "@ng-bootstrap/ng-bootstrap/alert/alert-config");
var i23 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/progressbar/progressbar-config */ "@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config");
var i24 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tooltip/tooltip-config */ "@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config");
var i25 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/util/accessibility/live */ "@ng-bootstrap/ng-bootstrap/util/accessibility/live");
var i26 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/typeahead/typeahead-config */ "@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config");
var i27 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/accordion/accordion-config */ "@ng-bootstrap/ng-bootstrap/accordion/accordion-config");
var i28 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/carousel/carousel-config */ "@ng-bootstrap/ng-bootstrap/carousel/carousel-config");
var i29 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar */ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar");
var i30 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n */ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n");
var i31 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter */ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter");
var i32 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter */ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter");
var i33 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/datepicker-config */ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config");
var i34 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/util/focus-trap */ "@ng-bootstrap/ng-bootstrap/util/focus-trap");
var i35 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/dropdown/dropdown-config */ "@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config");
var i36 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/pagination/pagination-config */ "@ng-bootstrap/ng-bootstrap/pagination/pagination-config");
var i37 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/popover/popover-config */ "@ng-bootstrap/ng-bootstrap/popover/popover-config");
var i38 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/rating/rating-config */ "@ng-bootstrap/ng-bootstrap/rating/rating-config");
var i39 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset-config */ "@ng-bootstrap/ng-bootstrap/tabset/tabset-config");
var i40 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/timepicker/timepicker-config */ "@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config");
var i41 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i42 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i43 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i44 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i45 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i46 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i47 = __webpack_require__(/*! ng-block-ui/lib/services/block-ui-instance.service */ "ng-block-ui/lib/services/block-ui-instance.service");
var i48 = __webpack_require__(/*! ng-block-ui/lib/block-ui.module */ "ng-block-ui/lib/block-ui.module");
var i49 = __webpack_require__(/*! ng-block-ui/lib/services/block-ui.service */ "ng-block-ui/lib/services/block-ui.service");
var i50 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i51 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i52 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert.module */ "@ng-bootstrap/ng-bootstrap/alert/alert.module");
var i53 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/buttons/buttons.module */ "@ng-bootstrap/ng-bootstrap/buttons/buttons.module");
var i54 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/collapse/collapse.module */ "@ng-bootstrap/ng-bootstrap/collapse/collapse.module");
var i55 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/progressbar/progressbar.module */ "@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module");
var i56 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tooltip/tooltip.module */ "@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module");
var i57 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/typeahead/typeahead.module */ "@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module");
var i58 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/accordion/accordion.module */ "@ng-bootstrap/ng-bootstrap/accordion/accordion.module");
var i59 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/carousel/carousel.module */ "@ng-bootstrap/ng-bootstrap/carousel/carousel.module");
var i60 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/datepicker.module */ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module");
var i61 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/dropdown/dropdown.module */ "@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module");
var i62 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal.module */ "@ng-bootstrap/ng-bootstrap/modal/modal.module");
var i63 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/pagination/pagination.module */ "@ng-bootstrap/ng-bootstrap/pagination/pagination.module");
var i64 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/popover/popover.module */ "@ng-bootstrap/ng-bootstrap/popover/popover.module");
var i65 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/rating/rating.module */ "@ng-bootstrap/ng-bootstrap/rating/rating.module");
var i66 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset.module */ "@ng-bootstrap/ng-bootstrap/tabset/tabset.module");
var i67 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/timepicker/timepicker.module */ "@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module");
var i68 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
var i69 = __webpack_require__(/*! ./core/rest.http.interceptor */ "./src/app/core/rest.http.interceptor.ts");
var i70 = __webpack_require__(/*! ./app-config.service */ "./src/app/app-config.service.ts");
var i71 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var i72 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i73 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var i74 = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
var i75 = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var i76 = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
var i77 = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var i78 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.NgbAlertNgFactory, i4.NgbTooltipWindowNgFactory, i5.NgbTypeaheadWindowNgFactory, i6.NgbDatepickerNgFactory, i7.NgbModalBackdropNgFactory, i8.NgbModalWindowNgFactory, i9.NgbPopoverWindowNgFactory, i10.BlockUIComponentNgFactory, i11.BlockUIContentComponentNgFactory, i12.HomeComponentNgFactory, i13.ResumeComponentNgFactory, i14.ProjectsComponentNgFactory, i15.ChatComponentNgFactory, i16.ContactComponentNgFactory, i17.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_l, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i18.NgLocalization, i18.NgLocaleLocalization, [i0.LOCALE_ID, [2, i18.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i19.ɵangular_packages_forms_forms_i, i19.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i20.NgbModalStack, i20.NgbModalStack, [i0.ApplicationRef, i0.Injector, i0.ComponentFactoryResolver, i18.DOCUMENT]), i0.ɵmpd(4608, i21.NgbModal, i21.NgbModal, [i0.ComponentFactoryResolver, i0.Injector, i20.NgbModalStack]), i0.ɵmpd(4608, i22.NgbAlertConfig, i22.NgbAlertConfig, []), i0.ɵmpd(4608, i23.NgbProgressbarConfig, i23.NgbProgressbarConfig, []), i0.ɵmpd(4608, i24.NgbTooltipConfig, i24.NgbTooltipConfig, []), i0.ɵmpd(135680, i25.Live, i25.Live, [i18.DOCUMENT, i25.ARIA_LIVE_DELAY]), i0.ɵmpd(4608, i26.NgbTypeaheadConfig, i26.NgbTypeaheadConfig, []), i0.ɵmpd(4608, i27.NgbAccordionConfig, i27.NgbAccordionConfig, []), i0.ɵmpd(4608, i28.NgbCarouselConfig, i28.NgbCarouselConfig, []), i0.ɵmpd(4608, i29.NgbCalendar, i29.NgbCalendarGregorian, []), i0.ɵmpd(4608, i18.DatePipe, i18.DatePipe, [i0.LOCALE_ID]), i0.ɵmpd(4608, i30.NgbDatepickerI18n, i30.NgbDatepickerI18nDefault, [i0.LOCALE_ID, i18.DatePipe]), i0.ɵmpd(4608, i31.NgbDateParserFormatter, i31.NgbDateISOParserFormatter, []), i0.ɵmpd(4608, i32.NgbDateAdapter, i32.NgbDateStructAdapter, []), i0.ɵmpd(4608, i33.NgbDatepickerConfig, i33.NgbDatepickerConfig, []), i0.ɵmpd(4608, i34.NgbFocusTrapFactory, i34.NgbFocusTrapFactory, [i18.DOCUMENT, i0.NgZone]), i0.ɵmpd(4608, i35.NgbDropdownConfig, i35.NgbDropdownConfig, []), i0.ɵmpd(4608, i36.NgbPaginationConfig, i36.NgbPaginationConfig, []), i0.ɵmpd(4608, i37.NgbPopoverConfig, i37.NgbPopoverConfig, []), i0.ɵmpd(4608, i38.NgbRatingConfig, i38.NgbRatingConfig, []), i0.ɵmpd(4608, i39.NgbTabsetConfig, i39.NgbTabsetConfig, []), i0.ɵmpd(4608, i40.NgbTimepickerConfig, i40.NgbTimepickerConfig, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_k, []), i0.ɵmpd(4608, i41.DomSanitizer, i41.ɵangular_packages_platform_browser_platform_browser_e, [i18.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i41.DomSanitizer]), i0.ɵmpd(4608, i41.HAMMER_GESTURE_CONFIG, i41.HammerGestureConfig, []), i0.ɵmpd(5120, i41.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) { return [new i41.ɵDomEventsPlugin(p0_0, p0_1), new i41.ɵKeyEventsPlugin(p1_0), new i41.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2)]; }, [i18.DOCUMENT, i0.NgZone, i18.DOCUMENT, i18.DOCUMENT, i41.HAMMER_GESTURE_CONFIG, i0.ɵConsole]), i0.ɵmpd(4608, i41.EventManager, i41.EventManager, [i41.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i41.ɵDomSharedStylesHost, i41.ɵDomSharedStylesHost, [i18.DOCUMENT]), i0.ɵmpd(4608, i41.ɵDomRendererFactory2, i41.ɵDomRendererFactory2, [i41.EventManager, i41.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i42.ɵangular_packages_platform_server_platform_server_c, i42.ɵangular_packages_platform_server_platform_server_c, [i41.DOCUMENT, [2, i41.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i41.ɵSharedStylesHost, null, [i42.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i42.ɵServerRendererFactory2, i42.ɵServerRendererFactory2, [i0.NgZone, i41.DOCUMENT, i41.ɵSharedStylesHost]), i0.ɵmpd(4608, i43.AnimationDriver, i43.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i43.ɵAnimationStyleNormalizer, i44.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i43.ɵAnimationEngine, i44.ɵangular_packages_platform_browser_animations_animations_a, [i43.AnimationDriver, i43.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i42.ɵangular_packages_platform_server_platform_server_a, [i42.ɵServerRendererFactory2, i43.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i41.Meta, i41.Meta, [i18.DOCUMENT]), i0.ɵmpd(4608, i41.Title, i41.Title, [i18.DOCUMENT]), i0.ɵmpd(4608, i45.ɵangular_packages_common_http_http_e, i45.ɵangular_packages_common_http_http_e, []), i0.ɵmpd(5120, i46.ActivatedRoute, i46.ɵangular_packages_router_router_f, [i46.Router]), i0.ɵmpd(4608, i46.NoPreloading, i46.NoPreloading, []), i0.ɵmpd(6144, i46.PreloadingStrategy, null, [i46.NoPreloading]), i0.ɵmpd(135680, i46.RouterPreloader, i46.RouterPreloader, [i46.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i46.PreloadingStrategy]), i0.ɵmpd(4608, i46.PreloadAllModules, i46.PreloadAllModules, []), i0.ɵmpd(5120, i46.ROUTER_INITIALIZER, i46.ɵangular_packages_router_router_i, [i46.ɵangular_packages_router_router_g]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i46.ROUTER_INITIALIZER]), i0.ɵmpd(5120, i47.BlockUIInstanceService, i48.provideInstance, [i48.BlockUIModuleSettings]), i0.ɵmpd(4608, i49.BlockUIService, i49.BlockUIService, [i47.BlockUIInstanceService]), i0.ɵmpd(4608, i50.BrowserXhr, i42.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i50.ResponseOptions, i50.BaseResponseOptions, []), i0.ɵmpd(4608, i50.XSRFStrategy, i42.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i50.XHRBackend, i50.XHRBackend, [i50.BrowserXhr, i50.ResponseOptions, i50.XSRFStrategy]), i0.ɵmpd(4608, i50.RequestOptions, i50.BaseRequestOptions, []), i0.ɵmpd(5120, i50.Http, i42.ɵangular_packages_platform_server_platform_server_f, [i50.XHRBackend, i50.RequestOptions]), i0.ɵmpd(4608, i51.AnimationBuilder, i44.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i41.DOCUMENT]), i0.ɵmpd(1073742336, i18.CommonModule, i18.CommonModule, []), i0.ɵmpd(1073742336, i52.NgbAlertModule, i52.NgbAlertModule, []), i0.ɵmpd(1073742336, i53.NgbButtonsModule, i53.NgbButtonsModule, []), i0.ɵmpd(1073742336, i54.NgbCollapseModule, i54.NgbCollapseModule, []), i0.ɵmpd(1073742336, i55.NgbProgressbarModule, i55.NgbProgressbarModule, []), i0.ɵmpd(1073742336, i56.NgbTooltipModule, i56.NgbTooltipModule, []), i0.ɵmpd(1073742336, i57.NgbTypeaheadModule, i57.NgbTypeaheadModule, []), i0.ɵmpd(1073742336, i58.NgbAccordionModule, i58.NgbAccordionModule, []), i0.ɵmpd(1073742336, i59.NgbCarouselModule, i59.NgbCarouselModule, []), i0.ɵmpd(1073742336, i19.ɵangular_packages_forms_forms_bb, i19.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i19.FormsModule, i19.FormsModule, []), i0.ɵmpd(1073742336, i60.NgbDatepickerModule, i60.NgbDatepickerModule, []), i0.ɵmpd(1073742336, i61.NgbDropdownModule, i61.NgbDropdownModule, []), i0.ɵmpd(1073742336, i62.NgbModalModule, i62.NgbModalModule, []), i0.ɵmpd(1073742336, i63.NgbPaginationModule, i63.NgbPaginationModule, []), i0.ɵmpd(1073742336, i64.NgbPopoverModule, i64.NgbPopoverModule, []), i0.ɵmpd(1073742336, i65.NgbRatingModule, i65.NgbRatingModule, []), i0.ɵmpd(1073742336, i66.NgbTabsetModule, i66.NgbTabsetModule, []), i0.ɵmpd(1073742336, i67.NgbTimepickerModule, i67.NgbTimepickerModule, []), i0.ɵmpd(1073742336, i68.NgbRootModule, i68.NgbRootModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i41.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i46.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i46.ɵangular_packages_router_router_g, i46.ɵangular_packages_router_router_g, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "geolud-client", []), i0.ɵmpd(2048, i41.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(512, i45.XhrFactory, i42.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(512, i45.HttpXhrBackend, i45.HttpXhrBackend, [i45.XhrFactory]), i0.ɵmpd(2048, i45.HttpBackend, null, [i45.HttpXhrBackend]), i0.ɵmpd(256, i45.ɵangular_packages_common_http_http_f, "XSRF-TOKEN", []), i0.ɵmpd(512, i45.HttpXsrfTokenExtractor, i45.ɵangular_packages_common_http_http_h, [i18.DOCUMENT, i0.PLATFORM_ID, i45.ɵangular_packages_common_http_http_f]), i0.ɵmpd(256, i45.ɵangular_packages_common_http_http_g, "X-XSRF-TOKEN", []), i0.ɵmpd(512, i45.ɵangular_packages_common_http_http_i, i45.ɵangular_packages_common_http_http_i, [i45.HttpXsrfTokenExtractor, i45.ɵangular_packages_common_http_http_g]), i0.ɵmpd(1024, i45.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0, new i69.RestHttpInterceptor()]; }, [i45.ɵangular_packages_common_http_http_i]), i0.ɵmpd(1024, i45.HttpHandler, i42.ɵangular_packages_platform_server_platform_server_g, [i45.HttpBackend, [2, i45.HTTP_INTERCEPTORS]]), i0.ɵmpd(512, i45.HttpClient, i45.HttpClient, [i45.HttpHandler]), i0.ɵmpd(512, i70.AppConfigService, i70.AppConfigService, [i45.HttpClient]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2, p3_0) { return [i41.ɵangular_packages_platform_browser_platform_browser_h(p0_0), i46.ɵangular_packages_router_router_h(p1_0), i41.ɵangular_packages_platform_browser_platform_browser_f(p2_0, p2_1, p2_2), i71.loadConfig(p3_0)]; }, [[2, i0.NgProbeToken], i46.ɵangular_packages_router_router_g, i41.ɵTRANSITION_ID, i18.DOCUMENT, i0.Injector, i70.AppConfigService]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i41.BrowserModule, i41.BrowserModule, [[3, i41.BrowserModule]]), i0.ɵmpd(1073742336, i48.BlockUIModule, i48.BlockUIModule, []), i0.ɵmpd(1073742336, i45.HttpClientXsrfModule, i45.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i45.HttpClientModule, i45.HttpClientModule, []), i0.ɵmpd(1024, i46.ɵangular_packages_router_router_a, i46.ɵangular_packages_router_router_d, [[3, i46.Router]]), i0.ɵmpd(512, i46.UrlSerializer, i46.DefaultUrlSerializer, []), i0.ɵmpd(512, i46.ChildrenOutletContexts, i46.ChildrenOutletContexts, []), i0.ɵmpd(256, i46.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i18.LocationStrategy, i46.ɵangular_packages_router_router_c, [i18.PlatformLocation, [2, i18.APP_BASE_HREF], i46.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i18.Location, i18.Location, [i18.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i72.ModuleMapNgFactoryLoader, [i0.Compiler, i72.MODULE_MAP]), i0.ɵmpd(1024, i46.ROUTES, function () { return [[{ path: "", redirectTo: "/home", pathMatch: "full" }, { path: "home", component: i73.HomeComponent }, { path: "resume", component: i74.ResumeComponent }, { path: "projects", component: i75.ProjectsComponent }, { path: "chat", component: i76.ChatComponent }, { path: "contact", component: i77.ContactComponent }]]; }, []), i0.ɵmpd(1024, i46.Router, i46.ɵangular_packages_router_router_e, [i0.ApplicationRef, i46.UrlSerializer, i46.ChildrenOutletContexts, i18.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i46.ROUTES, i46.ROUTER_CONFIGURATION, [2, i46.UrlHandlingStrategy], [2, i46.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i46.RouterModule, i46.RouterModule, [[2, i46.ɵangular_packages_router_router_a], [2, i46.Router]]), i0.ɵmpd(1073742336, i78.AppRoutingModule, i78.AppRoutingModule, []), i0.ɵmpd(1073742336, i71.AppModule, i71.AppModule, []), i0.ɵmpd(1073742336, i50.HttpModule, i50.HttpModule, []), i0.ɵmpd(1073742336, i44.NoopAnimationsModule, i44.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i42.ServerModule, i42.ServerModule, []), i0.ɵmpd(1073742336, i72.ModuleMapLoaderModule, i72.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i25.ARIA_LIVE_DELAY, i25.DEFAULT_ARIA_LIVE_DELAY, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i48.BlockUIModuleSettings, {}, []), i0.ɵmpd(256, i44.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/chat/chat.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/chat/chat.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./chat.component.scss.shim.ngstyle */ "./src/app/chat/chat.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i4 = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");
var i5 = __webpack_require__(/*! ./chat.service */ "./src/app/chat/chat.service.ts");
var styles_ChatComponent = [i0.styles];
var RenderType_ChatComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ChatComponent, data: {} });
exports.RenderType_ChatComponent = RenderType_ChatComponent;
function View_ChatComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["You (", ")\u00A0"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.username; _ck(_v, 1, 0, currVal_0); }); }
function View_ChatComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", "\u00A0"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.username; _ck(_v, 1, 0, currVal_0); }); }
function View_ChatComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "chat-user"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChatComponent_3)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChatComponent_4)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.isFromCurrentUser; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_v.parent.context.$implicit.isFromCurrentUser; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ChatComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 12, "div", [["class", "chat-message"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(2, { "chat-message-left": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "chat-avatar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 8, "div", [["class", "chat-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 6, "div", [["class", "chat-context"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChatComponent_2)), i1.ɵdid(7, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(8, 0, null, null, 3, "div", [["class", "chat-time"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 2, "small", [], null, null, null, null, null)), (_l()(), i1.ɵted(10, null, ["", ""])), i1.ɵppd(11, 2), (_l()(), i1.ɵeld(12, 0, null, null, 0, "div", [["class", "chat-text"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "chat-message"; var currVal_1 = _ck(_v, 2, 0, _v.context.$implicit.isFromCurrentUser); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = !_v.context.$implicit.isLogin; _ck(_v, 7, 0, currVal_2); }, function (_ck, _v) { var currVal_3 = i1.ɵunv(_v, 10, 0, _ck(_v, 11, 0, i1.ɵnov(_v.parent, 0), _v.context.$implicit.timestamp, "HH:mm:ss")); _ck(_v, 10, 0, currVal_3); var currVal_4 = _v.context.$implicit.message; _ck(_v, 12, 0, currVal_4); }); }
function View_ChatComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "div", [["class", "input-group mb-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, [[2, 0], ["messageInput", 1]], null, 5, "input", [["aria-label", "Message"], ["class", "form-control"], ["placeholder", "Message"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup.enter"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.message = $event) !== false);
        ad = (pd_4 && ad);
    } if (("keyup.enter" === en)) {
        var pd_5 = (_co.send() !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(4, 671744, null, 0, i3.NgModel, [[8, null], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i3.NgControl, null, [i3.NgModel]), i1.ɵdid(6, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.send() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Send"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.message; _ck(_v, 4, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 6).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 6).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 6).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 6).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 6).ngClassValid; var currVal_5 = i1.ɵnov(_v, 6).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_ChatComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "input-group mb-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, [["username", 1]], null, 0, "input", [["aria-label", "Message"], ["class", "form-control"], ["placeholder", "Username"], ["type", "text"]], null, [[null, "keyup.enter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup.enter" === en)) {
        var pd_0 = (_co.loginWithUsername(i1.ɵnov(_v, 1).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.loginWithUsername(i1.ɵnov(_v, 1).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Set Username"]))], null, null); }
function View_ChatComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.DatePipe, [i1.LOCALE_ID]), i1.ɵqud(402653184, 1, { messagesContainer: 0 }), i1.ɵqud(671088640, 2, { messageInput: 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 19, "section", [["class", "section-flow section-flow-first"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 3, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "h2", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Chat"])), (_l()(), i1.ɵeld(7, 0, null, null, 0, "hr", [["class", "star-dark"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "div", [["class", "col-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 11, "div", [["class", "col-sm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 10, "div", [["class", "card chat-window"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "h5", [["class", "card-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 0, "i", [["class", "fa fa-fw fa-comments"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, [[1, 0], ["messagesContainer", 1]], null, 2, "div", [["class", "card-body chat-messages"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChatComponent_1)), i1.ɵdid(16, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(17, 0, null, null, 4, "div", [["class", "card-footer"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChatComponent_5)), i1.ɵdid(19, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ChatComponent_6)), i1.ɵdid(21, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(22, 0, null, null, 0, "div", [["class", "col-sm"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messages; _ck(_v, 16, 0, currVal_0); var currVal_1 = _co.user; _ck(_v, 19, 0, currVal_1); var currVal_2 = !_co.user; _ck(_v, 21, 0, currVal_2); }, null); }
exports.View_ChatComponent_0 = View_ChatComponent_0;
function View_ChatComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-chat", [], null, null, null, View_ChatComponent_0, RenderType_ChatComponent)), i1.ɵdid(1, 8503296, null, 0, i4.ChatComponent, [i5.ChatService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ChatComponent_Host_0 = View_ChatComponent_Host_0;
var ChatComponentNgFactory = i1.ɵccf("app-chat", i4.ChatComponent, View_ChatComponent_Host_0, {}, {}, []);
exports.ChatComponentNgFactory = ChatComponentNgFactory;


/***/ }),

/***/ "./src/app/chat/chat.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/chat/chat.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".chat-window[_ngcontent-%COMP%] {\n  height: 500px; }\n  .chat-window[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%] {\n    overflow-y: auto; }\n  .chat-window[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%] {\n      text-align: right;\n      padding: 15px 0 15px 0;\n      border-bottom: 1px dotted #ced4da; }\n  .chat-window[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%] {\n        padding: 10px;\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n        border-radius: 2px;\n        background-color: #f8f9fa;\n        display: inline-block;\n        max-width: 80%; }\n  .chat-window[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .chat-context[_ngcontent-%COMP%] {\n          width: 100%; }\n  .chat-window[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .chat-context[_ngcontent-%COMP%]   .chat-user[_ngcontent-%COMP%] {\n            float: left;\n            font-weight: bold; }\n  .chat-window[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .chat-context[_ngcontent-%COMP%]   .chat-time[_ngcontent-%COMP%] {\n            float: right; }\n  .chat-window[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .chat-text[_ngcontent-%COMP%] {\n          float: left; }\n  .chat-window[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-message-left[_ngcontent-%COMP%] {\n      text-align: left; }\n  .chat-window[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-message-left[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%] {\n        background-color: #87feae; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var chat_model_1 = __webpack_require__(/*! ./chat.model */ "./src/app/chat/chat.model.ts");
var chat_service_1 = __webpack_require__(/*! ./chat.service */ "./src/app/chat/chat.service.ts");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getUser().subscribe(function (user) { return _this.user = user; });
        this.messages = this.chatService.getMessages();
        this.scrollToBottom();
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
        if (this.messageInput) {
            this.messageInput.nativeElement.focus();
        }
    };
    ChatComponent.prototype.send = function () {
        if (this.message) {
            this.chatService.send(new chat_model_1.ChatMessage(this.message, this.user, chat_model_1.ChatMessageType.CHAT));
            this.message = '';
        }
    };
    ChatComponent.prototype.loginWithUsername = function (username) {
        if (!username || !username.trim()) {
            return;
        }
        this.chatService.login(this.createUser(username));
    };
    ChatComponent.prototype.createUser = function (username) {
        return {
            name: username,
            id: this.uuid()
        };
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
        }
        catch (err) {
        }
    };
    ChatComponent.prototype.uuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;


/***/ }),

/***/ "./src/app/chat/chat.model.ts":
/*!************************************!*\
  !*** ./src/app/chat/chat.model.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChatMessageType;
(function (ChatMessageType) {
    ChatMessageType["LOGIN"] = "LOGIN";
    ChatMessageType["CHAT"] = "CHAT";
})(ChatMessageType = exports.ChatMessageType || (exports.ChatMessageType = {}));
var ChatMessage = /** @class */ (function () {
    function ChatMessage(text, user, type) {
        this.text = text;
        this.user = user;
        this.type = type;
    }
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;


/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var webSocket_1 = __webpack_require__(/*! rxjs/webSocket */ "rxjs/webSocket");
var environment_1 = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/BehaviorSubject */ "rxjs/BehaviorSubject");
var chat_model_1 = __webpack_require__(/*! ./chat.model */ "./src/app/chat/chat.model.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ChatService = /** @class */ (function () {
    function ChatService() {
        var _this = this;
        this.userSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.messages = [];
        this.userSubject.subscribe(function (user) {
            _this.handleUserLogin(user);
        });
    }
    ChatService.prototype.handleUserLogin = function (user) {
        this.currentUser = user;
        if (user) {
            this.startListenForWebSocketMessages();
            this.send(new chat_model_1.ChatMessage('<strong>' + user.name + '</strong> joined the chat', user, chat_model_1.ChatMessageType.LOGIN));
        }
    };
    ChatService.prototype.startListenForWebSocketMessages = function () {
        var _this = this;
        this.getWebSocketSubject().map(function (message) {
            return {
                message: message.text,
                timestamp: message.timestamp,
                username: message.user ? message.user.name : null,
                isFromCurrentUser: _this.isMessageOfCurrentUser(message),
                isLogin: message.type === chat_model_1.ChatMessageType.LOGIN
            };
        }).subscribe(function (entry) { return _this.messages.push(entry); });
    };
    ChatService.prototype.getMessages = function () {
        return this.messages;
    };
    ChatService.prototype.getUser = function () {
        return this.userSubject;
    };
    ChatService.prototype.send = function (message) {
        this.getWebSocketSubject().next(message);
    };
    ChatService.prototype.login = function (user) {
        this.userSubject.next(user);
    };
    ChatService.prototype.getWebSocketSubject = function () {
        if (!this.webSocketSubject) {
            this.webSocketSubject = webSocket_1.webSocket(environment_1.environment.appConfig.wsBase + '/v1/chat');
        }
        return this.webSocketSubject;
    };
    ChatService.prototype.isMessageOfCurrentUser = function (message) {
        return this.currentUser && message && message.user && message.user.id && this.currentUser.id === message.user.id;
    };
    ChatService.ngInjectableDef = i0.defineInjectable({ factory: function ChatService_Factory() { return new ChatService(); }, token: ChatService, providedIn: "root" });
    return ChatService;
}());
exports.ChatService = ChatService;


/***/ }),

/***/ "./src/app/contact/contact.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/contact/contact.component.ngfactory.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./contact.component.scss.shim.ngstyle */ "./src/app/contact/contact.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js");
var i3 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert */ "@ng-bootstrap/ng-bootstrap/alert/alert");
var i4 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert-config */ "@ng-bootstrap/ng-bootstrap/alert/alert-config");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i7 = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
var i8 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i9 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_ContactComponent = [i0.styles];
var RenderType_ContactComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ContactComponent, data: {} });
exports.RenderType_ContactComponent = RenderType_ContactComponent;
function View_ContactComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "col-lg-8 mx-auto"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "ngb-alert", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.closeAlert() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_NgbAlert_0, i2.RenderType_NgbAlert)), i1.ɵdid(3, 49152, null, 0, i3.NgbAlert, [i4.NgbAlertConfig], { type: [0, "type"] }, { close: "close" }), (_l()(), i1.ɵted(4, 0, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.feedback.type; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.feedback.message; _ck(_v, 4, 0, currVal_1); }); }
function View_ContactComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { contactForm: 0 }), (_l()(), i1.ɵeld(1, 0, null, null, 57, "section", [["class", "section-flow section-flow-first"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 56, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h2", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Me"])), (_l()(), i1.ɵeld(5, 0, null, null, 0, "hr", [["class", "star-dark"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_1)), i1.ɵdid(7, 16384, null, 0, i5.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(8, 0, null, null, 50, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 49, "div", [["class", "col-lg-8 mx-auto"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 48, "form", [["class", "was-validated"], ["id", "contactForm"], ["name", "sentMessage"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 12).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 12).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(11, 16384, null, 0, i6.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(12, 4210688, [[1, 4], ["contactForm", 4]], 0, i6.NgForm, [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i6.ControlContainer, null, [i6.NgForm]), i1.ɵdid(14, 16384, null, 0, i6.NgControlStatusGroup, [[4, i6.ControlContainer]], null, null), (_l()(), i1.ɵeld(15, 0, null, null, 9, "div", [["class", "control-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 8, "div", [["class", "form-group floating-label-form-group controls"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name"])), (_l()(), i1.ɵeld(19, 0, null, null, 5, "input", [["class", "form-control"], ["id", "name"], ["name", "name"], ["placeholder", "Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 20)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 20).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 20)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 20)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.contactRequest.name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(20, 16384, null, 0, i6.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i6.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i6.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i6.DefaultValueAccessor]), i1.ɵdid(22, 671744, [["name", 4]], 0, i6.NgModel, [[2, i6.ControlContainer], [8, null], [8, null], [6, i6.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i6.NgControl, null, [i6.NgModel]), i1.ɵdid(24, 16384, null, 0, i6.NgControlStatus, [[4, i6.NgControl]], null, null), (_l()(), i1.ɵeld(25, 0, null, null, 14, "div", [["class", "control-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 13, "div", [["class", "form-group floating-label-form-group controls"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email Address"])), (_l()(), i1.ɵeld(29, 0, null, null, 8, "input", [["class", "form-control"], ["id", "email"], ["name", "email"], ["pattern", "[^ @]*@[^ @]*"], ["placeholder", "Email Address *"], ["required", ""], ["type", "email"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 30)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 30).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 30)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 30)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.contactRequest.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(30, 16384, null, 0, i6.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i6.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(31, 16384, null, 0, i6.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵdid(32, 540672, null, 0, i6.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i6.NG_VALIDATORS, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i6.RequiredValidator, i6.PatternValidator]), i1.ɵprd(1024, null, i6.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i6.DefaultValueAccessor]), i1.ɵdid(35, 671744, [["email", 4]], 0, i6.NgModel, [[2, i6.ControlContainer], [6, i6.NG_VALIDATORS], [8, null], [6, i6.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i6.NgControl, null, [i6.NgModel]), i1.ɵdid(37, 16384, null, 0, i6.NgControlStatus, [[4, i6.NgControl]], null, null), (_l()(), i1.ɵeld(38, 0, null, null, 1, "small", [["class", "was-validated invalid-feedback"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["A valid email is required"])), (_l()(), i1.ɵeld(40, 0, null, null, 13, "div", [["class", "control-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 12, "div", [["class", "form-group floating-label-form-group controls"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Message"])), (_l()(), i1.ɵeld(44, 0, null, null, 7, "textarea", [["class", "form-control"], ["id", "message"], ["name", "message"], ["placeholder", "Message *"], ["required", ""], ["rows", "5"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 45)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 45).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 45)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 45)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.contactRequest.message = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(45, 16384, null, 0, i6.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i6.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(46, 16384, null, 0, i6.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i6.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i6.RequiredValidator]), i1.ɵprd(1024, null, i6.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i6.DefaultValueAccessor]), i1.ɵdid(49, 671744, [["message", 4]], 0, i6.NgModel, [[2, i6.ControlContainer], [6, i6.NG_VALIDATORS], [8, null], [6, i6.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i6.NgControl, null, [i6.NgModel]), i1.ɵdid(51, 16384, null, 0, i6.NgControlStatus, [[4, i6.NgControl]], null, null), (_l()(), i1.ɵeld(52, 0, null, null, 1, "small", [["class", "was-validated invalid-feedback"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Message is required"])), (_l()(), i1.ɵeld(54, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 0, "div", [["id", "success"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 2, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 1, "button", [["class", "btn btn-success btn-lg"], ["id", "sendMessageButton"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Send"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.feedback; _ck(_v, 7, 0, currVal_0); var currVal_15 = "name"; var currVal_16 = _co.contactRequest.name; _ck(_v, 22, 0, currVal_15, currVal_16); var currVal_26 = ""; _ck(_v, 31, 0, currVal_26); var currVal_27 = "[^ @]*@[^ @]*"; _ck(_v, 32, 0, currVal_27); var currVal_28 = "email"; var currVal_29 = _co.contactRequest.email; _ck(_v, 35, 0, currVal_28, currVal_29); var currVal_39 = ""; _ck(_v, 46, 0, currVal_39); var currVal_40 = "message"; var currVal_41 = _co.contactRequest.message; _ck(_v, 49, 0, currVal_40, currVal_41); }, function (_ck, _v) { var currVal_1 = i1.ɵnov(_v, 14).ngClassUntouched; var currVal_2 = i1.ɵnov(_v, 14).ngClassTouched; var currVal_3 = i1.ɵnov(_v, 14).ngClassPristine; var currVal_4 = i1.ɵnov(_v, 14).ngClassDirty; var currVal_5 = i1.ɵnov(_v, 14).ngClassValid; var currVal_6 = i1.ɵnov(_v, 14).ngClassInvalid; var currVal_7 = i1.ɵnov(_v, 14).ngClassPending; _ck(_v, 10, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = i1.ɵnov(_v, 24).ngClassUntouched; var currVal_9 = i1.ɵnov(_v, 24).ngClassTouched; var currVal_10 = i1.ɵnov(_v, 24).ngClassPristine; var currVal_11 = i1.ɵnov(_v, 24).ngClassDirty; var currVal_12 = i1.ɵnov(_v, 24).ngClassValid; var currVal_13 = i1.ɵnov(_v, 24).ngClassInvalid; var currVal_14 = i1.ɵnov(_v, 24).ngClassPending; _ck(_v, 19, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = (i1.ɵnov(_v, 31).required ? "" : null); var currVal_18 = (i1.ɵnov(_v, 32).pattern ? i1.ɵnov(_v, 32).pattern : null); var currVal_19 = i1.ɵnov(_v, 37).ngClassUntouched; var currVal_20 = i1.ɵnov(_v, 37).ngClassTouched; var currVal_21 = i1.ɵnov(_v, 37).ngClassPristine; var currVal_22 = i1.ɵnov(_v, 37).ngClassDirty; var currVal_23 = i1.ɵnov(_v, 37).ngClassValid; var currVal_24 = i1.ɵnov(_v, 37).ngClassInvalid; var currVal_25 = i1.ɵnov(_v, 37).ngClassPending; _ck(_v, 29, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_30 = (i1.ɵnov(_v, 35).valid || i1.ɵnov(_v, 35).pristine); _ck(_v, 38, 0, currVal_30); var currVal_31 = (i1.ɵnov(_v, 46).required ? "" : null); var currVal_32 = i1.ɵnov(_v, 51).ngClassUntouched; var currVal_33 = i1.ɵnov(_v, 51).ngClassTouched; var currVal_34 = i1.ɵnov(_v, 51).ngClassPristine; var currVal_35 = i1.ɵnov(_v, 51).ngClassDirty; var currVal_36 = i1.ɵnov(_v, 51).ngClassValid; var currVal_37 = i1.ɵnov(_v, 51).ngClassInvalid; var currVal_38 = i1.ɵnov(_v, 51).ngClassPending; _ck(_v, 44, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_42 = (i1.ɵnov(_v, 49).valid || i1.ɵnov(_v, 49).pristine); _ck(_v, 52, 0, currVal_42); var currVal_43 = i1.ɵnov(_v, 12).invalid; _ck(_v, 57, 0, currVal_43); }); }
exports.View_ContactComponent_0 = View_ContactComponent_0;
function View_ContactComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), i1.ɵdid(1, 114688, null, 0, i7.ContactComponent, [i8.HttpClient, i9.Title, i1.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ContactComponent_Host_0 = View_ContactComponent_Host_0;
var ContactComponentNgFactory = i1.ɵccf("app-contact", i7.ContactComponent, View_ContactComponent_Host_0, {}, {}, []);
exports.ContactComponentNgFactory = ContactComponentNgFactory;


/***/ }),

/***/ "./src/app/contact/contact.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".ng-invalid[_ngcontent-%COMP%]:not(form) {\n  color: red; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var environment_1 = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(http, title, platformId) {
        this.http = http;
        this.platformId = platformId;
        title.setTitle('Georg Ludewig - Software Engineer - Contact');
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactRequest = {};
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.contactForm.valid) {
            // note we set the response type to text due to this issue:  https://github.com/angular/angular/issues/18680
            this.http.post(environment_1.environment.appConfig.apiBase + '/v1/contact', this.contactRequest, { responseType: 'text' }).subscribe(function (response) {
                _this.feedback = {
                    type: 'success',
                    message: 'Contact request was submitted!'
                };
                _this.contactForm.reset();
            }, function (error) {
                _this.feedback = {
                    type: 'danger',
                    message: 'Failed to submit contact request due to some very mysterious reasons !'
                };
            }, function () {
                if (common_1.isPlatformBrowser(_this.platformId)) {
                    window.scrollTo(0, 0);
                }
            });
        }
    };
    ContactComponent.prototype.closeAlert = function () {
        this.feedback = null;
    };
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/core/rest.http.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/core/rest.http.interceptor.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RestHttpInterceptor = /** @class */ (function () {
    function RestHttpInterceptor() {
    }
    RestHttpInterceptor.prototype.intercept = function (req, next) {
        var authReq = req.clone({
            headers: req.headers
                .set('Content-Type', 'application/json; charset=utf-8')
                .set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(authReq);
    };
    return RestHttpInterceptor;
}());
exports.RestHttpInterceptor = RestHttpInterceptor;


/***/ }),

/***/ "./src/app/home/home.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/home/home.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/home/home.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var i3 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_HomeComponent = [i0.styles];
var RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "header", [["class", "masthead bg-primary text-white text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 8, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 4, "h1", [["class", "text-uppercase mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["I "])), (_l()(), i1.ɵeld(4, 0, null, null, 0, "i", [["class", "fa fa-heart"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Coding"])), (_l()(), i1.ɵeld(7, 0, null, null, 0, "hr", [["class", "star-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "h2", [["class", "mb-0"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Open Source - Cloud - Architecture - Agile - Web"])), (_l()(), i1.ɵeld(10, 0, null, null, 8, "section", [], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "h2", [["class", "text-center text-uppercase text-secondary mb-0"], ["id", "aboutme"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["About Me"])), (_l()(), i1.ɵeld(14, 0, null, null, 0, "hr", [["class", "star-dark mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 2, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "p", [["class", "lead"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" I am a passionate software engineer with a strong background on cloud and enterprise web development. I am a creative, proactive professional and a true team player that is willing to take on challenges and keep myself up-to-date with software development technologies. "]))], null, null); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i1.ɵdid(1, 114688, null, 0, i2.HomeComponent, [i3.Title], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i1.ɵccf("app-home", i2.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/home/home.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/home/home.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(title) {
        title.setTitle('Georg Ludewig - Software Engineer');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/projects/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/project.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var environment_1 = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getAll = function () {
        if (!this.publisher) {
            this.publisher = this.http.get(environment_1.environment.appConfig.apiBase + "/v1/projects")
                .pipe(operators_1.publishReplay(1), operators_1.refCount());
        }
        return this.publisher;
    };
    ProjectService.ngInjectableDef = i0.defineInjectable({ factory: function ProjectService_Factory() { return new ProjectService(i0.inject(i1.HttpClient)); }, token: ProjectService, providedIn: "root" });
    return ProjectService;
}());
exports.ProjectService = ProjectService;


/***/ }),

/***/ "./src/app/projects/projects.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/projects/projects.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./projects.component.scss.shim.ngstyle */ "./src/app/projects/projects.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js");
var i3 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert */ "@ng-bootstrap/ng-bootstrap/alert/alert");
var i4 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert-config */ "@ng-bootstrap/ng-bootstrap/alert/alert-config");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ng-block-ui/lib/directives/block-ui.directive */ "ng-block-ui/lib/directives/block-ui.directive");
var i7 = __webpack_require__(/*! ng-block-ui/lib/services/block-ui-instance.service */ "ng-block-ui/lib/services/block-ui-instance.service");
var i8 = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
var i9 = __webpack_require__(/*! ./project.service */ "./src/app/projects/project.service.ts");
var i10 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_ProjectsComponent = [i0.styles];
var RenderType_ProjectsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ProjectsComponent, data: {} });
exports.RenderType_ProjectsComponent = RenderType_ProjectsComponent;
function View_ProjectsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "col-lg-8 mx-auto"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "ngb-alert", [], null, [[null, "close"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.closeAlert() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_NgbAlert_0, i2.RenderType_NgbAlert)), i1.ɵdid(3, 49152, null, 0, i3.NgbAlert, [i4.NgbAlertConfig], { type: [0, "type"] }, { close: "close" }), (_l()(), i1.ɵted(4, 0, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.feedback.type; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.feedback.message; _ck(_v, 4, 0, currVal_1); }); }
function View_ProjectsComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "div", [["class", "project-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "project-period"]], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", ""])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "div", [["class", "project-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 2, "div", [["class", "project-customer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "project-description"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.period; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_1); var currVal_2 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.customer.url, ""); _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.customer.name; _ck(_v, 7, 0, currVal_3); var currVal_4 = _v.context.$implicit.description; _ck(_v, 9, 0, currVal_4); }); }
function View_ProjectsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "project-list"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProjectsComponent_3)), i1.ɵdid(2, 802816, null, 0, i5.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.projects; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ProjectsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 12, "section", [["class", "section-flow section-flow-first"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Projects"])), (_l()(), i1.ɵeld(4, 0, null, null, 0, "hr", [["class", "star-dark"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProjectsComponent_1)), i1.ɵdid(6, 16384, null, 0, i5.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(7, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 2, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ProjectsComponent_2)), i1.ɵdid(11, 81920, null, 0, i6.BlockUIDirective, [i7.BlockUIInstanceService, i1.ViewContainerRef, i1.TemplateRef, i1.Renderer2, i1.ComponentFactoryResolver], { blockUI: [0, "blockUI"] }, null), (_l()(), i1.ɵeld(12, 0, null, null, 0, "div", [["class", "col-md-2"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.feedback; _ck(_v, 6, 0, currVal_0); var currVal_1 = "project-list"; _ck(_v, 11, 0, currVal_1); }, null); }
exports.View_ProjectsComponent_0 = View_ProjectsComponent_0;
function View_ProjectsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-projects", [], null, null, null, View_ProjectsComponent_0, RenderType_ProjectsComponent)), i1.ɵdid(1, 114688, null, 0, i8.ProjectsComponent, [i9.ProjectService, i10.Title], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ProjectsComponent_Host_0 = View_ProjectsComponent_Host_0;
var ProjectsComponentNgFactory = i1.ɵccf("app-projects", i8.ProjectsComponent, View_ProjectsComponent_Host_0, {}, {}, []);
exports.ProjectsComponentNgFactory = ProjectsComponentNgFactory;


/***/ }),

/***/ "./src/app/projects/projects.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/projects/projects.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".project-list[_ngcontent-%COMP%] {\n  min-height: 300px; }\n\n.project-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px; }\n\n.project-item[_ngcontent-%COMP%]   .project-period[_ngcontent-%COMP%] {\n    font-size: 1em;\n    color: #8a8a8a; }\n\n.project-item[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n    font-weight: bold; }\n\n.project-item[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%] {\n    text-align: justify; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var project_service_1 = __webpack_require__(/*! ./project.service */ "./src/app/projects/project.service.ts");
var ng_block_ui_1 = __webpack_require__(/*! ng-block-ui */ "ng-block-ui");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService, title) {
        this.projectService = projectService;
        title.setTitle('Georg Ludewig - Software Engineer - Projects');
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockUI.start('Loading...');
        this.projectService.getAll().subscribe(function (projects) {
            _this.projects = projects;
        }, function (error) {
            _this.feedback = {
                type: 'danger',
                message: 'Failed to load project list !'
            };
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
        });
    };
    ProjectsComponent.prototype.closeAlert = function () {
        this.feedback = null;
    };
    __decorate([
        ng_block_ui_1.BlockUI('project-list'),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "blockUI", void 0);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;


/***/ }),

/***/ "./src/app/resume/resume.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/resume/resume.component.ngfactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./resume.component.scss.shim.ngstyle */ "./src/app/resume/resume.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./resume.component */ "./src/app/resume/resume.component.ts");
var i3 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_ResumeComponent = [i0.styles];
var RenderType_ResumeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ResumeComponent, data: {} });
exports.RenderType_ResumeComponent = RenderType_ResumeComponent;
function View_ResumeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 56, "section", [["class", "section-flow section-flow-first"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 55, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Work Experience"])), (_l()(), i1.ɵeld(4, 0, null, null, 0, "hr", [["class", "star-dark"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 51, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 50, "div", [["class", "timeline"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 9, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 5, "div", [["class", "work-place"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "h3", [["class", "place"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["die Mobiliar"])), (_l()(), i1.ɵeld(11, 0, null, null, 2, "span", [["class", "location"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-map-marker"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Bern, Switzerland"])), (_l()(), i1.ɵeld(14, 0, null, null, 2, "div", [["class", "job-meta"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["03/2018 - Present"])), (_l()(), i1.ɵeld(17, 0, null, null, 9, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 5, "div", [["class", "work-place"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "h3", [["class", "place"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Unisys Switzerland"])), (_l()(), i1.ɵeld(21, 0, null, null, 2, "span", [["class", "location"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-map-marker"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Bern, Switzerland"])), (_l()(), i1.ɵeld(24, 0, null, null, 2, "div", [["class", "job-meta"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["11/2009 - 02/2018"])), (_l()(), i1.ɵeld(27, 0, null, null, 9, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 5, "div", [["class", "work-place"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 1, "h3", [["class", "place"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Tieto Deutschland GmbH"])), (_l()(), i1.ɵeld(31, 0, null, null, 2, "span", [["class", "location"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-map-marker"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Berlin, Germany"])), (_l()(), i1.ɵeld(34, 0, null, null, 2, "div", [["class", "job-meta"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["08/2008 - 09/2009"])), (_l()(), i1.ɵeld(37, 0, null, null, 9, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 5, "div", [["class", "work-place"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "h3", [["class", "place"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ARC-GREENLAB GmbH"])), (_l()(), i1.ɵeld(41, 0, null, null, 2, "span", [["class", "location"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-map-marker"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Berlin, Germany"])), (_l()(), i1.ɵeld(44, 0, null, null, 2, "div", [["class", "job-meta"]], null, null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["03/2004 - 07/2008"])), (_l()(), i1.ɵeld(47, 0, null, null, 9, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 5, "div", [["class", "work-place"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 1, "h3", [["class", "place"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["DER SPIEGEL"])), (_l()(), i1.ɵeld(51, 0, null, null, 2, "span", [["class", "location"]], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-map-marker"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hamburg, Germany"])), (_l()(), i1.ɵeld(54, 0, null, null, 2, "div", [["class", "job-meta"]], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["03/2001 - 07/2001"])), (_l()(), i1.ɵeld(57, 0, null, null, 16, "section", [["class", "section-flow certificates"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 15, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 1, "h2", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Certificates"])), (_l()(), i1.ɵeld(61, 0, null, null, 0, "hr", [["class", "star-dark"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 11, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 10, "ul", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Cloud Foundry Certified Developer"])), (_l()(), i1.ɵeld(66, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Certified Spring Professional"])), (_l()(), i1.ɵeld(68, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Oracle Certified Professional Java Programmer"])), (_l()(), i1.ɵeld(70, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Certified PrimeFaces Developer"])), (_l()(), i1.ɵeld(72, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hermes Foundation"])), (_l()(), i1.ɵeld(74, 0, null, null, 22, "section", [["class", "section-flow section-flow-last education"]], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 21, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 1, "h2", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Education"])), (_l()(), i1.ɵeld(78, 0, null, null, 0, "hr", [["class", "star-dark"]], null, null, null, null, null)), (_l()(), i1.ɵeld(79, 0, null, null, 17, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, null, null, 16, "ul", [["class", "text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Master of Computer Science, Software Engineering, 2009 "])), (_l()(), i1.ɵeld(83, 0, null, null, 3, "div", [["class", "period"]], null, null, null, null, null)), (_l()(), i1.ɵeld(84, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["10/2006 - 04/2009"])), (_l()(), i1.ɵted(-1, null, [" Hagen University (Distance Learning University), Germany "])), (_l()(), i1.ɵeld(87, 0, null, null, 9, "li", [["class", "mt-2"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Diplom-Ingenieur (FH), Geoinformatics and Cartography, 2005 "])), (_l()(), i1.ɵeld(89, 0, null, null, 3, "div", [["class", "period"]], null, null, null, null, null)), (_l()(), i1.ɵeld(90, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["10/1999 - 03/2005"])), (_l()(), i1.ɵted(-1, null, [" University of Applied Sciences Karlsruhe, Germany "])), (_l()(), i1.ɵeld(93, 0, null, null, 3, "div", [["class", "period"]], null, null, null, null, null)), (_l()(), i1.ɵeld(94, 0, null, null, 1, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["10/2001 - 06/2002"])), (_l()(), i1.ɵted(-1, null, [" Lomonosov Moscow State University, Russia "]))], null, null); }
exports.View_ResumeComponent_0 = View_ResumeComponent_0;
function View_ResumeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-resume", [], null, null, null, View_ResumeComponent_0, RenderType_ResumeComponent)), i1.ɵdid(1, 114688, null, 0, i2.ResumeComponent, [i3.Title], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ResumeComponent_Host_0 = View_ResumeComponent_Host_0;
var ResumeComponentNgFactory = i1.ɵccf("app-resume", i2.ResumeComponent, View_ResumeComponent_Host_0, {}, {}, []);
exports.ResumeComponentNgFactory = ResumeComponentNgFactory;


/***/ }),

/***/ "./src/app/resume/resume.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/resume/resume.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".timeline[_ngcontent-%COMP%] {\n  border-left: 3px solid #18BC9C;\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  position: relative;\n  padding: 0 30px;\n  margin-left: 188px; }\n  .timeline[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 45px; }\n  .timeline[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0; }\n  .timeline[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    left: -43px;\n    top: 0;\n    display: inline-block;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background-clip: padding-box;\n    background: #fff;\n    border: 3px solid #18BC9C; }\n  .timeline[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    left: -37px;\n    top: 6px;\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-clip: padding-box;\n    background: #18BC9C;\n    z-index: 10; }\n  .timeline[_ngcontent-%COMP%]   .work-place[_ngcontent-%COMP%] {\n    position: relative; }\n  .timeline[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    color: #8a8a8a; }\n  .timeline[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n      margin-right: 5px; }\n  .timeline[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 15px;\n    font-size: 20px;\n    font-weight: 300; }\n  .timeline[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -200px;\n    top: 0; }\n  .timeline[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n      font-size: 1.2em;\n      color: #18BC9C; }\n  .timeline[_ngcontent-%COMP%]   .job-meta[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n      color: #8a8a8a; }\n  .timeline[_ngcontent-%COMP%]   .job-desc[_ngcontent-%COMP%] {\n    color: #666; }\n  .certificates[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0; }\n  .certificates[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    font-size: 1.2em;\n    color: #18BC9C; }\n  .education[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0; }\n  .education[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    font-size: 1.2em;\n    color: #18BC9C; }\n  .education[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n      font-size: 1rem;\n      color: #000; }\n  .education[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n        color: #8a8a8a; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(title) {
        title.setTitle('Georg Ludewig - Software Engineer - Resume');
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
var app_config_1 = __webpack_require__(/*! ../app/app-config */ "./src/app/app-config.ts");
exports.environment = {
    production: false,
    appConfig: new app_config_1.AppConfig() // will be loaded at startup
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\development\projects\geolud\geolud-client\src\main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap":
/*!*********************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/accordion/accordion-config":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/accordion/accordion-config" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/accordion/accordion-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/accordion/accordion.module":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/accordion/accordion.module" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/accordion/accordion.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/alert/alert":
/*!*********************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/alert/alert" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/alert/alert");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/alert/alert-config":
/*!****************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/alert/alert-config" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/alert/alert-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/alert/alert.module":
/*!****************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/alert/alert.module" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/alert/alert.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/buttons/buttons.module":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/buttons/buttons.module" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/buttons/buttons.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/carousel/carousel-config":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/carousel/carousel-config" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/carousel/carousel-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/carousel/carousel.module":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/carousel/carousel.module" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/carousel/carousel.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/collapse/collapse":
/*!***************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/collapse/collapse" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/collapse/collapse");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/collapse/collapse.module":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/collapse/collapse.module" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/collapse/collapse.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar":
/*!*********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter":
/*!*************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter":
/*!**********************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/modal/modal":
/*!*********************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/modal/modal" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/modal/modal");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/modal/modal-stack":
/*!***************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/modal/modal-stack" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/modal/modal-stack");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/modal/modal.module":
/*!****************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/modal/modal.module" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/modal/modal.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/pagination/pagination-config":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/pagination/pagination-config" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/pagination/pagination-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/pagination/pagination.module":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/pagination/pagination.module" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/pagination/pagination.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/popover/popover-config":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/popover/popover-config" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/popover/popover-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/popover/popover.module":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/popover/popover.module" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/popover/popover.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config":
/*!****************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module":
/*!****************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/rating/rating-config":
/*!******************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/rating/rating-config" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/rating/rating-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/rating/rating.module":
/*!******************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/rating/rating.module" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/rating/rating.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/tabset/tabset-config":
/*!******************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/tabset/tabset-config" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/tabset/tabset-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/tabset/tabset.module":
/*!******************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/tabset/tabset.module" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/tabset/tabset.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/util/accessibility/live":
/*!*********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/util/accessibility/live" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/util/accessibility/live");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/util/focus-trap":
/*!*************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/util/focus-trap" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/util/focus-trap");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "ng-block-ui":
/*!******************************!*\
  !*** external "ng-block-ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng-block-ui");

/***/ }),

/***/ "ng-block-ui/lib/block-ui.module":
/*!**************************************************!*\
  !*** external "ng-block-ui/lib/block-ui.module" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng-block-ui/lib/block-ui.module");

/***/ }),

/***/ "ng-block-ui/lib/directives/block-ui.directive":
/*!****************************************************************!*\
  !*** external "ng-block-ui/lib/directives/block-ui.directive" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng-block-ui/lib/directives/block-ui.directive");

/***/ }),

/***/ "ng-block-ui/lib/services/block-ui-instance.service":
/*!*********************************************************************!*\
  !*** external "ng-block-ui/lib/services/block-ui-instance.service" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng-block-ui/lib/services/block-ui-instance.service");

/***/ }),

/***/ "ng-block-ui/lib/services/block-ui.service":
/*!************************************************************!*\
  !*** external "ng-block-ui/lib/services/block-ui.service" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng-block-ui/lib/services/block-ui.service");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/BehaviorSubject":
/*!***************************************!*\
  !*** external "rxjs/BehaviorSubject" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/BehaviorSubject");

/***/ }),

/***/ "rxjs/ReplaySubject":
/*!*************************************!*\
  !*** external "rxjs/ReplaySubject" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/ReplaySubject");

/***/ }),

/***/ "rxjs/add/operator/map":
/*!****************************************!*\
  !*** external "rxjs/add/operator/map" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "rxjs/webSocket":
/*!*********************************!*\
  !*** external "rxjs/webSocket" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/webSocket");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map