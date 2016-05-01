'use strict';

angular.module('app')
  .controller('MainCtrl', ['$scope','restFactory',function ($scope,restFactory) {
      
      $scope.todaySpecial = {};
      $scope.needaCake = {};
      
      restFactory.getTodaySpecial().then(function (data) {
          $scope.todaySpecial = data;
      }, function (Error) {
          console.log(Error);
      });
      
      restFactory.getNeedACake().then(function (data) {
          $scope.needaCake = data;
      }, function (Error) {
          console.log(Error);
      });
  }]);
