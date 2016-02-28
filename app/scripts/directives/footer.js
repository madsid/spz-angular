'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('app')
    .directive('mainFooter', function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs, controllers) {
                scope.data = "Hello";
            },
            templateUrl: '../views/footer.html'
        };
    });
