/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/directives/routelogger.ts" />

'use strict';

describe('Directive: routeLogger', () => {

  // load the directive's module
  beforeEach(module('apmApp'));

  var element: JQuery,
    scope: ng.IScope;

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<route-logger></route-logger>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the routeLogger directive');
  }));
});
