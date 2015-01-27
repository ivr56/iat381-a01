'use strict';

angular.module('iat381A01', 
               ['ngAnimate', 'ngRoute','ngCookies', 'ngTouch', 'ngSanitize', 'ui.bootstrap', ])

//Route Provider
//When
//Local URL
//Controller Name

.config(function ($routeProvider) {
    $routeProvider
    //Landing Page
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    //About Quiz Page
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
    //Questions Begin 
       .when('/q1', {
        templateUrl: 'views/q1.html',
        controller: 'Q1Ctrl'
      })
    
    //Questions End
    
    
    
    //Defult Fallback
      .otherwise({
        redirectTo: '/'
      });
  });

