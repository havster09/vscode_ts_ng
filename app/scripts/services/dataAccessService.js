/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
'use strict';
var apmApp;
(function (apmApp) {
    var DataAccessService = (function () {
        function DataAccessService($resource) {
            this.$resource = $resource;
        }
        DataAccessService.prototype.getProductResource = function () {
            return this.$resource("/api/products/:productId");
        };
        DataAccessService.$inject = ["$resource"];
        return DataAccessService;
    }());
    apmApp.DataAccessService = DataAccessService;
    angular.module("apmApp")
        .service("dataAccessService", DataAccessService);
})(apmApp || (apmApp = {}));
//# sourceMappingURL=dataAccessService.js.map