/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path="../app.ts" />
'use strict';
var apmApp;
(function (apmApp) {
    var BucksService = (function () {
        function BucksService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        BucksService.prototype.getPlayers = function () {
            // this.$http<IGetPlayerConfig>();
        };
        BucksService.$inject = ['$http', '$q'];
        return BucksService;
    }());
    apmApp.BucksService = BucksService;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .service('bucksService', apmApp.BucksService);
//# sourceMappingURL=bucks-service.js.map