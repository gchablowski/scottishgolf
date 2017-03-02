'use strict';
angular.module('main')
        .controller('ClubFindersListDetailCtrl', ["$scope", "$stateParams", 'MainServ', function ($scope, $stateParams, MainServ) {

                //get the param
                var id = $stateParams.id;

                //get the data
                $scope.data = MainServ.getGolf(id);

            }]);
