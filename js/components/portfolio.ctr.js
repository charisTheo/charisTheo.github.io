(function(){
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioCtrl', PortfolioCtrl);

    PortfolioCtrl.$inject = ["$scope", "$http", "$mdSidenav", "$mdMedia", "ShareListener", '$location', "$anchorScroll"];

    function PortfolioCtrl($scope, $http, $mdSidenav, $mdMedia, ShareListener, $location, $anchorScroll) {
        $http.get('projects-data.json').then(function(response) {
            $scope.projects = response.data;
        });
        $scope.$mdMedia = $mdMedia;
        $scope.shareButtonListener = ShareListener.listener;
        $scope.copyToClipboard = ShareListener.copyToClipboard;
        $scope.nightMode = false;
        $scope.documentLoaded = false;
        $scope.cardToggle = false;
        $scope.selectedCardIndex = undefined;
        $scope.selectedCard = undefined;
        $anchorScroll.yOffset = 72;

        $scope.toggleSocialLinks = function() {
            $scope.showSocialLinks = !$scope.showSocialLinks;
            // close side nav if open
            if ($mdSidenav('left').isOpen) {
                $mdSidenav('left').toggle();
            }
        };
        // $scope.togglePeoplePerHourWidget = function() {
        //     $scope.showPeoplePerHourWidget = !$scope.showPeoplePerHourWidget;
        //     // close side nav if open
        //     if ($mdSidenav('left').isOpen) {
        //         $mdSidenav('left').toggle();
        //     }
        // };

        $scope.$watch('$viewContentLoaded', function(){
            const isNightModePreferred = $mdMedia('(prefers-color-scheme: dark)');
            if (isNightModePreferred) {
                $scope.nightMode = true;
            }
            $scope.documentLoaded = true;

            if ('serviceWorker' in navigator) { 
                navigator.serviceWorker.register('/service-worker.js', {scope: '/'})
                .then(function(registration) {
                    console.log('Service Worker registration succeeded. Scope is ' + registration.scope);
                    
                }).catch(function(error) {
                    console.log('Service Worker registration failed with ' + error);
                });
            }

            // * Attach event listeners for sending data to google analytics
            setTimeout(() => {
                document.querySelectorAll('.md-button').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const data = event.currentTarget.getAttribute('data-analytics');
                        const dataArr = data.split(' ');
                        const eventCategory = dataArr.splice(0, 1)[0];
                        const eventLabel = dataArr.join(' ');

                        window.ga('send', {
                            hitType: 'event',
                            eventAction: 'click',
                            eventCategory,
                            eventLabel
                        });
                    });
                });
            }, 1000);
        });

        $scope.selectCard = function($event, $index) {
            if ($scope.selectedCardIndex != $index) {
                // select card
                $scope.selectedCard = $scope.projects[$index];
                $scope.selectedCardIndex = $index;
                // scroll to top of card
                $location.hash("project" + $index);
                $anchorScroll("project" + $index);
            } else {
                // unselect card
                $scope.selectedCardIndex = undefined;
                $scope.selectedCard = undefined;
                $location.url('');
            }
            $event.cancelBubble = true; // prevent from firing again
        };

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
        };

        $scope.toggleSideNav = function() {
            $mdSidenav('left').toggle();
        };
    }

})();