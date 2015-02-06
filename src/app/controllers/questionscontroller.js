   angular.module('iat381-a01')   
    //------------------ 
    //Questions Controller Start
    .controller('questionscontroller', function($scope,$rootScope, $routeParams,$location, quizservice) {
      
      //irene testing
      $scope.user=APP.user;
      //end of irene testing

      var question = quizservice.getquestion(parseInt($routeParams.questionId));
 

       
       
      if (question === null) {
          $location.path( '/result/' );
      } 
      
       

      //Change Markup
      $scope.questionnumber = $routeParams.questionId;  
      $scope.question_num = question.QuestionId;
      $scope.question = question.Question;
      $scope.answers = question.Answers;
      $scope.check = question.CheckId;
      $scope.deck = question.imagesrc;
   
       
      //Change Markup 
      
      $scope.answerquestion = function(answerid, answer, checking) {
        console.log("user answered with: " + answerid);
        console.log("CPU answered with: " + checking);
          
          //start of irene testing
          var isCorrect=false;

         //end of irene testing line
        
        //Check Answer
        if (answerid === checking)
        {

          //start of irene testing
          isCorrect=true;

         //end of irene testing line
        console.log("Correct");
        $rootScope.score =  $rootScope.score + 100;
        console.log("Part 2 :" + $rootScope.score);
        $rootScope.used = $rootScope.used + 1;
        }
        else
        {
         console.log("In-Correct");
        $rootScope.score =  $rootScope.score + 0;
        console.log("Part 2 :" + $rootScope.score);
           $rootScope.used = $rootScope.used + 1;
        }
        ///Next Question
          
        
        var nextQuestionId = parseInt($routeParams.questionId) + 1;
        $location.path( '/questions/' + nextQuestionId );
        $rootScope.answered = 1;
          
          //start of irene testing
          APP.scores.push({
            id:answerid, answer:answer, correct:isCorrect
          })

          console.log(APP.scores);

         //end of irene testing line
    
      };
      

      
    })
    //------------------ 
    //Questions Controller End
   
     .controller('endquestionscontroller', function($scope,$rootScope, $routeParams,$location, quizservice, questionscontroller) 
    {
      
       
    //Number of Questions
var tq_questions = 
quizservice.getquestion(numberquestions);
var cq_questions = 
quizservice.getquestion(questionNumber);
   
       if (tq_question == cq_questions)
       {
        console.log("Questions to Results");
       
       }
       
   })
