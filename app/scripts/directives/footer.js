'use strict';

angular.module('app')
    .directive('mainFooter', function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs, controllers) {
                scope.data = "Hello";
            },
            templateUrl: '../views/footer.html',
            controller: function($scope,$element) {
                $scope.backToTop = function () {
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                }
            }
        };
    });
