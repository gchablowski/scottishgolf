'use strict';
angular.module('main', [
    'ionic',
    'ngCordova',
    'ui.router',
    'ksSwiper'
            // TODO: load other modules selected during generation
])
        .config(function ($stateProvider, $urlRouterProvider) {

            // ROUTING with ui.router
            $urlRouterProvider.otherwise('/main/news/list');
            $stateProvider
                    // this state is placed in the <ion-nav-view> in the index.html
                    .state('main', {
                        url: '/main',
                        abstract: true,
                        templateUrl: 'main/templates/menu.html',
                        controller: 'MenuCtrl as menu'
                    })
                    .state('main.NewsList', {
                        url: '/news/list',
                        views: {
                            'pageContent': {
                                templateUrl: 'main/templates/news-list.html',
                                controller: 'NewsListCtrl as ctrl'
                            }
                        }
                    })
                    .state('main.NewsListDetail', {
                        url: '/news/list/detail/:type/:id',
                        views: {
                            'pageContent': {
                                templateUrl: 'main/templates/news-list-details.html',
                                controller: 'NewsListDetailsCtrl as ctrl'
                            }
                        }
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
                    .state('main.clubOpenList', {
                        url: '/club-open/list',
                        views: {
                            'pageContent': {
                                templateUrl: 'main/templates/club-open-list.html',
                                controller: 'ClubOpenListCtrl as ctrl'
                            }
                        }
                    })
                    .state('main.clubOpenListDetail', {
                        url: '/club-open/list/detail/:id',
                        views: {
                            'pageContent': {
                                templateUrl: 'main/templates/club-open-list-detail.html',
                                controller: 'ClubOpenListDetailCtrl as ctrl'
                            }
                        }
                    })
                    .state('main.clubOpenListDetailSignup', {
                        url: '/club-open/list/detail/signup/:id',
                        views: {
                            'pageContent': {
                                templateUrl: 'main/templates/club-open-list-detail-signup.html',
                                controller: 'ClubOpenListDetailSignupCtrl as ctrl'
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
                    });
        });
