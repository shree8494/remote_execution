(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <img src=\"assets/images/Mphasis_Login.png\" alt=\"Mphasis\" style=\"height:40px;\" />\n  <span class=\"toolbar-spacer\"></span>\n  <span class=\"header\">Network Automation</span>\n  <span class=\"toolbar-spacer\"></span>\n  <span class=\"header\">{{username}}</span>\n  <mat-icon class=\"toolbar-icon\">power_settings_new</mat-icon>\n</mat-toolbar>\n\n<mat-tab-group enableAnimations=false (selectedTabChange)=\"onTabChange($event)\">\n\n  <mat-tab label=\"Configuration Convertor\">\n    <app-cfg-convertor></app-cfg-convertor>\n  </mat-tab>\n\n  <mat-tab label=\"Remote Commands Executor\">\n    <app-remote-cmd-executor></app-remote-cmd-executor>\n  </mat-tab>\n\n  <mat-tab label=\"Upgrade Firmware\">\n    <app-upgrade-firmware></app-upgrade-firmware>\n  </mat-tab>\n\n  <mat-tab label=\"Configuration Builder\">\n    <app-cfg-builder></app-cfg-builder>\n  </mat-tab>\n\n  <mat-tab label=\"Configuration Audit\">\n    <app-cfg-audit></app-cfg-audit>\n  </mat-tab>\n\n  <mat-tab label=\"Report\">\n    <app-report></app-report>\n  </mat-tab>\n  <mat-tab label=\"Report UF\">\n      <app-report-uf></app-report-uf>\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  margin: 0;\n  height: 100vh;\n  width: 100vw; }\n\n.toolbar-spacer {\n  flex: 1 1 auto; }\n\n.toolbar-icon {\n  padding: 0 14px; }\n\n.md-tabs.md-no-animation md-tab-content {\n  transition: none; }\n\n.md-tabs.md-no-animation md-ink-bar {\n  transition: none; }\n\n.mat-toolbar {\n  background: linear-gradient(68deg, #673ab7, #74b7de);\n  height: 50px; }\n\n.header {\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXDIwMjFcXG5ldHdvcmtfYXV0b21hdGlvblxcVVgvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxVQUFTO0VBQ1QsY0FBYTtFQUNiLGFBQVksRUFDYjs7QUFDRDtFQUNFLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UscURBQW9EO0VBRXBELGFBQVksRUFDYjs7QUFFRDtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG4udG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi50b29sYmFyLWljb24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG59XG5cbi5tZC10YWJzLm1kLW5vLWFuaW1hdGlvbiBtZC10YWItY29udGVudCB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi5tZC10YWJzLm1kLW5vLWFuaW1hdGlvbiBtZC1pbmstYmFyIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDY4ZGVnLCAjNjczYWI3LCAjNzRiN2RlKTsgXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2OGRlZywgIzA4YWZlZiAsICNkNmYxZjkpO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'netauto';
        this.username = "not logged in ";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://127.0.0.1:5000/api/user")
            .subscribe(function (data) {
            _this.username = data["username"];
        });
    };
    AppComponent.prototype.onTabChange = function (event) {
        console.log(event);
        if (event.tab.textLabel == "Report") {
            this.reportComp.refreshbutton();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_report_report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"]),
        __metadata("design:type", _components_report_report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"])
    ], AppComponent.prototype, "reportComp", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_cfg_audit_cfg_audit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cfg-audit/cfg-audit.component */ "./src/app/components/cfg-audit/cfg-audit.component.ts");
/* harmony import */ var _components_cfg_builder_cfg_builder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cfg-builder/cfg-builder.component */ "./src/app/components/cfg-builder/cfg-builder.component.ts");
/* harmony import */ var _components_cfg_convertor_cfg_convertor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cfg-convertor/cfg-convertor.component */ "./src/app/components/cfg-convertor/cfg-convertor.component.ts");
/* harmony import */ var _components_remote_cmd_executor_remote_cmd_executor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/remote-cmd-executor/remote-cmd-executor.component */ "./src/app/components/remote-cmd-executor/remote-cmd-executor.component.ts");
/* harmony import */ var _components_upgrade_firmware_upgrade_firmware_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/upgrade-firmware/upgrade-firmware.component */ "./src/app/components/upgrade-firmware/upgrade-firmware.component.ts");
/* harmony import */ var _components_tcp_port_scanner_tcp_port_scanner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tcp-port-scanner/tcp-port-scanner.component */ "./src/app/components/tcp-port-scanner/tcp-port-scanner.component.ts");
/* harmony import */ var _components_mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mat-dialog/mat-dialog.component */ "./src/app/components/mat-dialog/mat-dialog.component.ts");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
/* harmony import */ var _components_report_uf_report_uf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/report-uf/report-uf.component */ "./src/app/components/report-uf/report-uf.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_cfg_convertor_cfg_convertor_component__WEBPACK_IMPORTED_MODULE_7__["CfgConvertorComponent"],
                _components_remote_cmd_executor_remote_cmd_executor_component__WEBPACK_IMPORTED_MODULE_8__["RemoteCmdExecutorComponent"],
                _components_upgrade_firmware_upgrade_firmware_component__WEBPACK_IMPORTED_MODULE_9__["UpgradeFirmwareComponent"],
                _components_tcp_port_scanner_tcp_port_scanner_component__WEBPACK_IMPORTED_MODULE_10__["TcpPortScannerComponent"],
                _components_cfg_audit_cfg_audit_component__WEBPACK_IMPORTED_MODULE_5__["CfgAuditComponent"],
                _components_cfg_builder_cfg_builder_component__WEBPACK_IMPORTED_MODULE_6__["CfgBuilderComponent"],
                _components_mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MatDialogComponent"],
                _components_report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"],
                _components_report_uf_report_uf_component__WEBPACK_IMPORTED_MODULE_13__["ReportUfComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_32__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300
                }),
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"]
            ],
            entryComponents: [
                _components_mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MatDialogComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _components_report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cfg-audit/cfg-audit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/cfg-audit/cfg-audit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"cfgAuditForm\">\n<div style=\"margin:5px\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center stretch\">\n  <mat-card fxFlex=\"25\">\n    <mat-card-title>IPs/Hostnames</mat-card-title>\n    <mat-form-field style=\"width:100%;height:100%\" appearance=\"outline\">\n      <textarea matInput [(ngModel)]=\"ip\" formControlName=\"IP_Hostname\" rows=\"10\"></textarea>\n      <!-- <textarea matInput rows=\"10\">\n            199.228.243.17\n            172.20.7.36\n            172.21.2.5\n            172.16.100.12\n            172.21.82.97\n            172.16.151.106\n            172.16.100.243\n            40.121.38.118\n      </textarea> -->\n      <mat-error>IP/Hostname is required</mat-error>\n    </mat-form-field>\n  </mat-card>\n\n  <mat-card fxFlex=\"20\">\n    <mat-card-title>Login Details</mat-card-title>\n    <div class=\"form-container\">\n\n      <!-- <div class=\"form-padding\"> -->\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Device</mat-label>\n          <mat-select placeholder=\"Select\" formControlName=\"Device\" >\n            <mat-option value=\"option\">Cisco </mat-option>\n            <mat-option value=\"option\">HPE Comware</mat-option>\n            <mat-option value=\"option\">HPE Procurve</mat-option>\n            <mat-option value=\"option\">HPE Aruba</mat-option>\n            <mat-option value=\"option\">Juniper</mat-option>\n            <mat-option value=\"option\">Enterasys</mat-option>\n            <mat-option value=\"option\">Brocade</mat-option>\n            <mat-option value=\"option\">Alcatel Luscent</mat-option>\n          </mat-select>\n          <mat-error>Device is required</mat-error>\n        </mat-form-field>\n      <!-- </div>\n      <div class=\"form-padding\"> -->\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Device Type</mat-label>\n          <mat-select placeholder=\"Select\" formControlName=\"DeviceType\" >\n            <mat-option value=\"option\">Switch </mat-option>\n            <mat-option value=\"option\">firewall</mat-option>\n          </mat-select>\n          <mat-error>Device Type is required</mat-error>\n        </mat-form-field>\n      <!-- </div>\n      <div class=\"form-padding\"> -->\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Username</mat-label>\n          <input matInput formControlName=\"UserName\"/>\n          <mat-error>UserName is required</mat-error>\n        </mat-form-field>\n      <!-- </div>\n      <div class=\"form-padding\"> -->\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput type=\"password\"  formControlName=\"Password\" name=\"targetPassword\" [type]=\"targetPasswordHide ? 'password' : 'text'\">\n          <mat-icon matSuffix (click)=\"targetPasswordHide = !targetPasswordHide\">{{targetPasswordHide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          <mat-error>Password is required</mat-error>\n        </mat-form-field>\n      <!-- </div> -->\n      <!-- <div  >     \n        <mat-radio-group layout=\"row\" >\n            <mat-checkbox >Enable/Super</mat-checkbox>       \n        </mat-radio-group>\n      \n        <mat-form-field>\n            <input matInput placeholder=\"Password\" />\n        </mat-form-field>\n      </div>     \n      <div class=\"form-padding\">   \n          <mat-form-field>\n              <input matInput placeholder=\"Level\" />\n          </mat-form-field>  \n      <mat-checkbox >Custom Pattern</mat-checkbox>\n      </div> -->\n      <div class=\"form-padding\">\n        <button fxFlex=\"50\" mat-raised-button color=\"primary\" (click)=\"onclick()\">Analyze</button>\n        <button fxFlex=\"50\" mat-raised-button class=\"button-row\" type=\"reset\" (click)=\"onClickReset()\" style=\"margin-left: 5px;\">\n            Reset\n        </button>\n      </div>\n      <span class=\"{{status}}\">{{ runStatus }}</span>\n      \n    </div>\n  </mat-card>\n  <!-- <mat-card fxFlex=\"25\">  \n     <div>\n        <mat-card>\n            <mat-card-title>Custom Patterns</mat-card-title>\n            <mat-card-title>Enter Good Patterns </mat-card-title>\n      <mat-form-field style=\"width:100%;height:100%\" appearance=\"outline\">\n          <textarea matInput  rows=\"10\"></textarea>\n        </mat-form-field>\n      </mat-card>\n      <mat-card>\n          <mat-card-title>Enter Bad Patterns </mat-card-title>\n    <mat-form-field style=\"width:100%;height:100%\" appearance=\"outline\">\n        <textarea matInput  rows=\"10\"></textarea>\n      </mat-form-field>\n    </mat-card>\n        </div>\n    </mat-card> -->\n  <mat-card fxFlex=\"55\">\n\n\n    <mat-card-title>\n      Finding Summary \n    </mat-card-title>\n    <mat-form-field style=\"width:100%;height:100%\" appearance=\"outline\" *ngIf=\"running != true\">\n      <textarea matInput rows=\"10\" readonly=\"true\">\n      </textarea>\n    </mat-form-field>\n    <mat-table #table [dataSource]=\"dataSource\" matSort *ngIf=\"running == true\">\n        <ng-container matColumnDef=\"ip\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n                IP\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div>{{element.ip}} </div>\n            </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"finding\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n                Finding </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <div>{{element.finding}} </div>\n            </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"download\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Download Full Report </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <a (click)=\"download()\" style=\"cursor:pointer;\"><mat-icon class=\"toolbar-icon\">cloud_download</mat-icon></a>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"['ip', 'finding', 'download']\"></mat-header-row>\n        <div class=\"table-rows\">\n            <mat-row *matRowDef=\"let row; columns: ['ip', 'finding', 'download']\"></mat-row>\n        </div>\n    </mat-table>\n  </mat-card>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/components/cfg-audit/cfg-audit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/cfg-audit/cfg-audit.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".template-body {\n  border: 1px solid #dadada;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 5px 0px 5px; }\n\n.template-body:hover {\n  border: 1px solid black; }\n\n.mat-column-ip {\n  flex: 10%; }\n\n.mat-column-finding {\n  flex: 60%; }\n\n.mat-column-download {\n  flex: 6%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZmctYXVkaXQvRDpcXDIwMjFcXG5ldHdvcmtfYXV0b21hdGlvblxcVVgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNmZy1hdWRpdFxcY2ZnLWF1ZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IseUJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksVUFDSixFQUFDOztBQUVEO0VBQ0ksVUFDSixFQUFDOztBQUVEO0VBQ0ksU0FBUTtFQUNSLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2ZnLWF1ZGl0L2NmZy1hdWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1wbGF0ZS1ib2R5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCA1cHggMHB4IDVweDtcbn1cblxuLnRlbXBsYXRlLWJvZHk6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubWF0LWNvbHVtbi1pcHtcbiAgICBmbGV4OiAxMCVcbn1cblxuLm1hdC1jb2x1bW4tZmluZGluZ3tcbiAgICBmbGV4OiA2MCVcbn1cblxuLm1hdC1jb2x1bW4tZG93bmxvYWR7XG4gICAgZmxleDogNiU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/cfg-audit/cfg-audit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cfg-audit/cfg-audit.component.ts ***!
  \*************************************************************/
/*! exports provided: CfgAuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CfgAuditComponent", function() { return CfgAuditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CfgAuditComponent = /** @class */ (function () {
    function CfgAuditComponent(formBuilder, dataService) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.running = false;
        this.ip = '';
        this.targetPasswordHide = true;
        this.findings = [
            {
                id: 1,
                ip: "172.123.65.21",
                finding: "This will be the finding for this IP"
            }, {
                id: 2,
                ip: "171.423.68.56",
                finding: "This will be the finding for this IP"
            }, {
                id: 3,
                ip: "172.748.73.62",
                finding: "This will be the finding for this IP"
            }, {
                id: 4,
                ip: "177.847.84.21",
                finding: "This will be the finding for this IP"
            }
        ];
        this.status = '';
        this.runStatus = '';
    }
    CfgAuditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cfgAuditForm = this.formBuilder.group({
            IP_Hostname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Device: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            UserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]],
            DeviceType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.findings);
        var nextLine = '\n';
        this.findings.forEach(function (element, index) {
            _this.ip = _this.ip + element.ip + nextLine;
            if (index == _this.findings.length - 2) {
                nextLine = '';
            }
        });
    };
    CfgAuditComponent.prototype.onclick = function () {
        var _this = this;
        if (this.cfgAuditForm.invalid) {
            return;
        }
        this.ipAddresses = this.ip.split(/\n/);
        this.ipAddresses.forEach(function (element, index) {
            if (_this.findings[index] == null) {
                _this.findings.push({
                    id: index,
                    ip: element,
                    finding: "This will be the finding for this ip"
                });
            }
            else {
                _this.findings[index].ip = element;
            }
        });
        if (this.ipAddresses.length < this.findings.length) {
            for (var index = this.ipAddresses.length; index < this.findings.length; index++) {
                this.findings[index].ip = '';
            }
        }
        var finalFindings = [];
        this.findings.forEach(function (element) {
            if (element.ip != '') {
                finalFindings.push(element);
            }
        });
        this.findings = finalFindings;
        this.status = '';
        setTimeout(function () {
            _this.running = true;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.findings);
            _this.status = "Success";
            _this.runStatus = "Executed Successfully";
            var flag = false, index = 0;
            _this.dataService.report.forEach(function (element, elementIndex) {
                if (element.name == 'Remote Commands Executor') {
                    flag = true;
                    index = elementIndex;
                }
            });
            if (flag) {
                _this.dataService[index].runBy = _this.cfgAuditForm.controls['UserName'].value;
                _this.dataService.report[index].lastRunDate = new Date();
                _this.dataService.report[index].status = _this.status;
                _this.ipAddresses.forEach(function (element) {
                    _this.dataService.report[index].details.push({
                        ip: element,
                        log: "This.wil be the log for " + element
                    });
                });
            }
            else {
                _this.dataService.report.push({
                    id: _this.dataService.report.length + 1,
                    name: "Configuration Audit",
                    description: "This will be the description for Configuration Audit",
                    createdDate: new Date(),
                    commands: [],
                    details: [],
                    lastRunDate: new Date(),
                    runBy: _this.cfgAuditForm.controls['UserName'].value,
                    status: _this.status
                });
                _this.ipAddresses.forEach(function (element) {
                    _this.dataService.report[_this.dataService.report.length - 1].details.push({
                        ip: element,
                        log: "This.wil be the log for " + element
                    });
                });
            }
        }, 2000);
    };
    CfgAuditComponent.prototype.download = function () {
        var link = document.createElement("a");
        link.download = "filename";
        link.href = "assets/doc/config_audit.txt";
        link.click();
    };
    CfgAuditComponent.prototype.onClickReset = function () {
        this.running = false;
    };
    CfgAuditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cfg-audit',
            template: __webpack_require__(/*! ./cfg-audit.component.html */ "./src/app/components/cfg-audit/cfg-audit.component.html"),
            styles: [__webpack_require__(/*! ./cfg-audit.component.scss */ "./src/app/components/cfg-audit/cfg-audit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CfgAuditComponent);
    return CfgAuditComponent;
}());



