'use strict';

angular.module('anonymiaApp')
    .factory('applicantsFactory', function () {
        var data =   [{
                        id: '1',
                        name: 'Jane Doe',
                        skills: ['Java', 'UX', 'Fullstack', 'SQL'],
                        experience: 5,
                        address: '123 Housewell Lane, Burbank, CA - 90639, USA.',
                        location: {
                            address: {
                                streetOne: '123 Housewell Lane',
                                streetTwo: '',
                                streetThree: '',
                                city: 'Burbank',
                                state: 'CA',
                                zip: '90639'
                            },
                            country: 'USA'
                        },
                        certifications: ['Java Certified', 'CISSP']
                    },
                    {
                        id: '2',
                        name: 'John Smith',
                        skills: ['Java', 'Fullstack'],
                        experience: 3,
                        address: '123 Housewell Lane, Burbank, CA - 90639, USA.',
                        location: {
                            address: {
                                streetOne: '123 Housewell Lane',
                                streetTwo: '',
                                streetThree: '',
                                city: 'Burbank',
                                state: 'CA',
                                zip: '90639'
                            },
                            country: 'USA'
                        },
                        certifications: ['Java Certified', 'CISA']
                    },
                    {
                        id: '3',
                        name: 'Linda Taylor',
                        skills: ['Javascript', 'UX', 'Fullstack'],
                        experience: 2,
                        address: '123 Housewell Lane, Burbank, CA - 90639, USA.',
                        location: {
                            address: {
                                streetOne: '123 Housewell Lane',
                                streetTwo: '',
                                streetThree: '',
                                city: 'Burbank',
                                state: 'CA',
                                zip: '90639'
                            },
                            country: 'USA'
                        },
                        certifications: ['Hadoop Certified', 'CISA']
                    },
                    {
                        id: '4',
                        name: 'Arthur Dent',
                        skills: ['UX', 'Photoshop'],
                        experience: 2,
                        address: '123 Housewell Lane, Burbank, CA - 90639, USA.',
                        location: {
                            address: {
                                streetOne: '123 Housewell Lane',
                                streetTwo: '',
                                streetThree: '',
                                city: 'Burbank',
                                state: 'CA',
                                zip: '90639'
                            },
                            country: 'USA'
                        },
                        certifications: ['Hadoop Certified', 'CSSLP']
                    }
                ];
        return {
            get: function () {
                return data;
            },
            getById: function(id) {
                return data.find(function(item) {
                    return item.id == id;
                });
            }
        };
    });
