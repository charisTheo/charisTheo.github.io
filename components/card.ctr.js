(function(){
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioCtrl', function($scope, $http, $window, $mdSidenav, $mdMedia, PerspectiveHoverEffect, ShareListener) {
            $http.get('/projects-data.json').then(function(response) {
                $scope.projects = response.data;
            });

            $scope.$mdMedia = $mdMedia;

            $scope.shareButtonListener = ShareListener.listener;
            $scope.copyToClipboard = ShareListener.copyToClipboard;

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

            $scope.selectCard = function($event, $index) {
                if ($scope.selectedCardIndex != $index) {
                    // select card
                    $scope.selectedCard = $scope.projects[$index];
                    $scope.selectedCardIndex = $index;
                } else {
                    // unselect card
                    $scope.selectedCardIndex = undefined;
                    $scope.selectedCard = undefined;
                }
                $event.cancelBubble = true; // prevent from firing again
            }
 
            $scope.toggleSideNav = function() {
                $mdSidenav('left').toggle();
            }
            
        });

})();