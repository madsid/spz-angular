'use strict';
angular.module('app')
  .factory('restFactory', function ($http, $q) {
    $http.defaults.useXDomain = true;
         
    var service = {};
    
    var baseUrl = "http://api.specialfoodz.com/";
    //baseUrl = 'http://localhost:88/spz/';
    
    
    //Auth 
    
    service.getTodaySpecial = function(){
        var deferred = $q.defer();
        
        $http({
           method: 'GET',
           url: baseUrl+'gettodayspecial'
        }).success(function(data){
            deferred.resolve(data);
        }).error(function (data) {
            deferred.reject('');
        });
        
        return deferred.promise;
    }
    
    service.getNeedACake = function(){
        var deferred = $q.defer();
        
        $http({
           method: 'GET',
           url: baseUrl+'getneedacake'
        }).success(function(data){
            deferred.resolve(data);
        }).error(function (data) {
            deferred.reject('');
        });
        
        return deferred.promise;
    }
    
    return service;  
  });
