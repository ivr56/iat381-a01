  
    //------------------
    //Result Controller
   angular.module('iat381-a01')   
    .controller('resultcontroller', function($scope, $rootScope) {
      console.log("End of the Road");
       
    $scope.rs = function()
    {
   $rootScope.quizset = Math.floor((Math.random() * 10) + 1);;
      console.log("Quiz Reset with #: " + $rootScope.quizset); 
    $rootScope.answered = 0;
    $rootScope.score = 0;
    console.log("Reset"); 
    }
    
    })
     