/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../typings/angularjs/angular-route.d.ts' />
'use strict';

module apmApp {
  interface IRouteLoggerScope extends ng.IScope {
    logTheStuff: () => void;
  }
  class RouteLoggerCtrl {
    constructor(private $scope: IRouteLoggerScope, private $log: ng.ILogService, private $location: ng.ILocationService, private $rootScope: ng.IRootScopeService) {
      $scope.logTheStuff = this.logTheStuff;
      console.log($location);
    }

    logTheStuff() {
      console.log('work');
    }
  }

  export class Routelogger implements ng.IDirective {
    static $inject = ['$scope, $log, $location'];
    restrict = 'E';
    controller = RouteLoggerCtrl;
    link = (scope: IRouteLoggerScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
      
    }
  }

  export function routeLoggerFactory() {
    return new apmApp.Routelogger();
  }

}

angular.module('apmApp')
  .directive('routeLogger', apmApp.routeLoggerFactory);
