'use strict';

describe('module: main, controller: NewsListCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var NewsListCtrl;
  beforeEach(inject(function ($controller) {
    NewsListCtrl = $controller('NewsListCtrl');
  }));

  it('should do something', function () {
    expect(!!NewsListCtrl).toBe(true);
  });

});