/***/ }),

/***/ "./src/app/components/cfg-builder/cfg-builder.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/cfg-builder/cfg-builder.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin:5px\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center stretch\">\n    <!-- <mat-card fxFlex=\"20\">\n        <div class=\"form-container\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Device</mat-label>\n                <mat-select placeholder=\"Select\">\n                    <mat-option value=\"option\">Cisco </mat-option>\n                    <mat-option value=\"option\">ProVision</mat-option>\n                    <mat-option value=\"option\">HPE Comware</mat-option>\n                    <mat-option value=\"option\">HPE Procurve</mat-option>\n                    <mat-option value=\"option\">HPE Aruba</mat-option>\n                    <mat-option value=\"option\">Juniper</mat-option>\n                    <mat-option value=\"option\">Enterasys</mat-option>\n                    <mat-option value=\"option\">Brocade</mat-option>\n                    <mat-option value=\"option\">Alcatel Luscent</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Category</mat-label>\n                <mat-select placeholder=\"Select\">\n                    <mat-option value=\"option\">Basic Switch Management </mat-option>\n                    <mat-option value=\"option\">Switch User ID and Password</mat-option>\n                    <mat-option value=\"option\">Syslog Services</mat-option>\n                    <mat-option value=\"option\">Time Service</mat-option>\n                    <mat-option value=\"option\">SNMP</mat-option>\n                    <mat-option value=\"option\">SSH</mat-option>\n                    <mat-option value=\"option\">SSL</mat-option>\n                    <mat-option value=\"option\">RADIUS Authentication for Switch Management</mat-option>\n                    <mat-option value=\"option\">TACACS Authentication for Switch Management</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n                <mat-label>SubCategory</mat-label>\n                <mat-select placeholder=\"Select\">\n                    <mat-option value=\"option\">Management Access </mat-option>\n                    <mat-option value=\"option\">Configuration Access</mat-option>\n                    <mat-option value=\"option\">Console Access—Baud Rate</mat-option>\n                    <mat-option value=\"option\">Console Access—Timeout</mat-option>\n                    <mat-option value=\"option\">Reload</mat-option>\n                    <mat-option value=\"option\">USB Interface</mat-option>\n                    <mat-option value=\"option\">System and Environment</mat-option>\n                    <mat-option value=\"option\">Remote Management Sessions—Viewing</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Select baud-rate</mat-label>\n                <mat-select placeholder=\"Select\">\n                    <mat-option value=\"speed-sense\">speed-sense</mat-option>\n                    <mat-option value=\"1200\">1200</mat-option>\n                    <mat-option value=\"2400\">2400</mat-option>\n                    <mat-option value=\"4800\">4800</mat-option>\n                    <mat-option value=\"9600\">9600</mat-option>\n                    <mat-option value=\"19200\">19200</mat-option>\n                    <mat-option value=\"38400\">38400</mat-option>\n                    <mat-option value=\"57600\">57600</mat-option>\n                    <mat-option value=\"115200\">115200</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\" (click)=\"onclick($event)\">Add</button>\n        </div>\n    </mat-card> -->\n\n    <!-- Chetan's Code -->\n    <mat-card fxFlex=\"100\">\n        <mat-card-title>Configuration</mat-card-title>\n        <form [formGroup]=\"configurationFormGroup\">\n            <mat-horizontal-stepper [linear]=\"true\" #stepper>\n                <mat-step [stepControl]=\"configurationFormGroup.controls['template']\">\n                    <!-- <form> -->\n                    <ng-template matStepLabel>Select Template</ng-template>\n                    <div>\n                        <mat-table #table [dataSource]=\"dataSource\" matSort>\n                            <ng-container matColumnDef=\"name\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n                                    Template\n                                    Name\n                                </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element; let templateIndex = index\">\n                                    <ng-container formArrayName=\"template\">\n                                        <ng-container [formGroupName]=\"templateIndex\">\n                                            <mat-checkbox formControlName=\"templateChecked\" [(ngModel)]=\"element.checked\"\n                                                [ngModelOptions]=\"{standalone: true}\" [checked]=\"element.checked\">{{element.name}}</mat-checkbox>\n                                        </ng-container>\n                                    </ng-container>\n                                </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"description\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n                                    Description </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\">\n                                    <div>{{element.description}} </div>\n                                </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"createdDate\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Created\n                                    Date </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\">\n                                    <div>{{element.createdDate | date: 'MM-dd-yyyy hh:mm:ss aa'}} </div>\n                                </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"lastRunDate\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Last\n                                    Run Date </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\">\n                                    <div>{{element.lastRunDate | date: 'MM-dd-yyyy hh:mm:ss aa'}} </div>\n                                </mat-cell>\n                            </ng-container>\n\n                            <mat-header-row *matHeaderRowDef=\"['name', 'description', 'createdDate', 'lastRunDate']\"></mat-header-row>\n                            <div class=\"table-rows\">\n                                <mat-row *matRowDef=\"let row; columns: ['name', 'description', 'createdDate', 'lastRunDate']\"></mat-row>\n                            </div>\n                        </mat-table>\n                        <!-- </div> -->\n                    </div>\n                    <div style=\"float:right\">\n                        <button mat-raised-button color=\"primary\" matStepperNext>Skip</button>\n                        <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n                    </div>\n                    <!-- </form> -->\n                </mat-step>\n                <mat-step [stepControl]=\"configurationFormGroup.controls['provider']\">\n                    <ng-template matStepLabel>Custom Configuration</ng-template>\n                    <div fxLayout=\"row\">\n                        <div fxFlex=\"50\">\n                            <div class=\"template-header\">Selected Templates</div>\n                            <div class=\"template-body\">\n                                <mat-list>\n                                    <div class=\"template-content\" *ngFor=\"let template of templates; let i = index\">\n                                        <div [hidden]=\"!template.checked\">\n                                            <mat-list-item>{{template.name}} : {{template.description}} </mat-list-item>\n                                        </div>\n                                    </div>\n                                </mat-list>\n                            </div>\n                        </div>\n                        <div fxFlex=\"50\">\n                            <div class=\"template-header\">Customise</div>\n                            <div class=\"form-container\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Source techonology provider</mat-label>\n                                    <mat-select placeholder=\"Provider\" formControlName=\"provider\" [(ngModel)]=\"provider\"\n                                        (selectionChange)=\"assignConfigurationForm()\">\n                                        <mat-option value=\"Cisco\">Cisco </mat-option>\n                                        <mat-option value=\"HPE Comware\">HPE Comware</mat-option>\n                                        <mat-option value=\"ProVision\">ProVision</mat-option>\n                                        <mat-option value=\"HPE Procurve\" disabled>HPE Procurve</mat-option>\n                                        <mat-option value=\"HPE Aruba\" disabled>HPE Aruba</mat-option>\n                                        <mat-option value=\"Juniper\" disabled>Juniper</mat-option>\n                                        <mat-option value=\"Enterasys\" disabled>Enterasys</mat-option>\n                                        <mat-option value=\"Brocade\" disabled>Brocade</mat-option>\n                                        <mat-option value=\"Alcatel Luscent\" disabled>Alcatel Luscent</mat-option>\n                                    </mat-select>\n                                    <mat-error>Source techonology provider is required</mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"template-body\">\n                                <div *ngFor=\"let item of customBuild; let parentIndex = index;\">\n                                    <ng-container formArrayName=\"customParent\">\n                                        <ng-container [formGroupName]=\"parentIndex\">\n                                            <mat-checkbox formControlName=\"parent\" [(ngModel)]=\"item.checked\" [checked]=\"item.checked\">{{item.parent}}</mat-checkbox>\n                                            <div *ngIf=\"item.checked\" style=\"margin-left: 50px;\">\n                                                <div *ngFor=\"let child of item.child; let childIndex = index;\">\n                                                    <ng-container formArrayName=\"customChild\">\n                                                        <ng-container [formGroupName]=\"childIndex\">\n                                                            <mat-checkbox formControlName=\"child\" [(ngModel)]=\"child.checked\"\n                                                                [checked]=\"child.checked\" (change)=\"assignParametersForm()\">{{child.name}}</mat-checkbox>\n                                                        </ng-container>\n                                                    </ng-container>\n                                                </div>\n                                            </div>\n                                        </ng-container>\n                                    </ng-container>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"float:right\">\n                        <button mat-raised-button color=\"primary\" matStepperPrevious>Previous</button>\n                        <button mat-raised-button color=\"primary\" matStepperNext>Skip</button>\n                        <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n                    </div>\n                </mat-step>\n                <mat-step [stepControl]=\"configurationFormGroup.controls['customParent']\">\n                    <ng-template matStepLabel>Define Parameters</ng-template>\n                    <!-- {{configurationFormGroup.controls['customParent'].valid}} -->\n                    <div>\n                        <ng-container *ngFor=\"let parent of customBuild; let parentIndex = index;\">\n                            <ng-container formArrayName=\"customParent\">\n                                <ng-container [formGroupName]=\"parentIndex\">\n                                    <ng-container *ngFor=\"let child of parent.child; let childIndex = index;\">\n                                        <ng-container formArrayName=\"customChild\">\n                                            <ng-container [formGroupName]=\"childIndex\">\n                                                <div *ngIf=\"child.checked\" fxLayout=\"row\">\n                                                    <ng-container *ngFor=\"let providerData of child.technologyProvider; let providerIndex = index;\">\n                                                        <ng-container *ngIf=\"providerData.name == provider\">\n                                                                <div fxFlex=\"20\" *ngIf=\"providerData.parameter.length != 0\" class=\"parameter-name\">{{child.name}}  </div>\n                                                            <ng-container *ngFor=\"let parameter of providerData.parameter; let parameterIndex = index\">\n                                                                <ng-container formArrayName=\"parameters\">\n                                                                    <ng-container [formGroupName]=\"parameterIndex\">\n                                                                        <mat-form-field appearance=\"outline\" fxFlex=\"20\" style=\"margin-left:5px\" *ngIf=\"parameter.name != 'Password'\">\n                                                                            <mat-label>{{parameter.name}}</mat-label>\n                                                                            <input matInput [(ngModel)]=\"parameter.value\"\n                                                                                formControlName=\"parameterValue\"\n                                                                                required />\n                                                                            <mat-error>{{parameter.name}} is required</mat-error>\n                                                                        </mat-form-field>\n                                                                        <mat-form-field appearance=\"outline\" fxFlex=\"20\" style=\"margin-left:5px\" *ngIf=\"parameter.name == 'Password'\">\n                                                                            <mat-label>{{parameter.name}}</mat-label>\n                                                                            <input matInput [(ngModel)]=\"parameter.value\" type=\"password\"\n                                                                                formControlName=\"parameterValue\"\n                                                                                required />\n                                                                            <mat-error>{{parameter.name}} is required</mat-error>\n                                                                        </mat-form-field>\n                                                                    </ng-container>\n                                                                </ng-container>\n                                                            </ng-container>\n                                                        </ng-container>\n                                                    </ng-container>\n                                                </div>\n                                            </ng-container>\n                                        </ng-container>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n                        </ng-container>\n                    </div>\n                    <div style=\"float:right\">\n                        <button mat-raised-button color=\"primary\" matStepperPrevious>Previous</button>\n                        <button mat-raised-button color=\"primary\" (click)=\"setOutputCommands()\" matStepperNext>Next</button>\n                    </div>\n                    <!-- </form> -->\n                </mat-step>\n                <mat-step (click)=\"setOutputCommands()\">\n                    <ng-template matStepLabel>Run and Results</ng-template>\n                    <div fxLayout=\"row\">\n                        <div fxFlex=\"50\" style=\"margin-right: 5px;\">\n                            <div class=\"template-header\">Output Commands</div>\n                            <mat-form-field style=\"width:100%;height:100%;margin-top: 5px;\" placeholder=\"Output\"\n                                appearance=\"outline\">\n                                <textarea matInput rows=\"20\" readonly=\"true\" formControlName=\"OutputCommand\" [(ngModel)]=\"outputCommand\"></textarea>\n                            </mat-form-field>\n                            <!-- <div class=\"template-body\"> <mat-list-item *ngFor=\"let item of output;let i = index\">{{item}}</mat-list-item> </div>-->\n                        </div>\n                        <div fxFlex=\"50\">\n                            <div class=\"template-header\">Target IPs</div>\n                                <mat-form-field style=\"width:100%;height:100%;margin-top: 5px;\" appearance=\"outline\"\n                                    *ngIf=\"running==false\">\n                                    <textarea matInput rows=\"10\" [(ngModel)]=\"ip\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"setIp()\" \n                                    (keydown)=\"setIp()\" formControlname=\"IP_Hostname\" required minlength=\"1\" maxlength=\"1000\"></textarea>\n                                    <mat-error *ngIf=\"configurationFormGroup.controls['IP_Hostname'].hasError('required')\">IP/Hostname is required</mat-error>\n                                </mat-form-field>\n                                <div class=\"template-body\" *ngIf=\"running!=false\">\n                                    <mat-list>\n                                        <mat-list-item *ngFor=\"let ipaddress of ipAddresses;let i = index\"\n                                            typeahead-wait-ms=\"1000\">\n                                            <circle-progress [percent]=\"progress\" [radius]=\"20\" [outerStrokeWidth]=\"5\"\n                                                [innerStrokeWidth]=\"0\" [outerStrokeColor]=\"'#78C000'\"\n                                                [innerStrokeColor]=\"'#C7E596'\" [animation]=\"true\" [animationDuration]=\"(1+i%5)*3000\"\n                                                [titleFontSize]=\"10\" [showSubtitle]=\"false\"></circle-progress>\n                                            <h4 mat-line>{{ipaddress}}</h4>\n                                        </mat-list-item>\n                                    </mat-list>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"float:right\">\n                        <span style=\"color:green; font-size: 16px;\">{{ runStatus }}</span>\n                        <button mat-raised-button color=\"primary\" class=\"button-row\" (click)=\"run()\" [disabled]=\"running\">Run</button>\n                        <button mat-raised-button color=\"primary\" (click)=\"openModal()\">Save as template</button>\n                        <button mat-raised-button color=\"primary\" matStepperPrevious>Previous</button>\n                        <button mat-raised-button color=\"primary\" (click)=\"onclickReset(); stepper.reset();\">Exit</button>\n                    </div>\n                </mat-step>\n            </mat-horizontal-stepper>\n        </form>\n        <!-- <mat-form-field style=\"width:100%;height:100%\" appearance=\"outline\">\n            <textarea matInput rows=\"20\" [(ngModel)]=\"textValue\"></textarea>\n        </mat-form-field> -->\n        <!-- <mat-tab-group #tabGroup enableAnimations=false (focusChange)=\"updateTabIndex($event)\" [selectedIndex]=\"selectedTabIndex\">\n            <mat-tab label=\"Select Template\">\n                <div class=\"template-body\">\n                    <div>\n                        <mat-table #table [dataSource]=\"dataSource\" matSort>\n                            <ng-container matColumnDef=\"name\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Template Name\n                                </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\">\n                                    <mat-checkbox [(ngModel)]=\"element.checked\" [checked]=\"element.checked\">{{element.name}}</mat-checkbox>\n                                </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"description\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n                                    Description </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\">\n                                    <div>{{element.description}} </div>\n                                </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"createdDate\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Created\n                                    Date </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\">\n                                    <div>{{element.createdDate}} </div>\n                                </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"lastRunDate\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Last\n                                    Run Date </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\">\n                                    <div>{{element.lastRunDate}} </div>\n                                </mat-cell>\n                            </ng-container>\n\n                            <mat-header-row *matHeaderRowDef=\"['name', 'description', 'createdDate', 'lastRunDate']\"></mat-header-row>\n                            <div class=\"table-rows\">\n                                <mat-row *matRowDef=\"let row; columns: ['name', 'description', 'createdDate', 'lastRunDate']\"></mat-row>\n                            </div>\n                        </mat-table>\n                    </div>\n                </div>\n                <div style=\"float:right\">\n                    <button mat-raised-button color=\"primary\" (click)=\"nextTab()\">Skip</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextTab()\">Next</button>\n                </div>\n            </mat-tab>\n\n            <mat-tab label=\"Custom Configuration\" [disabled]=\"selectedTabIndex<1\">\n                <div fxLayout=\"row\">\n                    <div fxFlex=\"50\">\n                        <div class=\"template-header\">Selected Templates</div>\n                        <div class=\"template-body\">\n                            <mat-list>\n                            <div class=\"template-content\" *ngFor=\"let template of templates; let i = index\">\n                                <div [hidden]=\"!template.checked\"><mat-list-item>{{template.name}} : {{template.description}} </mat-list-item></div>\n                            </div>\n                            </mat-list>\n                        </div>\n                    </div>\n                    <div fxFlex=\"50\">\n                        <div class=\"template-header\">Custom Configuration</div>\n                        <div class=\"template-body\">\n                        <div *ngFor=\"let item of customBuild\">\n                            <mat-checkbox [(ngModel)]=\"item.checked\" [checked]=\"item.checked\">{{item.parent}}</mat-checkbox>\n                            <div *ngIf=\"item.checked\" style=\"margin-left: 50px;\">\n                                <div *ngFor=\"let child of item.child\">\n                                    <mat-checkbox [(ngModel)]=\"child.checked\" [checked]=\"child.checked\">{{child.name}}</mat-checkbox>\n                                </div>\n                            </div>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n                <div style=\"float:right\">\n                    <button mat-raised-button color=\"primary\" (click)=\"previousTab()\">Previous</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextTab()\">Skip</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextTab()\">Next</button>\n                </div>\n            </mat-tab>\n\n            <mat-tab label=\"Define Parameters\" [disabled]=\"selectedTabIndex<2\">\n                <div>\n                    <ng-container *ngFor=\"let parent of customBuild\" >\n                        <ng-container *ngFor=\"let child of parent.child\">\n                            <ng-container *ngIf=\"child.checked\">\n                                <ng-container *ngFor=\"let parameter of child.parameter\">\n                                    <mat-form-field appearance=\"outline\" style=\"width: 300px;margin:5px;\">\n                                        <mat-label>{{parameter.name}}</mat-label>\n                                        <input matInput [(ngModel)]=\"parameter.value\" required />\n                                        <mat-error>{{parameter.name}} is required</mat-error>\n                                    </mat-form-field>\n                                </ng-container>\n                            </ng-container>\n                        </ng-container>\n                    </ng-container>\n                </div>\n                <div style=\"float:right\">\n                    <button mat-raised-button color=\"primary\" (click)=\"previousTab()\">Previous</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextTab()\">Next</button>\n                </div>\n            </mat-tab>\n\n            <mat-tab label=\"Run and Results\" [disabled]=\"selectedTabIndex<3\">\n                <div fxLayout=\"row\">\n                    <div fxFlex=\"40\" style=\"margin-right: 5px;\">\n                        <div class=\"template-header\">Selected Commands</div>\n                        <mat-form-field style=\"width:100%;height:100%;margin-top: 5px;\" placeholder=\"Output\" appearance=\"outline\">\n                            <textarea matInput rows=\"10\" readonly=\"true\">\n                                Sample Commands\n                                Command 1 IP Address Port\n                                Show Command\n                                Execute Command\n                                Save Command\n                                Exit\n                            </textarea>\n                        </mat-form-field>\n                        <div class=\"template-body\"> <mat-list-item *ngFor=\"let item of output;let i = index\">{{item}}</mat-list-item> </div>\n                    </div>\n                    <div fxFlex=\"40\">\n                        <div class=\"template-header\">Target IPs</div>\n                        <div>\n                    <mat-form-field style=\"width:100%;height:100%;margin-top: 5px;\" appearance=\"outline\" *ngIf=\"running==false\">\n                        <textarea matInput rows=\"10\">\n                                199.228.243.17\n                                172.20.7.36\n                                172.21.2.5\n                                172.16.100.12\n                                172.21.82.97\n                                172.16.151.106\n                                172.16.100.243\n                                40.121.38.118\n                            </textarea>\n                    </mat-form-field>\n                    <div class=\"template-body\" *ngIf=\"running!=false\">\n                        <mat-list>\n                            <mat-list-item *ngFor=\"let ipaddress of ipAddresses;let i = index\" typeahead-wait-ms=\"1000\">\n                                <circle-progress [percent]=\"progress\" [radius]=\"20\" [outerStrokeWidth]=\"5\"\n                                    [innerStrokeWidth]=\"0\" [outerStrokeColor]=\"'#78C000'\" [innerStrokeColor]=\"'#C7E596'\"\n                                    [animation]=\"true\" [animationDuration]=\"(1+i%5)*3000\" [titleFontSize]=\"10\"\n                                    [showSubtitle]=\"false\"></circle-progress>\n                                <h4 mat-line>{{ipaddress}}</h4>\n                            </mat-list-item>\n                        </mat-list>\n                    </div>\n                    </div>\n                    </div>\n                    <div fxFlex=\"20\" style=\"margin-top: 25px;\">\n                        <div>\n                            <button mat-raised-button color=\"primary\" class=\"button-row\" (click)=\"run()\" [disabled]=\"running\">Run</button>\n                        </div>\n                        <div><button mat-raised-button color=\"primary\" (click)=\"openModal()\">Save as template</button></div>\n                        <div>\n                            <button mat-raised-button color=\"primary\" (click)=\"previousTab()\">Previous</button>\n                            <button mat-raised-button color=\"primary\" (click)=\"onclickReset()\">Exit</button>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n\n        </mat-tab-group> -->\n    </mat-card>\n    <!-- End of Chetan's Code -->\n\n</div>"

