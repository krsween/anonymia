'use strict';

angular.module('anonymiaApp')
    .factory('applicantsFactory', function () {
        var data =   [{
                        id: '1',
                        name: 'Jane Doe',
                        skills: ['Java', 'UX', 'Fullstack', 'SQL'],
                        jobId: 1,
                        experience: 5,
                        gender: 'Female',
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
                        jobId: 1,
                        experience: 3,
                        gender: 'Male',
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
                        jobId: 2,
                        skills: ['Javascript', 'UX', 'Fullstack'],
                        gender: 'Female',
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
                        jobId: 2,
                        gender: 'Male',
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
                    }, {
                    id: '5',
                    name: 'John Doe',
                    skills: ['Java', 'UX', 'Fullstack', 'SQL'],
                    jobId: 3,
                    experience: 5,
                    gender: 'Male',
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
                    id: '6',
                    name: 'Martha Stewart',
                    skills: ['Java', 'Fullstack'],
                    jobId: 3,
                    experience: 3,
                    gender: 'Female',
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
                    id: '7',
                    name: 'Aziz Ansari',
                    jobId: 4,
                    skills: ['Javascript', 'UX', 'Fullstack'],
                    gender: 'Female',
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
                    id: '8',
                    name: 'Trillian Longbottom',
                    jobId: 4,
                    gender: 'Female',
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
            getForJob: function (jobId) {
                return data.filter(function(item) {
                    return item.jobId == jobId;
                });
            },
            getById: function(id) {
                return data.find(function(item) {
                    return item.id == id;
                });
            }
        };
    });
