(function(){
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioCtrl', function($scope, $http, $window, $mdSidenav, $mdMedia, ShareListener) {
            $http.get('/projects.data.json').then(function(response) {
                $scope.projects = response.data;
            });
            $scope.$mdMedia = $mdMedia;

            $scope.shareButtonListener = ShareListener.listener;
            $scope.copyToClipboard = ShareListener.copyToClipboard;

            $scope.nightMode = false;
            $scope.documentLoaded = false;
            $scope.showProfilePhoto = false;
            $scope.cardToggle = false;
            $scope.selectedCardIndex = undefined;
            $scope.selectedCard = undefined;

            // angular.element(document).ready(function () {
            //     $scope.showProfilePhoto = true;
            //     $scope.documentLoaded = true;
            // });
            
            $scope.$watch('$viewContentLoaded', function(){
                $scope.showProfilePhoto = true;
                $scope.documentLoaded = true;
            });

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

            $scope.onFavouriteClick = function($event) {
                // TODO: Add animation transition
                let _this = $event.currentTarget;
                let iconContent = _this.children[0].textContent;
                console.log(iconContent);
                if (iconContent == 'favorite') {
                    _this.children[0].textContent = 'favorite_border';
                } else {
                    _this.children[0].textContent = 'favorite';
                }
                $event.cancelBubble = true; // prevent the card from toggling
            }
 
            $scope.toggleSideNav = function() {
                $mdSidenav('left').toggle();
            }
            
        });

})();