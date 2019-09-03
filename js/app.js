let app = angular.module('Portfolio', ['ngMaterial', 'ngAnimate']);
    
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
        templateUrl: './../partials/compressed/svgLogo.html'
    }
})
.directive('socialLinks', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: '/partials/compressed/socialLinks.html'
    }
})
.directive('sideNavList', function() {
    return {
        scope: {
            onContactClick: '&',
            onHireMeClick: '&'
        },
        restrict: 'E',
        templateUrl: '/partials/compressed/sidenavList.html',
    }
})
.directive('imagePicker', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: '/partials/compressed/imagePicker.html',
        link: function(scope, elm, attrs) {
            if (!attrs.images) return;
            scope.images = JSON.parse(attrs.images);
            scope.selectedImage = 0;
            scope.selectImage = function(index) {
                scope.selectedImage = index;
            }
        }
    }
})
.directive('frameworksImages', function() {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: '/partials/compressed/frameworksImages.html',
        link: function(scope, elm, attrs) {
            if (!attrs.images) return;
            scope.images = JSON.parse(attrs.images);
        }
    }
});
