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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
                //AppRoutingModule,
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nbody {font-family: Arial, Helvetica, sans-serif;}\n  \n/* Full-width input fields */\n  \ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n  \n/* Set a style for all buttons */\n  \nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n  \nbutton:hover {\n    opacity: 0.8;\n}\n  \n/* Extra styles for the cancel button */\n  \n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n  \n.container {\n    padding: 16px;\n}\n  \nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n  \n/* The Modal (background) */\n  \n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n  \n/* Modal Content/Box */\n  \n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n  \n/* The Close Button (x) */\n  \n.close {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n}\n  \n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n  \n/* Add Zoom Animation */\n  \n.animate {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n}\n  \n@-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n}\n  \n@keyframes animatezoom {\n    from {-webkit-transform: scale(0);transform: scale(0)} \n    to {-webkit-transform: scale(1);transform: scale(1)}\n}\n  \n/* Change styles for span and cancel button on extra small screens */\n  \n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.childTitle = 'This text is passed to child';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authenticate.service */ "./src/app/authenticate.service.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.service */ "./src/app/register.service.ts");
/* harmony import */ var _edit_details_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-details.service */ "./src/app/edit-details.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _my_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-interceptor */ "./src/app/my-interceptor.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([])
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticateService"], _register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"], _edit_details_service__WEBPACK_IMPORTED_MODULE_8__["EditDetailsService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: _my_interceptor__WEBPACK_IMPORTED_MODULE_11__["MyHttpInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authenticate.service.ts":
/*!*****************************************!*\
  !*** ./src/app/authenticate.service.ts ***!
  \*****************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    AuthenticateService.prototype.authenticate_user = function (uname, pw) {
        var _this = this;
        console.log('In authenticate_user  :username :' + uname + ' password :' + pw);
        //writing sentences after authentication in subscribe
        this.call_server(uname, pw).subscribe(function (data) {
            _this.authenticated = data,
                console.log('In authenticate_user inside subscribe :' + _this.authenticated);
            if (_this.authenticated == true) {
                console.log('User authenticated successfully!!');
                alert("logged in successfully!");
                _this.router.navigate(['/profile'], { relativeTo: _this.route });
                _this.authenticated = false;
            }
            else {
                console.log('In Invalid credentials else : Authenticated :' + _this.authenticated);
                alert("invalid credentials!");
            }
        });
        return this.authenticated;
    };
    AuthenticateService.prototype.call_server = function (uname, pw) {
        return this.http.post('http://localhost:8080/user', { username: uname, password: pw }, {}); //{ withCredentials: true }
    };
    AuthenticateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/edit-details.service.ts":
/*!*****************************************!*\
  !*** ./src/app/edit-details.service.ts ***!
  \*****************************************/
/*! exports provided: EditDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetailsService", function() { return EditDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditDetailsService = /** @class */ (function () {
    function EditDetailsService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    ;
    EditDetailsService.prototype.edit_user = function (na, a, uname, pw) {
        this.call_Server(na, a, uname, pw).subscribe();
        alert('User details saved successfully');
        //this.router.navigate(['/profile'],{relativeTo:this.route});
    };
    EditDetailsService.prototype.call_Server = function (na, a, uname, pw) {
        return this.http.post('http://localhost:8080/edit', { name: na, age: a, username: uname, password: pw }, { withCredentials: true });
    };
    EditDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditDetailsService);
    return EditDetailsService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  \n  <div class=\"modal\" style=\"display: block\">\n    <form class=\"modal-content animate\" [formGroup]=\"formdata\" (ngSubmit)=\"onSubmit(formdata.value)\">\n  \n      <div class=\"container\">\n        <label for=\"uname\"><b>Username</b></label><span style=\"color: red\">*</span>\n        <input type=\"text\" placeholder=\"Enter Username\" name=\"Username\" formControlName=\"username\">\n        <div *ngIf=\" username.errors?.required && ( !username.pristine || submitted)\" class=\"alert alert-danger\">Name is required.</div>\n  \n        <label for=\"psw\"><b>Password</b></label><span style=\"color: red\">*</span>\n        <input type=\"{{input_type}}\" placeholder=\"Enter Password\" name=\"Password\" formControlName=\"password\">\n        <input type=\"checkbox\" name=\"password_state\" value=\"Show Password\" (change)=\"onCheckboxChange()\">Show Password<br>\n        <div *ngIf=\" password.errors?.required && ( !password.pristine || submitted)\" class=\"alert alert-danger\">Password is required.</div>\n          \n        <!--Not disabling on submit so that in onSubmit() submiteed can be set to true for validation purpose-->\n        <button type=\"submit\" >Login</button> <!--[disabled]=\"formdata.invalid\"-->\n      </div>\n  \n      <div class=\"container\" style=\"background-color:#f1f1f1\">\n        <button type=\"button\" class=\"cancelbtn\" (click)=\"onCancelClick()\">Cancel</button>\n        <span>    </span>\n        <p>Not Having an Account? Register Here</p>\n        <a RouterLinkActive=\"active\" (click)=\"onRegisterClick()\" target=\"_top\">Register</a>\n        \n      </div>\n    </form>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../authenticate.service */ "./src/app/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticate) {
        this.route = route;
        this.router = router;
        this.authenticate = authenticate;
        this.input_type = "password";
        this.submitted = false;
        this.authenticated = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]))
        });
    };
    ;
    LoginComponent.prototype.onSubmit = function (data) {
        this.submitted = true;
        if (this.formdata.valid) {
            //authenticate if data is valid
            console.log('In login.component.ts  :username :' + data.username + ' password :' + data.password);
            //calling service for authentication
            this.authenticated = this.authenticate.authenticate_user(data.username, data.password);
        }
        //console.log('In login.component.ts Authenticated :'+this.authenticated);
    };
    LoginComponent.prototype.onCancelClick = function () {
        this.formdata.reset();
    };
    ;
    LoginComponent.prototype.onRegisterClick = function () {
        this.router.navigate(['/register'], { relativeTo: this.route });
    };
    //show password : changes input type for the password field
    LoginComponent.prototype.onCheckboxChange = function () {
        if (this.input_type == "password") {
            this.input_type = "text";
        }
        else {
            this.input_type = "password";
        }
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () { return this.formdata.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.formdata.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-interceptor.ts":
/*!***********************************!*\
  !*** ./src/app/my-interceptor.ts ***!
  \***********************************/
/*! exports provided: MyHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHttpInterceptor", function() { return MyHttpInterceptor; });
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

var MyHttpInterceptor = /** @class */ (function () {
    function MyHttpInterceptor() {
    }
    MyHttpInterceptor.prototype.intercept = function (req, next) {
        console.log("intercepted request ... ");
        // Clone the request to add the new header.
        // const authReq = req.clone({ 
        //     headers: req.headers.set("withCredentials", "true")});
        var req = req.clone({
            withCredentials: true
        });
        console.log("Sending request with new header now ...");
        return next.handle(req);
        //send the newly created request
        // return next.handle(authReq)
        // .catch((error, caught) => {
        // //intercept the respons error and displace it to the console
        // console.log("Error Occurred");
        // console.log(error);
        // //return the error to the method that called it
        // return Observable.throw(error);
        // }) as any;
    };
    MyHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MyHttpInterceptor);
    return MyHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n\n<div class=\"modal\" style=\"display: block\">\n  <form class=\"modal-content animate\" [formGroup]=\"formdata\" (ngSubmit)=\"on_submit(formdata.value)\">\n\n    <div class=\"container\">\n      \n        <label for=\"name\"><b>Name</b></label><span style=\"color: red\">*</span>\n        <input id=\"name\" type=\"text\" placeholder=\"Enter Name\" name=\"name\" formControlName=\"name\">\n        \n        <div *ngIf=\" name.errors?.required && ( !name.pristine || submitted)\" class=\"alert alert-danger\">Name is required.</div>\n\n        <!-- username is a readonly property so it can't be changed-->\n        <label for=\"username\"><b>Username</b></label><span style=\"color: red\">*</span>\n        <input type=\"text\" placeholder=\"Enter Username\" name=\"Username\" formControlName=\"username\" readonly>\n\n        <label for=\"age\"><b>Age</b></label><span style=\"color: red\">*</span>\n        <input type=\"text\" placeholder=\"Enter Age\" name=\"age\" formControlName=\"age\">\n        <div *ngIf=\" age.errors?.required && ( !age.pristine || submitted)\" class=\"alert alert-danger\">Age is required.</div>\n        <div *ngIf=\"age.errors?.agevalidator\" class=\"alert alert-danger\">Age must be greater than 18</div>\n\n        <label for=\"password\"><b>Password</b></label><span style=\"color: red\">*</span>\n        <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" formControlName=\"password\">\n        <div *ngIf=\" password.errors?.required && ( !password.pristine || submitted)\" class=\"alert alert-danger\">Password is required.</div>\n        <!--confirm password still remaining-->\n        <!--<div *ngIf=\"confirmpassword.errors?.confirmingpassword\"  class=\"alert alert-danger\">Password does not match.</div>-->\n        \n      <button type=\"submit\">Save Changes</button> <!-- [disabled]=\"formdata.invalid\"-->\n    </div>\n\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\n      <button type=\"button\" class=\"cancelbtn\" (click)=\"onLogOutClick()\">Log Out</button>      \n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../edit-details.service */ "./src/app/edit-details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, router, http, edit_service) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.edit_service = edit_service;
        this.submitted = false;
        this.call_server().subscribe(function (data) {
            _this.user_details = data;
            if (_this.user_details.name == "" && _this.user_details.username == "") {
                console.log('User_details are not there');
                alert('User has not logged in!!');
                _this.router.navigate(['/'], { relativeTo: _this.route });
            }
            console.log('inside profile constructor subscribe');
            //setting values in formdata
            console.log('User\'s name :' + _this.user_details.name + " username :" + _this.user_details.username + " password :" + _this.user_details.password + " age :" + _this.user_details.age);
            //this.formdata.name = this.user_details.name;
            _this.formdata.patchValue({
                name: _this.user_details.name,
                age: _this.user_details.age,
                username: _this.user_details.username,
                password: _this.user_details.password
            });
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]))
        });
    };
    ;
    ProfileComponent.prototype.call_server = function () {
        console.log('calling profile');
        return this.http.get('http://localhost:8080/profile', {});
    };
    ProfileComponent.prototype.on_submit = function (data) {
        this.submitted = true;
        if (this.formdata.valid) {
            this.edit_service.edit_user(data.name, data.age, data.username, data.password);
        }
    };
    ProfileComponent.prototype.onLogOutClick = function () {
        this.call_Server().subscribe();
        alert('Logged Out!!');
        this.router.navigate(['/'], { relativeTo: this.route });
    };
    ProfileComponent.prototype.call_Server = function () {
        //log out just required to clear session 
        return this.http.get('http://localhost:8080/logout', {}); //{ withCredentials: true } now my-interceptor will send withCredentials:true with every request
    };
    Object.defineProperty(ProfileComponent.prototype, "name", {
        get: function () { return this.formdata.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "age", {
        get: function () { return this.formdata.get('age'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "username", {
        get: function () { return this.formdata.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "password", {
        get: function () { return this.formdata.get('password'); },
        enumerable: true,
        configurable: true
    });
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _edit_details_service__WEBPACK_IMPORTED_MODULE_4__["EditDetailsService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register.service.ts":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/empty */ "./node_modules/rxjs-compat/_esm5/add/observable/empty.js");
/* harmony import */ var rxjs_add_operator_retry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/retry */ "./node_modules/rxjs-compat/_esm5/add/operator/retry.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { filter, map, catchError } from 'rxjs/operators';




var RegisterService = /** @class */ (function () {
    function RegisterService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.catched_error = false;
    }
    ;
    RegisterService.prototype.register_user = function (na, a, uname, pw) {
        this.call_Server(na, a, uname, pw).subscribe(function (data) {
        });
        console.log('before if :catched_error :' + this.catched_error);
        if (this.catched_error) {
            alert('User already exists!!');
            this.router.navigate(['/register'], { relativeTo: this.route });
        }
        else {
            console.log('In if :catched_error :' + this.catched_error);
            alert('User details saved successfully');
            this.router.navigate(['/'], { relativeTo: this.route });
        }
        console.log('after if :catched_error :' + this.catched_error);
    };
    RegisterService.prototype.call_Server = function (na, a, uname, pw) {
        var _this = this;
        return this.http.post('http://localhost:8080/register', { name: na, age: a, username: uname, password: pw }, {})
            .catch(function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _this.catched_error = true;
                console.error("Backend returned code " + err.status + ", body was: " + err.error);
            }
            // ...optionally return a default fallback value so app can continue (pick one)
            // which could be a default value
            // return Observable.of<any>({my: "default value..."});
            // or simply an empty observable
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].empty(); //throw(err.statusText);
        });
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n\n<div class=\"modal\" style=\"display: block\">\n  <form class=\"modal-content animate\" [formGroup]=\"formdata\" (ngSubmit)=\"onSubmit(formdata.value)\">\n\n    <div class=\"container\">\n      \n        <label for=\"name\"><b>Name</b></label><span style=\"color: red\">*</span>\n        <input id=\"name\" type=\"text\" placeholder=\"Enter Name\" name=\"name\" formControlName=\"name\">\n        \n        <!--<div [hidden]=\"!submitted && (name.valid || name.pristine)\" class=\"alert alert-danger\">Name is required.</div>-->\n        <div *ngIf=\" name.errors?.required && ( !name.pristine || submitted)\" class=\"alert alert-danger\">Name is required.</div>\n        <!--<div [hidden]=\"!submitted && (formdata.controls.name.valid && formdata.controls.name.dirty)\" class=\"alert alert-danger\">Name is required.</div>-->\n\n        <label for=\"username\"><b>Username</b></label><span style=\"color: red\">*</span>\n        <input type=\"text\" placeholder=\"Enter Username\" name=\"Username\" formControlName=\"username\">\n        <div *ngIf=\"username.errors?.required && ( !username.pristine || submitted)\" class=\"alert alert-danger\">Username is required.</div> <!--!(username.pristine || username.valid)-->\n        <div *ngIf=\"username.errors?.minlength && ( !username.pristine || submitted)\" class=\"alert alert-danger\">UserName must be at least 4 characters long.</div>\n\n        <label for=\"age\"><b>Age</b></label><span style=\"color: red\">*</span>\n        <input type=\"text\" placeholder=\"Enter Age\" name=\"age\" formControlName=\"age\">\n        <div *ngIf=\"age.errors?.required && (!age.pristine || submitted)\" class=\"alert alert-danger\">Age is required.</div>  <!--!(age.pristine || age.valid)-->\n        <div *ngIf=\"age.errors?.agevalidator && ( !age.pristine || submitted)\" class=\"alert alert-danger\">Age must be greater than 18</div>\n\n        <label for=\"password\"><b>Password</b></label><span style=\"color: red\">*</span>\n        <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" formControlName=\"password\">\n        <div *ngIf=\" password.errors?.required && ( !password.pristine || submitted)\" class=\"alert alert-danger\">Password is required.</div>\n\n        <!-- confirm password validation still remaining-->\n        <label for=\"confirmpassword\"><b>Confirm Password</b></label><span style=\"color: red\">*</span>\n        <input type=\"password\" placeholder=\"Confirm Password\" name=\"confirmpassword\" formControlName=\"confirmpassword\">\n        <div *ngIf=\" confirmpassword.errors?.required && ( !confirmpassword.pristine || submitted)\" class=\"alert alert-danger\">Confirm Password is required.</div>\n        <!--<div *ngIf=\"confirmpassword.errors?.confirmingpassword\"  class=\"alert alert-danger\">Password does not match.</div>-->\n        \n      <button type=\"submit\" >Register</button> <!--[disabled]=\"formdata.invalid\"-->\n    </div>\n\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\n      <button type=\"button\" class=\"cancelbtn\" (click)=\"onCancelClick()\">Cancel</button>      \n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../register.service */ "./src/app/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, router, register) {
        this.route = route;
        this.router = router;
        this.register = register;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
            ])),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.agevalidator
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]))
        });
    };
    /*passwordvalidator(control : FormControl)
    {
      if(this.formdata.password != this.formdata.confirmpassword)
      {
        return { control : true};
      }
      return null;
    };
    
    function passwordvalidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== RegisterComponent.formdata.password) {
        return { 'confirmpassword': true };
    }
    return null;
  }
    */
    RegisterComponent.prototype.agevalidator = function (control) {
        if (control.value < 18) {
            return { 'age': true };
        }
    };
    /*confirmingpassword(control)
    {
      if( control.value != this.password)
      {
        return { 'confirmpassword' : true};
      }
    }*/
    RegisterComponent.prototype.onSubmit = function (data) {
        this.submitted = true;
        // if(this.formdata.valid)
        // {
        //   alert('User details saved successfully!');
        //   this.formdata.reset();
        //   this.router.navigate(['/'],{relativeTo:this.route});
        // }
        // else
        // {
        //   alert('Error!');
        // }
        if (this.formdata.valid) {
            this.register.register_user(data.name, data.age, data.username, data.password);
        }
    };
    RegisterComponent.prototype.onCancelClick = function () {
        this.formdata.reset();
        this.submitted = false;
    };
    ;
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () { return this.formdata.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () { return this.formdata.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "age", {
        get: function () { return this.formdata.get('age'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.formdata.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmpassword", {
        get: function () { return this.formdata.get('confirmpassword'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jeavio/Documents/Login_Application_DB/FormApplication2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map