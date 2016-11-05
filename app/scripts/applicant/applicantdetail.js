'use strict';

/**
 * @ngdoc function
 * @name anonymiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anonymiaApp
 */
angular.module('anonymiaApp')
    .controller('ApplicantDetailCtrl', [ '$routeParams', '$scope', 'configureService', 'applicantsFactory', function ($routeParams, $scope, configureService, applicantsFactory) {
            $scope.id = $routeParams.id;
            $scope.applicant = applicantsFactory.getById($scope.id);
            $scope.hiddenFields = configureService.getHiddenFields();
            console.log('hidden fields', $scope.hiddenFields);
            $scope.show = function(field) {
                return ($scope.hiddenFields.indexOf(field) < 0);
            }
    }]);
