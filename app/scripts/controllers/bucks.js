/// <reference path="../app.ts" />
/// <reference path="../models/player.ts" />
/// <reference path="../common/position.ts" />
'use strict';
var apmApp;
(function (apmApp) {
    var BucksCtrl = (function () {
        function BucksCtrl(bucksService) {
            this.bucksService = bucksService;
            this.players = [];
            var player = new apmApp.Player('giannis', 'antetakumpo', 35, 'bucks', apmApp.Position['2']);
            this.players.push(player);
        }
        BucksCtrl.prototype.doEuro = function () {
            console.log('do some euro steps baby');
        };
        BucksCtrl.prototype.getPlayers = function () {
            this.bucksService.getPlayers()
                .then(function (data) {
                console.log(data);
            })
                .catch(function (status) {
                console.log(status);
            });
        };
        return BucksCtrl;
    }());
    apmApp.BucksCtrl = BucksCtrl;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .controller('BucksCtrl', apmApp.BucksCtrl);
//# sourceMappingURL=bucks.js.map