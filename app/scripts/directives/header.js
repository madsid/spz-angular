'use strict';

angular.module('app')
    .directive('mainHeader', function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs, controllers) {
                scope.data = "Hello";
            },
            templateUrl: '../views/header.html'
        };
    });
