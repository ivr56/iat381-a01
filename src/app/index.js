'use strict';

angular.module('iat381A01', 
               ['ngAnimate', 'ngRoute','ngCookies', 'ngTouch', 'ngSanitize', 'ui.bootstrap', ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
  
      .otherwise({
        redirectTo: '/'
      });
  });

