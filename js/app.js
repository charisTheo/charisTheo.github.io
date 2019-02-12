particlesJS.load('particles-js', './particles/particles-config.json');

let app = angular.module('Portfolio', ['ngMaterial']);
    
app
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple')
        .accentPalette('green');
})
.directive('svgLogo', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: './../partials/svgLogo.html'
    }
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
});
