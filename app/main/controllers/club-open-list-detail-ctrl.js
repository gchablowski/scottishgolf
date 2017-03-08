'use strict';
angular.module('main')
        .controller('ClubOpenListDetailCtrl', ["$scope", "$stateParams", 'MainServ', function ($scope, $stateParams, MainServ) {

                //get the param
                var id = $stateParams.id;

                //get the data
                $scope.data = MainServ.getOpen(id);

            }]);
