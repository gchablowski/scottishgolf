'use strict';
angular.module('main')
        .controller('NewsListCtrl', ['$scope', '$ionicModal', 'MainServ', function ($scope, $ionicModal, MainServ) {

                //get datas
                $scope.news = MainServ.getNewsData();

                $scope.blog = MainServ.getBlogData();

                //create the parameters for the carrousel
                $scope.swiperParam = {
                    loop: true,
                    autoplay: 5000
                };

                $scope.mosaicParam = {
                    slidesPerView: 2,
                    slidesPerColumn: 2
                };
            }]);
