'use strict';

describe('module: main, controller: clubFindersListDetailCtrl', function () {

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // instantiate controller
    var clubFindersListDetailCtrl, scope, MainServMock, $stateParamsMock;
 
    // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            getGolf: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(MainServMock, 'getGolf').and.callThrough();

        $stateParamsMock = {
            id: 1
        };

    });

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        clubFindersListDetailCtrl = $controller('ClubFindersListDetailCtrl', {
            $scope: scope,
            $stateParams: $stateParamsMock,
            MainServ: MainServMock
        });

    }));

    it('should call the MainServ service and populate $scope.data', function () {
        expect(MainServMock.getGolf).toHaveBeenCalledWith(1);
        expect(scope.data).toEqual({data: 1});
    });

});
