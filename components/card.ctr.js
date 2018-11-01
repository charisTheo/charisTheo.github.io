(function(){
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioCtrl', function($scope, $http, $window, PerspectiveHoverEffect, $mdSidenav, $mdMedia) {
            $http.get('/projects-data.json').then(function(response) {
                $scope.projects = response.data;
            });

            $scope.$mdMedia = $mdMedia;

            let handlers; PerspectiveHoverEffect.getHandlers();
            const screenWidth = $window.innerWidth;
            // add mouse listeners only on desktops 
            if (screenWidth > 969) {
                handlers = PerspectiveHoverEffect.getHandlers();
                $scope.MouseLeaveHandler = handlers.MouseLeaveHandler;
                $scope.MouseMoveHandler = handlers.MouseMoveHandler;
                $scope.MouseEnterHandler = handlers.MouseEnterHandler;
            }

            $scope.cardToggle = false;
            $scope.selectedCard = undefined;

            $scope.selectCard = function(index) {
                if ($scope.selectedCard != index) {
                    $scope.selectedCard = index;
                } else {
                    $scope.selectedCard = undefined;
                }
            }
            
            $scope.toggleSideNav = function() {
                $mdSidenav('left').toggle();
            }
        });

})();