(function(){
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioCtrl', function($scope, $http, PerspectiveHoverEffect) {
            $http.get('/projects-data.json').then(function(response) {
                $scope.projects = response.data;
            });

            const handlers = PerspectiveHoverEffect.getHandlers();

            $scope.MouseLeaveHandler = handlers.MouseLeaveHandler;
            $scope.MouseMoveHandler = handlers.MouseMoveHandler;
            $scope.MouseEnterHandler = handlers.MouseEnterHandler;
            $scope.CardToggleHandler = handlers.CardToggleHandler;
        });


})();