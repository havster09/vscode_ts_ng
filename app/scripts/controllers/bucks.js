/// <reference path="../app.ts" />
'use strict';
var apmApp;
(function (apmApp) {
    var BucksCtrl = (function () {
        function BucksCtrl() {
            this.players = [
                'giannis',
                'williams',
                'monroe'
            ];
        }
        return BucksCtrl;
    }());
    apmApp.BucksCtrl = BucksCtrl;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .controller('BucksCtrl', apmApp.BucksCtrl);
//# sourceMappingURL=bucks.js.map