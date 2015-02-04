
  //------------------
  //Index.js Start
  //Angualr Start
  angular.module('iat381-a01')
  
    .config(['$routeProvider', 
        function($routeProvider) {
          $routeProvider.
            when('/result', {
              templateUrl: 'result.html',
              controller: 'resultcontroller'
            }).
            when('/questions/:questionId', {
              templateUrl: 'questions.html',
              controller: 'questionscontroller'
            }).
            
            when('/', {
              templateUrl: 'log.html',
              controller: 'logcontroller'
            }).
            
            when('/q1', {
                redirectTo: '/questions/0'
            }).
            
            otherwise({
              redirectTo: '/'
            });
        }])
        

    .run(function ($rootScope) {
    $rootScope.score = 0; 
    //global variable for score
    $rootScope.corrected = 0; 
    //global variable for corrected
    $rootScope.quizset = 0;
    $rootScope.resetcount = 0;
    })
    //End Index.js
    //------------------
