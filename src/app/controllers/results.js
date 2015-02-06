
    //------------------
    //Result Controller
   angular.module('iat381-a01')   
    .controller('resultcontroller', function($scope, $rootScope) {
       

    
       //irene testing
      $scope.user=APP.user;
      //end of irene testing
   
            //start of irene testing
                    //show scores

            $scope.scores = APP.scores;


         //end of irene testing line



    console.log("End of the Road");
    $rootScope.timeenabled = 0;
    console.log("Time Gentlemen " + $rootScope.timeenabled);  


    $scope.rs = function()
    {
   $rootScope.quizset = Math.floor((Math.random() * 10) + 1);
    console.log("Quiz Reset with #: " + $rootScope.quizset); 
    $rootScope.used = 0;
    console.log("Correct Answers at: " + $rootScope.used); 
    $rootScope.score = 0;
    console.log("Reset"); 
    }
    
    })

   
   .controller('timerctrl',
   function($scope,$timeout, $rootScope, $routeParams,$location, quizservice) {
       
    $scope.counter = 15;
    
    $scope.onTimeout = function()
    {
        
    $scope.counter--;
    $rootScope.time = $scope.counter;
    mytimeout = $timeout($scope.onTimeout,1000);
    console.log($rootScope.used);
    
        
    if ($rootScope.timeenabled == 1 && $scope.counter == 0)
    {
        
console.log("Test Timeout");
var question = quizservice.getquestion(parseInt($routeParams.questionId));var nextQuestionId = parseInt($routeParams.questionId) + 1;

    $location.path( '/questions/' + nextQuestionId );
    $rootScope.answered = 1;
    $rootScope.activeresult = 0;
    $rootScope.used = $rootScope.used + 1;
        
    }
    }
    
    var mytimeout =  $timeout($scope.onTimeout,1000);
    $scope.stop = function()
    {
    $timeout.cancel(mytimeout);
    }
 })
   

     