    //Log In Contrller
    //------------------
  angular.module('iat381-a01')
  
    .controller('logcontroller', function($scope, $rootScope) {
      
      //start of irene testing
      APP.scores=[];
      //end of irene testing line
      console.log("Check Log"); 
      $rootScope.quizset = Math.floor((Math.random() * 10) + 1);;
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

  