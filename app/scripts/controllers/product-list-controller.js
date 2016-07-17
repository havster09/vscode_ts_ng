/// <reference path='../app.ts' />
/// <reference path='../business-objects/product.ts' />
/// <reference path='../services/dataAccessService.ts' />
'use strict';
var apmApp;
(function (apmApp) {
    var ProductListController = (function () {
        function ProductListController(dataAccessService) {
            var _this = this;
            this.dataAccessService = dataAccessService;
            this.title = 'Product List';
            this.products = [];
            var productResource = dataAccessService.getProductResource();
            productResource.query(function (data) {
                _this.products = data;
            });
        }
        ProductListController.prototype.toggleImage = function () {
            console.log('make changes');
            this.showImage = !this.showImage;
        };
        ProductListController.$inject = ['dataAccessService'];
        return ProductListController;
    }());
    apmApp.ProductListController = ProductListController;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .controller('ProductListController', apmApp.ProductListController);
//# sourceMappingURL=product-list-controller.js.map