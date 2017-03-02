'use strict';

describe('module: main, controller: ListDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ListDetailCtrl, scope, MainServMock;;
  
      // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            getGolf: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(MainServMock, 'getGolf').and.callThrough();

    });
  
    // instantiate controller
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        ListDetailCtrl = $controller('ListDetailCtrl', {
            $scope: scope,
            MainServ: MainServMock
        });

    }));

  it('should call the MainServ service and populate $scope.data', function () {
        expect(MainServMock.getGolf).toHaveBeenCalled();
        expect(scope.data).toEqual({data: 1});
    });

});
