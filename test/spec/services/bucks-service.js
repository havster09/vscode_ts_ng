/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/bucks-service.ts" />
'use strict';
describe('Service: bucksService', function () {
    // load the service's module
    beforeEach(module('apmApp'));
    // instantiate service
    var bucksService;
    beforeEach(inject(function (_bucksService_) {
        bucksService = _bucksService_;
    }));
    it('should do something', function () {
        expect(!!bucksService).toBe(true);
    });
});
//# sourceMappingURL=bucks-service.js.map