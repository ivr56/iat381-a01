    //Log In Contrller
    //------------------
  angular.module('iat381-a01')  
    .controller('logcontroller', function($scope, $rootScope) {
      
 $rootScope.pagechange = 0;
    $rootScope.timing = 0;
    console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);  
      
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

      $scope.rstart=function(){
         APP.scores=[];
         window.location='#/questions/0';
      }
      //end of irene testing line
    })
  
    //------------------  
    //Log In Contrller End
  
  //------------------  
    //Quiz Select
  .controller('log_quizselect', function($scope, $rootScope) {
      
      $scope.easy = function ()
      {
  
        $rootScope.quizset = 1;

      }
       $scope.med = function ()
      {
           $rootScope.quizset = 2;    

      }
           $rootScope.quizset = 3;
        $scope.hard = function ()
      {
      }
  })
