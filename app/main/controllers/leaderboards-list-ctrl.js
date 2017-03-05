'use strict';
angular.module('main')
        .controller('LeaderboardsListCtrl', ['$scope', 'MainServ', function ($scope, MainServ) {

            //get the list of the leadboard
            $scope.datas = MainServ.getLeaderBoards();

        }]);
