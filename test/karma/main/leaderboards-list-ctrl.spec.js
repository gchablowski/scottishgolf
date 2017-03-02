'use strict';

describe('module: main, controller: Leaderboards-listCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var Leaderboards-listCtrl;
  beforeEach(inject(function ($controller) {
    Leaderboards-listCtrl = $controller('Leaderboards-listCtrl');
  }));

  it('should do something', function () {
    expect(!!Leaderboards-listCtrl).toBe(true);
  });

});
