'use strict';
angular.module('main')
        .controller('ClubFindersListCtrl', ['$scope', '$ionicModal', 'MainServ', function ($scope, $ionicModal, MainServ) {

                //search options in the modal
                /* fields searched : name: '',
                    region: '',
                    membership: '',
                    membershipCard: '',
                    clubGolf: '',
                    getIntoGolf: ''*/
                
                $scope.searchOptions = { };
                
                //get the list of the golfs
                $scope.datas = MainServ.getGolfData();
        
                //the modal
                $ionicModal.fromTemplateUrl('main/templates/search-modal.html', {
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
