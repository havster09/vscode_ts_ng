/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/main.ts" />
'use strict';
describe('Controller: ProductListController', function () {
    // load the controller's module
    beforeEach(module('apmApp'));
    var ProductListController, ctrl;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        ctrl = $rootScope.$new();
        ProductListController = $controller('ProductListController', {
            $scope: ctrl
        });
    }));
    // it('should attach a list of awesomeThings to the scope', () => {
    // });
});
//# sourceMappingURL=main.js.map