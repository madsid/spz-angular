'use strict';

angular.module('app')
  .controller('TodaySpecialCtrl', ['$scope','restFactory',function ($scope,restFactory) {
      $scope.todaySpecial = {};
      
      restFactory.getTodaySpecial().then(function (data) {
          $scope.todaySpecial = data;
      }, function (Error) {
          console.log(Error);
      });
      
  }]);
