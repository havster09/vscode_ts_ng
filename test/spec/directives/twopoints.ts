/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/directives/twopoints.ts" />

'use strict';

describe('Directive: twoPoints', () => {

  // load the directive's module
  beforeEach(module('apmApp'));

  var element: JQuery,
    scope: ng.IScope;

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<two-points></two-points>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the twoPoints directive');
  }));
});
