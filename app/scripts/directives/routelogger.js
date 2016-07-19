/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../typings/angularjs/angular-route.d.ts' />
'use strict';
var apmApp;
(function (apmApp) {
    var RouteLoggerCtrl = (function () {
        function RouteLoggerCtrl($scope, $log, $location, $rootScope) {
            this.$scope = $scope;
            this.$log = $log;
            this.$location = $location;
            this.$rootScope = $rootScope;
            $scope.logTheStuff = this.logTheStuff;
            console.log($location);
        }
        RouteLoggerCtrl.prototype.logTheStuff = function () {
            console.log('work');
        };
        return RouteLoggerCtrl;
    }());
    var Routelogger = (function () {
        function Routelogger() {
            this.restrict = 'E';
            this.controller = RouteLoggerCtrl;
            this.link = function (scope, element, attrs) {
            };
        }
        Routelogger.$inject = ['$scope, $log, $location'];
        return Routelogger;
    }());
    apmApp.Routelogger = Routelogger;
    function routeLoggerFactory() {
        return new apmApp.Routelogger();
    }
    apmApp.routeLoggerFactory = routeLoggerFactory;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .directive('routeLogger', apmApp.routeLoggerFactory);
//# sourceMappingURL=routelogger.js.map