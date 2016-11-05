'use strict';

/**
 * @ngdoc overview
 * @name anonymiaApp
 * @description
 * # anonymiaApp
 *
 * Main module of the application.
 */
angular
    .module('anonymiaApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'scripts/about/about.html',
                controller: 'AboutCtrl'
            })
            .when('/jobs', {
                templateUrl: 'scripts/jobs/jobs.html',
                controller: 'JobsCtrl'
            })
            .when('/jobs/:id', {
                templateUrl: 'scripts/jobs/jobdetail.html',
                controller: 'JobDetailCtrl'
            })
            .when('/applicant/:id', {
                templateUrl: 'scripts/applicant/applicant.html',
                controller: 'ApplicantDetailCtrl'
            })
            .when('/configuration', {
                templateUrl: 'scripts/configuration/configuration.html',
                controller: 'ConfigureCtrl',
                controllerAs: 'configure'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
