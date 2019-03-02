(function(){
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioCtrl', PortfolioCtrl);

    PortfolioCtrl.$inject = ["$scope", "$http", "$mdSidenav", "$mdMedia", "ShareListener", "$cookies"];

    function PortfolioCtrl($scope, $http, $mdSidenav, $mdMedia, ShareListener, $cookies) {
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

        $scope.toggleSocialLinks = function() {
            $scope.showSocialLinks = !$scope.showSocialLinks;
            // close side nav if open
            if ($mdSidenav('left').isOpen) {
                $mdSidenav('left').toggle();
            }
        };
        $scope.togglePeoplePerHourWidget = function() {
            $scope.showPeoplePerHourWidget = !$scope.showPeoplePerHourWidget;
            // close side nav if open
            if ($mdSidenav('left').isOpen) {
                $mdSidenav('left').toggle();
            }
        }
        
        // angular.element(document).ready(function () {
        //     $scope.showProfilePhoto = true;
        //     $scope.documentLoaded = true;
        // });
        $scope.$watch('$viewContentLoaded', function(){
            if (!$cookies.get("IS_FOLLOWING") && !$cookies.get("HIDE_FOLLOWING_PROMPT")) {
                $scope.showProfilePhoto = true;
            }
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

        $scope.onFollowMeClick = function($event) {
            // store cookie
            $cookies.put("IS_FOLLOWING", "true");
            // hide picture
            $scope.showProfilePhoto = false;                
            // event redirects to href link
        }
        
        $scope.onCloseProfileClick = function() {
            let currentDate = new Date();
            // set cookie for 1 week
            currentDate.setDate(currentDate.getDate() + 7);
            $cookies.put("HIDE_FOLLOWING_PROMPT", "true", {expires: currentDate});
            // hide following prompt
            $scope.showProfilePhoto = false;
        }

        $scope.toggleSideNav = function() {
            $mdSidenav('left').toggle();
        }
        
    }

})();