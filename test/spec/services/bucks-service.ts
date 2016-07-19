/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/bucks-service.ts" />

'use strict';

describe('Service: bucksService', () => {

  // load the service's module
  beforeEach(module('apmApp'));

  // instantiate service
  var bucksService;
  beforeEach(inject(_bucksService_ => {
    bucksService = _bucksService_;
  }));

  it('should do something', () => {
    expect(!!bucksService).toBe(true);
  });

});
