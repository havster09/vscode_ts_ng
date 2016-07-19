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
            var deferred = this.$q.defer();
            this.$http.get('/api/players/bucks').success(function (data) {
                deferred.resolve(data);
            }).error(function (status) {
                deferred.reject(status);
            });
            return deferred.promise;
        };
        BucksService.$inject = ['$http', '$q'];
        return BucksService;
    }());
    apmApp.BucksService = BucksService;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .service('bucksService', apmApp.BucksService);
//# sourceMappingURL=bucks-service.js.map