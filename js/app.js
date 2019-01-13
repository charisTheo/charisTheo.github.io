particlesJS.load('particles-js', './particles/particles-config.json');

let app = angular.module('Portfolio', ['ngMaterial']);
    
app
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple')
        .accentPalette('green');
})
.directive('sideNavList', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: '/partials/sidenavList.html'
    }
})
.directive('pageLoader', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: '/partials/page-loader.html'
    }
})
.directive('svgLogo', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: './../partials/svgLogo.html'
    }
});