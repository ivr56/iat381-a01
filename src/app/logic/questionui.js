'use strict';


angular.module('iat381A01' ).controller('QCtrl', function ($scope, quizservice) {
  $scope.name = '2';
    
  $scope.onA1 = function(quizservice) 
  {
      console.log("Checked");
       $scope.name = '100';    
  }
  
  
   $scope.onA2 = function(quizservice)
  {
      console.log("Checked");
       $scope.name = '250';
            document.getElementById('q1_head').innerHTML='---meets---';

       $scope.name = sharedProperties.test ;
  
  }
    
   
   
   $scope.onA3 = function()
  {
      console.log("Checked");
       $scope.name = '300';
      document.getElementById('q1_head').innerHTML='---present---';
    
  }
   
   
   
   
   $scope.onA4 = function()
  {
      console.log("Checked");
       $scope.name = '400';
      document.getElementById('q1_head').innerHTML='---now---';
    
  }
   
   
   
});




