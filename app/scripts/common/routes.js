/// <reference path='../../../typings/angularjs/angular-route.d.ts' />
/// <reference path='../app.ts' />
'use strict';
var apmApp;
(function (apmApp) {
    apmApp.main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'views/main.html',
            controller: 'ProductListController',
            controllerAs: 'ctrl'
        })
            .when('/product-detail/:productId', {
            templateUrl: 'views/product-detail.html',
            controller: 'ProductDetailController',
            controllerAs: 'ctrl'
        })
            .when('/bucks', {
            templateUrl: 'views/bucks.html',
            controller: 'BucksCtrl',
            controllerAs: 'ctrl'
        })
            .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
            .otherwise({
            redirectTo: '/'
        });
    }
    apmApp.routeConfig = routeConfig;
    ;
})(apmApp || (apmApp = {}));
//# sourceMappingURL=routes.js.map