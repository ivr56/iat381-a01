  
    //------------------
    //Result Controller
   angular.module('iat381-a01')   
    .controller('resultcontroller', function($scope) {
      console.log("End of the Road");
       
    $scope.rs = function($rootScope)
    {
   $rootScope.quizset = Math.floor((Math.random() * 10) + 1);;
      console.log("Quiz Reset with #: " + $rootScope.quizset); 
    }
    
    })
     