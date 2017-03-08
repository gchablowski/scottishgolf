'use strict';

describe('module: main, controller: ClubOpenListDetailCtrl', function () {

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // instantiate controller
    var ClubOpenListDetailCtrl, scope, MainServMock, $stateParamsMock;

    // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            getOpen: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(MainServMock, 'getOpen').and.callThrough();

        $stateParamsMock = {
            id: 1
        };

    });

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        ClubOpenListDetailCtrl = $controller('ClubOpenListDetailCtrl', {
            $scope: scope,
            $stateParams: $stateParamsMock,
            MainServ: MainServMock
        });

    }));

    it('should call the MainServ service and populate $scope.data', function () {
        expect(MainServMock.getOpen).toHaveBeenCalledWith(1);
        expect(scope.data).toEqual({data: 1});
    });

});