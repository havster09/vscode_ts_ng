/// <reference path="../app.ts" />

'use strict';

module apmApp {
  interface ITwoPoints {
    text: string;
    players: any[];
  }
  class TwoPointsCtrl implements ITwoPoints {
    text: string;
    players: any[];
    static $inject = ['$log'];
    constructor(private $log: ng.ILogService) {

    }
    scoreTwo(): void {
      this.$log.log('two points');
    }
  }

  export function twoPointsFactory(): ng.IDirective {
    return {
      restrict: 'E',
      template: `<button class="btn btn-primary" ng-click="ctrl.scoreTwo()">{{ctrl.text}}</button>
      <button class="btn btn-primary" ng-click="ctrl.doEuro()">doEuro</button>
      `,
      scope: {
        text: '@',
        players: '=players',
        doEuro: '&doEuro'
      },
      controller: TwoPointsCtrl,
      controllerAs: 'ctrl',
      bindToController: true,
      link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes,
        controller: TwoPointsCtrl) => {
        console.log(controller.text);
        console.log(controller.players);        
      }
    };
  }


}

angular.module('apmApp')
  .directive('twoPoints', apmApp.twoPointsFactory);
