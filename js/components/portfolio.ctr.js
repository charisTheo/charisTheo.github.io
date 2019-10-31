(function(){
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioCtrl', PortfolioCtrl);

    PortfolioCtrl.$inject = ['$scope', '$http', '$mdSidenav', '$mdMedia', 'ShareListener', '$location', '$anchorScroll', '$mdToast'];

    function PortfolioCtrl($scope, $http, $mdSidenav, $mdMedia, ShareListener, $location, $anchorScroll, $mdToast) {
        $http.get('projects-data.json').then(function(response) {
            $scope.projects = response.data;
        });
        $scope.$mdMedia = $mdMedia;
        $scope.shareButtonListener = ShareListener.listener;
        $scope.copyToClipboard = ShareListener.copyToClipboard;
        $scope.nightMode = false;
        $scope.showPWAInstallButton = false;
        $scope.deferredPromptEvent = undefined;
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
            if (!isIos && !isInStandaloneMode) {
                // * show install button
                console.log('show install button');
                $scope.showPWAInstallButton = true;
            }

            if ('serviceWorker' in navigator) { 
                navigator.serviceWorker.register('/service-worker.js', {scope: '/'})
                .then(function(registration) {
                    registration.onupdatefound = () => {
                        const newServiceWorker = registration.installing;
                        newServiceWorker.onstatechange = () => {
                            switch (newServiceWorker.state) {
                                case 'installing': 
                                    if (navigator.serviceWorker.controller) {
                                        $mdToast.show(
                                            $mdToast
                                                .simple()
                                                .textContent('A new version of the website is available 🙋. <a onclick="window.location.reload()">Reload</a> the page to see the new goodness 💠')
                                        );
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    console.log('Service Worker registration succeeded. Scope is ' + registration.scope);
                    
                }).catch(function(error) {
                    console.log('Service Worker registration failed with ' + error);
                });

                if (!navigator.connection.downlink) {
                    // is offline
                    hideOfflineUnavailableProjects();
                }
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
                // $location.url('');
                window.history.replaceState({}, document.title, '/');
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

        $scope.installPWA = function() {
            console.log('Installing PWA');

            $scope.showPWAInstallButton = false;
            $scope.deferredPromptEvent.prompt();
            $scope.deferredPromptEvent.userChoice.then(function(choiceResult) {
                // console.log(choiceResult.outcome) // 'dismissed' or 'accepted'
                $scope.deferredPromptEvent = null;
            });
        };

        window.addEventListener('beforeinstallprompt', function(e) {
            e.preventDefault(); 
            $scope.deferredPromptEvent = e; 
        });

        window.addEventListener('offline', function() {
            $mdToast.show(
                $mdToast
                    .simple()
                    .textContent('You are offline 📴')
            );

            hideOfflineUnavailableProjects();
        });

        window.addEventListener('online', function() {
            $mdToast.show(
                $mdToast
                    .simple()
                    .textContent('You are back online! 🎉')
            );
            const projects = document.querySelectorAll('.project');
            projects.forEach(project => {
                project.classList.remove('unavailable-offline');
            });
        });
        
        const hideOfflineUnavailableProjects = () => {
            const projects = document.querySelectorAll('.project')
            caches.open('runtime-projects-media').then(projectsRuntimeCache => {
                projects.forEach(project => {
                    projectsRuntimeCache.keys().then(keys => {
                        const projectMedia = keys.filter(key => key.url.indexOf(project.id) !== -1);
                        if (!projectMedia.length) {
                            // * reduce opacity of unavailable project pages
                            project.classList.add('unavailable-offline');
                        }
                    });
                });
            });
        }

        // Detects if device is an iOS (including iOS 13) 
        const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        // Detects if device is in standalone mode
        const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
        
    }

})();