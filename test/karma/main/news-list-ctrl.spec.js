'use strict';
describe('module: main, controller: NewsListCtrl', function () {

    // load the controller's module
    beforeEach(module('main'));
    // load all the templates to prevent unexpected $http requests from ui-router
    beforeEach(module('ngHtml2Js'));
    // instantiate controller
    var NewsListCtrl, scope, MainServMock;
    // define a mock of service called
    beforeEach(function () {

        MainServMock = {
            getNewsData: function () {
                var datas = {data: 1};
                return datas;
            },
            getBlogData: function () {
                var datas = {data: 2};
                return datas;
            }
        };
        spyOn(MainServMock, 'getNewsData').and.callThrough();
        spyOn(MainServMock, 'getBlogData').and.callThrough();
    });

    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();

        NewsListCtrl = $controller('NewsListCtrl', {
            $scope: scope,
            MainServ: MainServMock
        });
    }));

    it('should call the MainServ service and populate $scope.news', function () {
        expect(MainServMock.getNewsData).toHaveBeenCalled();
        expect(scope.news).toEqual({data: 1});
    });

    it('should call the MainServ service and populate $scope.blog', function () {
        expect(MainServMock.getBlogData).toHaveBeenCalled();
        expect(scope.blog).toEqual({data: 2});
    });

    it('should define $scope.swiperParam', function () {
        expect(scope.swiperParam).toEqual({
            loop: true,
            autoplay: 5000
        });
    });

    it('should define $scope.mosaicParam', function () {
        expect(scope.mosaicParam).toEqual({
            slidesPerView: 2,
            slidesPerColumn: 2
        });
    });

});
