    //Log In Contrller
    //------------------
  angular.module('iat381-a01')
  
    .controller('logcontroller', function($scope, $rootScope) {
      console.log("Check Log"); 
      $rootScope.quizset = Math.floor((Math.random() * 10) + 1);;
      console.log("Quiz #: " + $rootScope.quizset); 
    })
    //------------------  
    //Log In Contrller End

  