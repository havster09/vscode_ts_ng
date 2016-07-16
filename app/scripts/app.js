/// <reference path='../../typings/angularjs/angular.d.ts' />
/// <reference path='../../typings/angularjs/angular-route.d.ts' />
var app;
(function (app) {
    var main = angular.module('apmApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMockE2E',
        'ngTouch'
    ]);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'views/main.html',
            controller: 'ProductListController',
            controllerAs: 'ctrl'
        })
            .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
            .otherwise({
            redirectTo: '/'
        });
    }
    ;
    main.run(mockRun);
    mockRun.$inject = ['$httpBackend'];
    function mockRun($httpBackend) {
        $httpBackend.whenGET(/\.html$/g).passThrough();
        $httpBackend.whenGET('/api/products').respond([]);
    }
    ;
})(app || (app = {}));
//# sourceMappingURL=app.js.map