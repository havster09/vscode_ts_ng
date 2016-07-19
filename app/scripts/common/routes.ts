/// <reference path='../../../typings/angularjs/angular-route.d.ts' />
/// <reference path='../app.ts' />
'use strict';

module apmApp {
    apmApp.main.config(routeConfig);
    
    routeConfig.$inject = ['$routeProvider'];
    export function routeConfig($routeProvider: ng.route.IRouteProvider): void {
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
                controllerAs: 'ctrl',
                resolve: {
                    
                }
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
}