  
    //------------------
    //Result Controller
   angular.module('iat381-a01')   
    .controller('resultcontroller', function($scope, $rootScope) {
   
            //start of irene testing
                    //show scores

            $scope.scores = APP.scores;


         //end of irene testing line



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
   function($scope,$timeout, $rootScope) {
       
    $scope.counter = 15;
    $scope.onTimeout = function()
    {
    $scope.counter--;
    mytimeout = $timeout($scope.onTimeout,1000);
    }
    var mytimeout =       $timeout($scope.onTimeout,1000);
    
    $scope.stop = function()
    {
        $timeout.cancel(mytimeout);
    }
 })
     