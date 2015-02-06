
    //------------------ 
    //Quiz Service Start
   angular.module('iat381-a01',['ngRoute'])  
    .service('quizservice', function($rootScope) {
      
      var questions_set1;
      var questions_set2; 
      var length12 = 5;
       
    $rootScope.questioncount = length12;
   
      console.log("Quiz Loaded #" + $rootScope.quizset + "Number of Questons :" +  $rootScope.questioncount);
      

      //Question Array
      
      //Set #1 - EASY
      questions_set1 = [
        {
          QuestionId:1, 
          Question:"What is the name of the primary continent portrayed in Game of Thrones?",
          CheckId: 1,
          Answers: [
            {AnswerId:1, Answer:"Westeros"},
            {AnswerId:2, Answer:"Essos"},
            {AnswerId:3, Answer:"Dorne"},
            {AnswerId:4, Answer:"Valyria"}
          ]},
        {
          QuestionId:2, 
          Question:"Which major family is known to always pay their debts?",
          CheckId: 4,   
          Answers: [
            {AnswerId:1, Answer:"Targaryen"},
            {AnswerId:2, Answer:"Greyjoy"},
            {AnswerId:3, Answer:"Tully"},
            {AnswerId:4, Answer:"Lannister"}
          ]},
               {
          QuestionId:3, 
          Question:"Fill in the blank: _______ is coming:",
          CheckId: 4,   
          Answers: [
            {AnswerId:1, Answer:"Death"},
            {AnswerId:2, Answer:"Summer"},
            {AnswerId:3, Answer:"Salvation"},
            {AnswerId:4, Answer:"Winter"}
          ]},
               {
          QuestionId:4, 
          Question:"What group primarily consists of convicted criminals?",
          CheckId: 3,   
          Answers: [
            {AnswerId:1, Answer:"The Faceless Men"},
            {AnswerId:2, Answer:"The Brotherhood without Banners"},
            {AnswerId:3, Answer:"The Night’s Watch"},
            {AnswerId:4, Answer:"The Golden Company"}
          ]},
               {
          QuestionId:5, 
          Question:"Identify the family that uses this sigil:",
          CheckId: 2,   
          Answers: [
            {AnswerId:1, Answer:"Stark"},
            {AnswerId:2, Answer:"Lannister"},
            {AnswerId:3, Answer:"Baratheon"},
            {AnswerId:4, Answer:"Targaryen"}
          ]}
      ]
      //Set #2 - MEDIUM
       questions_set2 = [
        {
          QuestionId:1, 
          Question:"Who was proclaimed the “King of the North”?",
          CheckId: 1,
          Answers: [
            {AnswerId:1, Answer:"Robb Stark"},
            {AnswerId:2, Answer:"Tyrion Lannister"},
            {AnswerId:3, Answer:"Peter Baelish"},
            {AnswerId:4, Answer:"Mance Rayder"}
          ]},
        {
          QuestionId:2, 
          Question:"What is the name of the throne belonging to Balon Greyjoy?",
          CheckId: 1,   
          Answers: [
            {AnswerId:1, Answer:"The Seastone Chair"},
            {AnswerId:2, Answer:"The Iron Throne"},
            {AnswerId:3, Answer:"The Throne of Winter"},
            {AnswerId:4, Answer:"The Seat of Dorne"}
          ]},
               {
          QuestionId:3, 
          Question:"Which house is identified by a sigil of a flayed man?",
          CheckId: 1,   
          Answers: [
            {AnswerId:1, Answer:"House Bolton"},
            {AnswerId:2, Answer:"House Martell"},
            {AnswerId:3, Answer:"House Tarly"},
            {AnswerId:4, Answer:"House Mormont"}
          ]},
               {
          QuestionId:4, 
          Question:"Which of these is not a location in Westeros?",
          CheckId: 4,   
          Answers: [
            {AnswerId:1, Answer:"Sunspear"},
            {AnswerId:2, Answer:"Highgarden"},
            {AnswerId:3, Answer:"Harrenhal"},
            {AnswerId:4, Answer:"Bravos"}
          ]},
               {
          QuestionId:5, 
          Question:"What is the name of this character?",
          CheckId: 4,   
          Answers: [
            {AnswerId:1, Answer:"Sandor Clegane"},
            {AnswerId:2, Answer:"No One"},
            {AnswerId:3, Answer:"Daario Naharis"},
            {AnswerId:4, Answer:"Jaqen H'ghar"}
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
        console.log("Quiz 1");
        numberofquestions = questions_set1.length;

          
              if (numberofquestions == questionNumber) {
          return null;
        }
        
        return questions_set1[questionNumber];  
      }
    
      else
      {
        console.log("Quiz 2");
        numberofquestions = questions_set2.length;

              if (numberofquestions == questionNumber) {
          return null;
        }
        
        return questions_set2[questionNumber];  
      }
      };
      //------------------ 
      //Quiz Service End
       
   });
