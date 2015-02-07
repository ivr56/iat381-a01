angular.module('iat381-a01',['ngRoute'])
    .service('quizservice_hard', function($rootScope) {

      var length21 = 5;
      $rootScope.questioncount = length21;
      console.log("Quiz Loaded #" + $rootScope.quizset + "Number of Questons :" +  $rootScope.questioncount);

      //Question Array
      //Set #1 - HARD
      questions_set1 = [
        {
          QuestionId:1,
          Question:"Man01",
          CheckId: 1,
          Answers: [
            {AnswerId:1, Answer:"Dead"},
            {AnswerId:2, Answer:"Alive"}
          ]},

        {
          QuestionId:2,
          Question:"Man02",
          CheckId: 1,
          Answers: [
            {AnswerId:1, Answer:"Dead"},
            {AnswerId:2, Answer:"Alive"}
          ]},

          {
          QuestionId:3,
          Question:"Man03",
          CheckId: 1,
          Answers: [
            {AnswerId:1, Answer:"Dead"},
            {AnswerId:2, Answer:"Alive"}
          ]},

          {
          QuestionId:4,
          Question:"Man04",
          CheckId: 1,
          Answers: [
            {AnswerId:1, Answer:"Dead"},
            {AnswerId:2, Answer:"Alive"}
          ]},

          {
          QuestionId:5,
          Question:"Man05",
          CheckId: 1,
          Answers: [
            {AnswerId:1, Answer:"Dead"},
            {AnswerId:2, Answer:"Alive"}
          ]}
      ];

      //Select Quiz and Set Maximum Length
      this.getquestion = function(questionNumber) {

        var numberofquestions;
        console.log("Quiz 3");
        numberofquestions = questions_set1.length;
              if (numberofquestions == questionNumber) {
          return null;
        }
        return questions_set1[questionNumber];

      };
      //------------------
      //Quiz Service End
   });
