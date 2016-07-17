/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/directives/twopoints.ts" />
'use strict';
describe('Directive: twoPoints', function () {
    // load the directive's module
    beforeEach(module('apmApp'));
    var element, scope;
    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));
    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<two-points></two-points>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('this is the twoPoints directive');
    }));
});
//# sourceMappingURL=twopoints.js.map