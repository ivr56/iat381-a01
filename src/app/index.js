
  //------------------
  //Index.js Start
  //Angualr Start
  angular.module('iat381-a01')
    .config(['$routeProvider',
        function($routeProvider, $rootScope) {
          $routeProvider.

            //Result Router
            when('/result', {
              templateUrl: 'result.html',
              controller: 'resultcontroller'
            }).

            //Easy + Medium Question Router
            when('/questions/:questionId', {
              templateUrl: 'questions.html',
              controller: 'questionscontroller'
            }).

            //Hard Question Router
            when('/imgq_questions/:questionId', {
            templateUrl: 'imgq_questions.html',
            controller: 'quizservice_h'
            }).

            //Main View Router
            when('/', {
              templateUrl: 'main.html',
              controller: 'logcontroller'
            }).

            //Difficulty Select Router
            when('/log', {
              templateUrl: 'log.html',
              controller: 'logcontroller',
            }).

            //Hard Question Router
            when('/qh1', {
                redirectTo: '/imgq_questions/0'
            }).

            //Easy - Medium Question Router
            when('/q1', {
                redirectTo: '/questions/0'
            }).

            //Defult Route
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
    $rootScope.pagechange = 0;
    $rootScope.timing = 0;
    //global variable for corrected
    $rootScope.quizset = 0;
    $rootScope.resetcount = 0;
    $rootScope.activeresult = 0;
    $rootScope.questioncount = 0;
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
