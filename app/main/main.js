'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/club-finders/list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.clubFindersList', {
        url: '/club-finders/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/club-finders-list.html',
            controller: 'ClubFindersListCtrl as ctrl'
          }
        }
      })
      .state('main.clubFindersListDetail', {
        url: '/club-finders/list/detail/:id',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/club-finders-list-detail.html',
            controller: 'ClubFindersListDetailCtrl as ctrl'
          }
        }
      })
      .state('main.leaderboardsList', {
        url: '/leaderboards/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/leaderboards-list.html',
            controller: 'LeaderboardsListCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
});
