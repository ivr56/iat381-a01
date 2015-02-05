angular.module("iat381-a01")
.controller("counterCtrl",['$scope','$timeout', function($scope,$RootScope, $timeout){

 //Adding initial value for counter
 //counter modelimiz için ilk değer atamasını yaptık.   
$scope.counter = 100;
var stopped;

//timeout function
//1000 milliseconds = 1 second
//Every second counts
//Cancels a task associated with the promise. As a result of this, the //promise will be resolved with a rejection.  
$scope.countdown = function() {
    stopped = $timeout(function() {
    console.log($scope.counter);
     $scope.counter--;  
     
     $scope.countdown();   
    }, 1000);
  };
   
    
$scope.stop = function(){
   $timeout.cancel(stopped);
    
    } 


}])