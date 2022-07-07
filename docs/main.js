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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <div class=\"filters-wrapper\">\r\n          <url-form (onURLChange)='onURLChange($event)'></url-form>\r\n          <cart></cart>\r\n          <filters #filtersComponent [categories]='originalData.categories' [customFilters]='customFilters' [priceFilters]='priceFilters' (onFilterChange)='onFilterChange($event)'></filters>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-8\">\r\n            <div class=\"sort-filters-wrapper\">\r\n              <sort-filters [filters]='sortFilters' (onSortChange)='sortProducts($event)'></sort-filters>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <search-bar  #searchComponent (onSearchChange)='onSearchChange($event)'></search-bar>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <showcase [products]='products'></showcase>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  padding-top: 100px; }\n\n.filters-wrapper {\n  position: relative;\n  z-index: 90000; }\n\nsort-filters {\n  position: relative;\n  z-index: 20; }\n\ncart {\n  position: absolute;\n  top: -23px;\n  right: -57px;\n  z-index: 99999999; }\n\nsearch-bar {\n  position: relative;\n  top: -8px; }\n\nshowcase {\n  position: relative;\n  top: -39px;\n  z-index: 10; }\n\n.sort-filters-wrapper {\n  position: relative; }\n\nurl-form {\n  position: absolute;\n  top: -55px; }\n\n/** Media queries **/\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  url-form {\n    position: fixed;\n    bottom: 20px;\n    left: 10px; }\n  filters {\n    position: fixed;\n    top: 44px;\n    right: -100%;\n    width: 100%;\n    height: 100%; }\n  .sort-filters-wrapper {\n    position: fixed;\n    top: 44px;\n    left: 0;\n    width: 100%;\n    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.3);\n    padding-top: 10px;\n    background: #5D4EF0;\n    z-index: 200; }\n  .main-container {\n    padding-top: 34px; }\n  search-bar {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    left: 0;\n    z-index: 9000; } }\n"

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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/filters/filters.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
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
    function AppComponent(dataService, cartService) {
        this.dataService = dataService;
        this.cartService = cartService;
        this.sortFilters = [
            { name: 'Name (A to Z)', value: 'name' },
            { name: 'Price (low to high)', value: 'priceAsc' },
            { name: 'Price (high to low)', value: 'priceDes' }
        ];
        this.customFilters = [
            { name: 'All', value: 'all', checked: true },
            { name: 'Available', value: 'available', checked: false },
            { name: 'Not Available', value: 'unavailable', checked: false },
            { name: 'Bestseller', value: 'bestseller', checked: false }
        ];
        this.priceFilters = [
            { name: 'All', value: 'all', checked: true },
            { name: 'Price > 30.000', value: 'more_30000', checked: false },
            { name: 'Price < 10.000', value: 'less_10000', checked: false }
        ];
        this.originalData = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().then(function (data) {
            _this.originalData = data;
            _this.mainFilter = {
                search: '',
                categories: _this.originalData.categories.slice(0),
                customFilter: _this.customFilters[0],
                priceFilter: _this.priceFilters[0]
            };
            //Make a deep copy of the original data to keep it immutable
            _this.products = _this.originalData.products.slice(0);
            _this.sortProducts('name');
        });
    };
    AppComponent.prototype.onURLChange = function (url) {
        var _this = this;
        this.dataService.getRemoteData(url).subscribe(function (data) {
            _this.originalData = data;
            _this.mainFilter = {
                search: '',
                categories: _this.originalData.categories.slice(0),
                customFilter: _this.customFilters[0],
                priceFilter: _this.priceFilters[0]
            };
            //Make a deep copy of the original data to keep it immutable
            _this.products = _this.originalData.products.slice(0);
            _this.sortProducts('name');
            _this.filtersComponent.reset(_this.customFilters, _this.priceFilters);
            _this.searchComponent.reset();
            _this.cartService.flushCart();
        });
    };
    AppComponent.prototype.onSearchChange = function (search) {
        this.mainFilter.search = search.search;
        this.updateProducts({
            type: 'search',
            change: search.change
        });
    };
    AppComponent.prototype.onFilterChange = function (data) {
        if (data.type == 'category') {
            if (data.isChecked) {
                this.mainFilter.categories.push(data.filter);
            }
            else {
                this.mainFilter.categories = this.mainFilter.categories.filter(function (category) { return category.categori_id != data.filter.categori_id; });
            }
        }
        else if (data.type == 'custom') {
            this.mainFilter.customFilter = data.filter;
        }
        else if (data.type == 'price') {
            this.mainFilter.priceFilter = data.filter;
        }
        this.updateProducts({
            type: data.type,
            change: data.change
        });
    };
    AppComponent.prototype.updateProducts = function (filter) {
        var _this = this;
        var productsSource = this.originalData.products;
        var prevProducts = this.products;
        var filterAllData = true;
        if ((filter.type == 'search' && filter.change == 1) || (filter.type == 'category' && filter.change == -1)) {
            productsSource = this.products;
            filterAllData = false;
        }
        //console.log('filtering ' + productsSource.length + ' products')
        this.products = productsSource.filter(function (product) {
            //Filter by search
            if (filterAllData || filter.type == 'search') {
                if (!product.name.match(new RegExp(_this.mainFilter.search, 'i'))) {
                    return false;
                }
            }
            //Filter by categories
            if (filterAllData || filter.type == 'category') {
                var passCategoryFilter_1 = false;
                product.categories.forEach(function (product_category) {
                    if (!passCategoryFilter_1) {
                        passCategoryFilter_1 = _this.mainFilter.categories.reduce(function (found, category) {
                            return found || product_category == category.categori_id;
                        }, false);
                    }
                });
                if (!passCategoryFilter_1) {
                    return false;
                }
            }
            //Filter by custom filters
            if (filterAllData || filter.type == 'custom') {
                var passCustomFilter = false;
                var customFilter = _this.mainFilter.customFilter.value;
                if (customFilter == 'all') {
                    passCustomFilter = true;
                }
                else if (customFilter == 'available' && product.available) {
                    passCustomFilter = true;
                }
                else if (customFilter == 'unavailable' && !product.available) {
                    passCustomFilter = true;
                }
                else if (customFilter == 'bestseller' && product.best_seller) {
                    passCustomFilter = true;
                }
                if (!passCustomFilter) {
                    return false;
                }
            }
            //Filter by price filters
            if (filterAllData || filter.type == 'price') {
                var passPriceFilter = false;
                var customFilter = _this.mainFilter.priceFilter.value;
                var productPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
                if (customFilter == 'all') {
                    passPriceFilter = true;
                }
                else if (customFilter == 'more_30000' && productPrice > 30000) {
                    passPriceFilter = true;
                }
                else if (customFilter == 'less_10000' && productPrice < 10000) {
                    passPriceFilter = true;
                }
                if (!passPriceFilter) {
                    return false;
                }
            }
            return true;
        });
        //If the number of products increased after the filter has been applied then sort again
        //If the number of products remained equal, there's a high chance that the items have been reordered.
        if (prevProducts.length <= this.products.length && this.products.length > 1) {
            this.sortProducts(this.currentSorting);
        }
        //These two types of filters usually add new data to the products showcase so a sort is necessary
        if (filter.type == 'custom' || filter.type == 'price') {
            this.sortProducts(this.currentSorting);
        }
    };
    AppComponent.prototype.sortProducts = function (criteria) {
        //console.log('sorting ' + this.products.length + ' products')
        this.products.sort(function (a, b) {
            var priceComparison = parseFloat(a.price.replace(/\./g, '').replace(',', '.')) - parseFloat(b.price.replace(/\./g, '').replace(',', '.'));
            if (criteria == 'priceDes') {
                return -priceComparison;
            }
            else if (criteria == 'priceAsc') {
                return priceComparison;
            }
            else if (criteria == 'name') {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            }
            else {
                //Keep the same order in case of any unexpected sort criteria
                return -1;
            }
        });
        this.currentSorting = criteria;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filtersComponent'),
        __metadata("design:type", _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__["FiltersComponent"])
    ], AppComponent.prototype, "filtersComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchComponent'),
        __metadata("design:type", _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"])
    ], AppComponent.prototype, "searchComponent", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/filters/filters.component.ts");
