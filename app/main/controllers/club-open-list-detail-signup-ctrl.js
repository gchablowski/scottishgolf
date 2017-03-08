'use strict';
angular.module('main')
        .controller('ClubOpenListDetailSignupCtrl', ["$scope", "$stateParams", 'MainServ', function ($scope, $stateParams, MainServ) {
                //get the param
                var id = $stateParams.id;

                //create form variable
                $scope.form = {
                    number: 1
                };

                //get the data
                $scope.data = MainServ.getOpen(id);
                
                $scope.signup = function () {
                    MainServ.signup($scope.form);
                };

            }]);