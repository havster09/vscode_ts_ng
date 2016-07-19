/// <reference path="../common/position.ts" />
'use strict';
var apmApp;
(function (apmApp) {
    var Player = (function () {
        function Player(firstName, lastName, number, team, position) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.number = number;
            this.team = team;
            this.position = position;
        }
        return Player;
    }());
    apmApp.Player = Player;
})(apmApp || (apmApp = {}));
//# sourceMappingURL=player.js.map