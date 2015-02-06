
  //------------------
  //Index.js Start
  //Angualr Start
  angular.module('iat381-a01')
  
    .config(['$routeProvider', 
        function($routeProvider, $rootScope) {
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
              templateUrl: 'main.html',
              controller: 'logcontroller'
            }).
          
            when('/log', {
              templateUrl: 'log.html',
              controller: 'logcontroller',
            }).
          
            when('/log', {
              templateUrl: 'log.html',
              controller: 'resultscheck',
            }).
          
            when('/q1', {
                redirectTo: '/questions/0'
            }).
            
            otherwise({
              redirectTo: '/'
            });
        }])
        
    .controller('pagetimer', 
    function($rootScope) {
      if ($location.path('/log'))
      {
          console.log("Test Location Break");
      }
  
    })
  
    .run(function ($rootScope) {
    $rootScope.score = 0; 
    //global variable for score
    $rootScope.used = 0; 
      $rootScope.time = 0;
    //global variable for corrected
    $rootScope.quizset = 0;
    $rootScope.resetcount = 0;
    $rootScope.activeresult = 0;
    })

     //start of irene testing//
    //ADD any variables you want to access in all controllers to the APP variable

    var APP = {};

    APP.user = {
      name:'',
      age:0
    }

    APP.scores = [];
     //end of irene testing line
    //End Index.js
    //------------------
