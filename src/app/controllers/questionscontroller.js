   angular.module('iat381-a01')   
    //------------------ 
    //Questions Controller Start
    .controller('questionscontroller', function($scope,$rootScope, $routeParams,$location, quizservice) {
      var question = quizservice.getquestion(parseInt($routeParams.questionId));
 
       
       
      if (question === null) {
          $location.path( '/result/' );
      } 
      
      //Change Markup
      $scope.questionnumber = $routeParams.questionId;  
  
      $scope.question = question.Question;
      $scope.answers = question.Answers;
      $scope.check = question.CheckId;
      $scope.deck = question.imagesrc;
      //Change Markup 
      $scope.answerquestion = function(answerid, answer, checking) {
        console.log("user answered with: " + answerid);
        console.log("CPU answered with: " + checking);
        
        //Check Answer
        if (answerid === checking)
        {
        console.log("Correct");
        $rootScope.score =  $rootScope.score + 100;
        console.log("Part 2 :" + $rootScope.score);
        $rootScope.corrected = $rootScope.corrected + 1;
        }
        else
        {
         console.log("In-Correct");
        $rootScope.score =  $rootScope.score + 0;
        console.log("Part 2 :" + $rootScope.score);
           $rootScope.corrected = $rootScope.corrected + 0;
        }
        ///Next Question
        var nextQuestionId = parseInt($routeParams.questionId) + 1;
        $location.path( '/questions/' + nextQuestionId );
        $rootScope.answered = 1;
          
          
    
      };
      
      
    })
    //------------------ 
    //Questions Controller End