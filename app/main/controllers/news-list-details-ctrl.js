'use strict';
angular.module('main')
        .controller('NewsListDetailsCtrl', ["$scope", "$stateParams", 'MainServ', function ($scope, $stateParams, MainServ) {

                //get the param
                var id = $stateParams.id;
                var type = $stateParams.type;

                //get the data
                $scope.data = MainServ.getArticle(id, type);

            }]);