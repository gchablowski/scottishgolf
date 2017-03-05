'use strict';

describe('module: main, controller: NewsListDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var NewsListDetailsCtrl;
  beforeEach(inject(function ($controller) {
    NewsListDetailsCtrl = $controller('NewsListDetailsCtrl');
  }));

  it('should do something', function () {
    expect(!!NewsListDetailsCtrl).toBe(true);
  });

});
