'use strict';

describe('module: main, directive: listheight', function () {

  // load the directive's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  var element,
    $rootScope;

  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_.$new();
  }));

  it('should show elements in a list', inject(function ($compile) {
    element = angular.element('<ion-view view-title="Club Open"><ion-content><div listheight datas="datas" search-options="searchOptions"></div></ion-content></ion-view>');
    $rootScope.searchOptions = {};
    $rootScope.datas = [
                            {
                                id: 1,
                                title: 'Elmwood Golf Course',
                                golf_id: 1,
                                golf_name: 'Golspie Golf Club',
                                date_begin: "2017-05-18T08:00Z",
                                date_end: "2017-05-20T13:00Z",
                                category: 68,
                                region: 65,
                            }, {
                                id: 2,
                                title: 'Elmwood Golf Course2',
                                golf_id: 1,
                                golf_name: 'Golspie Golf Club',
                                date_begin: "2017-05-20T09:00Z",
                                date_end: "2017-05-20T14:00Z",
                                category: 69,
                                region: 66,
                            }];
                        
    
    element = $compile(element)($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain("2017-05-18");
    expect(element.html()).toContain("Elmwood Golf Course");
    expect(element.html()).toContain("2017-05-20");
    expect(element.html()).toContain("Elmwood Golf Course2");
  }));
});
