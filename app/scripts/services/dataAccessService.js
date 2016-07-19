/// <reference path='../../../typings/angularjs/angular-resource.d.ts' />
'use strict';
var apmApp;
(function (apmApp) {
    var DataAccessService = (function () {
        function DataAccessService($resource) {
            this.$resource = $resource;
        }
        DataAccessService.prototype.getProductResource = function () {
            return this.$resource('/api/products/:productId');
        };
        DataAccessService.$inject = ['$resource'];
        return DataAccessService;
    }());
    apmApp.DataAccessService = DataAccessService;
})(apmApp || (apmApp = {}));
;
angular.module('apmApp')
    .service('dataAccessService', apmApp.DataAccessService);
//# sourceMappingURL=dataAccessService.js.map