/***/ }),

/***/ "./src/app/components/cfg-builder/cfg-builder.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/cfg-builder/cfg-builder.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-tabs.md-no-animation md-tab-content {\n  transition: none; }\n\n.md-tabs.md-no-animation md-ink-bar {\n  transition: none; }\n\n::ng-deep .mat-tab-body-content {\n  overflow: hidden !important; }\n\n.template-body {\n  border: 1px solid #dadada;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 5px 0px 5px;\n  min-height: 150px; }\n\n.template-body:hover {\n  border: 1px solid black; }\n\n.mat-raised-button {\n  margin: 10px 5px 0 5px; }\n\n.mat-column-name {\n  flex: 10%; }\n\n.mat-column-description {\n  flex: 27%; }\n\n.mat-column-lastRunDate {\n  flex: 0%; }\n\n.mat-column-createdDate {\n  flex: 0%; }\n\n.template-header {\n  font-weight: bold;\n  padding: 7px 0 0 7px; }\n\n.form-container {\n  margin-top: 5px; }\n\n.parameter-name {\n  font-weight: bold;\n  margin-top: 20px; }\n\n.parameter-value {\n  width: 200px;\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZmctYnVpbGRlci9EOlxcMjAyMVxcbmV0d29ya19hdXRvbWF0aW9uXFxVWC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2ZnLWJ1aWxkZXJcXGNmZy1idWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IseUJBQXdCO0VBQ3hCLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLFVBQVMsRUFDWjs7QUFFRDtFQUNJLFVBQVMsRUFDWjs7QUFFRDtFQUNJLFNBQVEsRUFDWDs7QUFFRDtFQUNJLFNBQVEsRUFDWDs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osWUFBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jZmctYnVpbGRlci9jZmctYnVpbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZC10YWJzLm1kLW5vLWFuaW1hdGlvbiBtZC10YWItY29udGVudCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLm1kLXRhYnMubWQtbm8tYW5pbWF0aW9uIG1kLWluay1iYXIge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnRlbXBsYXRlLWJvZHkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDVweCAwcHggNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4udGVtcGxhdGUtYm9keTpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4IDVweCAwIDVweDtcbn1cblxuLm1hdC1jb2x1bW4tbmFtZSB7XG4gICAgZmxleDogMTAlO1xufVxuXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gICAgZmxleDogMjclO1xufVxuXG4ubWF0LWNvbHVtbi1sYXN0UnVuRGF0ZSB7XG4gICAgZmxleDogMCU7XG59XG5cbi5tYXQtY29sdW1uLWNyZWF0ZWREYXRlIHtcbiAgICBmbGV4OiAwJTtcbn0gXG5cbi50ZW1wbGF0ZS1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDdweCAwIDAgN3B4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnBhcmFtZXRlci1uYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGFyYW1ldGVyLXZhbHVlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/cfg-builder/cfg-builder.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/cfg-builder/cfg-builder.component.ts ***!
  \*****************************************************************/
