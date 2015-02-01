angular.module('iat381A01', 
               ['ngAnimate', 'ngRoute','ngCookies', 'ngTouch', 'ngSanitize', 'ui.bootstrap', ])

    .config(['$routeProvider', 
        function($routeProvider) {
          $routeProvider.
            when('/result', {
              templateUrl: 'views/result.html',
              controller: 'resultcontroller'
            }).
            when('/questions/:questionId', {
              templateUrl: 'views/questions.html',
              controller: 'questionscontroller'
            }).
            
            when('/', {
              templateUrl: 'views/log.html',
              controller: 'logcontroller'
            }).
            
            when('/q1', {
                redirectTo: 'views/questions/0'
            }).
            
            otherwise({
              redirectTo: '/'
            });
        }])
        

    .run(function ($rootScope) {
    $rootScope.score = 0; //global variable for score
    $rootScope.corrected = 0; //global variable for corrected
    $rootScope.quizset = 0;
  
    })
    
