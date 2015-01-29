'use strict';


angular.module('iat381A01' ).controller('QCtrl', function ($scope, quizservice) {
  $scope.name = '2';
    
  $scope.onA1 = function() 
  {
      console.log("Checked");
       $scope.name = 'Answered 1';
          quizservice.ansproperty.data = 1;
        $scope.services = quizservice.ansproperty;
      

  };
  
  
   $scope.onA2 = function()
  {
      console.log("Checked");
       $scope.name = 'Answered 2';
       quizservice.ansproperty.data = 2;
        $scope.services = quizservice.ansproperty;
       $scope.indexscore = 100;
  };
    
   
   
   $scope.onA3 = function()
  {
      console.log("Checked");
       $scope.name = 'Answered 3';
            quizservice.ansproperty.data = 3;
        $scope.services = quizservice.ansproperty;
    
  };
   
   
   
   
   $scope.onA4 = function()
  {
      console.log("Checked");
       $scope.name = 'Answered 4';
          quizservice.ansproperty.data = 4;
        $scope.services = quizservice.ansproperty;
    
  };
   
   
   
});




