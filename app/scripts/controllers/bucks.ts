/// <reference path="../app.ts" />
/// <reference path="../models/player.ts" />
/// <reference path="../common/position.ts" />


'use strict';

module apmApp {
  export interface IBucksModel {
    players: apmApp.Player[];
  }

  export class BucksCtrl implements IBucksModel {
    players: apmApp.Player[];
    constructor () {
      this.players = [];
      var player:apmApp.Player = new apmApp.Player('giannis','antetakumpo',35,'bucks',apmApp.Position['2']);
      this.players.push(player);
    }

    doEuro():void {
      console.log('do some euro steps');
    }
  }
}

angular.module('apmApp')
  .controller('BucksCtrl', apmApp.BucksCtrl);
