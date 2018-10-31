particlesJS.load('particles-js', './particles/particles-config.json');

angular
    .module('Portfolio', ['ngMaterial'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('green');
    });