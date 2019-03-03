var app = angular.module('Portfolio', ['ngMaterial', 'ngCookies', 'ngAnimate']);
    
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
.directive('socialLinks', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: '/partials/socialLinks.html'
    }
})
.directive('sideNavList', function() {
    return {
        scope: {
            onContactClick: '&',
            onHireMeClick: '&'
        },
        restrict: 'E',
        templateUrl: '/partials/sidenavList.html',
    }
})
.directive('pageLoader', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: '/partials/page-loader.html'
    }
})
.directive('imagePicker', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: '/partials/imagePicker.html',
        link: function(scope, elm, attrs) {
            scope.images = JSON.parse(attrs.images);
            scope.selectedImage = 0;
            scope.selectImage = function(index) {
                scope.selectedImage = index;
            }
        }
    }
});
