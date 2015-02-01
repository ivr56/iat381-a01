angular.module('iat381A01', ['ngRoute'])
  
    .config(['$routeProvider', 
        function($routeProvider) {
          $routeProvider.
            when('/result', {
              templateUrl: 'result.html',
              controller: 'resultcontroller'
            }).
            when('/questions/:questionId', {
              templateUrl: 'questions.html',
              controller: 'questionscontroller'
            }).
            otherwise({
              redirectTo: '/questions/0'
            });
        }])
          
    //Route Controller End


    //Result Controller Start
    .controller('resultcontroller', function($scope) {
      $scope.text = "hello";
    })
     
    //Result Controller End

    //Question Controller Start
    
    .controller('questionscontroller', function($scope,$routeParams,$location,quizservice) {
      
      var question = 
        quizservice.getquestion(parseInt($routeParams.questionId));
        
      var score;
      
      if (question === null) {
          $location.path( '/result/' );
      } 
      
      //Markup Change 
      $scope.questionnumber = $routeParams.questionId;  

      $scope.question = question.Question;
      $scope.correct = question.CorrectId; 
      $scope.answers = question.Answers;
      $scope.scoring = score;
  

      //Answer Check Start
      $scope.answerquestion = function(answerid, correctid, score) {
        console.log("user answered with: " + answerid);
        console.log("CPU Answered: " + correctid);
        console.log("Current Score: " + score);
        if (answerid===correctid)
        {
        score = score + 100;
        console.log(score);
        
        }
        //Answer Check End  

       
        //Change Question
        var nextQuestionId = parseInt($routeParams.questionId) + 1;
        $location.path( '/questions/' + nextQuestionId );

      }
  
      
 
    })
    //Question Controller End    
    
    .service('quizservice', function() {
      
      //Load Question Array
      var questions = [
        {
          QuestionId: 1, 
          Question:"No Where",
          CorrectId:1,
          Answers: [
            {AnswerId:1, Answer:"A1"},
            {AnswerId:2, Answer:"A2"},
            {AnswerId:3, Answer:"A3"},
            {AnswerId:4, Answer:"A4"},
            {GuessId:2, Guess:"A2"}
          ]},
    
     
        {
          QuestionId:2, 
          Question:"Q2?", 
          CorrectId:2,
          Answers: [
            {AnswerId:1, Answer:"A1"},
            {AnswerId:2, Answer:"A2"},
            {AnswerId:3, Answer:"A3"},
            {AnswerId:4, Answer:"A4"}
          ],
        },
           {
          QuestionId:3, 
          Question:"Q2?", 
  CorrectId:1,
          Answers: [
            {AnswerId:1, Answer:"A1"},
            {AnswerId:2, Answer:"A2"},
            {AnswerId:3, Answer:"A3"},
            {AnswerId:4, Answer:"A4"}
          ]},
           {
          QuestionId:4, 
          Question:"Q2?", 
          Answers: [
            {AnswerId:1, Answer:"A1"},
            {AnswerId:2, Answer:"A2"},
            {AnswerId:3, Answer:"A3"},
            {AnswerId:4, Answer:"A4"}
          ]}
        
      ];
      //End Question Arra
      
      
      //Load Question Arrays
      this.getquestion = function(questionNumber) {
        var numberofquestions = questions.length;
        
        if (numberofquestions == questionNumber) {
          return null;
        }
        
        return questions[questionNumber];  
      };
      

      
    })
    