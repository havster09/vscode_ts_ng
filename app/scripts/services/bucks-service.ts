/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path="../app.ts" />

'use strict';

module apmApp {
  export interface IGetPlayer {

  }

  export interface IBucksService {
    getPlayers(): ng.IPromise<IGetPlayer>;
  }
  export class BucksService implements IBucksService {
    static $inject = ['$http', '$q'];
    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

    }

    getPlayers() {
      const deferred:ng.IDeferred<{}> = this.$q.defer();
      this.$http.get('/api/players/bucks').success((data: ng.IHttpPromiseCallback<{}>) => {
        deferred.resolve(data);
      }).error((status: ng.IHttpPromiseCallback<{}>) => {
        deferred.reject(status);
      });
      return deferred.promise;
    }
  }
}

angular.module('apmApp')
  .service('bucksService', apmApp.BucksService);
