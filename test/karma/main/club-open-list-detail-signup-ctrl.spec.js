'use strict';

describe('module: main, controller: ClubOpenListDetailSignupCtrl', function () {

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // instantiate controller
    var ClubOpenListDetailSignupCtrl, scope, MainServMock, $stateParamsMock;

    // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            getOpen: function () {
                var datas = {data: 1};
                return datas;
            },
            signup: function () { },
        };

        spyOn(MainServMock, 'getOpen').and.callThrough();
        spyOn(MainServMock, 'signup').and.callThrough();

        $stateParamsMock = {
            id: 1
        };

    });

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        ClubOpenListDetailSignupCtrl = $controller('ClubOpenListDetailSignupCtrl', {
            $scope: scope,
            $stateParams: $stateParamsMock,
            MainServ: MainServMock
        });

    }));

    it('should define scope.form', function () {
        expect(scope.form).toEqual({number: 1});
    });

    it('should call the MainServ service and populate $scope.data', function () {
        expect(MainServMock.getOpen).toHaveBeenCalledWith(1);
        expect(scope.data).toEqual({data: 1});
    });

    it('should call the MainServ service when we submit the form with signup()', function () {
        scope.form = {data:1};
        scope.signup(scope.form);
        expect(MainServMock.signup).toHaveBeenCalledWith(scope.form);
    });

});