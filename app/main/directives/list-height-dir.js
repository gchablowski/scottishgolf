'use strict';
angular.module('main')
        .directive('listheight', function () {
            return {
                restrict: 'A',
                templateUrl: "main/templates/list-height-dir.html",
                scope: {
                    datas: "=",
                    searchOptions: "="
                },
                link: function postLink(scope, element, attrs) {
                    scope.getItemHeight = function (datas, index) {

                        if (!index) {
                            return 90;
                        }

                        var preItemDate = datas[index - 1].date_begin.substring(0, 10);
                        var curItemDate = datas[index].date_begin.substring(0, 10);

                        return preItemDate != curItemDate ? 90 : 50;
                    };
                }
            };
        });
