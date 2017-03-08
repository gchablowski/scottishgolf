'use strict';
angular.module('main')
        .controller('ClubOpenListCtrl', ['$scope', '$ionicModal', 'MainServ', function ($scope, $ionicModal, MainServ) {

                //search options in the modal
                $scope.searchOptions = {};

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
