'use strict';
/**
 * @ngdoc function
 * @name anonymiaApp.controller:ConfigureCtrl
 * @description
 * # ConfigureCtrl
 * Controller of the anonymiaApp
 */
angular.module('anonymiaApp')
    .controller('ConfigureCtrl', ['configureService', '$scope', function (configureService, $scope) {
        // this.configList = [];
        console.log('this/configList', this.configList);
        $scope.configList = Object.assign(configureService.getList(), configureService.getConfig());
        $scope.save = function() {
            console.log($scope.configList);
            configureService.saveConfig($scope.configList);
        }
    }]);
    angular.module('anonymiaApp').factory('configureService', function () {
        var cache = {};
        return {
            getList: function() {
                return [{
                    label: 'Name',
                    value: 'name'
                }, {
                    label: 'Address',
                    value: 'address'
                }, {
                    label: 'Gender',
                    value: 'gender'
                }, {
                    label: 'Skills',
                    value: 'skills'
                }, {
                    label: 'Work Experience',
                    value: 'workExperience'
                }];
            },
            saveConfig: function(config) {
                cache = config;
            },
            getConfig: function() {
                return cache;
            },
            getHiddenFields: function() {
                var hidden = [];
                for (var key in cache) {
                    if (cache[key].hidden) {
                        hidden.push(cache[key].value);
                    }
                }
                return hidden;
            }
        };
    });
