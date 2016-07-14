/// <reference path="../app.ts" />
'use strict';
var apmApp;
(function (apmApp) {
    var ProductListController = (function () {
        function ProductListController() {
            this.title = 'Product List';
            this.products = [];
        }
        ProductListController.prototype.toggleImage = function () {
            this.showImage = !this.showImage;
        };
        return ProductListController;
    })();
    apmApp.ProductListController = ProductListController;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .controller('MainCtrl', apmApp.MainCtrl);
//# sourceMappingURL=main.js.map