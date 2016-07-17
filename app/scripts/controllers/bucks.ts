/// <reference path="../app.ts" />

'use strict';

module apmApp {
  export interface IBucksModel {
    players: any[];
  }

  export class BucksCtrl implements IBucksModel {
    players: any[];
    constructor () {
      this.players = [
        'giannis',
        'williams',
        'monroe'
      ];
    }
  }
}

angular.module('apmApp')
  .controller('BucksCtrl', apmApp.BucksCtrl);
