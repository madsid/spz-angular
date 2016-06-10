'use strict';

angular.module('app')
    .directive('mainHeader', function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs, controllers) {
                scope.data = "Hello";
            },
            controller:['$scope','hello', '$window', function($scope, hello, $window) {
                $scope.userLogged = false;
                $scope.Login = 'LOGIN/SIGNUP';
                
                if($window.localStorage && $window.localStorage.getItem('Login') != undefined){
                    $scope.userLogged = true;
                    $scope.Login = $window.localStorage.getItem('Login');
                }
                
                $scope.login = function() {
                    hello('facebook').login().then(function() {
                        hello('facebook').api('me').then(function(json) {
                            $scope.Login = json.name;
                            $scope.userLogged = true;
                            $scope.$digest(); 
                    }, function(e) {
                            console.log('Whoops! ' + e.error.message);
                        });
                        
                    }, function(e) {
                        alert('Signin error: ' + e.error.message);
                    });
                };
            }],
            templateUrl: '../views/header.html'
        };
    });
