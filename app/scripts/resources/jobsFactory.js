'use strict';

angular.module('anonymiaApp')
    .factory('jobsFactory', function () {
        return {
            get: function () {
                return [
                    {
                        id: '1',
                        name: 'Senior Developer',
                        company: 'Microsoft',
                        dateAdded: '5 Days Ago',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet vestibulum nisi, nec porttitor arcu lacinia at. Aenean eu nisi rhoncus, fringilla sem ultricies, tempus massa. Duis gravida mollis magna nec euismod. Praesent convallis, mauris sed ullamcorper ultricies, neque dui faucibus augue, quis sagittis mi neque sit amet enim. Nunc quis ex odio. Proin ornare finibus leo vel pellentesque. Donec lectus eros, tempus et aliquet id, vehicula in felis. Praesent vitae tristique mauris. Praesent dictum ligula pretium, gravida est facilisis, rutrum arcu. Maecenas in risus vitae urna pharetra volutpat sit amet id odio. Nam felis erat, dapibus eu posuere fermentum, ultrices quis leo. Aenean eget enim ut risus pharetra pulvinar. Vestibulum id tellus eget nunc condimentum tincidunt. Vestibulum rutrum mauris vel est pharetra eleifend. Suspendisse elementum fringilla augue, at porttitor neque lobortis ut. Aliquam eros quam, pellentesque eget ligula quis, lacinia iaculis sem.',
                        skills: ['Java', 'UX', 'Fullstack', 'SQL'],
                        experience: 5,
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
                        }
                    },
                    {
                        id: '2',
                        name: 'Entry-Level Developer',
                        company: 'Microsoft',
                        dateAdded: '2 Days Ago',
                        description: 'Nunc eu sapien consectetur, rhoncus diam eget, molestie enim. Aliquam vel massa enim. Nam ultrices ac purus a hendrerit. Quisque sem sapien, euismod nec velit sit amet, hendrerit laoreet mauris. Ut sollicitudin volutpat vehicula. Suspendisse tincidunt bibendum aliquam. Nam viverra auctor erat et commodo.',
                        skills: ['Java', 'Fullstack'],
                        experience: 3,
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
                        }
                    },
                    {
                        id: '3',
                        name: 'Developer',
                        company: 'Microsoft',
                        dateAdded: '2 Weeks Ago',
                        description: 'Curabitur euismod vitae enim quis ornare. Fusce in ligula nibh. In venenatis, sapien a fringilla pellentesque, mauris orci fermentum diam, sit amet porttitor orci nisl non erat. Cras consectetur ultrices lectus, non imperdiet turpis. Fusce eu metus mattis, efficitur est auctor, porttitor dolor. Nam ornare justo tristique massa sagittis bibendum. Nulla facilisi. Pellentesque fermentum odio ac scelerisque sodales. Nunc suscipit arcu in urna efficitur malesuada. Suspendisse ultrices sagittis pretium.',
                        skills: ['Javascript', 'UX', 'Fullstack'],
                        experience: 2,
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
                        }
                    },
                    {
                        id: '4',
                        name: 'UX Designer',
                        company: 'Microsoft',
                        dateAdded: '1 Day Ago',
                        description: 'Phasellus quis interdum odio. Suspendisse eleifend ipsum ac pretium tincidunt. Cras rhoncus ligula mattis elit aliquam, eget placerat nulla iaculis. Proin lobortis justo pharetra arcu rutrum volutpat. Integer egestas egestas tortor, eget mattis dui finibus in. Vestibulum ornare semper gravida. Quisque vel ligula ac lacus elementum sagittis vel vitae lorem. Cras dignissim est ut lectus efficitur tincidunt. Integer nec nunc et nisl pretium dictum. Maecenas posuere elementum hendrerit. In viverra enim tortor, at ullamcorper metus euismod vitae. Maecenas scelerisque rutrum lectus, quis blandit velit lobortis non. Donec libero enim, placerat in tristique vel, volutpat eget dolor. Nullam ut feugiat est, id lacinia turpis. Aliquam interdum ullamcorper malesuada.',
                        skills: ['UX', 'Photoshop'],
                        experience: 2,
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
                        }
                    }
                ];
            }
        };
    });
