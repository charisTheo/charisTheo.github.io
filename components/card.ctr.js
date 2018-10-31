(function(){
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioCtrl', function($scope, $http) {
            $http.get('/projects-data.json').then(function(response) {
                $scope.projects = response.data;
            });
        });


})();