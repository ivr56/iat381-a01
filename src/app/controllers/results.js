
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
    $rootScope.pagechange = 0;
    $rootScope.timing = 0;
    console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);  


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

   
   .controller('timectrl_view',
   function($scope,$timeout, $rootScope, $routeParams,$location, quizservice) {
    console.log(timectrl.timesup);

        
    })
       
   
   .controller('timerctrl',
   function($scope,$timeout, $rootScope, $routeParams,$location, quizservice) {
  
var timesup;
    if ($rootScope.pagechange === 0)
    {
        console.log("New View at 0");
    } //Timer Disabled
       
    else if ($rootScope.pagechange === 1)
    {
        startclock();
        $scope.counter = 5;

    
    $scope.onTimeout = function()
    {
        
    $scope.counter--;
    mytimeout = $timeout($scope.onTimeout,1000);
    }
    
    var mycountdown =  $timeout($scope.onTimeout,1000);
        
       
    }//Time Enabled

    
    function startclock()
       {
           console.log("Start Clock");
           timesup = setTimeout(callTimeout, 5000);
           console.log(timesup);
       }
       
           
    function callTimeout() {        
   console.log("Timeout : Question Incorrect");
var question = quizservice.getquestion(parseInt($routeParams.questionId));
       
var nextQuestionId = parseInt($routeParams.questionId) + 1;
$rootScope.used = $rootScope.used + 1;
        
$scope.$apply(function() {
$location.path( '/questions/' + nextQuestionId );
});
    
    console.log("Cleared"); 
    $timeout.cancel(timesup);
        
    
        
    }
 })
   

     