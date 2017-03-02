'use strict';
angular.module('main')
        .controller('ListDetailCtrl', ["$scope", "$stateParams", 'MainServ', function ($scope, $stateParams, MainServ) {

                //get the param
                var id = $stateParams.id;

                //get the data
                $scope.data = MainServ.getGolf(id);

            }]);
