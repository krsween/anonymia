'use strict';

/**
 * @ngdoc function
 * @name anonymiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anonymiaApp
 */
angular.module('anonymiaApp')
    .controller('JobDetailCtrl', [ '$routeParams', '$scope', 'jobsFactory', 'applicantsFactory', function ($routeParams, $scope, jobsFactory, applicantsFactory) {
        $scope.id = $routeParams.id;
        $scope.job = jobsFactory.getById($scope.id);
        $scope.applicants = applicantsFactory.getForJob($scope.id);
    }]);
