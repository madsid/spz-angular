'use strict';

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
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html'
      })
      .when('/terms', {
        templateUrl: 'views/terms.html'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
