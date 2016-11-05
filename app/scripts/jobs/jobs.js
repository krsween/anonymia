'use strict';

/**
 * @ngdoc function
 * @name anonymiaApp.controller:JobsCtrl
 * @description
 * # JobsCtrl
 * Controller of the anonymiaApp
 */
angular.module('anonymiaApp')
    .controller('JobsCtrl', function ($scope, jobsFactory) {
        $scope.jobs = jobsFactory.get();

        $scope.companies = [];
        $scope.experience = [];
        $scope.dates = [];

        $scope.jobs.forEach(function (job) {
            if ($scope.companies.indexOf(job.company) === -1) {
                $scope.companies.push(job.company);
            }

            if ($scope.experience.indexOf(job.experience) === -1) {
                $scope.experience.push(job.experience);
            }

            if ($scope.dates.indexOf(job.dateAdded) === -1) {
                $scope.dates.push(job.dateAdded);
            }
        });
    });
