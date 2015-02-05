  
    //------------------
    //Result Controller
   angular.module('iat381-a01')   
    .controller('resultcontroller', function($scope, $rootScope) {
    console.log("End of the Road");

    $scope.rs = function()
    {
   $rootScope.quizset = Math.floor((Math.random() * 10) + 1);
    console.log("Quiz Reset with #: " + $rootScope.quizset); 
    $rootScope.corrected = 0;
    console.log("Correct Answers at: " + $rootScope.corrected); 
    $rootScope.score = 0;
    console.log("Reset"); 
    }
    
    })

   .controller('timerctrl',
   function($scope,$timeout, $rootScope, $routeParams,$location, quizservice) {
       
    $scope.counter = 5;
    $scope.onTimeout = function()
    {
    $scope.counter--;
    $rootScope.time = $scope.counter;
    console.log($rootScope.time);
    mytimeout = $timeout($scope.onTimeout,1000);
    
    if ($rootScope.time === 1)
    {
    console.log("Test Timeout");
var question = quizservice.getquestion(parseInt($routeParams.questionId));  
        
    var nextQuestionId = parseInt($routeParams.questionId) + 1;
        $location.path( '/questions/' + nextQuestionId );
        $rootScope.answered = 1;
    }
        
    }
    
    var mytimeout =  $timeout($scope.onTimeout,1000);
    
    $scope.stop = function()
    {
        $timeout.cancel(mytimeout);
    }
 })
   

     