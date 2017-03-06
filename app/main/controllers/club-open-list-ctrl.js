'use strict';
angular.module('main')
        .controller('ClubOpenListCtrl', ['$scope', '$ionicModal', 'MainServ', function ($scope, $ionicModal, MainServ) {

                //search options in the modal
                $scope.searchOptions = {};

                //make a directive ???
                $scope.getItemHeight = function (datas, index) {
                    
                    if(!index){
                        return 90;
                    }
                    
                    var preItemDate = datas[index - 1].date_begin.substring(0, 10);
                    var curItemDate = datas[index].date_begin.substring(0, 10);

                    return preItemDate != curItemDate ? 90 : 50;
                };



                //get the list of the golfs
                $scope.datas = MainServ.getOpenData();

                //the modal
                $ionicModal.fromTemplateUrl('main/templates/search-open-modal.html', {
                    scope: $scope,
                    animation: 'slide-in-up',
                }).then(function (modal) {
                    $scope.modal = modal;
                });

                $scope.openModal = function () {
                    $scope.modal.show();
                };

                $scope.closeModal = function () {
                    $scope.modal.hide();
                };

            }]);
