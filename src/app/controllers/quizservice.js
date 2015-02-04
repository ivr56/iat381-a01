
    //------------------ 
    //Quiz Service Start
   angular.module('iat381-a01',['ngRoute'])  
    .service('quizservice', function($rootScope) {
      
      var questions_set1;
      var questions_set2;
      
      console.log("Quiz Loaded #" + $rootScope.quizset);
      
      
      //Question Array
      
      //Set #1 - EASY
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
          ]},
               {
          QuestionId:3, 
          Question:"Hello?",
          CheckId: 2,   
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]},
               {
          QuestionId:4, 
          Question:"Hello?",
          CheckId: 2,   
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]},
               {
          QuestionId:5, 
          Question:"Hello?",
          CheckId: 2,   
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]}
      ]
      //Set #2 - MEDIUM
       questions_set2 = [
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
          ]},
               {
          QuestionId:3, 
          Question:"Hello?",
          CheckId: 2,   
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]},
               {
          QuestionId:4, 
          Question:"Hello?",
          CheckId: 2,   
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]},
               {
          QuestionId:5, 
          Question:"Hello?",
          CheckId: 2,   
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]}
      ]
       
       //Set #3 - HARD
       questions_set3 = [
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
          ]},
               {
          QuestionId:3, 
          Question:"Hello?",
          CheckId: 2,   
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]},
               {
          QuestionId:4, 
          Question:"Hello?",
          CheckId: 2,   
          Answers: [
            {AnswerId:1, Answer:"Good"},
            {AnswerId:2, Answer:"Luck"},
            {AnswerId:3, Answer:"Good"},
            {AnswerId:4, Answer:"Night"}
          ]},
               {
          QuestionId:5, 
          Question:"Hello?",
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