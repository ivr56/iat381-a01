'use strict';


angular.module('iat381A01' ).controller('QCtrl', function ($scope, quizservice) {
  $scope.name = '2';
    
  $scope.onA1 = function() 
  {
      console.log("Checked");
       $scope.name = 'Answered 1';
          quizservice.property.data = 'Angular Service Recieves #1';
        $scope.services = quizservice.property;
  }
  
  
   $scope.onA2 = function()
  {
      console.log("Checked");
       $scope.name = 'Answered 2';
       quizservice.property.data = 'Correct';
        $scope.services = quizservice.property;

  }
    
   
   
   $scope.onA3 = function()
  {
      console.log("Checked");
       $scope.name = 'Answered 3';
            quizservice.property.data = 'Angular Service Recieves #3';
        $scope.services = quizservice.property;
    
  }
   
   
   
   
   $scope.onA4 = function()
  {
      console.log("Checked");
       $scope.name = 'Answered 4';
          quizservice.property.data = 'Angular Service Recieves #4';
        $scope.services = quizservice.property;
    
  }
   
   
   
});




