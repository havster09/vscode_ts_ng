/// <reference path="../app.ts" />

'use strict';

module apmApp {
  class TwoPointsCtrl {
    text:string;
    static $inject = ['$log'];
    constructor(private $log:ng.ILogService) {

    }
    scoreTwo():void {
      this.$log.log('two points');
    }
  }

  export function twoPointsFactory(): ng.IDirective {
    return {
      restrict: 'E',
      template: '<button class="btn btn-primary" ng-click="ctrl.scoreTwo()">{{ctrl.text}}</button>',
      scope: {
        text: '@'
      },
      controller: TwoPointsCtrl,
      controllerAs: 'ctrl',
      bindToController: true,
      link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes,
        controller: TwoPointsCtrl) => {
          console.log(controller.text);
      }
    };
  }


}

angular.module('apmApp')
  .directive('twoPoints', apmApp.twoPointsFactory);
