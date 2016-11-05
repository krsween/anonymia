'use strict';

angular.module('anonymiaApp')
    .factory('jobsFactory', function () {
        return {
            get: function () {
                return [
                    {
                        id: '1',
                        name: 'Senior Developer',
                        skills: ['Java', 'UX', 'Fullstack', 'SQL'],
                        experience: 5
                    },
                    {
                        id: '2',
                        name: 'Entry-Level Developer',
                        skills: ['Java', 'Fullstack'],
                        experience: 3
                    },
                    {
                        id: '3',
                        name: 'Developer',
                        skills: ['Javascript', 'UX', 'Fullstack'],
                        experience: 2
                    }
                ];
            }
        };
    });
