/// <reference path='../../typings/angularjs/angular.d.ts' />
/// <reference path='../../typings/angularjs/angular-route.d.ts' />
/// <reference path='../../typings/angularjs/angular-mocks.d.ts' />
/// <reference path='business-objects/product.ts' />
var apmApp;
(function (apmApp) {
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
            .when('/product-detail/:productId', {
            templateUrl: 'views/product-detail.html',
            controller: 'ProductDetailController',
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
        var products = [];
        var product;
        product = new apmApp.Product(1, "Leaf Rake", "GDN-0011", new Date(2009, 2, 19), 19.95, "Leaf rake with 48-inch wooden handle.", "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png");
        products.push(product);
        product = new apmApp.Product(2, "Garden Cart", "GDN-0023", new Date(2010, 2, 18), 26.95, "15 gallon capacity rolling garden cart", "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png");
        products.push(product);
        product = new apmApp.Product(3, "Saw", "TBX-002", new Date(2002, 3, 1), 16.95, "15-inch steel blade hand saw", "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
        products.push(product);
        product = new apmApp.Product(4, "Hammer", "TBX-0048", new Date(2013, 4, 21), 8.99, "Curved claw steel hammer", "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png");
        products.push(product);
        product = new apmApp.Product(5, "Video Game Controller", "GMG-0042", new Date(2012, 9, 25), 35.95, "Standard five-button video game controller", "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png");
        products.push(product);
        $httpBackend.whenGET('/api/products').respond(products);
        var editingRegex = new RegExp('/api/products' + "/[0-9][0-9]*", '');
        var getProduct = function (method, url, data) {
            var product = { "productId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];
            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId === id) {
                        product = products[i];
                        break;
                    }
                }
            }
            return [200, product, {}];
        };
        $httpBackend.whenGET(editingRegex).respond(getProduct);
    }
    ;
})(apmApp || (apmApp = {}));
//# sourceMappingURL=app.js.map