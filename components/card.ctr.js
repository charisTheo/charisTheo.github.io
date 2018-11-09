(function(){
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioCtrl', function($scope, $http, $window, $mdSidenav, $mdMedia, PerspectiveHoverEffect) {
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
            $scope.selectedCardIndex = undefined;
            $scope.selectedCard = undefined;

            $scope.selectCard = function(index) {
                if ($scope.selectedCardIndex != index) {
                    $scope.selectedCard = $scope.projects[index];
                    $scope.selectedCardIndex = index;
                } else {
                    $scope.selectedCardIndex = undefined;
                    $scope.selectedCard = undefined;
                }
            }
 
            $scope.toggleSideNav = function() {
                $mdSidenav('left').toggle();
            }
            
        });

})();