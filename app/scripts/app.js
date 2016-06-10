'use strict';

angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngHello'
  ])
  .config(function ($routeProvider, helloProvider) {
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
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
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
      .when('/careers', {
        templateUrl: 'views/careers.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/cod', {
        templateUrl: 'views/cod.html'
      })
      .when('/help', {
        templateUrl: 'views/help.html'
      })
      .when('/linkwithus', {
        templateUrl: 'views/linkwithus.html'
      })
      .when('/refer', {
        templateUrl: 'views/refer.html'
      })
      .when('/enquiry', {
        templateUrl: 'views/enquiry.html'
      })
      .when('/feedback', {
        templateUrl: 'views/feedback.html'
      })
      .otherwise({
        redirectTo: '/'
      });
      
      helloProvider.init({
        facebook:'1092171610855117'
      });
  })
  .run(function ( hello, $window) {
      
      hello.on("auth.login", function (r) {
        hello('facebook').api('me').then(function(json) {
          $window.localStorage && $window.localStorage.setItem('Login', json.name);  
        }, function(e) {
            console.log('Whoops! ' + e.error.message);
        });
          
          console.log(r.authResponse);
      });
  });