/* harmony import */ var _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./showcase/showcase.component */ "./src/app/showcase/showcase.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-thumbnail/product-thumbnail.component */ "./src/app/product-thumbnail/product-thumbnail.component.ts");
/* harmony import */ var _cart_preview_cart_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart-preview/cart-preview.component */ "./src/app/cart-preview/cart-preview.component.ts");
/* harmony import */ var _data_shell_data_shell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-shell/data-shell.component */ "./src/app/data-shell/data-shell.component.ts");
/* harmony import */ var _sort_filters_sort_filters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sort-filters/sort-filters.component */ "./src/app/sort-filters/sort-filters.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _url_form_url_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./url-form/url-form.component */ "./src/app/url-form/url-form.component.ts");
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
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_6__["FiltersComponent"],
                _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_7__["ShowcaseComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__["ProductThumbnailComponent"],
                _cart_preview_cart_preview_component__WEBPACK_IMPORTED_MODULE_11__["CartPreviewComponent"],
                _data_shell_data_shell_component__WEBPACK_IMPORTED_MODULE_12__["DataShellComponent"],
                _sort_filters_sort_filters_component__WEBPACK_IMPORTED_MODULE_13__["SortFiltersComponent"],
                _url_form_url_form_component__WEBPACK_IMPORTED_MODULE_16__["UrlFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"]
            ],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"],
                _cart_service__WEBPACK_IMPORTED_MODULE_15__["CartService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart-preview/cart-preview.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cart-preview/cart-preview.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cart-preview works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/cart-preview/cart-preview.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/cart-preview/cart-preview.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart-preview/cart-preview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cart-preview/cart-preview.component.ts ***!
  \********************************************************/
/*! exports provided: CartPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPreviewComponent", function() { return CartPreviewComponent; });
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

var CartPreviewComponent = /** @class */ (function () {
    function CartPreviewComponent() {
    }
    CartPreviewComponent.prototype.ngOnInit = function () {
    };
    CartPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-preview',
            template: __webpack_require__(/*! ./cart-preview.component.html */ "./src/app/cart-preview/cart-preview.component.html"),
            styles: [__webpack_require__(/*! ./cart-preview.component.sass */ "./src/app/cart-preview/cart-preview.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], CartPreviewComponent);
    return CartPreviewComponent;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = /** @class */ (function () {
    function CartService() {
        this.products = [];
        this.cartTotal = 0;
        this.productAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.productAdded$ = this.productAddedSource.asObservable();
    }
    CartService.prototype.addProductToCart = function (product) {
        var exists = false;
        var parsedPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
        this.cartTotal += parsedPrice;
        //Search this product on the cart and increment the quantity
        this.products = this.products.map(function (_product) {
            if (_product.product.id == product.id) {
                _product.quantity++;
                exists = true;
            }
            return _product;
        });
        //Add a new product to the cart if it's a new product
        if (!exists) {
            product.parsedPrice = parsedPrice;
            this.products.push({
                product: product,
                quantity: 1
            });
        }
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    CartService.prototype.deleteProductFromCart = function (product) {
        var _this = this;
        this.products = this.products.filter(function (_product) {
            if (_product.product.id == product.id) {
                _this.cartTotal -= _product.product.parsedPrice * _product.quantity;
                return false;
            }
            return true;
        });
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    CartService.prototype.flushCart = function () {
        this.products = [];
        this.cartTotal = 0;
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\" [class.expanded]='expanded'>\r\n  <button [class.not-shown]='!products.length || expanded' type=\"button\" class=\"circle\" (click)=\"onCartClick()\">\r\n    <img src=\"../../assets/cart_white.svg\" alt=\"cart\" />\r\n    <div class=\"indicator\"><span>{{numProducts}}</span></div>\r\n  </button>\r\n  <div class=\"fill\" [style.height]=\"expanded ? expandedHeight : inherit\" [class.not-shown]='!products.length' [class.animate-plop]='animatePlop' [class.shown]='animatePopout && !expanded'>\r\n    <div class=\"expanded-info\" [class.shown]='expanded'>\r\n      <h3>This is what you're gonna buy...</h3>\r\n      <div class=\"product\" *ngFor=\"let item of products\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6-sm description\">\r\n            <p>{{item.quantity}} x {{item.product.name}}</p>\r\n          </div>\r\n          <div class=\"col-6-sm price\">\r\n            <p>{{item.quantity*item.product.parsedPrice | currency:'USD':'symbol':'1.0-0' }}</p>\r\n          </div>\r\n        </div>\r\n        <button class=\"delete-btn\" (click) = 'deleteProduct(item.product)'>x</button>\r\n      </div>\r\n      <button type=\"button\" class=\"pay-btn\">Pay {{cartTotal | currency:'USD':'symbol':'1.0-0'}}</button>\r\n    </div>\r\n    <button type=\"button\" class=\"close-btn\" *ngIf='expanded' (click)=\"onCartClick()\">Close</button>\r\n  </div>\r\n</div>\r\n<div class=\"overlay\" [class.shown]='expanded'>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview {\n  position: relative; }\n  .preview .fill {\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .close-btn {\n  position: absolute;\n  top: 6px;\n  right: 5px;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 0.7em;\n  font-weight: 600;\n  text-decoration: underline;\n  opacity: 0.8; }\n  .close-btn:hover {\n    opacity: 1; }\n  .pay-btn {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 44px;\n  height: 44px;\n  padding: 0 25px;\n  border: none;\n  background-color: #EF364C;\n  box-shadow: 0 2px 19px rgba(0, 0, 0, 0.32);\n  color: white;\n  font-weight: 600;\n  margin-top: 20px; }\n  .expanded-info {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  color: white;\n  width: 80%;\n  margin: 0 auto; }\n  .expanded-info .product, .expanded-info h3, .expanded-info .pay-btn {\n    opacity: 0;\n    transform: translateY(10px);\n    -webkit-transform: translateY(10px);\n    transition: all 0.5s ease; }\n  .expanded-info .price {\n    text-align: right; }\n  .expanded-info.shown {\n    opacity: 1;\n    z-index: 3; }\n  .expanded-info.shown .product, .expanded-info.shown h3, .expanded-info.shown .pay-btn {\n      transform: translateY(0);\n      -webkit-transform: translateY(0); }\n  .expanded-info.shown h3 {\n      transition-delay: 0.2s;\n      opacity: 0.43; }\n  .expanded-info.shown .product {\n      transition-delay: 0.4s;\n      opacity: 1; }\n  .expanded-info.shown .pay-btn {\n      transition-delay: 0.6s;\n      opacity: 1; }\n  .expanded-info h3 {\n    font-weight: 400;\n    font-size: 16px;\n    margin-top: 30px; }\n  .expanded-info .product {\n    position: relative;\n    width: 95%; }\n  .expanded-info .product p {\n      margin: 0; }\n  .expanded-info .product:not(:last-child) {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .expanded-info .product .delete-btn {\n      position: absolute;\n      right: -28px;\n      top: 14px;\n      background: none;\n      border: none;\n      opacity: 0.6;\n      color: white;\n      font-weight: 600;\n      font-size: 0.8em; }\n  .expanded-info .product .delete-btn:hover {\n        opacity: 0.8; }\n  .preview.expanded .fill {\n  width: 460px;\n  border-radius: 3px;\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.49); }\n  .preview.expanded .fill.animate-plop {\n    -webkit-transform: scale(1.02);\n    transform: scale(1.02); }\n  .preview:not(.expanded) .fill:hover {\n  box-shadow: 0 2px 13px rgba(49, 46, 82, 0.65); }\n  .preview .fill {\n  height: 40px;\n  width: 40px;\n  box-shadow: 0 2px 13px rgba(93, 78, 240, 0.55);\n  background: #5D4EF0;\n  border-radius: 50px;\n  z-index: 4;\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .preview .fill.not-shown {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  .preview .fill.shown {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3); }\n  .preview .fill.animate-plop {\n    -webkit-transform: scale(1.35);\n    transform: scale(1.35); }\n  .preview .circle {\n  height: 40px;\n  width: 40px;\n  border: none;\n  padding: 0;\n  border-radius: 50px;\n  position: relative;\n  z-index: 5;\n  background: none;\n  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .preview .circle img {\n    position: relative;\n    top: 3px;\n    left: -1px; }\n  .preview .circle.not-shown {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  .preview .indicator {\n  background-color: #EF364C;\n  height: 140px;\n  width: 140px;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n  color: white;\n  position: absolute;\n  top: -3px;\n  font-size: 0.6em;\n  right: 0;\n  font-weight: 700;\n  text-align: center; }\n  .preview .indicator span {\n    position: relative;\n    top: 1px; }\n  .overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  background-color: rgba(0, 0, 0, 0.7); }\n  /** Media queries **/\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .overlay.shown {\n    height: 100%;\n    opacity: 1;\n    z-index: 9; }\n  .pay-btn {\n    margin-top: 35px; }\n  .close-btn {\n    z-index: 90; }\n  .description p, .price p {\n    font-size: 1em; }\n  .expanded-info {\n    width: 90%; }\n    .expanded-info h3 {\n      font-size: 0.9em; }\n    .expanded-info .product .delete-btn {\n      right: -21px;\n      top: 10px; }\n  .preview {\n    position: fixed;\n    bottom: 3%;\n    right: 5%;\n    width: 13%;\n    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n    .preview .fill {\n      box-shadow: 0 2px 13px rgba(93, 78, 240, 0.75); }\n    .preview.expanded {\n      width: 90%;\n      margin: 0 auto;\n      bottom: 75%;\n      z-index: 800; }\n      .preview.expanded .fill {\n        width: 100%; } }\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OFFSET_HEIGHT = 170;
var PRODUCT_HEIGHT = 48;
var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, changeDetectorRef) {
        this.cartService = cartService;
        this.products = [];
        this.numProducts = 0;
        this.animatePlop = false;
        this.animatePopout = false;
        this.expanded = false;
        this.cartTotal = 0;
        this.changeDetectorRef = changeDetectorRef;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expandedHeight = '0';
        this.cartService.productAdded$.subscribe(function (data) {
            _this.products = data.products;
            _this.cartTotal = data.cartTotal;
            _this.numProducts = data.products.reduce(function (acc, product) {
                acc += product.quantity;
                return acc;
            }, 0);
            //Make a plop animation
            if (_this.numProducts > 1) {
                _this.animatePlop = true;
                setTimeout(function () {
                    _this.animatePlop = false;
                }, 160);
            }
            else if (_this.numProducts == 1) {
                _this.animatePopout = true;
                setTimeout(function () {
                    _this.animatePopout = false;
                }, 300);
            }
            _this.expandedHeight = (_this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 'px';
            if (!_this.products.length) {
                _this.expanded = false;
            }
            _this.changeDetectorRef.detectChanges();
        });
    };
    CartComponent.prototype.deleteProduct = function (product) {
        this.cartService.deleteProductFromCart(product);
    };
    CartComponent.prototype.onCartClick = function () {
        this.expanded = !this.expanded;
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/data-shell/data-shell.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-shell/data-shell.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  data-shell works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/data-shell/data-shell.component.sass":
/*!******************************************************!*\
  !*** ./src/app/data-shell/data-shell.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/data-shell/data-shell.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-shell/data-shell.component.ts ***!
  \****************************************************/
/*! exports provided: DataShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataShellComponent", function() { return DataShellComponent; });
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

var DataShellComponent = /** @class */ (function () {
    function DataShellComponent() {
    }
    DataShellComponent.prototype.ngOnInit = function () {
    };
    DataShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-shell',
            template: __webpack_require__(/*! ./data-shell.component.html */ "./src/app/data-shell/data-shell.component.html"),
            styles: [__webpack_require__(/*! ./data-shell.component.sass */ "./src/app/data-shell/data-shell.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], DataShellComponent);
    return DataShellComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock-data */ "./src/app/mock-data.ts");
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
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return Promise.resolve(_mock_data__WEBPACK_IMPORTED_MODULE_4__["DATA"]);
    };
    DataService.prototype.getRemoteData = function (url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/filters/filters.component.html":
/*!************************************************!*\
  !*** ./src/app/filters/filters.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"toggle-btn\" (click)=\"sideShown = true\">Filters</button>\r\n<div class=\"filters\" [class.side-shown]=\"sideShown\">\r\n  <button type=\"button\" class=\"close-side-btn\" (click)=\"sideShown = false\">x</button>\r\n  <h5>Filter by categories</h5>\r\n  <form *ngIf = \"showFilters\">\r\n    <div class=\"category-filter filter-wrapper\" *ngFor = 'let filter of categories'>\r\n      <label class=\"fake-checkbox\">\r\n        <input type=\"checkbox\" checked (change)='onInputChange($event, filter, \"category\")'>\r\n        <span class=\"square\"><span class=\"fill\"></span></span>\r\n        <span class=\"label\">{{filter.name}}</span>\r\n        <span></span>\r\n      </label>\r\n    </div>\r\n  </form>\r\n  <h5>Filter by price</h5>\r\n  <form *ngIf = \"showFilters\">\r\n    <div class=\"custom-filter filter-wrapper\" *ngFor = 'let filter of priceFilters'>\r\n        <label class=\"fake-checkbox\">\r\n          <input type=\"radio\" name=\"price\" [checked]='filter.checked' (click)='onInputChange($event, filter, \"price\")'>\r\n          <span class=\"circle\"><span class=\"fill\"></span></span>\r\n          <span class=\"label\">{{filter.name}}</span>\r\n          <span></span>\r\n        </label>\r\n    </div>\r\n  </form>\r\n  <h5>Custom filters</h5>\r\n  <form *ngIf = \"showFilters\">\r\n    <div class=\"custom-filter filter-wrapper\" *ngFor = 'let filter of customFilters'>\r\n        <label class=\"fake-checkbox\">\r\n          <input type=\"radio\" name=\"custom\" [checked]='filter.checked' (click)='onInputChange($event, filter, \"custom\")'>\r\n          <span class=\"circle\"><span class=\"fill\"></span></span>\r\n          <span class=\"label\">{{filter.name}}</span>\r\n          <span></span>\r\n        </label>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/filters/filters.component.scss":
/*!************************************************!*\
  !*** ./src/app/filters/filters.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filters {\n  border: 1px solid #333333;\n  padding: 20px;\n  width: 100%;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  background-color: white;\n  border: none;\n  border-radius: 4px;\n  padding-top: 1px;\n  position: relative; }\n\n.filter {\n  width: 100%;\n  background: #999999;\n  border-radius: 3px;\n  margin-bottom: 10px;\n  height: 35px; }\n\n.fake-checkbox {\n  position: relative; }\n\n.filter-wrapper {\n  margin-bottom: 8px; }\n\n.filter-wrapper label {\n    cursor: pointer; }\n\n.filter-wrapper input[type=checkbox], .filter-wrapper input[type=radio] {\n    display: none; }\n\n.filter-wrapper input[type=checkbox]:checked + .square, .filter-wrapper input[type=checkbox]:checked + .circle, .filter-wrapper input[type=radio]:checked + .square, .filter-wrapper input[type=radio]:checked + .circle {\n      opacity: 1; }\n\n.filter-wrapper input[type=checkbox]:checked + .square .fill, .filter-wrapper input[type=checkbox]:checked + .circle .fill, .filter-wrapper input[type=radio]:checked + .square .fill, .filter-wrapper input[type=radio]:checked + .circle .fill {\n      opacity: 1; }\n\n.filter-wrapper input[type=checkbox]:checked ~ .label, .filter-wrapper input[type=radio]:checked ~ .label {\n      opacity: 1; }\n\n.filter-wrapper .square, .filter-wrapper .circle, .filter-wrapper .fill {\n    display: inline-block; }\n\n.filter-wrapper .square, .filter-wrapper .circle {\n    height: 16px;\n    width: 16px;\n    border: 1px solid #5D4EF0;\n    position: relative;\n    opacity: 0.4; }\n\n.filter-wrapper .square .fill, .filter-wrapper .circle .fill {\n      height: 10px;\n      width: 10px;\n      background-color: #5D4EF0;\n      transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n      position: absolute;\n      opacity: 0; }\n\n.filter-wrapper .square {\n    border-radius: 3px; }\n\n.filter-wrapper .square .fill {\n      border-radius: 2px; }\n\n.filter-wrapper .circle {\n    border-radius: 50%; }\n\n.filter-wrapper .circle .fill {\n      border-radius: 50%; }\n\n.filter-wrapper .fill {\n    top: 3px;\n    left: 3px; }\n\n.filter-wrapper .label {\n    text-transform: capitalize;\n    position: relative;\n    top: -4px;\n    margin-left: 7px;\n    opacity: 0.6;\n    transition: all 0.4s ease; }\n\nh5 {\n  text-transform: uppercase;\n  color: #bababa;\n  font-size: 0.8em;\n  font-weight: 600; }\n\nh5:after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 1px;\n    margin-top: 3px;\n    background-color: #e8e8e8; }\n\n.toggle-btn {\n  display: none; }\n\n.close-side-btn {\n  display: none;\n  background: none;\n  border: none; }\n\n/** Media queries **/\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .close-side-btn {\n    display: block;\n    position: absolute;\n    color: #aaaaaa;\n    font-size: 1.2em;\n    font-weight: 300;\n    right: 18px;\n    top: 6px;\n    opacity: 0.7; }\n  .toggle-btn {\n    display: inline-block;\n    position: absolute;\n    left: -69px;\n    top: 11px;\n    background: white;\n    border-radius: 3px;\n    color: #5D4EF0;\n    padding: 4px 11px;\n    border: none;\n    font-size: 0.8em;\n    font-weight: 600;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4); }\n  .filters {\n    width: initial;\n    position: relative;\n    box-shadow: none;\n    border-radius: 0;\n    height: 100%;\n    transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n    .filters.side-shown {\n      -webkit-transform: translateX(-100%);\n      transform: translateX(-100%); } }\n"

/***/ }),

/***/ "./src/app/filters/filters.component.ts":
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
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

var FiltersComponent = /** @class */ (function () {
    function FiltersComponent() {
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showFilters = true;
        this.sideShown = false;
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    FiltersComponent.prototype.reset = function (customFilters, priceFilters) {
        var _this = this;
        this.customFilters = customFilters;
        this.priceFilters = priceFilters;
        this.showFilters = false;
        setTimeout(function () {
            _this.showFilters = true;
        });
    };
    FiltersComponent.prototype.onInputChange = function ($event, filter, type) {
        var change = $event.target.checked ? 1 : -1;
        this.onFilterChange.emit({
            type: type,
            filter: filter,
            isChecked: $event.target.checked,
            change: change
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FiltersComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FiltersComponent.prototype, "customFilters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FiltersComponent.prototype, "priceFilters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "onFilterChange", void 0);
    FiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/filters/filters.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/mock-data.ts":
/*!******************************!*\
  !*** ./src/app/mock-data.ts ***!
  \******************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
var DATA = {
    'categories': [
        {
            'categori_id': 1,
            'name': 'Domótica'
        },
        {
            'categori_id': 2,
            'name': 'Software'
        },
        {
            'categori_id': 3,
            'name': 'Gamer'
        },
        {
            'categori_id': 4,
            'name': 'Electrónica'
        }
    ],
    'products': [
        {
            'id': 1,
            'name': 'WiFi Smart Bulb',
            'price': '10.000',
            'available': true,
            'best_seller': true,
            'categories': [
                1,
            ],
            'img': 'http://loremflickr.com/200/100/smartbulb/',
            'description': 'Este artefacto puede utilizarse con la app Tuya y ser controlado a través de tu celular.'
        },
        {
            'id': 2,
            'name': 'Smart Wireless IP Camera',
            'price': '30.000',
            'available': true,
            'best_seller': true,
            'categories': [
                1
            ],
            'img': 'http://loremflickr.com/200/100/smartcamera/',
            'description': 'Esta cámara tiene un lente de 2mpx, y puede ser controlada a la distancia a través de la app Tuya.'
        },
        {
            'id': 3,
            'name': 'Gaming headset',
            'price': '15.000',
            'available': true,
            'best_seller': false,
            'categories': [
                3
            ],
            'img': 'http://loremflickr.com/200/100/headset/',
            'description': 'Estos audífonos de alta calidad pueden ser utilizados en diferentes dispositivos como PC, consola, celular.'
        },
        {
            'id': 4,
            'name': 'Official Raspberry Pi Power Supply',
            'price': '35.000',
            'available': false,
            'best_seller': false,
            'categories': [
                4
            ],
            'img': 'http://loremflickr.com/200/100/raspberrypi/',
            'description': 'Este cargador oficial permite asegurar el óptimo funcionamiento de una Raspberry Pi 3.'
        },
        {
            'id': 5,
            'name': 'Smart TV Hyunday',
            'price': '170.000',
            'available': true,
            'best_seller': false,
            'categories': [
                1,
                4
            ],
            'img': 'http://loremflickr.com/200/100/smarttv/',
            'description': 'Este televisor contiene varias aplicaciones como Netflix, Spotify y Youtube.'
        },
        {
            'id': 6,
            'name': 'Notebook Hyunday',
            'price': '180.000',
            'available': true,
            'best_seller': false,
            'categories': [
                1,
                4
            ],
            'img': 'http://loremflickr.com/200/100/laptop/',
            'description': 'Este notebook sirve para uso moderado, ideal para trabajo de oficina.'
        },
        {
            'id': 7,
            'name': 'SanDisk addapter',
            'price': '20.000',
            'available': false,
            'best_seller': false,
            'categories': [
                2,
                4
            ],
            'img': 'http://loremflickr.com/200/100/microsd/',
            'description': 'Este adaptador permite conectar una tarjeta microSD a tu computador.'
        },
        {
            'id': 8,
            'name': 'Software Manager',
            'price': '100.000',
            'available': true,
            'best_seller': false,
            'categories': [
                2
            ],
            'img': 'http://loremflickr.com/200/100/qt/',
            'description': 'Este software permite monitorear a otro, entregando mensajes cuando ocurre algún error en el software monitoreado.'
        },
        {
            'id': 9,
            'name': 'Tótem de atención',
            'price': '1.500.000',
            'available': true,
            'best_seller': false,
            'categories': [
                2,
                4
            ],
            'img': 'http://loremflickr.com/200/100/clienttotem/',
            'description': 'Este tótem suele utilizarse en el comercio, para atender a los clientes cuando entrar a nuestro negocio.'
        },
        {
            'id': 10,
            'name': 'Consola Retro SNES',
            'price': '100.000',
            'available': true,
            'best_seller': true,
            'categories': [
                3
            ],
            'img': 'http://loremflickr.com/200/100/snes/',
            'description': 'Esta consola contiene horas de diversión, donde puedes jugar todos tus títulos favoritos de la consola SNES.'
        }
    ]
};


/***/ }),

/***/ "./src/app/product-thumbnail/product-thumbnail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/product-thumbnail/product-thumbnail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [class.unavailable]='!product.available'>\r\n  <div class=\"info\" >\r\n    <div class=\"img-wrapper\">\r\n      <img class=\"img\" [src]='product.img'>\r\n      <div class=\"img-placeholder\"></div>\r\n    </div>\r\n    <h5 class=\"title\">{{product.name}}</h5>\r\n    <p class=\"price\">$<span>{{product.price}}</span></p>\r\n    <div class=\"details\">\r\n      <div class=\"available\" *ngIf = 'product.available'>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"col-8-sm view-details-wrapper\">\r\n            <button type=\"button\" class=\"view\" (click)='onProductClick()'>View details</button>\r\n          </div>\r\n          <div class=\"col-4-sm add-cart-wrapper\">\r\n            <button type=\"button\" class=\"cart\" (click)=\"onAddToCart()\"><img src=\"../../assets/cart_primary.svg\" alt=\"\" /></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"not-available\" *ngIf = '!product.available'>\r\n        <hr>\r\n        <p>Not available</p>\r\n      </div>\r\n    </div>\r\n    <!--span class=\"category-name\" *ngFor='let category of product.categories'>{{category}}</span-->\r\n    <div class=\"detail-view\" [class.active]='detailViewActive'>\r\n      <div class=\"bg\" [class.shown]='detailViewActive'></div>\r\n      <div class=\"info-wrapper\">\r\n        <p class=\"d-holder d-title\">{{product.name}}</p>\r\n        <p class=\"d-holder d-price\">$ {{product.price}}</p>\r\n        <p class=\"d-holder d-description\">{{product.description}}</p>\r\n      </div>\r\n      <button type=\"button\" class=\"hide-detail-btn\" (click)='onProductClick()'>Click to hide</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"bestseller-badge\" [class.in-detailed]='detailViewActive' *ngIf = 'product.best_seller'>\r\n    <span class=\"star left\">&nbsp;</span>\r\n    <span class=\"txt\">Bestseller</span>\r\n    <span class=\"star right\">&nbsp;</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-thumbnail/product-thumbnail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/product-thumbnail/product-thumbnail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 210px; }\n\n.wrapper {\n  border-radius: 5px;\n  box-shadow: 0 5px 5px;\n  position: relative;\n  text-align: center;\n  display: block;\n  background-color: white;\n  box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07); }\n\n.add-cart-wrapper, .view-details-wrapper {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.view-details-wrapper {\n  position: relative; }\n\n.view-details-wrapper:after {\n    content: \"\";\n    width: 1px;\n    display: block;\n    position: absolute;\n    height: 28px;\n    background-color: #5D4EF0;\n    right: -3px;\n    top: -4px;\n    opacity: 0.2; }\n\n.hide-detail-btn {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  width: 100%;\n  z-index: 20;\n  background: none;\n  border: none;\n  color: white;\n  opacity: 0.6;\n  font-size: 0.7em;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.1);\n  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  -webkit-transform: translateY(15px);\n  transform: translateY(15px);\n  transition-delay: 1.2s; }\n\n.hide-detail-btn:hover {\n    background: rgba(255, 255, 255, 0.2); }\n\n.img-wrapper {\n  height: 85px;\n  position: relative;\n  overflow: hidden; }\n\n.details {\n  padding-bottom: 7px; }\n\n.details hr {\n    width: 90%;\n    height: 0;\n    border-top: 1px solid #5D4EF0; }\n\n.details button {\n    background: none;\n    border: none;\n    cursor: pointer; }\n\n.details .view:hover, .details .cart:hover {\n    opacity: 0.8; }\n\n.details .view {\n    text-transform: uppercase;\n    color: #5D4EF0;\n    font-size: 0.85em;\n    font-weight: 500;\n    position: relative;\n    top: -1px;\n    left: -2px; }\n\n.details .cart {\n    position: relative;\n    top: 2px; }\n\n.details .not-available hr {\n    border-top: 1px solid #999999; }\n\n.details .not-available p {\n    margin: 0;\n    margin-top: -7px;\n    position: relative;\n    top: 2px;\n    text-transform: uppercase;\n    font-size: 0.85em;\n    font-weight: 500;\n    padding-top: 5px;\n    padding-bottom: 3px; }\n\n.img-placeholder, .img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 5px 5px 0 0; }\n\n.img-placeholder {\n  z-index: 3;\n  height: 100%;\n  background: #dddddd; }\n\n.detail-view {\n  position: absolute;\n  z-index: 30;\n  border-radius: 5px;\n  overflow: hidden;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none; }\n\n.detail-view.active {\n    pointer-events: all; }\n\n.detail-view.active .hide-detail-btn {\n      -webkit-transform: translateY(0);\n      transform: translateY(0); }\n\n.detail-view.active .info-wrapper {\n      opacity: 1; }\n\n.detail-view.active .bg {\n      -webkit-transform: scale(232);\n      transform: scale(232); }\n\n.detail-view.active .d-holder {\n      opacity: 1;\n      -webkit-transform: translate(0);\n      transform: translate(0);\n      transition: all 0.5s ease; }\n\n.detail-view.active .d-title {\n      transition-delay: 0.4s; }\n\n.detail-view.active .d-price {\n      transition-delay: 0.5s; }\n\n.detail-view.active .d-description {\n      transition-delay: 0.6s; }\n\n.detail-view .d-holder {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n    transition: all 0.1s ease; }\n\n.detail-view .d-title {\n    font-size: 1.3em;\n    font-weight: 600;\n    margin-bottom: 0;\n    margin-top: 5px; }\n\n.detail-view .d-price {\n    margin-top: -7px;\n    font-size: 0.9em; }\n\n.detail-view .d-description {\n    font-size: 0.9em;\n    line-height: 1.4em; }\n\n.detail-view .info-wrapper {\n    position: relative;\n    z-index: 30;\n    color: white;\n    text-align: left;\n    padding-left: 14px;\n    padding-right: 14px;\n    height: 90%;\n    overflow: hidden; }\n\n.detail-view .bg {\n    position: absolute;\n    bottom: -9px;\n    left: 43px;\n    height: 3px;\n    width: 3px;\n    border-radius: 50%;\n    z-index: 20;\n    background: #5D4EF0;\n    transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n\n.info {\n  position: relative; }\n\n.unavailable {\n  opacity: 0.3; }\n\n.img {\n  z-index: 5;\n  height: auto;\n  background-color: #eeeeee; }\n\n.title {\n  font-size: 1em;\n  margin-top: 18px;\n  font-weight: 600;\n  margin-bottom: 3px; }\n\n.price {\n  margin-bottom: 10px;\n  color: #999999;\n  font-size: 18px;\n  font-weight: 300;\n  margin-top: 0; }\n\n.bestseller-badge {\n  position: absolute;\n  top: -10px;\n  border-radius: 10px;\n  background-color: #EF364C;\n  color: white;\n  font-size: 0.7em;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 70%;\n  z-index: 40;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  overflow: hidden;\n  height: 20px;\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n\n.bestseller-badge .txt, .bestseller-badge .star {\n    transition: all 0.35s ease; }\n\n.bestseller-badge .txt {\n    position: relative;\n    top: 4px; }\n\n.bestseller-badge .star {\n    position: absolute;\n    top: 2px; }\n\n.bestseller-badge .star.left {\n      left: 8px; }\n\n.bestseller-badge .star.right {\n      right: 14px; }\n\n.bestseller-badge.in-detailed {\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0);\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    top: 9px;\n    right: -80%;\n    background-color: #5D4EF0; }\n\n.bestseller-badge.in-detailed .right, .bestseller-badge.in-detailed .txt {\n      opacity: 0; }\n\n.bestseller-badge.in-detailed .left {\n      left: 5px;\n      top: 2px; }\n\n.sad-face {\n  border-radius: 50%;\n  background-color: #aaaaaa;\n  height: 90px;\n  width: 90px; }\n\n.category-name {\n  display: inline-block;\n  margin-right: 10px; }\n\n.star:before {\n  content: \"\\2605\";\n  position: absolute;\n  color: white; }\n\n/** Media queries **/\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .detail-view.active .bg {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  .hide-detail-btn {\n    height: 32px;\n    -webkit-transform: translateY(32px);\n    transform: translateY(32px); }\n  .wrapper {\n    margin-bottom: -22px; }\n  .img-wrapper {\n    height: 123px; }\n  .detail-view .bg {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    left: 0;\n    bottom: 0;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); }\n  .detail-view .info-wrapper {\n    padding: 10px 25px;\n    height: 78%; } }\n"

/***/ }),

/***/ "./src/app/product-thumbnail/product-thumbnail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product-thumbnail/product-thumbnail.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductThumbnailComponent", function() { return ProductThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/product.model */ "./src/app/shared/product.model.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductThumbnailComponent = /** @class */ (function () {
    function ProductThumbnailComponent(cartService) {
        this.cartService = cartService;
    }
    ProductThumbnailComponent.prototype.ngOnInit = function () {
        this.detailViewActive = false;
    };
    ProductThumbnailComponent.prototype.onProductClick = function () {
        this.detailViewActive = !this.detailViewActive;
    };
    ProductThumbnailComponent.prototype.onAddToCart = function () {
        this.cartService.addProductToCart(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_product_model__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductThumbnailComponent.prototype, "product", void 0);
    ProductThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-thumbnail',
            template: __webpack_require__(/*! ./product-thumbnail.component.html */ "./src/app/product-thumbnail/product-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./product-thumbnail.component.scss */ "./src/app/product-thumbnail/product-thumbnail.component.scss")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ProductThumbnailComponent);
    return ProductThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  holi\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
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

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <input *ngIf = \"showSearch\" type=\"text\" name=\"name\" value=\"\" placeholder=\"Search...\" class=\"search-bar\" #search (keyup)='onSearchKeyup(search.value)' (keydown)='plop()'>\r\n  <svg [class.animate-plop]=\"animatePlop\" width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.227028918\">\r\n          <g id=\"Desktop-Copy\" transform=\"translate(-1056.000000, -215.000000)\" fill=\"#000000\">\r\n              <path d=\"M1071.89258,230.111648 L1067.68711,225.905991 C1068.66447,224.751345 1069.25486,223.2587 1069.25486,221.627431 C1069.25486,217.967248 1066.28761,215 1062.62743,215 C1058.96725,215 1056,217.967248 1056,221.627431 C1056,225.287614 1058.96725,228.254863 1062.62743,228.254863 C1064.2587,228.254863 1065.75134,227.664469 1066.90599,226.686923 L1071.11165,230.89258 C1071.25487,231.035807 1071.48923,231.035807 1071.63227,230.89258 L1071.89258,230.63227 C1072.03581,230.489043 1072.03581,230.254874 1071.89258,230.111648 L1071.89258,230.111648 Z M1057.10457,221.627431 C1057.10457,218.582127 1059.58213,216.104572 1062.62743,216.104572 C1065.67274,216.104572 1068.15029,218.582127 1068.15029,221.627431 C1068.15029,224.672736 1065.67274,227.150291 1062.62743,227.150291 C1059.58213,227.150291 1057.10457,224.672736 1057.10457,221.627431 L1057.10457,221.627431 Z\" id=\"Shape\"></path>\r\n          </g>\r\n      </g>\r\n  </svg>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes plop-glass {\n  50% {\n    -webkit-transform: scale(1.35);\n    transform: scale(1.35); }\n  100% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); } }\n\n@keyframes plop-glass {\n  50% {\n    -webkit-transform: scale(1.35);\n    transform: scale(1.35); }\n  100% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); } }\n\n.wrapper {\n  position: relative;\n  display: block;\n  margin-left: auto; }\n\n.search-bar {\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n  height: 35px;\n  border-radius: 20px;\n  border: none;\n  padding-left: 20px;\n  box-shadow: 0 3px 14px rgba(25, 25, 25, 0.05);\n  font-weight: 500;\n  position: relative;\n  left: -33px;\n  color: #999999;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n\n.search-bar:focus {\n    box-shadow: 0 4px 11px rgba(93, 78, 240, 0.09);\n    font-weight: 500;\n    color: #5D4EF0;\n    width: 120%;\n    -webkit-transform: translateX(-15%);\n    transform: translateX(-15%); }\n\n.search-bar:focus + svg path {\n      fill: #5D4EF0; }\n\n.search-bar:focus + svg {\n      -webkit-transform: scale(1.2);\n      transform: scale(1.2); }\n\nsvg.animate-plop {\n  -webkit-animation: plop-glass 0.1s ease forwards;\n  animation: plop-glass 0.1s ease forwards; }\n\n::-webkit-input-placeholder {\n  color: #cccccc; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #cccccc; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #cccccc; }\n\n:-ms-input-placeholder {\n  color: #cccccc; }\n\nsvg {\n  position: absolute;\n  right: 24px;\n  top: 3px;\n  height: 31px;\n  width: 15px;\n  transition: all 0.3s ease; }\n\nsvg path {\n    fill: #333333; }\n\n/** Media queries **/\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .search-bar {\n    left: 0;\n    border-radius: 0;\n    height: 43px; }\n    .search-bar:focus {\n      width: 100%;\n      -webkit-transform: translateX(0);\n      transform: translateX(0); }\n  svg {\n    top: 8px; } }\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
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

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        this.animatePlop = false;
        this.showSearch = true;
        this.onSearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.previousSearch = '';
    };
    /*
      This event will emit an object indicating the new search term, and:
        -1 if the search term length has descreased
        1 if the search term length has increased
        0 if the search term remained equal
    */
    SearchBarComponent.prototype.onSearchKeyup = function (search) {
        var change = 0;
        if (search.length > this.previousSearch.length) {
            change = 1;
        }
        else if (search.length < this.previousSearch.length) {
            change = -1;
        }
        this.previousSearch = search;
        if (change != 0) {
            this.onSearchChange.emit({ search: search, change: change });
        }
    };
    //Perform a plop animation on the search icon. This animation is executed on keydown just for visual reasons
    SearchBarComponent.prototype.plop = function () {
        var _this = this;
        this.animatePlop = true;
        setTimeout(function () {
            _this.animatePlop = false;
        }, 110);
    };
    SearchBarComponent.prototype.reset = function () {
        var _this = this;
        this.showSearch = false;
        setTimeout(function () {
            _this.showSearch = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "onSearchChange", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/product.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/product.model.ts ***!
  \*****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/showcase/showcase.component.html":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <product-thumbnail [product]=\"product\"\r\n                        *ngFor=\"let product of products\"\r\n                        class=\"col-4 product-thumbnail\">\r\n    </product-thumbnail>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/showcase.component.scss":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row .product-thumbnail {\n  margin-bottom: 2rem; }\n"

/***/ }),

/***/ "./src/app/showcase/showcase.component.ts":
/*!************************************************!*\
  !*** ./src/app/showcase/showcase.component.ts ***!
  \************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseComponent = /** @class */ (function () {
    function ShowcaseComponent(cartService) {
        this.cartService = cartService;
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShowcaseComponent.prototype, "products", void 0);
    ShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'showcase',
            template: __webpack_require__(/*! ./showcase.component.html */ "./src/app/showcase/showcase.component.html"),
            styles: [__webpack_require__(/*! ./showcase.component.scss */ "./src/app/showcase/showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());



/***/ }),

/***/ "./src/app/sort-filters/sort-filters.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sort-filters/sort-filters.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <label for=\"\">Ordered by</label>\r\n  <select (change)='onSelectChange($event)'>\r\n    <option *ngFor='let filter of filters' [value]=\"filter.value\">{{filter.name}}</option>\r\n  </select>\r\n  <div class=\"triangle\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sort-filters/sort-filters.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sort-filters/sort-filters.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: block;\n  height: 35px;\n  background: none;\n  font-size: 14px;\n  padding-left: 11px;\n  position: relative;\n  top: 4px; }\n  .wrapper label {\n    opacity: 0.8; }\n  .wrapper select {\n    color: #5D4EF0;\n    background: none;\n    border: none;\n    font-size: 13px;\n    margin-left: 2px;\n    font-weight: 500;\n    cursor: pointer;\n    width: 130px; }\n  .wrapper .triangle {\n    height: 0;\n    width: 0;\n    border-top: 4px solid #5D4EF0;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    display: inline-block;\n    position: relative;\n    top: -2px;\n    right: 14px;\n    pointer-events: none;\n    opacity: 0.3; }\n  /** Media queries **/\n  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .wrapper label {\n    color: white; }\n  .wrapper select {\n    color: white; }\n  .wrapper .triangle {\n    border-top: 4px solid white; } }\n"

/***/ }),

/***/ "./src/app/sort-filters/sort-filters.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sort-filters/sort-filters.component.ts ***!
  \********************************************************/
/*! exports provided: SortFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortFiltersComponent", function() { return SortFiltersComponent; });
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

var SortFiltersComponent = /** @class */ (function () {
    function SortFiltersComponent() {
        this.onSortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SortFiltersComponent.prototype.ngOnInit = function () {
    };
    SortFiltersComponent.prototype.onSelectChange = function ($event) {
        this.onSortChange.emit($event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SortFiltersComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SortFiltersComponent.prototype, "onSortChange", void 0);
    SortFiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sort-filters',
            template: __webpack_require__(/*! ./sort-filters.component.html */ "./src/app/sort-filters/sort-filters.component.html"),
            styles: [__webpack_require__(/*! ./sort-filters.component.scss */ "./src/app/sort-filters/sort-filters.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SortFiltersComponent);
    return SortFiltersComponent;
}());



/***/ }),

/***/ "./src/app/url-form/url-form.component.html":
/*!**************************************************!*\
  !*** ./src/app/url-form/url-form.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"fill\" [class.expanded]=\"expanded\">\r\n    <button type=\"button\" class=\"url-btn\" (click)=\"expanded = !expanded\">\r\n      <svg width=\"32px\" height=\"16px\" viewBox=\"0 0 32 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n          <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n              <path d=\"M31.409,3.798 L24.406,10.8 C23.633,11.573 22.379,11.573 21.604,10.8 L20.202,9.398 L27.209,2.395 L21.605,-3.209 L14.603,3.798 L13.2,2.395 C12.426,1.622 12.426,0.367 13.2,-0.407 L20.203,-7.41 C20.98,-8.187 22.231,-8.187 23.005,-7.41 L31.41,0.996 C32.188,1.77 32.188,3.021 31.409,3.798 L31.409,3.798 Z M17.4,12.204 L10.397,19.211 L4.79,13.603 L11.8,6.6 L10.397,5.197 C9.62,4.423 8.369,4.423 7.595,5.197 L0.588,12.204 C-0.189,12.977 -0.189,14.228 0.588,15.002 L8.998,23.411 C9.772,24.185 11.022,24.185 11.8,23.411 L18.802,16.404 C19.575,15.631 19.575,14.381 18.802,13.602 L17.4,12.204 L17.4,12.204 Z M10.397,13.603 C11.171,14.381 12.425,14.381 13.199,13.603 L21.604,5.198 C22.378,4.424 22.378,3.17 21.604,2.396 C20.831,1.623 19.576,1.623 18.802,2.396 L10.396,10.802 C9.62,11.574 9.62,12.829 10.397,13.603 L10.397,13.603 Z\" id=\"Shape\" fill=\"#FFFFFF\" transform=\"translate(15.999313, 7.999375) rotate(-315.000000) translate(-15.999313, -7.999375) \"></path>\r\n          </g>\r\n      </svg>\r\n    </button>\r\n    <input type=\"text\" #url placeholder=\"JSON File URL...\" class=\"url-input\">\r\n    <button type=\"button\" (click)='onSend(url.value)' class=\"send-btn\">\r\n      <svg width=\"33px\" height=\"33px\" viewBox=\"0 0 33 33\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n          <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n              <path d=\"M0.0377951225,31.4431498 L2.82385037,19.3824633 C2.93382623,18.8692426 3.37372969,18.4659978 3.92360902,18.3926805 L19.5035232,16.7797012 C19.9434267,16.7430425 19.9434267,16.0831873 19.5035232,16.0098701 L3.92360902,14.5068666 C3.37372969,14.470208 2.93382623,14.0669632 2.82385037,13.5537425 L0.0377951225,1.52971456 C-0.218815229,0.503273155 0.88094342,-0.339875143 1.83406758,0.136686938 L32.2973822,15.3866735 C33.2138477,15.8632356 33.2138477,17.182946 32.2973822,17.6595081 L1.83406758,32.8361774 C0.88094342,33.3127395 -0.218815229,32.4695912 0.0377951225,31.4431498 L0.0377951225,31.4431498 Z\" id=\"Shape\" fill=\"#FFFFFF\"></path>\r\n          </g>\r\n      </svg>\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/url-form/url-form.component.scss":
/*!**************************************************!*\
  !*** ./src/app/url-form/url-form.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  margin-bottom: 20px;\n  position: relative; }\n\n.url-btn {\n  background: #EF364C;\n  border: none;\n  padding: 0;\n  height: 36px;\n  width: 36px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 100; }\n\n.url-btn svg {\n    height: 9px; }\n\n.fill {\n  width: 0px;\n  height: 36px;\n  width: 36px;\n  border-radius: 3px;\n  background-color: #EF364C;\n  box-shadow: 0 2px 13px rgba(0, 0, 0, 0.3);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n\n.fill.expanded {\n    width: 400px; }\n\n.fill.expanded .url-input {\n      width: 80%;\n      color: white;\n      margin-left: 34px; }\n\n.url-input {\n  width: 0px;\n  position: absolute;\n  background: none;\n  border: none;\n  border-radius: 0;\n  margin-left: 0;\n  margin-left: 44px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.27);\n  background: rgba(255, 255, 255, 0.1);\n  position: relative;\n  top: 7px;\n  padding-left: 4px;\n  transition: all 0.5s ease; }\n\n.url-input:focus {\n    border-bottom: 1px solid white; }\n\n.send-btn {\n  width: 0;\n  position: absolute;\n  height: 36px;\n  width: 36px;\n  z-index: 50;\n  top: 0;\n  border: none;\n  background: none; }\n\n.send-btn svg {\n    height: 14px;\n    position: relative;\n    top: 3px; }\n\n::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4); }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.4); }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.4); }\n\n:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4); }\n\n/** Media queries **/\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .wrapper {\n    margin-bottom: 20px;\n    position: absolute;\n    top: 152px; }\n  .fill.expanded {\n    width: 250px; }\n    .fill.expanded .url-input {\n      width: 168px;\n      top: 2px; }\n    .fill.expanded .send-btn {\n      padding: 0; } }\n"

/***/ }),

/***/ "./src/app/url-form/url-form.component.ts":
/*!************************************************!*\
  !*** ./src/app/url-form/url-form.component.ts ***!
  \************************************************/
/*! exports provided: UrlFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlFormComponent", function() { return UrlFormComponent; });
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

var UrlFormComponent = /** @class */ (function () {
    function UrlFormComponent() {
        this.onURLChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.expanded = false;
    }
    UrlFormComponent.prototype.ngOnInit = function () {
    };
    UrlFormComponent.prototype.onSend = function (url) {
        this.expanded = false;
        this.onURLChange.emit(url);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UrlFormComponent.prototype, "onURLChange", void 0);
    UrlFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'url-form',
            template: __webpack_require__(/*! ./url-form.component.html */ "./src/app/url-form/url-form.component.html"),
            styles: [__webpack_require__(/*! ./url-form.component.scss */ "./src/app/url-form/url-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UrlFormComponent);
    return UrlFormComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! C:\Users\fcoma\Documents\Proyectos\Codigos nodejs\frontend shopConAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map