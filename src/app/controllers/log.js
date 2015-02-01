
angular.module('iat381A01', 
               ['ngAnimate', 'ngRoute','ngCookies', 'ngTouch', 'ngSanitize', 'ui.bootstrap', ])
.controller('logcontroller', function($scope, $rootScope) {
      console.log("Check Log"); 
      $rootScope.quizset = Math.floor((Math.random() * 10) + 1);;
      console.log("Quiz #: " + $rootScope.quizset); 
    });