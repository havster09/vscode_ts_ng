/// <reference path='../business-objects/product.ts' />
/// <reference path='../app.ts' />
'use strict';
var apmApp;
(function (apmApp) {
    var ProductDetailController = (function () {
        function ProductDetailController($routeParams, dataAccessSevice) {
            var _this = this;
            this.$routeParams = $routeParams;
            this.dataAccessSevice = dataAccessSevice;
            this.title = 'Product Detail';
            var productResource = dataAccessSevice.getProductResource();
            productResource.get({ productId: $routeParams.productId }, function (data) {
                _this.product = data;
            });
        }
        ProductDetailController.$inject = ['$routeParams', 'dataAccessService'];
        return ProductDetailController;
    }());
    apmApp.ProductDetailController = ProductDetailController;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .controller('ProductDetailController', apmApp.ProductDetailController);
//# sourceMappingURL=product-detail-controller.js.map