/*! exports provided: CfgBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CfgBuilderComponent", function() { return CfgBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../mat-dialog/mat-dialog.component */ "./src/app/components/mat-dialog/mat-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CfgBuilderComponent = /** @class */ (function () {
    function CfgBuilderComponent(dialog, formBuilder, dataService) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.textValue = "";
        //Chetan's Code
        this.selectedTabIndex = 0;
        this.runStatus = "";
        this.progress = 0;
        this.running = false;
        this.ip = '';
        this.ipAddresses = [
            "199.228.243.17",
            "172.20.7.36",
            "172.21.2.5",
            "172.16.100.12",
            "172.21.82.97",
            "172.16.151.106",
            "172.16.100.243"
        ];
        this.outputCommand = '';
        this.output = [
            "Sample Commands",
            "Command 1 IP Address Port",
            "Show Command",
            "Execute Command",
            "Save Command",
            "Exit"
        ];
        this.templates = [
            {
                id: 1,
                name: "Cisco Switch Configuration",
                description: "This will be the description for Cisco Switch Configuration",
                createdDate: new Date(),
                lastRunDate: new Date(),
                checked: true
            }, {
                id: 2,
                name: "Cisco Router Configuration",
                description: "This will be the description for Cisco Router Configuration",
                createdDate: new Date(),
                lastRunDate: new Date(),
                checked: false
            }, {
                id: 3,
                name: "HP Comware Switch Configuration",
                description: "This will be the description for HP Comware Switch Configuration",
                createdDate: new Date(),
                lastRunDate: new Date(),
                checked: false
            }, {
                id: 4,
                name: "Juniper Switch Configuration",
                description: "This will be the description for Juniper Switch Configuration",
                createdDate: new Date(),
                lastRunDate: new Date(),
                checked: false
            }, {
                id: 5,
                name: "Provision Switch Configuration",
                description: "This will be the description for Provision Switch Configuration",
                createdDate: new Date(),
                lastRunDate: new Date(),
                checked: false
            }
        ];
        this.provider = 'Cisco';
        this.customBuild = [
            {
                id: 1,
                parent: "Basic Switch management",
                checked: true,
                child: [{
                        id: 1,
                        checked: false,
                        name: "Management Access",
                        technologyProvider: [{
                                name: "Cisco",
                                parameter: [{
                                        name: "UserName",
                                        value: "Cisco"
                                    }, {
                                        name: "Password",
                                        value: "password"
                                    }, {
                                        name: "Line vty",
                                        value: '2'
                                    }, {
                                        name: "Line Console",
                                        value: '0'
                                    }]
                            }, {
                                name: "ProVision",
                                parameter: []
                            }, {
                                name: "HPE Comware",
                                parameter: []
                            }]
                    }, {
                        id: 2,
                        checked: false,
                        name: "Configuration Access",
                        technologyProvider: [{
                                name: "Cisco",
                                parameter: []
                            }, {
                                name: "ProVision",
                                parameter: []
                            }, {
                                name: "HPE Comware",
                                parameter: []
                            }]
                    }, {
                        id: 3,
                        checked: true,
                        name: "Console Access—Baud Rate",
                        technologyProvider: [{
                                name: "Cisco",
                                parameter: [{
                                        name: "Speed",
                                        value: "4294967295"
                                    }]
                            }, {
                                name: "ProVision",
                                parameter: [{
                                        name: "Baud Rate",
                                        value: "200Hz"
                                    }]
                            }, {
                                name: "HPE Comware",
                                parameter: [{
                                        name: "Speed",
                                        value: "100"
                                    }]
                            }]
                    }, {
                        id: 4,
                        checked: true,
                        name: "Console Access—Timeout",
                        technologyProvider: [{
                                name: "Cisco",
                                command: '',
                                parameter: [{
                                        name: "Exact Timeout",
                                        value: "35791"
                                    }]
                            }, {
                                name: "ProVision",
                                parameter: []
                            }, {
                                name: "HPE Comware",
                                parameter: [{
                                        name: "Idle Timeout",
                                        value: "10s"
                                    }]
                            }]
                    }, {
                        id: 5,
                        checked: false,
                        name: "Reload",
                        technologyProvider: [{
                                name: "Cisco",
                                parameter: [{
                                        name: "Reload",
                                        value: "10"
                                    }]
                            }, {
                                name: "ProVision",
                                parameter: []
                            }, {
                                name: "HPE Comware",
                                parameter: [{
                                        name: "Reload",
                                        value: "10"
                                    }]
                            }]
                    }]
            }, {
                id: 2,
                parent: "Switch User ID and Password",
                checked: true,
                child: [{
                        id: 1,
                        checked: false,
                        name: "Local User ID and Password",
                        technologyProvider: [{
                                name: "Cisco",
                                parameter: [{
                                        name: "Username",
                                        value: "Cisco"
                                    }, {
                                        name: "Password",
                                        value: "password"
                                    }]
                            }, {
                                name: "ProVision",
                                parameter: [{
                                        name: "Username",
                                        value: "ProVision"
                                    }, {
                                        name: "Password",
                                        value: "password"
                                    }]
                            }, {
                                name: "HPE Comware",
                                parameter: [{
                                        name: "Username",
                                        value: "Comware"
                                    }, {
                                        name: "Password",
                                        value: "password"
                                    }]
                            }]
                    }, {
                        id: 2,
                        checked: false,
                        name: "Recover Lost Password",
                        technologyProvider: [{
                                name: "Cisco",
                                parameter: []
                            }, {
                                name: "ProVision",
                                parameter: []
                            }, {
                                name: "HPE Comware",
                                parameter: []
                            }]
                    }, {
                        id: 3,
                        checked: false,
                        name: "Protect Local Password",
                        technologyProvider: [{
                                name: "Cisco",
                                parameter: []
                            }, {
                                name: "ProVision",
                                parameter: []
                            }, {
                                name: "HPE Comware",
                                parameter: []
                            }]
                    }]
            }, {
                id: 3,
                parent: "Time Service",
                checked: true,
                child: [{
                        id: 1,
                        checked: false,
                        name: "TimeP or NTP",
                        technologyProvider: [{
                                name: "Cisco",
                                parameter: [{
                                        name: "IP",
                                        value: "123.21.13.33"
                                    }]
                            }, {
                                name: "ProVision",
                                parameter: [{
                                        name: "IP",
                                        value: "123.21.13.33"
                                    }]
                            }, {
                                name: "HPE Comware",
                                parameter: [{
                                        name: "IP",
                                        value: "123.21.13.33"
                                    }]
                            }]
                    }, {
                        id: 2,
                        checked: false,
                        name: "SNTP",
                        technologyProvider: [{
                                name: "Cisco",
                                parameter: []
                            }, {
                                name: "ProVision",
                                parameter: []
                            }, {
                                name: "HPE Comware",
                                parameter: []
                            }]
                    }]
            }
        ];
        this.status = '';
    }
    CfgBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var nextLine = '\n';
        this.ipAddresses.forEach(function (element, index) {
            _this.ip = _this.ip + element + nextLine;
            if (index == _this.ipAddresses.length - 2) {
                nextLine = '';
            }
        });
        this.assignConfigurationForm();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.templates);
        this.dataSource.sort = this.sort;
    };
    CfgBuilderComponent.prototype.onclick = function (event) {
        this.textValue += 'console baud-rate ' + '1200' + '\n';
    };
    CfgBuilderComponent.prototype.assignConfigurationForm = function () {
        var _this = this;
        this.configurationFormGroup = this.formBuilder.group({
            template: this.formBuilder.array([]),
            provider: [this.provider, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            customParent: this.formBuilder.array([]),
            IP_Hostname: [this.ip, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            OutputCommand: [this.outputCommand, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        var template = this.configurationFormGroup.controls['template'];
        this.templates.forEach(function (element) {
            template.push(_this.createTemplateFormGroup(element));
        });
        var customParent = this.configurationFormGroup.controls['customParent'];
        var index = 0;
        this.customBuild.forEach(function (element) {
            customParent.push(_this.createParentFormGroup(element));
            var childData = customParent.controls[index].controls['customChild'];
            var childIndex = 0;
            element.child.forEach(function (child) {
                childData.push(_this.createChildFormGroup(child));
                var parameter = childData.controls[childIndex].controls['parameters'];
                if (child.checked) {
                    child.technologyProvider.forEach(function (technologyProvider) {
                        technologyProvider.parameter.forEach(function (parameterElement) {
                            parameter.push(_this.createAnotherParameterFormGroup(parameterElement));
                        });
                    });
                }
                childIndex++;
            });
            index++;
        });
        console.log(this.configurationFormGroup);
    };
    CfgBuilderComponent.prototype.createTemplateFormGroup = function (element) {
        return this.formBuilder.group({
            templateChecked: [element.checked]
        });
    };
    CfgBuilderComponent.prototype.createParentFormGroup = function (element) {
        return this.formBuilder.group({
            parent: [element.checked],
            customChild: this.formBuilder.array([])
        });
    };
    CfgBuilderComponent.prototype.createChildFormGroup = function (element) {
        return this.formBuilder.group({
            child: [element.checked],
            parameters: this.formBuilder.array([])
        });
    };
    CfgBuilderComponent.prototype.createParameterFormGroup = function (element) {
        return this.formBuilder.group({
            parameterValue: [element.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    CfgBuilderComponent.prototype.createAnotherParameterFormGroup = function (element) {
        return this.formBuilder.group({
            parameterValue: [element.value]
        });
    };
    CfgBuilderComponent.prototype.assignParametersForm = function () {
        var _this = this;
        /*var parameter = <FormArray>(<FormGroup>(<FormArray>(<FormGroup>(<FormArray>this.parameterFormGroup.
          controls['customParent']).controls[childIndex]).controls['customChild']).
          controls[parameterIndex]).controls['parameter'];*/
        var customParent = this.configurationFormGroup.controls['customParent'];
        var index = 0;
        this.customBuild.forEach(function (parentElement) {
            var customChild = customParent.controls[index].controls['customChild'];
            var childIndex = 0;
            parentElement.child.forEach(function (childElement) {
                var parameter = customChild.controls[childIndex].controls['parameters'];
                parameter = _this.formBuilder.array([]);
                var par = customChild.controls[childIndex].controls['parameters'];
                if (childElement.checked) {
                    childElement.technologyProvider.forEach(function (technologyProvider) {
                        if (technologyProvider.name == _this.provider) {
                            technologyProvider.parameter.forEach(function (parameterElement) {
                                par.push(_this.createParameterFormGroup(parameterElement));
                            });
                        }
                    });
                }
                // console.log(parameter);
                childIndex++;
            });
            // console.log(customChild);
            index++;
        });
        // console.log(this.configurationFormGroup);
    };
    /*
    updateTabIndex(tabChangeEvent): void {
      this.selectedTabIndex = tabChangeEvent.index;
    }
  
    nextTab() {
      this.selectedTabIndex += 1;
    }
  
    previousTab() {
      this.selectedTabIndex -= 1;
    }*/
    CfgBuilderComponent.prototype.run = function () {
        var _this = this;
        if (this.configurationFormGroup.invalid) {
            this.running = false;
            return;
        }
        this.ipAddresses = this.ip.split(/\n/);
        var finalIp = [];
        this.ipAddresses.forEach(function (element) {
            if (element != '') {
                finalIp.push(element);
            }
        });
        this.ipAddresses = finalIp;
        this.running = true;
        this.progress = 100;
        setTimeout(function () {
            _this.status = "Success";
            _this.runStatus = "Executed Successfully";
            var flag = false, index = 0;
            _this.dataService.report.forEach(function (element, elementIndex) {
                if (element.name == 'Configuration Builder') {
                    flag = true;
                    index = elementIndex;
                }
            });
            if (flag) {
                _this.dataService[index].runBy = _this.configurationFormGroup.controls['UserName'].value;
                //this.dataService[index].commands = this.output;
                _this.dataService.report[index].lastRunDate = new Date();
                _this.dataService.report[index].status = _this.status;
                _this.ipAddresses.forEach(function (element) {
                    _this.dataService.report[index].details.push({
                        ip: element,
                        log: "This.wil be the log for " + element
                    });
                });
            }
            else {
                _this.dataService.report.push({
                    id: _this.dataService.report.length + 1,
                    name: "Configuration Builder",
                    description: "This will be the description for Configuration Builder",
                    createdDate: new Date(),
                    commands: _this.output,
                    details: [],
                    lastRunDate: new Date(),
                    runBy: "Admin",
                    status: _this.status
                });
                _this.ipAddresses.forEach(function (element) {
                    _this.dataService.report[_this.dataService.report.length - 1].details.push({
                        ip: element,
                        log: "This.wil be the log for " + element
                    });
                });
            }
        }, 14000);
    };
    CfgBuilderComponent.prototype.openModal = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '1000px';
        dialogConfig.maxHeight = '650px';
        dialogConfig.data = {
            id: 1,
            title: 'Template Details',
            data: '',
        };
        var dialogRef = this.dialog.open(_mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MatDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            var date = new Date();
            var newTemplate = {
                id: _this.templates.length + 1,
                name: result.name,
                description: result.description,
                createdDate: date,
                lastRunDate: date,
                checked: false
            };
            _this.templates.push(newTemplate);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.templates);
            _this.assignConfigurationForm();
        });
    };
    CfgBuilderComponent.prototype.onclickReset = function () {
        this.running = false;
        this.progress = 0;
        this.runStatus = "";
        this.assignConfigurationForm();
    };
    CfgBuilderComponent.prototype.setIp = function () {
        this.configurationFormGroup.controls['IP_Hostname'].setValue(this.ip);
    };
    CfgBuilderComponent.prototype.setOutputCommands = function () {
        var _this = this;
        var nextLine = '\n';
        if (this.customBuild[0].child[0].checked && this.provider == 'Cisco') {
            this.outputCommand = "username " + this.customBuild[0].child[0].technologyProvider[0].parameter[0].value
                + " password " + this.customBuild[0].child[0].technologyProvider[0].parameter[1].value +
                "\nLine vty " + this.customBuild[0].child[0].technologyProvider[0].parameter[2].value +
                "\nLine console " + this.customBuild[0].child[0].technologyProvider[0].parameter[3].value;
            this.output = this.outputCommand.split(nextLine);
        }
        else {
            this.output = [
                "Sample Commands",
                "Command 1 IP Address Port",
                "Show Command",
                "Execute Command",
                "Save Command",
                "Exit"
            ];
            this.output.forEach(function (element, index) {
                _this.outputCommand = _this.outputCommand + element + nextLine;
                if (index == _this.output.length - 2) {
                    nextLine = '';
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("tabGroup"),
        __metadata("design:type", Object)
    ], CfgBuilderComponent.prototype, "tabGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CfgBuilderComponent.prototype, "sort", void 0);
    CfgBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cfg-builder',
            template: __webpack_require__(/*! ./cfg-builder.component.html */ "./src/app/components/cfg-builder/cfg-builder.component.html"),
            styles: [__webpack_require__(/*! ./cfg-builder.component.scss */ "./src/app/components/cfg-builder/cfg-builder.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], CfgBuilderComponent);
    return CfgBuilderComponent;
}());



/***/ }),

/***/ "./src/app/components/cfg-convertor/cfg-convertor.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/cfg-convertor/cfg-convertor.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"cfgConverterForm\">\n  <div style=\"margin:5px\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center stretch\">\n  <mat-card fxFlex>\n    <mat-card-title>\n      Input Commands \n      <div style=\"float:right;\">\n        <button mat-raised-button class=\"button-row\" (click)=\"openDailog()\">\n          Provision Sample Command\n        </button>  \n      </div>\n    </mat-card-title>\n    <mat-form-field style=\"width:100%;\" appearance=\"outline\">\n      <textarea matInput rows=\"20\"  [(ngModel)]=\"inputConfiguration\" minlength=\"1\" maxlength=\"1000\" formControlName=\"Input\"></textarea>\n      <mat-error>Input is required</mat-error>\n    </mat-form-field>\n  </mat-card>\n  <mat-card>\n    <mat-card-title>Convert</mat-card-title>\n    <div class=\"form-container\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Source techonology provider</mat-label>\n        <mat-select [(ngModel)]=\"source\" placeholder=\"Select\" formControlName=\"TechnologyProvider\">\n          <mat-option value=\"cisco\">Cisco </mat-option>\n          <mat-option value=\"provision\">ProVision</mat-option>\n          <mat-option value=\"comware5\">HPE Comware</mat-option>\n          <mat-option value=\"procurve\">HPE Procurve</mat-option>\n          <mat-option value=\"aruba\">HPE Aruba</mat-option>\n          <mat-option value=\"juniper\">Juniper</mat-option>\n          <mat-option value=\"enterasys\">Enterasys</mat-option>\n          <mat-option value=\"brocade\">Brocade</mat-option>\n          <mat-option value=\"alcatel\">Alcatel Luscent</mat-option>\n        </mat-select>\n        <mat-error>Source provider is required</mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Target to convert</mat-label>\n        <mat-select [(ngModel)]=\"target\" placeholder=\"Select\" formControlName=\"Target\">            \n          <mat-option value=\"cisco\">Cisco </mat-option>\n          <mat-option value=\"provision\">ProVision</mat-option>\n          <mat-option value=\"comware5\">HPE Comware</mat-option>\n          <mat-option value=\"procurve\">HPE Procurve</mat-option>\n          <mat-option value=\"aruba\">HPE Aruba</mat-option>\n          <mat-option value=\"juniper\">Juniper</mat-option>\n          <mat-option value=\"enterasys\">Enterasys</mat-option>\n          <mat-option value=\"brocade\">Brocade</mat-option>\n          <mat-option value=\"alcatel\">Alcatel Luscent</mat-option>\n        </mat-select>\n        <mat-error>Target is required</mat-error>\n      </mat-form-field>\n\n      <div fxLayout=\"row\">\n      <button fxFlex=\"50\" mat-raised-button color=\"primary\" (click)=\"onclick()\" >Convert</button>\n      <button fxFlex=\"50\" mat-raised-button class=\"button-row\" (click)=\"onclickReset()\"  type=\"reset\" style=\"margin-left: 5px;\">\n          Reset\n      </button>\n      </div>\n    </div>\n  </mat-card>\n  <mat-card fxFlex>\n    <mat-card-title>\n      Output Commands\n      <span class=\"{{status}}\">{{ runStatus }}</span>\n    </mat-card-title>\n    <mat-form-field style=\"width:100%;\" appearance=\"outline\">\n      <textarea matInput rows=\"20\"  [(ngModel)]=\"outputConfiguration\" formControlName=\"Output\"></textarea>\n    </mat-form-field>\n  </mat-card>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/components/cfg-convertor/cfg-convertor.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/cfg-convertor/cfg-convertor.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2ZnLWNvbnZlcnRvci9jZmctY29udmVydG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/cfg-convertor/cfg-convertor.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cfg-convertor/cfg-convertor.component.ts ***!
  \*********************************************************************/
/*! exports provided: CfgConvertorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CfgConvertorComponent", function() { return CfgConvertorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../mat-dialog/mat-dialog.component */ "./src/app/components/mat-dialog/mat-dialog.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../report/report.component */ "./src/app/components/report/report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CfgConvertorComponent = /** @class */ (function () {
    function CfgConvertorComponent(http, dialog, formBuilder, dataService, reportComponent) {
        this.http = http;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.reportComponent = reportComponent;
        this.inputConfiguration = "";
        this.outputConfiguration = "";
        this.source = "provision";
        this.target = "comware5";
        this.runStatus = '';
    }
    CfgConvertorComponent.prototype.ngOnInit = function () {
        this.cfgConverterForm = this.formBuilder.group({
            Input: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            TechnologyProvider: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            Target: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"]]],
            Output: ['', []]
        });
        this.inputConfiguration = "reload" +
            "\nshow system fan\n";
    };
    CfgConvertorComponent.prototype.onclick = function () {
        var _this = this;
        if (this.cfgConverterForm.invalid) {
            return;
        }
        this.outputConfiguration = '';
        this.runStatus = "";
        console.log(this.source);
        console.log(this.target);
        console.log(this.inputConfiguration);
        /*setTimeout(() => {
           if (this.source == 'provision' || this.target == 'comware5') {
             this.status = "Success";
             this.outputConfiguration =
             'system-view' +
             '\ndir' +
             '\ndisplay version' +
             '\ndisplay current-configuration' +
             '\ndisplay saved-configuration' +
             '\ndisplay history' +
             '\ndisplay info-center' +
             '\ndisplay ip routing-table' +
             '\ndisplay ip interface brief' +
             '\ndisplay brief interfaces'
     
             this.runStatus = "Executed Successfully"
           } else {
             this.status = "Failure";
             this.runStatus = "Failed to execute";
           }
           var finalCommand = [];
           console.log(this.inputConfiguration);
           this.inputConfiguration.split(/\n/).forEach((element) => {
             if (element != '') {
               finalCommand.push(element);
             }
           });
           var flag = false, index = 0;
           this.dataService.report.forEach((element, elementIndex) => {
             if (element.name == 'Config Converter') {
               flag = true;
               index = elementIndex;
             }
           })
           if (flag) {
             this.dataService[index].commands = finalCommand;
             this.dataService.report[index].lastRunDate = new Date();
             this.dataService.report[index].status = this.status
           } else {
             this.dataService.report.push({
               id: this.dataService.report.length + 1,
               name: "Config Converter",
               description: "This will be the description for Config Converter",
               createdDate: new Date(),
               commands: finalCommand,
               details: [],
               lastRunDate: new Date(),
               runBy: "Admin",
               status: this.status
             })
           }
         }, 2000);*/
        var input = {
            "source": this.source,
            "target": this.target,
            "inputConfiguration": this.inputConfiguration
        };
        this.http.post("http://127.0.0.1:5000/api/convert", input)
            .subscribe(function (data) {
            _this.outputConfiguration = data.outputConfiguration;
            if (data.errorsText.trim()) {
                _this.outputConfiguration += '\n\n----Conversion Errors----';
                _this.outputConfiguration += data.errorsText;
            }
            if (data.residualText.trim()) {
                /*this.outputConfiguration += '\n\n----Unrecognized command and conversion stopped----\n';*/
                _this.outputConfiguration += '\n\n----Unrecognized command ----\n';
                _this.outputConfiguration += data.residualText;
            }
            /*else
            {
              this.runStatus = "Executed Successfully"
            }*/
        });
    };
    CfgConvertorComponent.prototype.openDailog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '1000px';
        dialogConfig.maxHeight = '650px';
        dialogConfig.data = {
            id: 1,
            title: 'Sample Commands',
            data: [
                "reload",
                "enable",
                "show modules",
                "show system power-supply",
                "show system temperature",
                "show telnet",
                "kill 3",
                "configure",
                "show tech all",
                "show running-config",
                "show system fans",
            ],
            oldData: ["show interfaces f0/18 switchport",
                "show lacp 1 internal",
                "network 10.1.220.0 0.0.0.255 area 0",
                "username mphasisadmin privilege 15 India",
                "logging console",
                "snmp-server host 10.0.100.21 version 2c private",
                "snmp-server community public ro",
                "snmp-server contact Lab_Engr",
                "show crypto pki certificates verbose"]
        };
        var dialogRef = this.dialog.open(_mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Closed");
        });
    };
    CfgConvertorComponent.prototype.onclickReset = function () {
        this.runStatus = '';
    };
    CfgConvertorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cfg-convertor',
            template: __webpack_require__(/*! ./cfg-convertor.component.html */ "./src/app/components/cfg-convertor/cfg-convertor.component.html"),
            styles: [__webpack_require__(/*! ./cfg-convertor.component.scss */ "./src/app/components/cfg-convertor/cfg-convertor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _report_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"]])
    ], CfgConvertorComponent);
    return CfgConvertorComponent;
}());



/***/ }),

/***/ "./src/app/components/mat-dialog/mat-dialog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/mat-dialog/mat-dialog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{modalTitle}}</h2>\n<hr *ngIf=\"modalTitle=='Report'\"/>\n<mat-dialog-content *ngIf=\"modalTitle=='Sample Commands'\">\n  <div *ngFor=\"let data of data.data\">\n    {{data}}\n  </div>\n</mat-dialog-content>\n<mat-dialog-content *ngIf=\"modalTitle=='Template Details'\">\n  <div class=\"form-container\">\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Template Name</mat-label>\n      <input matInput name=\"TemplateName\" [(ngModel)]=\"template.name\" required/>\n      <mat-error>Template name is required</mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Description</mat-label>\n        <!-- <textarea matInput rows=\"5\" formControlName=\"Description\" required></textarea> -->\n        <input matInput name=\"Description\" [(ngModel)]=\"template.description\" required/>\n        <mat-error>Description is required</mat-error>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n<mat-dialog-content *ngIf=\"modalTitle=='Report'\">\n  <div fxLayout=\"row\" class=\"margin-row\"> <div class=\"content-header\">Transaction Name </div>: {{data.data.name}}</div>\n  <div fxLayout=\"row\" class=\"margin-row\"> <div class=\"content-header\">Transaction Description </div>: {{data.data.description}}</div>\n  <div fxLayout=\"row\" class=\"margin-row\"> <div class=\"content-header\">Created Date </div>: {{data.data.createdDate | date: 'MM-dd-yyyy hh:mm:ss aa'}}</div>\n  <div fxLayout=\"row\" class=\"margin-row\"> <div class=\"content-header\">Last Run Date </div>: {{data.data.lastRunDate | date: 'MM-dd-yyyy hh:mm:ss aa'}}</div>\n  <div fxLayout=\"row\" class=\"margin-row\"> <div class=\"content-header\">Run By </div>: {{data.data.runBy}}</div>\n  <div class=\"margin-row\" *ngIf=\"data.data.commands.length != 0\"> \n    <div fxLayout=\"row\"> \n      <div class=\"content-header\">Commands Executed</div>:\n    </div>\n    <div *ngFor=\"let command of data.data.commands\"><div class=\"command\">{{command}}</div></div>\n  </div>\n  <div fxLayout=\"row\" class=\"margin-row\"> <div class=\"content-header\">Status</div>: {{data.data.status}}</div>\n  <div *ngIf=\"data.data.details.length != 0\">\n  <div fxLayout=\"row\" class=\"margin-row\"> <div class=\"content-header\">IP Details</div></div>\n  <div *ngFor=\"let ip of data.data.details; let ipIndex = index\"> \n    <div fxLayout=\"row\" class=\"margin-row\">\n      <div>{{ipIndex + 1}} - {{ip.ip}} </div>\n      <div *ngIf=\"ip.show == true\" (click)=\"ip.show = !ip.show\"><img src=\"assets/images/upword_arrow.png\"/></div>\n      <div *ngIf=\"ip.show != true\" (click)=\"ip.show = !ip.show\"><img src=\"assets/images/downword_arrow.png\"/></div>\n    </div>\n    <div class=\"content\" *ngIf=\"ip.show == true\">{{ip.log}}</div>\n  </div>\n</div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"template\" mat-dialog-close *ngIf=\"modalTitle=='Template Details'\">Save</button>\n <button mat-raised-button class=\"button-row\" mat-dialog-close>Close</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/mat-dialog/mat-dialog.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/mat-dialog/mat-dialog.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-title {\n  color: #673ab7;\n  text-align: center;\n  font-size: 25px; }\n\n.margin-row {\n  margin: 1% 0; }\n\n.content-header {\n  font-weight: bold;\n  width: 175px; }\n\n.content {\n  margin-left: 60px; }\n\n.command {\n  margin-left: 175px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXQtZGlhbG9nL0Q6XFwyMDIxXFxuZXR3b3JrX2F1dG9tYXRpb25cXFVYL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYXQtZGlhbG9nXFxtYXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hdC1kaWFsb2cvbWF0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBjb2xvcjogIzY3M2FiNztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubWFyZ2luLXJvdyB7XG4gICAgbWFyZ2luOiAxJSAwO1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxNzVweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG4uY29tbWFuZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE3NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/mat-dialog/mat-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/mat-dialog/mat-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: MatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogComponent", function() { return MatDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MatDialogComponent = /** @class */ (function () {
    function MatDialogComponent(data) {
        this.data = data;
        this.template = {};
        this.modalTitle = data.title;
        if (this.modalTitle == 'Report') {
            data.data.details.forEach(function (detail) {
                detail.show = false;
            });
        }
    }
    MatDialogComponent.prototype.ngOnInit = function () {
    };
    MatDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mat-dialog',
            template: __webpack_require__(/*! ./mat-dialog.component.html */ "./src/app/components/mat-dialog/mat-dialog.component.html"),
            styles: [__webpack_require__(/*! ./mat-dialog.component.scss */ "./src/app/components/mat-dialog/mat-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], MatDialogComponent);
    return MatDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/remote-cmd-executor/remote-cmd-executor.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/remote-cmd-executor/remote-cmd-executor.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"remCmdExeForm\">\n  <div style=\"margin:5px\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center stretch\">\n\n    <mat-card fxFlex=\"20\">\n      <mat-card-title>IPs/Hostnames</mat-card-title>\n      <mat-form-field style=\"width:100%;height:100%\" appearance=\"outline\" *ngIf=\"running == false\">\n        <textarea matInput rows=\"20\" required [(ngModel)]=\"ip\" formControlName=\"IP_Hostname\"></textarea>\n        \n        <mat-error *ngIf=\"remCmdExeForm.controls['IP_Hostname'].hasError('required')\">IPs/Hostnames is required</mat-error>\n      </mat-form-field>\n    <mat-list *ngIf=\"running == true\">\n        <mat-list-item *ngFor=\"let ipaddress of ipAddresses; let i = index\" typeahead-wait-ms=\"1000\">\n          <h4 mat-line>{{ ipaddress }}</h4>\n          <mat-progress-spinner \n            [color]=\"executionOutput[ipaddress]?.error?'warn':'primary'\" \n            [mode]=\"executionOutput[ipaddress]?.progress==100?'determinate':'indeterminate'\" \n            [value]=\"100\" \n            [diameter]=\"20\"></mat-progress-spinner>\n        </mat-list-item>\n      </mat-list> \n     <!---- <div *ngIf=\"running == true\">\n        <div *ngFor=\"let ipaddress of ipAddresses;\">\n          <h4>{{ ipaddress }}</h4>\n          <mat-progress-spinner \n            [color]=\"executionOutput[ipaddress]?.error?'warn':'primary'\" \n            [mode]=\"executionOutput[ipaddress]?.progress==100?'determinate':'indeterminate'\" \n            [value]=\"100\" \n            [diameter]=\"20\"></mat-progress-spinner>\n        </div>\n      </div>-->\n      </mat-card>\n\n    <mat-card fxFlex=\"50\">\n      <mat-card-title>Commands\n        <span class=\"{{status}}\">{{ runStatus }}</span></mat-card-title>\n      <mat-form-field style=\"width:100%;height:100%\" appearance=\"outline\">\n        <textarea matInput rows=\"20\" [(ngModel)]=\"command\" formControlName=\"Commands\"  required minlength=\"1\" maxlength=\"1000\"></textarea>\n        <mat-error *ngIf=\"remCmdExeForm.controls['Commands'].hasError('required')\">Command is required</mat-error>\n      </mat-form-field>\n    </mat-card>\n    <mat-card fxFlex=\"30\">\n      <mat-card-title>Execute</mat-card-title>\n      <div class=\"form-container\">\n          <section class=\"section-style\"> \n        <mat-radio-group class=\"form-padding\" formControlName=\"deviceConnectionType\">\n              <mat-radio-button class=\"radio-margin\" value=\"telnet\" [checked]=\"true\" >Telnet</mat-radio-button>\n              <mat-radio-button class=\"radio-margin\" value=\"ssh\">SSH</mat-radio-button>                 \n            </mat-radio-group> \n          </section>\n          <section class=\"section-style\"> \n            <mat-checkbox class=\"radio-margin\"  formControlName=\"isJumpserver\" matTooltip=\"check if jumpserver\"  >Jump server\n              </mat-checkbox>             \n            </section>\n                      \n        <div *ngIf=\"remCmdExeForm.controls['isJumpserver'].value\" fxLayout=\"column\" fxLayoutGap=\"32px\"> \n          <mat-form-field appearance=\"outline\" >\n              <mat-label>Jump Server IP</mat-label>\n              <input matInput formControlName=\"jumpServerIP\" [(ngModel)]=\"jumpServerIP\" />\n              <mat-error *ngIf=\"remCmdExeForm.controls['jumpServerIP'].hasError('required')\">Jump server is required</mat-error>\n            </mat-form-field>\n          <mat-form-field appearance=\"outline\">\n              <mat-label>JumpServer Username</mat-label>\n              <input matInput formControlName=\"jumpServerUserName\" [(ngModel)]=\"jumpServerUserName\" />\n              <mat-error *ngIf=\"remCmdExeForm.controls['jumpServerUserName'].hasError('required')\">Username is required</mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Jump Password</mat-label>\n                <input matInput formControlName=\"jumpServerPassword\" [(ngModel)]=\"jumpServerPassword\" [type]=\"hide ? 'password' : 'text'\"/>\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                <mat-error *ngIf=\"remCmdExeForm.controls['jumpServerPassword'].hasError('required')\">Password is required</mat-error>\n              </mat-form-field>   \n            </div>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Source techonology provider</mat-label>\n          <mat-select placeholder=\"Provider\" [(ngModel)]=\"Provider\" formControlName=\"Provider\">\n            <mat-option value=\"Cisco IOS\">Cisco IOS </mat-option>\n            <mat-option value=\"Cisco Nexus OS\" disabled>Cisco Nexus OS</mat-option>\n            <mat-option value=\"option\" disabled>VMware NSX</mat-option>\n            <mat-option value=\"option\" disabled>Arista</mat-option>\n            <mat-option value=\"option\" disabled>Cumulus </mat-option>\n            <mat-option value=\"option\" disabled>Aruba</mat-option>\n            <mat-option value=\"option\" disabled>Juniper</mat-option>\n            <mat-option value=\"option\" disabled>Enterasys </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"remCmdExeForm.controls['Provider'].hasError('required')\">Source techonology provider is required</mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Device Username</mat-label>\n          <input matInput formControlName=\"deviceUserName\" [(ngModel)]=\"deviceUserName\" />\n          <mat-error *ngIf=\"remCmdExeForm.controls['deviceUserName'].hasError('required')\">Username is required</mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Device Password</mat-label>\n          <input matInput formControlName=\"devicePassword\" [(ngModel)]=\"devicePassword\" [type]=\"hide ? 'password' : 'text'\">\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          <mat-error *ngIf=\"remCmdExeForm.controls['devicePassword'].hasError('required')\">Password is required</mat-error>\n        </mat-form-field>\n\n       \n        \n        <div>\n          <button mat-raised-button color=\"primary\" class=\"button-row\" (click)=\"onclick()\" [disabled]=\"running\">\n            Run\n          </button>\n          <button mat-raised-button class=\"button-row\" (click)=\"onclickReset()\">\n            Reset\n          </button>\n        </div>\n      </div>\n    </mat-card>\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/remote-cmd-executor/remote-cmd-executor.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/remote-cmd-executor/remote-cmd-executor.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-row {\n  margin-right: 8px; }\n\n.section-style {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.radio-margin {\n  margin: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZW1vdGUtY21kLWV4ZWN1dG9yL0Q6XFwyMDIxXFxuZXR3b3JrX2F1dG9tYXRpb25cXFVYL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZW1vdGUtY21kLWV4ZWN1dG9yXFxyZW1vdGUtY21kLWV4ZWN1dG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksa0JBQWtCLEVBQUU7O0FBRWhDO0VBQ0ksY0FBYTtFQUNiLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZW1vdGUtY21kLWV4ZWN1dG9yL3JlbW90ZS1jbWQtZXhlY3V0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXJvd3ttYXJnaW4tcmlnaHQ6IDhweCB9XG5cbi5zZWN0aW9uLXN0eWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICBcbiAgLnJhZGlvLW1hcmdpbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/remote-cmd-executor/remote-cmd-executor.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/remote-cmd-executor/remote-cmd-executor.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RemoteCmdExecutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteCmdExecutorComponent", function() { return RemoteCmdExecutorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemoteCmdExecutorComponent = /** @class */ (function () {
    function RemoteCmdExecutorComponent(http, formBuilder, dataService) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.baseAPI = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAPI;
        this.runStatus = "";
        this.progress = 0;
        this.running = false;
        this.status = '';
        this.executionOutput = {};
        this.hide = true;
        this.enableHide = true;
        this.output = "";
        this.ip = '';
        this.ipAddresses = [];
        this.command = '';
        this.commands = [];
        this.jumpServerIP = "";
        this.jumpServerUserName = "";
        this.jumpServerPassword = "";
        this.Provider = "";
        this.deviceUserName = "";
        this.devicePassword = "";
    }
    RemoteCmdExecutorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.remCmdExeForm = this.formBuilder.group({
            IP_Hostname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Commands: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            jumpServerIP: [''],
            jumpServerUserName: [''],
            jumpServerPassword: [''],
            deviceUserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            devicePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            Provider: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deviceConnectionType: ['telnet'],
            isJumpserver: [false]
        });
        var nextLine = '\n';
        this.ipAddresses.forEach(function (element, index) {
            _this.ip = _this.ip + element + nextLine;
            if (index == _this.ipAddresses.length - 2) {
                nextLine = '';
            }
        });
        nextLine = '\n';
        this.commands.forEach(function (element, index) {
            _this.command = _this.command + element + nextLine;
            if (index == _this.commands.length - 2) {
                nextLine = '';
            }
        });
        this.remCmdExeForm.get('isJumpserver').valueChanges.subscribe(function (mode) {
            if (mode === true) {
                _this.remCmdExeForm.get('jumpServerIP').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]);
                _this.remCmdExeForm.get('jumpServerUserName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]);
                _this.remCmdExeForm.get('jumpServerPassword').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]);
            }
            else if (mode === false) {
                _this.remCmdExeForm.get('jumpServerIP').clearValidators();
                _this.remCmdExeForm.get('jumpServerUserName').clearValidators();
                _this.remCmdExeForm.get('jumpServerPassword').clearValidators();
            }
            _this.remCmdExeForm.get('jumpServerIP').updateValueAndValidity();
            _this.remCmdExeForm.get('jumpServerUserName').updateValueAndValidity();
            _this.remCmdExeForm.get('jumpServerPassword').updateValueAndValidity();
        });
    };
    RemoteCmdExecutorComponent.prototype.onclick = function () {
        var _this = this;
        this.ipAddresses = this.ip.split(/\n/);
        var finalIp = [];
        this.ipAddresses.forEach(function (element) {
            if (element != '') {
                finalIp.push(element);
            }
        });
        this.ipAddresses = finalIp;
        this.commands = this.command.split(/\n/);
        var finalCommand = [];
        this.commands.forEach(function (element) {
            if (element != '') {
                finalCommand.push(element);
            }
        });
        this.commands = finalCommand;
        if (this.remCmdExeForm.invalid) {
            return;
        }
        var input = {
            "jmpServerIp": this.jumpServerIP,
            "jmpServerUsername": this.jumpServerUserName,
            "jmpServerPassword": this.jumpServerPassword,
            "OEM": this.Provider,
            "deviceUsername": this.deviceUserName,
            "devicePassword": this.devicePassword,
            "deviceAddresses": this.ipAddresses,
            "commands": this.commands,
            "deviceConnectionType": this.remCmdExeForm.controls['deviceConnectionType'].value,
            "isJumpServer": this.remCmdExeForm.controls['isJumpserver'].value
        };
        this.running = true;
        this.executionOutput = {};
        //this.http.post(this.baseAPI + "api/remote-execution", input)
        this.http.post("http://127.0.0.1:5000/api/remote-execution", input)
            .subscribe(function (data) {
            // this.running = false
            _this.executionOutput = data;
            _this.status = "Success";
            _this.runStatus = "Executed Successfully";
        });
        this.running = true;
        this.progress = 100;
        this.runStatus = "";
        /*setTimeout(() => {
          this.status = "Success";
          this.runStatus = "Executed Successfully"
          var flag = false, index = 0;
          this.dataService.report.forEach((element, elementIndex)=> {
            if(element.name == 'Remote Commands Executor') {
              flag = true;
              index = elementIndex;
            }
          })
          
        }, 14000);*/
    };
    RemoteCmdExecutorComponent.prototype.onclickReset = function () {
        this.running = false;
        this.progress = 0;
        this.runStatus = "";
    };
    RemoteCmdExecutorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remote-cmd-executor',
            template: __webpack_require__(/*! ./remote-cmd-executor.component.html */ "./src/app/components/remote-cmd-executor/remote-cmd-executor.component.html"),
            styles: [__webpack_require__(/*! ./remote-cmd-executor.component.scss */ "./src/app/components/remote-cmd-executor/remote-cmd-executor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], RemoteCmdExecutorComponent);
    return RemoteCmdExecutorComponent;
}());



/***/ }),

/***/ "./src/app/components/report-uf/report-uf.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/report-uf/report-uf.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><button mat-raised-button class=\"button-row\" (click)=\"refreshbutton()\" type=\"reset\" >\n    Refresh\n  </button></div>\n  <div style=\"margin:5px\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center stretch\">\n    \n    <div *ngIf=\"report.length == 0\" class=\"header-primary-text\">No reports present</div>\n    <mat-card fxFlex=\"100\" *ngIf=\"report.length != 0\">\n      <mat-table #table [dataSource]=\"refreshReport()\" matSort>\n        <ng-container matColumnDef=\"ID\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">Transaction id\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            {{element.ID}}\n          </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"Netauto_Module\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Module \n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <a (click)=\"openModal(element)\" style=\"cursor:pointer;\">{{element.Netauto_Module}}</a>\n          </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"OEM\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n           OEM </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div>{{element.OEM}} </div>\n          </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"Executed_Date\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n            Executed Date </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div>{{element.Executed_Date}} </div>\n          </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"Executed_By\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n            Executed By </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div>{{element.Executed_By}} </div>\n          </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"IP_Hostname\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n            IP/HOst name </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div>{{element.IP_Hostname}} </div>\n          </mat-cell>\n        </ng-container> \n        <ng-container matColumnDef=\"Device_Conn_Type\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n              Conn Type </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div>{{element.Device_Conn_Type}} </div>\n            </mat-cell>\n          </ng-container> \n        <ng-container matColumnDef=\"Ping_log\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Ping Log </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <a (click)=\"download(element.Ping_log)\"style=\"color:green; cursor: pointer;\">\n              <mat-icon class=\"toolbar-icon\">cloud_download</mat-icon>\n            </a>\n          </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"PreDeploy_log\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Pre Deployment Log </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a (click)=\"download(element.PreDeploy_log)\"style=\"color:green; cursor: pointer;\">\n                <mat-icon class=\"toolbar-icon\">cloud_download</mat-icon>\n              </a>\n            </mat-cell>\n          </ng-container>         \n          \n            <ng-container matColumnDef=\"Deploy_log\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Deployment Log </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                  <a (click)=\"download(element.Deploy_log)\"style=\"color:green; cursor: pointer;\">\n                    <mat-icon class=\"toolbar-icon\">cloud_download</mat-icon>\n                  </a>\n                </mat-cell>\n              </ng-container>\n        <mat-header-row *matHeaderRowDef=\"['ID','Netauto_Module', 'OEM', 'Executed_Date', 'Executed_By','IP_Hostname','Device_Conn_Type','Ping_log','PreDeploy_log','Deploy_log']\"></mat-header-row>\n        <div class=\"table-rows\">\n          <mat-row *matRowDef=\"let row; columns: ['ID','Netauto_Module', 'OEM', 'Executed_Date', 'Executed_By','IP_Hostname','Device_Conn_Type','Ping_log','PreDeploy_log','Deploy_log']\"></mat-row>\n        </div>\n      </mat-table>\n    </mat-card>\n  </div>"

/***/ }),

