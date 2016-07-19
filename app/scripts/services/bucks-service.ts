/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path="../app.ts" />

'use strict';

module apmApp {
  export interface IGetPlayer {

  }

  export interface IGetPlayerConfig extends ng.IRequestConfig {
    method:any;
  }

  export interface IBucksService {
    getPlayers(): ng.IHttpPromise<IGetPlayer>;
  }
  export class BucksService {
    static $inject = ['$http', '$q'];
    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

    }

    getPlayers() {
      // this.$http<IGetPlayerConfig>();
    }
  }
}

angular.module('apmApp')
  .service('bucksService', apmApp.BucksService);
