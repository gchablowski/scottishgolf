'use strict';

describe('module: main, controller: LeaderboardsListCtrl', function () {

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // instantiate controller
    var LeaderboardsListCtrl, scope, MainServMock;

    // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            getLeaderBoards: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(MainServMock, 'getLeaderBoards').and.callThrough();

    });

    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        LeaderboardsListCtrl = $controller('LeaderboardsListCtrl', {
            $scope: scope,
            MainServ: MainServMock
        });
    }));

    it('should call the MainServ service and populate $scope.datas ', function () {
        expect(MainServMock.getLeaderBoards).toHaveBeenCalled();
        expect(scope.datas).toEqual({data: 1});
    });

});