/***/ "./src/app/components/report-uf/report-uf.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/report-uf/report-uf.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-column-id {\n  flex: 0%; }\n\n.mat-column-name {\n  flex: 20%; }\n\n.mat-column-createdDate {\n  flex: 5%; }\n\n.mat-column-ip {\n  flex: 5%; }\n\n.mat-column-status {\n  flex: 0%; }\n\n.mat-column-download {\n  flex: 0%;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQtdWYvRDpcXDIwMjFcXG5ldHdvcmtfYXV0b21hdGlvblxcVVgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlcG9ydC11ZlxccmVwb3J0LXVmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUSxFQUNYOztBQUNEO0VBQ0ksVUFBUyxFQUNaOztBQUNEO0VBQ0ksU0FBUSxFQUNYOztBQUNEO0VBQ0ksU0FBUSxFQUNYOztBQUNEO0VBQ0ksU0FBUSxFQUNYOztBQUNEO0VBQ0ksU0FBUTtFQUNSLHdCQUF1QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0LXVmL3JlcG9ydC11Zi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLWlkIHtcbiAgICBmbGV4OiAwJTtcbn1cbi5tYXQtY29sdW1uLW5hbWUge1xuICAgIGZsZXg6IDIwJTtcbn1cbi5tYXQtY29sdW1uLWNyZWF0ZWREYXRlIHtcbiAgICBmbGV4OiA1JTtcbn1cbi5tYXQtY29sdW1uLWlwIHtcbiAgICBmbGV4OiA1JTtcbn1cbi5tYXQtY29sdW1uLXN0YXR1cyB7XG4gICAgZmxleDogMCU7XG59XG4ubWF0LWNvbHVtbi1kb3dubG9hZCB7XG4gICAgZmxleDogMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/report-uf/report-uf.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/report-uf/report-uf.component.ts ***!
  \*************************************************************/
