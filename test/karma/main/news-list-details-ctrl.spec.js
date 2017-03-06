'use strict';

describe('module: main, controller: NewsListDetailsCtrl', function () {

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));

    // instantiate controller
    var NewsListDetailsCtrl, scope, MainServMock, $stateParamsMock;
    ;

    // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            getArticle: function () {
                var datas = {data: 1};
                return datas;
            }
        };

        spyOn(MainServMock, 'getArticle').and.callThrough();
        
        $stateParamsMock = {
            id: 1,
            type: "news"
        };

    });

    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        NewsListDetailsCtrl = $controller('NewsListDetailsCtrl', {
            $scope: scope,
            $stateParams: $stateParamsMock,
            MainServ: MainServMock
        });
        
    }));

    it('should call the MainServ service and populate $scope.data', function () {
        expect(MainServMock.getArticle).toHaveBeenCalledWith(1, "news");
        expect(scope.data).toEqual({data: 1});
    });
});
