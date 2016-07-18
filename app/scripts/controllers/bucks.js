/// <reference path="../app.ts" />
/// <reference path="../models/player.ts" />
/// <reference path="../common/position.ts" />
'use strict';
var apmApp;
(function (apmApp) {
    var BucksCtrl = (function () {
        function BucksCtrl() {
            this.players = [];
            var player = new apmApp.Player('giannis', 'antetakumpo', 35, 'bucks', apmApp.Position.sf);
            this.players.push(player);
        }
        BucksCtrl.prototype.doEuro = function () {
            console.log('do some euro steps');
        };
        return BucksCtrl;
    })();
    apmApp.BucksCtrl = BucksCtrl;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .controller('BucksCtrl', apmApp.BucksCtrl);
//# sourceMappingURL=bucks.js.map