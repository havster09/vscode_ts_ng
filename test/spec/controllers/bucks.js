/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/bucks.ts" />
'use strict';
describe('Controller: BucksCtrl', function () {
    // load the controller's module
    beforeEach(module('apmApp'));
    var BucksCtrl, ctrl;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        ctrl = $rootScope.$new();
        BucksCtrl = $controller('BucksCtrl', {
            $scope: ctrl
        });
    }));
    it('should have players', function () {
        expect(ctrl.players.length).toBe(3);
    });
});
//# sourceMappingURL=bucks.js.map