(function(){
    'use strict';

    angular
    .module('Portfolio')
    .controller('PortfolioCtrl', function($scope) {
        console.log("object");
        $scope.documentLoaded = false;
        angular.element(document).ready(function () {
            $scope.documentLoaded = true;
        });
    });
})();