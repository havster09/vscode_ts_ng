/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/main.ts" />

'use strict';

describe('Controller: ProductListController', () => {

  // load the controller's module
  beforeEach(module('apmApp'));

  var ProductListController: apmApp.ProductListController,
    ctrl: apmApp.IProductListModel;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    ctrl = <any>$rootScope.$new();
    ProductListController = $controller('ProductListController', {
      $scope: ctrl
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    
  });
});