/*! exports provided: ReportUfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportUfComponent", function() { return ReportUfComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../mat-dialog/mat-dialog.component */ "./src/app/components/mat-dialog/mat-dialog.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportUfComponent = /** @class */ (function () {
    function ReportUfComponent(http, dialog, dataService) {
        this.http = http;
        this.dialog = dialog;
        this.dataService = dataService;
        this.report = [];
    }
    ReportUfComponent.prototype.ngOnInit = function () {
        this.refreshbutton();
    };
    ReportUfComponent.prototype.refreshbutton = function () {
        var _this = this;
        this.http.get("http://127.0.0.1:5000/api/report_uf")
            .subscribe(function (data) {
            _this.report = data;
        });
    };
    ReportUfComponent.prototype.refreshReport = function () {
        return new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.report);
    };
    ReportUfComponent.prototype.openModal = function (element) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '1000px';
        // dialogConfig.maxHeight = '650px';
        dialogConfig.data = {
            id: 1,
            title: 'Report',
            data: element
        };
        var dialogRef = this.dialog.open(_mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    ReportUfComponent.prototype.download = function (text) {
        var data = new Blob([text], { type: 'text/plain' });
        var url = window.URL.createObjectURL(data);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = "report.csv";
        a.click();
        setTimeout(function () {
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }, 0);
    };
    ReportUfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-uf',
            template: __webpack_require__(/*! ./report-uf.component.html */ "./src/app/components/report-uf/report-uf.component.html"),
            styles: [__webpack_require__(/*! ./report-uf.component.scss */ "./src/app/components/report-uf/report-uf.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ReportUfComponent);
    return ReportUfComponent;
}());



/***/ }),

