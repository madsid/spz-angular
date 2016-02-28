'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/todayspecial', {
        templateUrl: 'views/todayspecial.html',
        controller: 'TodaySpecialCtrl',
        controllerAs: 'todaySpecial'
      })
      .when('/needacake', {
          templateUrl: 'views/todayspecial.html',
          controller: 'TodaySpecialCtrl',
          controllerAs: 'todaySpecial'
      })
      .when('/restaurents', {
        templateUrl: 'views/todayspecial.html',
        controller: 'TodaySpecialCtrl',
        controllerAs: 'todaySpecial'
      })
      .when('/offers', {
          templateUrl: 'views/todayspecial.html',
          controller: 'TodaySpecialCtrl',
          controllerAs: 'todaySpecial'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
