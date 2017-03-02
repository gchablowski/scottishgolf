'use strict';

describe('module: main, controller: clubFindersListCtrl', function () {

    var clubFindersListCtrl, $q, deferred, scope, MainServMock;

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    //ionic function
    beforeEach(inject(function ($ionicModal, _$q_) {
        // We use the $q service to create a mock instance of defer
        $q = _$q_;
        deferred = _$q_.defer();
        spyOn($ionicModal, 'fromTemplateUrl').and.returnValue(deferred.promise);

    }));

    // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            getGolfData: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(MainServMock, 'getGolfData').and.callThrough();

    });

    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        clubFindersListCtrl = $controller('ClubFindersListCtrl', {
            $scope: scope,
            MainServ: MainServMock
        });

    }));

    it('should define scope.searchOptions', function () {
        expect(scope.searchOptions).toEqual({});
    });

    it('should call the MainServ service and populate $scope.datas ', function () {
        expect(MainServMock.getGolfData).toHaveBeenCalled();
        expect(scope.datas).toEqual({data: 1});
    });

    it('should call $ionicModal.fromTemplateUrl(); and then set $scope.modal = modal', inject(function ($ionicModal) {
        var modal = {};
        deferred.resolve(modal);

        scope.$apply();

        expect(scope.modal).toBe(modal);
    }));

    it('should define a $scope.openModal method that open the modal', inject(function ($ionicModal) {
        //to create the modal
        var modal = {show: function () {}};
        deferred.resolve(modal);
        scope.$apply();

        spyOn(scope.modal, "show").and.returnValue(deferred.promise);
        scope.openModal();
        expect(scope.modal.show).toHaveBeenCalled();
    }));

    it('should define a $scope.closeModal method that close the modal', inject(function ($ionicModal) {
        //to create the modal
        var modal = {hide: function () {}};
        deferred.resolve(modal);
        scope.$apply();

        spyOn(scope.modal, "hide").and.returnValue(deferred.promise);
        
        scope.closeModal();
        expect(scope.modal.hide).toHaveBeenCalled();
    }));

});
