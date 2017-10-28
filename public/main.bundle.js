webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.flexbox > div {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.rightpanel {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.avatar-name {\r\n    -webkit-box-flex: 4;\r\n        -ms-flex: 4;\r\n            flex: 4;\r\n}\r\n\r\n.avatar-pic {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.menubtn {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.logo {\r\n    margin: 7px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-success\">\n  <div class=\"container\">\n    <div class=\"flexbox\">\n      <div>\n        <a href=\"#\" class=\"navbar-brand\">DUKA</a>\n      </div>\n      <div class=\"text-center\">\n          <img src=\"./assets/img/icon.png\" alt=\"Image\" width=\"30px\" height=\"30px\" class=\"logo\">\n      </div>\n      <div class=\"rightpanel\">\n        <div class=\"avatar-name\">{{username}}</div>\n        <div class=\"avatar-pic\">PHOTO</div>\n        <button class=\"btn btn-success btn-large menubtn\">Menu</button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.username = "Mercy";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_post_service__["a" /* PostService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    font-family: 'Segoe UI Light';\r\n}\r\n\r\n.leftpanel {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.rightpanel {\r\n    -webkit-box-flex: 3;\r\n        -ms-flex: 3;\r\n            flex: 3;\r\n}\r\n\r\n.panel {\r\n    display: none;\r\n}\r\n\r\n.viewactive {\r\n    display: block;\r\n    margin: 0 20px;\r\n    padding: 1em 2em;\r\n}\r\n\r\n.formflex {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    padding: 5px 20px;\r\n}\r\n\r\n.media {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-top: 1px solid #ececec;\r\n}\r\n\r\n.media-body {\r\n    width: auto;\r\n    padding: 1px 10px;\r\n}\r\n\r\n.productpic {\r\n    margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flexbox\">\n  <div class=\"leftpanel\">\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" data-val=\"1\"> Add Product </li>\n      <li class=\"list-group-item active\" data-val=\"2\"> Products </li>\n      <li class=\"list-group-item\" data-val=\"3\"> Pending Deliveries <span class=\"badge badge-pill badge-danger\">{{pending_badge}}</span></li>\n      <li class=\"list-group-item\" data-val=\"4\"> Delivered </li>\n      <li class=\"list-group-item\" data-val=\"5\"> Users </li>\n      <li class=\"list-group-item\" data-val=\"6\"> Sales Records </li>\n      <li class=\"list-group-item\" data-val=\"7\"> Settings </li>\n    </ul>\n\n  </div>\n  <div class=\"rightpanel\">\n\n    <div class=\"panel\" id=\"1\">\n      <!--<div class=\"alert alert-danger\" role=\"alert\">\n          Alert Goes Here\n      </div> -->\n      <h3 class=\"display-3\">Add a product to store.</h3>\n      <br>\n      <form>\n        <div class=\"form-group\">\n          <input type=\"number\" name=\"barcode\" placeholder=\"Barcode\" id=\"barcode\" class=\"form-control\" [(ngModel)]=\"barcode\">\n          <small class=\"form-text text-muted text-success\">Enter barcode number.</small>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"name\" placeholder=\"Product Name\" id=\"name\" class=\"form-control\" [(ngModel)]=\"name\">\n          <small class=\"form-text text-muted text-success\">The name will appear as the title of the product.</small>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"brand\" placeholder=\"Product Brand\" id=\"brand\" class=\"form-control\" [(ngModel)]=\"brand\">\n        </div>\n        <div class=\"flexbox\">\n\n            <div class=\"form-group formflex\">\n                <label for=\"quantity\">Quantity: </label>\n                <input type=\"number\" name=\"quantity\" id=\"quantity\" class=\"form-control\" [(ngModel)]=\"quantity\">\n                <small class=\"form-text text-muted text-success\">Amount of items to add</small>\n              </div>\n              <div class=\"form-group formflex\">\n                  <label for=\"price\">Price per item: </label>\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">KES</span>\n                    <input type=\"number\" name=\"price\" id=\"price\" class=\"form-control\" [(ngModel)]=\"price\">\n                  </div>\n              </div>\n              <div class=\"form-group formflex\">\n                <label for=\"category\">Category:</label>\n                <select class=\"form-control\" name=\"category\" [(ngModel)]=\"category\">\n                  <option value=\"Grocery\">Grocery</option>\n                  <option value=\"Bakery\">Bakery</option>\n                  <option value=\"Beverages\">Beverages</option>\n                  <option value=\"Cleaning Products\">Cleaning Products</option>\n                  <option value=\"Personal Effects\">Personal Effects</option>\n                  <option value=\"Stationary\">Stationary</option>\n                  <option value=\"Hardware\">Hardware</option>\n                  <option value=\"Dry Goods\">Dry Goods</option>\n                  <option value=\"Toys\">Toys</option>\n                </select>\n              </div>\n\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"Description\"></label>\n          <textarea [(ngModel)]=\"desc\" type=\"text\" name=\"desc\" placeholder=\"(Optional) Enter a brief description of the product if provided.\" id=\"desc\" class=\"form-control\"></textarea>\n        </div>\n\n        <input type=\"submit\" value=\"Add Product\" class=\"btn btn-success\" (click)=\"submitForm($event)\">\n        \n      </form>\n    </div>\n\n    <!-- products panel -->\n    <div class=\"panel viewactive\" id=\"2\">\n\n      <div class=\"media\" *ngFor=\"let product of products\">\n        <img src=\"{{product.pic_url}}\" height=\"100px\" width=\"100px\" alt=\"Placeholder\" class=\"d-flex mr-3 align-self-start productpic\">\n        <div class=\"media-body\">\n          <h4 class=\"mt-0\"><strong>{{product.name}}</strong></h4>\n          <p>Barcode: <strong>{{product.barcode}}</strong> | Category: <strong>{{product.category}}</strong></p>\n          <p class=\"text-success\">KES: {{product.price}}  Quantity: {{product.quantity}}</p>\n          {{product.desc}}\n          <br />\n          <br />\n          <button class=\"btn btn-danger\" (click)=\"deleteProduct(product.barcode)\">Delete</button>\n          <button class=\"btn btn-success\">Add Quantity</button>\n          <button class=\"btn btn-success\">Add Offer</button>\n          <button class=\"btn btn-info\">Get Sales Report</button>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- pending deliveries -->\n    <div class=\"panel\" id=\"3\">\n\n      <div class=\"media\" *ngFor=\"let sale of pending\">\n        <div class=\"media-body\">\n          <h4 class=\"mt-0\">To:<strong>{{sale.username}}</strong> using REF CODE: <strong style=\"text-transform:uppercase;\">{{sale._id}}</strong></h4>\n          <p class=\"text-info\">{{sale.phone}}</p>\n          <p>Barcode: <strong>{{sale.barcode}}</strong> | Category: <strong>{{sale.category}}</strong> | Product Price: <strong>{{sale.price}}</strong></p>\n          <p class=\"text-success\">Amount Paid in KES: {{sale.amount_paid}}  Quantity: {{sale.quantity}}</p>\n          {{sale.delivery_instructions}}\n          <br />\n          <br />\n          <button class=\"btn btn-success\">Confirm Delivery</button>\n          <button class=\"btn btn-danger\">Cancel Delivery</button>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"panel\" id=\"4\">\n      Delivered\n    </div>\n    <div class=\"panel\" id=\"5\">\n      Users\n    </div>\n    <div class=\"panel\" id=\"6\">\n      Sales Records\n    </div>\n    <div class=\"panel\" id=\"7\">\n      Settings\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(pS) {
        var _this = this;
        this.pS = pS;
        this.pic_url = "./assets/img/icon.png";
        this.offer = false;
        this.deliverable = true;
        this.pS.getProducts().subscribe(function (data) {
            _this.products = data.data;
            console.log(data.data[2]);
        });
        this.pS.getPendingDeliveries().subscribe(function (data) {
            _this.pending = data.data;
            _this.pending_badge = data.data.length;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.deleteProduct = function (barcode) {
        var data = {
            barcode: barcode
        };
        this.pS.deleteProduct(data).subscribe(function (result) {
            window.location.assign('/');
        });
    };
    HomeComponent.prototype.submitForm = function (e) {
        e.preventDefault();
        var data = {
            barcode: this.barcode,
            name: this.name,
            brand: this.brand,
            quantity: this.quantity,
            price: this.price,
            category: this.category,
            desc: this.desc,
            pic_url: this.pic_url,
            offer: this.offer,
            deliverable: this.deliverable
        };
        this.pS.addProduct(data).subscribe(function (result) {
            console.log(result);
        });
        alert("Product successfully loaded in. Page will now refresh.");
        window.location.assign('/');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http) {
        this.http = http;
        console.log('post service initialized');
    }
    PostService.prototype.getProducts = function () {
        return this.http.get('https://duka.herokuapp.com/admin/products').map(function (res) { return res.json(); });
    };
    PostService.prototype.deleteProduct = function (data) {
        return this.http.post('https://duka.herokuapp.com/admin/removeproduct', data).map(function (res) { return res.json(); });
    };
    PostService.prototype.addProduct = function (data) {
        return this.http.post('https://duka.herokuapp.com/admin/addproduct', data).map(function (res) { return res.json(); });
    };
    PostService.prototype.getPendingDeliveries = function () {
        return this.http.get('https://duka.herokuapp.com/admin/pending').map(function (res) { return res.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map