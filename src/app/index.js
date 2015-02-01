
  
  //------------------
  //Index.js Start
  //Angualr Start
  angular.module('iat381-a01', ['ngRoute'])
  
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
            
            when('/', {
              templateUrl: 'log.html',
              controller: 'logcontroller'
            }).
            
            when('/q1', {
                redirectTo: '/questions/0'
            }).
            
            otherwise({
              redirectTo: '/'
            });
        }])
        

    .run(function ($rootScope) {
    $rootScope.score = 0; //global variable for score
    $rootScope.corrected = 0; //global variable for corrected
    $rootScope.quizset = 0;
  
    })
    //End Index.js
    //------------------
 
      
      
 
  
    //------------------
    //Result Controller
    .controller('resultcontroller', function($scope) {
      $scope.text = "hello";
    })
     
    //Log In Contrller
    //------------------
    .controller('logcontroller', function($scope, $rootScope) {
      console.log("Check Log"); 
      $rootScope.quizset = Math.floor((Math.random() * 10) + 1);;
      console.log("Quiz #: " + $rootScope.quizset); 
    })
    //------------------  
    //Log In Contrller End


       
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
      };
      
      
    })
    //------------------ 
    //Questions Controller End
    
    
    //------------------ 
    //Quiz Service Start
    .service('quizservice', function($rootScope) {
      
      var questions_set1;
      var questions_set2;
      
      console.log("Quiz Loaded #" + $rootScope.quizset);
      
      
      //Question Array
      
      //Set #1
      questions_set1 = [
        {
          QuestionId:1, 
          Question:"Buy Power?",
          CheckId: 2,
          Answers: [
            {AnswerId:1, Answer:"Now"},
            {AnswerId:2, Answer:"Your"},
            {AnswerId:3, Answer:"Playing"},
            {AnswerId:4, Answer:"With Power"}
          ]},
        {
          QuestionId:2, 
          Question:"Hello?",
          CheckId: 2,
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]}
      ];
      
      //Set #2
       questions_set2 = [
        {
          QuestionId:1, 
          Question:"Sell Power?",
          CheckId: 2,
          Answers: [
            {AnswerId:1, Answer:"Now"},
            {AnswerId:2, Answer:"Your"},
            {AnswerId:3, Answer:"Playing"},
            {AnswerId:4, Answer:"With Power"}
          ]},
        {
          QuestionId:2, 
          Question:"BYE",
          CheckId: 2,
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]}
      ];
      
      //Select Quiz and Set Maximum Length
      this.getquestion = function(questionNumber) {
        
      var numberofquestions;
      
      if ($rootScope.quizset > 5)
      {
        console.log("Check 1");
        numberofquestions = questions_set1.length;
              if (numberofquestions == questionNumber) {
          return null;
        }
        
        return questions_set1[questionNumber];  
      }
    
      else
      {
        console.log("Ckeck 2");
        numberofquestions = questions_set2.length;
              if (numberofquestions == questionNumber) {
          return null;
        }
        
        return questions_set2[questionNumber];  
      }
      };
      //------------------ 
      //Quiz Service End

        
      
    })