/***/ "./src/app/components/report/report.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/report/report.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><button mat-raised-button class=\"button-row\" (click)=\"refreshbutton()\" type=\"reset\" >\n  Refresh\n</button></div>\n<div style=\"margin:5px\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center stretch\">\n  \n  <div *ngIf=\"report.length == 0\" class=\"header-primary-text\">No reports present</div>\n  <mat-card fxFlex=\"100\" *ngIf=\"report.length != 0\">\n    <mat-table #table [dataSource]=\"refreshReport()\" matSort>\n      <ng-container matColumnDef=\"ID\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">Transaction id\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          {{element.ID}}\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Netauto_Module\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Module \n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <a (click)=\"openModal(element)\" style=\"cursor:pointer;\">{{element.Netauto_Module}}</a>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"OEM\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n         OEM </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <div>{{element.OEM}} </div>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Executed_Date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n          Executed Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <div>{{element.Executed_Date}} </div>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Executed_By\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n          Executed By </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <div>{{element.Executed_By}} </div>\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"IP_Hostname\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n          IP/HOst name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <div>{{element.IP_Hostname}} </div>\n        </mat-cell>\n      </ng-container> \n      <ng-container matColumnDef=\"Device_Conn_Type\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n            Conn Type </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div>{{element.Device_Conn_Type}} </div>\n          </mat-cell>\n        </ng-container> \n      <ng-container matColumnDef=\"Run_log\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Download Log </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <a (click)=\"download(element.Run_log)\"style=\"color:green; cursor: pointer;\">\n            <mat-icon class=\"toolbar-icon\">cloud_download</mat-icon>\n          </a>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"['ID','Netauto_Module', 'OEM', 'Executed_Date', 'Executed_By','IP_Hostname','Device_Conn_Type','Run_log']\"></mat-header-row>\n      <div class=\"table-rows\">\n        <mat-row *matRowDef=\"let row; columns: ['ID','Netauto_Module', 'OEM', 'Executed_Date', 'Executed_By','IP_Hostname','Device_Conn_Type','Run_log']\"></mat-row>\n      </div>\n    </mat-table>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/report/report.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/report/report.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-column-id {\n  flex: 0%; }\n\n.mat-column-name {\n  flex: 20%; }\n\n.mat-column-createdDate {\n  flex: 5%; }\n\n.mat-column-ip {\n  flex: 5%; }\n\n.mat-column-status {\n  flex: 0%; }\n\n.mat-column-download {\n  flex: 0%;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvRDpcXDIwMjFcXG5ldHdvcmtfYXV0b21hdGlvblxcVVgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlcG9ydFxccmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUSxFQUNYOztBQUNEO0VBQ0ksVUFBUyxFQUNaOztBQUNEO0VBQ0ksU0FBUSxFQUNYOztBQUNEO0VBQ0ksU0FBUSxFQUNYOztBQUNEO0VBQ0ksU0FBUSxFQUNYOztBQUNEO0VBQ0ksU0FBUTtFQUNSLHdCQUF1QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLWlkIHtcbiAgICBmbGV4OiAwJTtcbn1cbi5tYXQtY29sdW1uLW5hbWUge1xuICAgIGZsZXg6IDIwJTtcbn1cbi5tYXQtY29sdW1uLWNyZWF0ZWREYXRlIHtcbiAgICBmbGV4OiA1JTtcbn1cbi5tYXQtY29sdW1uLWlwIHtcbiAgICBmbGV4OiA1JTtcbn1cbi5tYXQtY29sdW1uLXN0YXR1cyB7XG4gICAgZmxleDogMCU7XG59XG4ubWF0LWNvbHVtbi1kb3dubG9hZCB7XG4gICAgZmxleDogMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/report/report.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../mat-dialog/mat-dialog.component */ "./src/app/components/mat-dialog/mat-dialog.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportComponent = /** @class */ (function () {
    function ReportComponent(http, dialog, dataService) {
        this.http = http;
        this.dialog = dialog;
        this.dataService = dataService;
        this.report = [];
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.refreshbutton();
    };
    ReportComponent.prototype.refreshbutton = function () {
        var _this = this;
        //this.http.get("http://172.16.100.12/api/report")
        this.http.get("http://127.0.0.1:5000/api/report")
            .subscribe(function (data) {
            _this.report = data;
        });
    };
    ReportComponent.prototype.refreshReport = function () {
        return new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.report);
    };
    ReportComponent.prototype.openModal = function (element) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '1000px';
        // dialogConfig.maxHeight = '650px';
        dialogConfig.data = {
            id: 1,
            title: 'Report',
            data: element
        };
        var dialogRef = this.dialog.open(_mat_dialog_mat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    ReportComponent.prototype.download = function (text) {
        var data = new Blob([text], { type: 'text/plain' });
        var url = window.URL.createObjectURL(data);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = "report.csv";
        a.click();
        setTimeout(function () {
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }, 0);
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/components/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/components/report/report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/components/tcp-port-scanner/tcp-port-scanner.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tcp-port-scanner/tcp-port-scanner.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"margin:5px\"\n  fxLayout=\"row\"\n  fxLayoutGap=\"5px\"\n  fxLayoutAlign=\"center stretch\"\n>\n<mat-card fxFlex=\"20\">\n    <mat-card-title>IPs/Hostnames</mat-card-title>\n    <mat-form-field style=\"width:100%;height:100%\" appearance=\"outline\">\n      <textarea matInput rows=\"20\">\n          199.228.243.17\n          172.20.7.36\n          172.21.2.5\n          172.16.100.12\n          172.21.82.97\n          172.16.151.106\n          172.16.100.243\n          40.121.38.118\n      </textarea>\n    </mat-form-field>\n  </mat-card>\n\n \n  <mat-card fxFlex=\"20\">   \n    <div> \n        <mat-radio-group layout=\"row\" >\n            <mat-radio-button  value=\"1\">TCP</mat-radio-button>\n            <mat-radio-button style=\"margin: 10px;\" value=\"2\">UDP</mat-radio-button>\n          </mat-radio-group>\n    </div> \n    <div>\n   \n        <mat-form-field>\n            <input matInput  placeholder=\"Port Number\" value=\"443,1443\" />\n          </mat-form-field>\n   \n    </div>\n    </mat-card>\n    <mat-card fxFlex=\"60\">  \n     \n      <button  mat-raised-button color=\"primary\" (click)=\"onclick()\">Scan</button>\n\n      \n      <mat-form-field style=\"width:100%;height:100%\" appearance=\"outline\">\n          <textarea matInput rows=\"20\" [(ngModel)]=\"scanStatus\">\n            </textarea>  \n          </mat-form-field>\n\n    </mat-card>\n   \n    \n     \n   \n    \n</div>\n\n"

/***/ }),

/***/ "./src/app/components/tcp-port-scanner/tcp-port-scanner.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tcp-port-scanner/tcp-port-scanner.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGNwLXBvcnQtc2Nhbm5lci90Y3AtcG9ydC1zY2FubmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tcp-port-scanner/tcp-port-scanner.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/tcp-port-scanner/tcp-port-scanner.component.ts ***!
  \***************************************************************************/
/*! exports provided: TcpPortScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TcpPortScannerComponent", function() { return TcpPortScannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TcpPortScannerComponent = /** @class */ (function () {
    function TcpPortScannerComponent() {
        this.scanStatus = "";
    }
    TcpPortScannerComponent.prototype.ngOnInit = function () {
    };
    TcpPortScannerComponent.prototype.onclick = function () {
        this.scanStatus = "Scanned successfully see the output below\n  199.228.243.17 -- 443 -- open\n  199.228.243.17 -- 1443 -- open\n  172.20.7.36 -- 443 -- open\n  172.20.7.36 -- 1443 -- not open\n  172.21.2.5 -- 443 -- open\n  172.21.2.5 -- 1443 -- not open\n  172.16.100.12 -- 443 -- open\n  172.16.100.12 -- 1443 -- not open\n  172.21.82.97 -- 443 -- open\n  172.21.82.97 -- 1443 -- not open\n  172.16.151.106 -- 443 -- open\n  172.16.151.106 -- 1443 -- not open\n  172.16.100.243 -- 443 -- open\n  172.16.100.243 -- 1443 -- not open\n  40.121.38.118 -- 443 -- open\n  40.121.38.118 -- 1443 -- not open\n";
    };
    TcpPortScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tcp-port-scanner',
            template: __webpack_require__(/*! ./tcp-port-scanner.component.html */ "./src/app/components/tcp-port-scanner/tcp-port-scanner.component.html"),
            styles: [__webpack_require__(/*! ./tcp-port-scanner.component.scss */ "./src/app/components/tcp-port-scanner/tcp-port-scanner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TcpPortScannerComponent);
    return TcpPortScannerComponent;
}());



/***/ }),

/***/ "./src/app/components/upgrade-firmware/upgrade-firmware.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/upgrade-firmware/upgrade-firmware.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"upgradeFirmwareForm\">\n  <div style=\"margin:5px\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center stretch\">\n\n    <mat-card fxFlex=\"50\" fxLayout=\"column\">\n      <mat-card-title>Target Device</mat-card-title>\n      <div class=\"form-container\">\n        <div class=\"form-padding\" fxLayoutGap=\"10px\">\n          <mat-form-field appearance=\"outline\" class=\"form-field-height\" fxFlex=\"35\">\n            <mat-label>Device Type</mat-label>\n            <mat-select placeholder=\"Device Type\" [(ngModel)]=\"deviceType\" formControlName=\"deviceType\">\n              <mat-option value=\"Router\">Router</mat-option>\n              <mat-option value=\"Swithces\">Swithces</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['deviceType'].hasError('required')\">Device Type is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"form-field-height\" fxFlex=\"35\">\n            <mat-label>Techonology provider</mat-label>\n            <mat-select placeholder=\"Provider\" [(ngModel)]=\"Provider\" formControlName=\"Provider\">\n              <mat-option value=\"Cisco IOS\">Cisco IOS </mat-option>\n              <mat-option value=\"Cisco Nexus OS\" disabled>Cisco Nexus OS</mat-option>\n              <mat-option value=\"option\" disabled>VMware NSX</mat-option>\n              <mat-option value=\"option\" disabled>Arista</mat-option>\n              <mat-option value=\"option\" disabled>Cumulus </mat-option>\n              <mat-option value=\"option\" disabled>Aruba</mat-option>\n              <mat-option value=\"option\" disabled>Juniper</mat-option>\n              <mat-option value=\"option\" disabled>Enterasys </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['Provider'].hasError('required')\">Techonology provider is\n              required</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"form-padding\" fxLayoutGap=\"10px\">\n          <mat-form-field appearance=\"outline\" class=\"form-field-height\" fxFlex=\"35\">\n            <mat-label>Device Username</mat-label>\n            <input matInput formControlName=\"deviceUserName\" [(ngModel)]=\"deviceUserName\" />\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['deviceUserName'].hasError('required')\">Username is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"form-field-height\" fxFlex=\"35\">\n            <mat-label>Device Password</mat-label>\n            <input matInput formControlName=\"devicePassword\" [(ngModel)]=\"devicePassword\"\n              [type]=\"hide ? 'text' : 'password'\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['devicePassword'].hasError('required')\">Password is required\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <mat-card-title>IPs/Hostnames</mat-card-title>\n        <mat-form-field style=\"width:75%;height:100%\" appearance=\"outline\" *ngIf=\"running == false\">\n          <textarea matInput rows=\"15\" required [(ngModel)]=\"ip\" formControlName=\"IP_Hostname\"></textarea>\n          <mat-error *ngIf=\"upgradeFirmwareForm.controls['IP_Hostname'].hasError('required')\">IPs/Hostnames is required\n          </mat-error>\n        </mat-form-field>\n        <mat-table #iptable [dataSource]=\"ipDataSource\" matSort *ngIf=\"running == true\">\n          <ng-container matColumnDef=\"ip\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n              IP\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div>{{element.ip}} </div>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"existingVersion\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Existing Version\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div>{{element.existingVersion}}</div>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"upgradableVersions\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Upgradable Version\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <mat-form-field  style=\"width:85%\">\n                <mat-select placeholder=\"Select Version\" [(ngModel)]=\"element.upgradableVersionsSelected.value\" [ngModelOptions]=\"{standalone: true}\">\n                  <mat-option *ngFor=\"let version of element.upgradableVersions\" [value]=\"version.versionName\">{{version.versionName}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"upgradableVersionsSelected\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> \n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <mat-checkbox [checked]=\"element.upgradableVersionsSelected.checked == true\" [(ngModel)]=\"element.upgradableVersionsSelected.checked\" [ngModelOptions]=\"{standalone: true}\" (click)=\"showData()\"></mat-checkbox>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Status\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n          <div class=\"mat-spinner-text\"> P </div>\n            <mat-progress-spinner [ngClass]=\"element.ping\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\">\n            </mat-progress-spinner>\n            <div class=\"mat-spinner-text\">\n              <D \n            </div> \n            <mat-progress-spinner [ngClass]=\"element.preDeployment\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\"></mat-progress-spinner>\n            <!-- <mat-progress-spinner [color]=\"'warn'\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\"></mat-progress-spinner> -->\n            <div class=\"mat-spinner-text\"> D </div>\n            <mat-progress-spinner [ngClass]=\"element.deployment\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\">\n            </mat-progress-spinner>\n            <div class=\"mat-spinner-text\"> >D </div>\n            <mat-progress-spinner [ngClass]=\"element.postDeployment\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\">\n            </mat-progress-spinner>\n          </mat-cell>\n        </ng-container>\n          <mat-header-row *matHeaderRowDef=\"['ip', 'existingVersion', 'upgradableVersions', 'upgradableVersionsSelected', 'status']\"></mat-header-row>\n          <div class=\"table-rows\">\n            <mat-row *matRowDef=\"let row; columns: ['ip', 'existingVersion', 'upgradableVersions', 'upgradableVersionsSelected', 'status']\"></mat-row>\n          </div>\n        </mat-table>\n        <!-- <mat-list *ngIf=\"running == true\">\n          <mat-list-item *ngFor=\"let ipaddress of ipAddresses; let i = index\" typeahead-wait-ms=\"1000\">\n            <h4 mat-line>{{ ipaddress }}</h4> -->\n            <!-- <mat-progress-spinner \n            [color]=\"executionOutput[ipaddress]?.error?'warn':'primary'\" \n            [mode]=\"executionOutput[ipaddress]?.progress==100?'determinate':'indeterminate'\" \n            [value]=\"100\" \n            [diameter]=\"20\"></mat-progress-spinner> -->\n            <!-- <div class=\"mat-spinner-text\"> P </div>\n            <mat-progress-spinner class=\"green\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\">\n            </mat-progress-spinner>\n            <div class=\"mat-spinner-text\">\n              <D \n            </div> \n            <mat-progress-spinner class=\"grey\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\"></mat-progress-spinner>\n            <mat-progress-spinner [color]=\"'warn'\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\"></mat-progress-spinner> -->\n            <!-- <div class=\"mat-spinner-text\"> D </div>\n            <mat-progress-spinner class=\"grey\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\">\n            </mat-progress-spinner>\n            <div class=\"mat-spinner-text\"> >D </div>\n            <mat-progress-spinner class=\"grey\" [mode]=\"'determinate'\" [value]=\"100\" [diameter]=\"30\">\n            </mat-progress-spinner>\n          </mat-list-item>\n        </mat-list> -->\n      </div>\n    </mat-card>\n\n\n    <mat-card fxFlex>\n      <mat-card-title>Connection</mat-card-title>\n      <div class=\"form-container\">\n        <section class=\"section-style\">\n          <mat-radio-group class=\"form-padding\" formControlName=\"deviceConnectionType\">\n            <mat-radio-button class=\"radio-margin\" value=\"telnet\" [checked]=\"true\">Telnet</mat-radio-button>\n            <mat-radio-button class=\"radio-margin\" value=\"ssh\">SSH</mat-radio-button>\n          </mat-radio-group>\n        </section>\n        <section class=\"section-style\">\n          <mat-checkbox class=\"radio-margin\" formControlName=\"isJumpserver\" matTooltip=\"check if jumpserver\">Jump server\n          </mat-checkbox>\n        </section>\n\n        <div *ngIf=\"upgradeFirmwareForm.controls['isJumpserver'].value\" fxLayout=\"column\">\n          <mat-form-field appearance=\"outline\" class=\"form-field-height\">\n            <mat-label>Jump Server IP</mat-label>\n            <input matInput formControlName=\"jumpServerIP\" [(ngModel)]=\"jumpServerIP\" />\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['jumpServerIP'].hasError('required')\">Jump server is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"form-field-height\">\n            <mat-label>JumpServer Username</mat-label>\n            <input matInput formControlName=\"jumpServerUserName\" [(ngModel)]=\"jumpServerUserName\" />\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['jumpServerUserName'].hasError('required')\">Username is\n              required</mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"form-field-height\">\n            <mat-label>Jump Password</mat-label>\n            <input matInput formControlName=\"jumpServerPassword\" [(ngModel)]=\"jumpServerPassword\"\n              [type]=\"hide ? 'text' : 'password'\" />\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['jumpServerPassword'].hasError('required')\">Password is\n              required</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"form-padding\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Username</mat-label>\n            <input matInput placeholder=\"Username\" formControlName=\"serverUsername\" />\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['serverUsername'].hasError('required')\">Username is required\n            </mat-error>\n\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" style=\"margin-left: 10px;\">\n            <mat-label>Password</mat-label>\n            <input matInput placeholder=\"Password\" formControlName=\"serverPassword\"\n              [type]=\"serverPasswordHide ? 'text' : 'password'\">\n            <mat-icon matSuffix (click)=\"serverPasswordHide = !serverPasswordHide\">{{serverPasswordHide ?\n                      'visibility' : 'visibility_off'}}</mat-icon>\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['serverPassword'].hasError('required')\">Password is required\n            </mat-error>\n\n          </mat-form-field>\n        </div>\n        <div class=\"form-padding\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Server IP</mat-label>\n            <input matInput placeholder=\"Server IP\" formControlName=\"serverIP\" />\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['serverIP'].hasError('required')\">Server IP is required\n            </mat-error>\n\n          </mat-form-field>\n          <!-- <mat-form-field appearance=\"outline\" style=\"margin-left: 10px;\">\n            <mat-label>File Path</mat-label>\n            <input matInput placeholder=\"File Path\" formControlName=\"serverfilepath\" />\n            <mat-error *ngIf=\"upgradeFirmwareForm.controls['serverfilepath'].hasError('required')\">Server File Path is\n              required</mat-error>\n\n          </mat-form-field> -->\n        </div>\n\n        <!-- <div class=\"form-padding\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Choose Transfer Protocol</mat-label>\n            <mat-select placeholder=\"protocalSelect\" matTooltip=\"help content for transfer protocal\">\n              <mat-option value=\"option\">FTP </mat-option>\n              <mat-option value=\"option\" disabled>TFTP</mat-option>\n              <mat-option value=\"option\" disabled>SCP</mat-option>\n              <mat-option value=\"option\" disabled>SFTP</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div> -->\n        <div class=\"form-padding\">\n          <button mat-raised-button color=\"primary\" class=\"button-row\" (click)=\"onclick_ping()\"\n           [disabled]=\"buttons.pingButton\">Ping</button>\n          <button mat-raised-button color=\"primary\" class=\"button-row\" style=\"margin-left:5px;\"\n            (click)=\"onclick_predeploy()\" [disabled]=\"buttons.preDeploymentButton\">Pre Deployment</button>\n          <button mat-raised-button color=\"primary\" class=\"button-row\" style=\"margin-left:5px;\"\n            (click)=\"onclick_deploy()\" [disabled]=\"buttons.deploymentButton\">Deployment</button>\n          <button mat-raised-button color=\"primary\" class=\"button-row\" style=\"margin-left:5px;\"\n            (click)=\"onclick_postdeploy()\" [disabled]=\"buttons.postDeploymentButtton\">Post Deployment</button>\n          <button mat-raised-button class=\"button-row\" type=\"reset\" (click)=\"onclickReset()\" style=\"margin-left:5px;\">\n            Reset\n          </button>\n        </div>\n        <div><span class=\"{{status}}\">{{upgradeStatus}}</span></div>\n      </div>\n      <br/> \n      <mat-card-title *ngIf=\"report.length > 0\">Downloads</mat-card-title>\n      <mat-table #table [dataSource]=\"dataSource\" matSort *ngIf=\"running == true\">\n          <ng-container matColumnDef=\"stage\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\">\n              Stage\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div>{{element.stage}} </div>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"download\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header class=\"header-primary-text\"> Download Report\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a (click)=\"download()\" style=\"cursor:pointer;\">\n                <mat-icon class=\"toolbar-icon\">cloud_download</mat-icon>\n              </a>\n            </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"['stage', 'download']\"></mat-header-row>\n          <div class=\"table-rows\">\n            <mat-row *matRowDef=\"let row; columns: ['stage', 'download']\"></mat-row>\n          </div>\n        </mat-table>\n    </mat-card>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/upgrade-firmware/upgrade-firmware.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/upgrade-firmware/upgrade-firmware.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-row {\n  margin-right: 8px; }\n\n.section-style {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 40px; }\n\n.radio-margin {\n  margin: 0 10px; }\n\n.form-field-height {\n  width: 75%; }\n\n.green::ng-deep circle {\n  stroke: green; }\n\n.grey::ng-deep circle {\n  stroke: grey; }\n\n.red::ng-deep circle {\n  stroke: red; }\n\n.mat-spinner-text {\n  position: relative;\n  left: 19px;\n  font-size: 12px; }\n\n.mat-column-ip {\n  flex: 2; }\n\n.mat-column-existingVersion {\n  flex: 2; }\n\n.mat-column-upgradableVersions {\n  flex: 2; }\n\n.mat-column-upgradableVersionsSelected {\n  flex: 1; }\n\n.mat-column-status {\n  flex: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGdyYWRlLWZpcm13YXJlL0Q6XFwyMDIxXFxuZXR3b3JrX2F1dG9tYXRpb25cXFVYL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1cGdyYWRlLWZpcm13YXJlXFx1cGdyYWRlLWZpcm13YXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksa0JBQWtCLEVBQUU7O0FBRWhDO0VBQ0UsY0FBYTtFQUNiLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWlCO0VBQ2pCLFdBQVU7RUFDVixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLFFBQU8sRUFDUjs7QUFFRDtFQUNFLFFBQU8sRUFDUjs7QUFFRDtFQUNFLFFBQU8sRUFDUjs7QUFFRDtFQUNFLFFBQU8sRUFDUjs7QUFFRDtFQUNFLFFBQU8sRUFDUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBncmFkZS1maXJtd2FyZS91cGdyYWRlLWZpcm13YXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1yb3d7bWFyZ2luLXJpZ2h0OiA4cHggfVxuXG4uc2VjdGlvbi1zdHlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ucmFkaW8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5mb3JtLWZpZWxkLWhlaWdodCB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5ncmVlbjo6bmctZGVlcCBjaXJjbGUge1xuICBzdHJva2U6IGdyZWVuO1xufVxuXG4uZ3JleTo6bmctZGVlcCBjaXJjbGUge1xuICBzdHJva2U6IGdyZXk7XG59XG5cbi5yZWQ6Om5nLWRlZXAgY2lyY2xlIHtcbiAgc3Ryb2tlOiByZWQ7XG59XG5cbi5tYXQtc3Bpbm5lci10ZXh0IHtcbiAgcG9zaXRpb246cmVsYXRpdmU7IFxuICBsZWZ0OiAxOXB4OyBcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWF0LWNvbHVtbi1pcCB7XG4gIGZsZXg6IDI7XG59XG5cbi5tYXQtY29sdW1uLWV4aXN0aW5nVmVyc2lvbiB7XG4gIGZsZXg6IDI7XG59XG5cbi5tYXQtY29sdW1uLXVwZ3JhZGFibGVWZXJzaW9ucyB7XG4gIGZsZXg6IDI7XG59XG5cbi5tYXQtY29sdW1uLXVwZ3JhZGFibGVWZXJzaW9uc1NlbGVjdGVkIHtcbiAgZmxleDogMTtcbn1cblxuLm1hdC1jb2x1bW4tc3RhdHVzIHtcbiAgZmxleDogMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/upgrade-firmware/upgrade-firmware.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/upgrade-firmware/upgrade-firmware.component.ts ***!
  \***************************************************************************/
/*! exports provided: UpgradeFirmwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeFirmwareComponent", function() { return UpgradeFirmwareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpgradeFirmwareComponent = /** @class */ (function () {
    function UpgradeFirmwareComponent(http, formBuilder, dataService) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.baseAPI = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseAPI;
        this.runStatus = "";
        this.progress = 0;
        this.running = false;
        this.status = '';
        this.executionOutput = [];
        this.ip = '';
        this.ipAddresses = [
            "199.228.243.17",
            "172.20.7.36",
            "172.21.2.5",
            "172.16.100.12",
            "172.21.82.97",
            "172.16.151.106",
            "172.16.100.243"
        ];
        this.command = '';
        this.commands = [];
        this.jumpServerIP = "192.168.198.80";
        this.jumpServerUserName = "kneel";
        this.jumpServerPassword = "kneel";
        this.Provider = "Cisco IOS";
        this.deviceUserName = "test";
        this.devicePassword = "test";
        this.deviceType = "Router";
        this.report = [];
        this.btn_action = "";
        this.action = "";
        this.buttons = {
            pingButton: false,
            preDeploymentButton: true,
            deploymentButton: true,
            postDeploymentButtton: true
        };
    }
    UpgradeFirmwareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.report);
        this.upgradeFirmwareForm = this.formBuilder.group({
            IP_Hostname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            jumpServerIP: [''],
            jumpServerUserName: [''],
            jumpServerPassword: [''],
            deviceType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deviceUserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            devicePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            Provider: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deviceConnectionType: ['telnet'],
            isJumpserver: [false],
            serverUsername: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            serverPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            serverIP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
        });
        var nextLine = '\n';
        this.ipAddresses.forEach(function (element, index) {
            _this.ip = _this.ip + element + nextLine;
            if (index == _this.ipAddresses.length - 2) {
                nextLine = '';
            }
        });
    };
    /*onclick() {
      this.ipAddresses = this.ip.split(/\n/);
      var finalIp = [];
      this.ipAddresses.forEach((element) => {
        if (element != '') {
          finalIp.push(element);
        }
      });
      this.ipAddresses = finalIp;
      this.commands = this.command.split(/\n/);
      var finalCommand = [];
      this.commands.forEach((element) => {
        if (element != '') {
          finalCommand.push(element);
        }
      });
      this.commands = finalCommand;
      if (this.upgradeFirmwareForm.invalid) {
        console.log(this.upgradeFirmwareForm)
        return;
      }
  
      let input = {
        "jmpServerIp": this.jumpServerIP,
        "jmpServerUsername": this.jumpServerUserName,
        "jmpServerPassword": this.jumpServerPassword,
        "OEM": this.Provider,
        "deviceUsername": this.deviceUserName,
        "devicePassword": this.devicePassword,
        "deviceAddresses": this.ipAddresses,
        "commands": this.commands,
        "deviceConnectionType": this.upgradeFirmwareForm.controls['deviceConnectionType'].value,
        "isJumpserver": this.upgradeFirmwareForm.controls['isJumpserver'].value,
        "action": this.btn_action
      }
      this.running = true
      this.executionOutput = []
      this.http.post(this.baseAPI + "api/upgrade-firmware", input)
        .subscribe((data: any) => {
          // this.running = false
          this.executionOutput = data;
          this.status = "Success";
          this.runStatus = "Executed Successfully"
        });
      this.running = true
      this.progress = 100
      this.runStatus = "";
    }*/
    UpgradeFirmwareComponent.prototype.onclick_ping = function () {
        var _this = this;
        this.btn_action = "Ping";
        this.ipAddresses = this.ip.split(/\n/);
        var finalIp = [];
        this.ipAddresses.forEach(function (element) {
            if (element != '') {
                finalIp.push(element);
            }
        });
        this.ipAddresses = finalIp;
        this.commands = this.command.split(/\n/);
        var finalCommand = [];
        this.commands.forEach(function (element) {
            if (element != '') {
                finalCommand.push(element);
            }
        });
        this.commands = finalCommand;
        if (this.upgradeFirmwareForm.invalid) {
            // console.log(this.upgradeFirmwareForm)
            return;
        }
        this.running = true;
        this.report.push({
            stage: "Ping",
            disabled: false
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.report);
        /*
        let input = {
          "jmpServerIp": this.jumpServerIP,
          "jmpServerUsername": this.jumpServerUserName,
          "jmpServerPassword": this.jumpServerPassword,
          "OEM": this.Provider,
          "deviceUsername": this.deviceUserName,
          "devicePassword": this.devicePassword,
          "deviceAddresses": this.ipAddresses,
          "commands": this.commands,
          "deviceConnectionType": this.upgradeFirmwareForm.controls['deviceConnectionType'].value,
          "isJumpserver": this.upgradeFirmwareForm.controls['isJumpserver'].value,
          "action": this.btn_action
        }
        this.running = true
        this.executionOutput = []
        this.http.post(this.baseAPI + "api/upgrade-firmware", input)
          .subscribe((data: any) => {
            // this.running = false
            this.executionOutput = data;
            this.status = "Success";
            this.runStatus = "Executed Successfully"
          });
        this.progress = 100
        this.runStatus = "";*/
        this.ipAddresses.forEach(function (element, index) {
            var ping = 'green';
            if (index == 2) {
                ping = 'red';
            }
            _this.executionOutput.push({
                ip: element,
                ping: ping,
                preDeployment: 'grey',
                deployment: 'grey',
                postDeployment: 'grey',
                existingVersion: 'Version 1.0',
                upgradableVersions: [
                    {
                        versionName: 'Version 1.1'
                    }, {
                        versionName: 'Version 1.2'
                    }, {
                        versionName: 'Version 1.3'
                    }
                ],
                upgradableVersionsSelected: {
                    value: "",
                    checked: false
                }
            });
        });
        this.ipDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.executionOutput);
        this.buttons.preDeploymentButton = false;
    };
    UpgradeFirmwareComponent.prototype.onclick_predeploy = function () {
        this.btn_action = "PreDeployment";
        if (this.upgradeFirmwareForm.invalid) {
            // console.log(this.upgradeFirmwareForm)
            return;
        }
        this.report.push({
            stage: "Pre Deployment"
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.report);
        this.executionOutput.forEach(function (element, index) {
            if (element.ping == 'green') {
                element.preDeployment = 'green';
            }
            if (index == 3) {
                element.preDeployment = 'red';
            }
        });
        this.buttons.deploymentButton = false;
    };
    UpgradeFirmwareComponent.prototype.onclick_deploy = function () {
        this.btn_action = "Deployment";
        if (this.upgradeFirmwareForm.invalid) {
            // console.log(this.upgradeFirmwareForm)
            return;
        }
        this.report.push({
            stage: "Deployment"
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.report);
        this.executionOutput.forEach(function (element, index) {
            if (element.preDeployment == 'green') {
                element.deployment = 'green';
            }
            if (index == 1) {
                element.deployment = 'red';
            }
        });
        this.buttons.postDeploymentButtton = false;
    };
    UpgradeFirmwareComponent.prototype.onclick_postdeploy = function () {
        this.btn_action = "PostDeployment";
        if (this.upgradeFirmwareForm.invalid) {
            // console.log(this.upgradeFirmwareForm)
            return;
        }
        this.report.push({
            stage: "Post Deployment"
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.report);
        this.executionOutput.forEach(function (element, index) {
            if (element.deployment == 'green') {
                element.postDeployment = 'green';
            }
            if (index == 4) {
                element.postDeployment = 'red';
            }
        });
        // this.runStatus = "Executed Successfully" ;
    };
    UpgradeFirmwareComponent.prototype.onclickReset = function () {
        this.running = false;
        this.report = [];
    };
    UpgradeFirmwareComponent.prototype.showData = function () {
        console.log(this.executionOutput);
    };
    UpgradeFirmwareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upgrade-firmware',
            template: __webpack_require__(/*! ./upgrade-firmware.component.html */ "./src/app/components/upgrade-firmware/upgrade-firmware.component.html"),
            styles: [__webpack_require__(/*! ./upgrade-firmware.component.scss */ "./src/app/components/upgrade-firmware/upgrade-firmware.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], UpgradeFirmwareComponent);
    return UpgradeFirmwareComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.report = [];
    }
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseAPI: 'http://172.16.100.12/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\2021\network_automation\UX\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map