/// <reference path="../app.ts" />
'use strict';
var apmApp;
(function (apmApp) {
    var TwoPointsCtrl = (function () {
        function TwoPointsCtrl($log) {
            this.$log = $log;
        }
        TwoPointsCtrl.prototype.scoreTwo = function () {
            this.$log.log('bang two points');
        };
        TwoPointsCtrl.$inject = ['$log'];
        return TwoPointsCtrl;
    }());
    function twoPointsFactory() {
        return {
            restrict: 'E',
            template: "<button class=\"btn btn-primary\" ng-click=\"ctrl.scoreTwo()\">{{ctrl.text}}</button>\n      <button class=\"btn btn-primary\" ng-click=\"ctrl.doEuro()\">doEuro</button>\n      ",
            scope: {
                text: '@',
                players: '=players',
                doEuro: '&doEuro'
            },
            controller: TwoPointsCtrl,
            controllerAs: 'ctrl',
            bindToController: true,
            link: function (scope, element, attrs, controller) {
                console.log(controller.text);
                console.log(controller.players);
            }
        };
    }
    apmApp.twoPointsFactory = twoPointsFactory;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .directive('twoPoints', apmApp.twoPointsFactory);
//# sourceMappingURL=twopoints.js.map