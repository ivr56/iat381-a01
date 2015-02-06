    //Log In Contrller
    //------------------
  angular.module('iat381-a01')  
    .controller('logcontroller', function($scope, $rootScope) {
      
      //start of irene testing
      APP.scores=[];
      //end of irene testing line
      console.log("Check Log"); 
      $rootScope.quizset = Math.floor((Math.random() * 10) + 1);
      console.log("Quiz #: " + $rootScope.quizset); 


      //start of irene testing
      $scope.user=APP.user;
      $scope.start=function(){
      APP.user=$scope.user;
   
      window.location='#/questions/0';

    
          
    };
      //end of irene testing line
    })
  
    //------------------  
    //Log In Contrller End
  
    .controller('resultscheck', 
function($scope, $rootScope) 
    {
    console.log("Results Logged!!");
    $rootScope.time = 0;
    })
  
    .controller('questionscheck', 
function($scope, $rootScope) 
    {
    console.log("Questions Logged!!");
    $rootScope.time = 1;
    })
  
   .controller('logcheck', 
function($scope, $rootScope) 
    {
    console.log("Log Logged!!");
    $rootScope.time = 0;
    })
  
  .controller('maincheck', 
function($scope, $rootScope) 
    {
    console.log("Main Logged!!");
    $rootScope.time = 0;
    })