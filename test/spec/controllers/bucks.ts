/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/bucks.ts" />

'use strict';

describe('Controller: BucksCtrl', () => {

  // load the controller's module
  beforeEach(module('apmApp'));

  var BucksCtrl: apmApp.BucksCtrl,
    ctrl: apmApp.IBucksModel;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    ctrl = <any>$rootScope.$new();
    BucksCtrl = $controller('BucksCtrl', {
      $scope: ctrl
    });
  }));

  it('should have players', () => {
    expect(ctrl.players.length).toBe(3);
  });
});
