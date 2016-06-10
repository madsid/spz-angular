'use strict';

angular.module('app')
  .controller('AccountCtrl', ['$scope', '$window','restFactory',function ($scope, $window,restFactory) {
    $scope.userdata = {};
    if($window.localStorage && $window.localStorage.getItem('Login') != undefined){
        $scope.username = $window.localStorage.getItem('Login');
        $scope.userdata.username = $scope.username;
    }
    else{
        $scope.username = "unknown";
        $scope.userdata.username = $scope.username;
    }

    $scope.saveData = function () {
        restFactory.postAccountDetails().then(function (data) {
            console.log(data);
        }, function (Error) {
            console.log(Error);
        });
    };
  }]);
