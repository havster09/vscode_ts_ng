/// <reference path="../app.ts" />
'use strict';
var apmApp;
(function (apmApp) {
    var AboutCtrl = (function () {
        function AboutCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return AboutCtrl;
    }());
    apmApp.AboutCtrl = AboutCtrl;
})(apmApp || (apmApp = {}));
angular.module('apmApp')
    .controller('AboutCtrl', apmApp.AboutCtrl);
//# sourceMappingURL=about.js.map