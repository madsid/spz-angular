'use strict';

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
