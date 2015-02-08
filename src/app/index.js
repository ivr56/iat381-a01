
  //------------------
  //Index.js Start
  //Angualr Start
  var a01 = angular.module('iat381-a01', ['ngRoute', 'angular-flexslider']);


    a01.config(['$routeProvider',
        function($routeProvider, $rootScope) {
          $routeProvider.

            //Result Router
            when('/result', {
              templateUrl: 'result.html',
              controller: 'resultcontroller'
            }).

            //Easy + Medium Question Router
            when('/questions/:questionId', {
              templateUrl: 'questions.html',
              controller: 'questionscontroller'
            }).

            //Hard Question Router
            when('/imgqquestions/:questionId', {
            templateUrl: 'imgqquestions.html',
            controller: 'questionscontrollerh'
            }).

            //Main View Router
            when('/', {
              templateUrl: 'main.html',
              controller: 'logcontroller'
            }).

            //Difficulty Select Router
            when('/log', {
              templateUrl: 'log.html',
              controller: 'logcontroller',
            }).

            //Hard Question Router
            when('/qh1', {
                redirectTo: '/imgqquestions/0'
            }).

            //Easy - Medium Question Router
            when('/q1', {
                redirectTo: '/questions/0'
            }).

            //Defult Route
            otherwise({
              redirectTo: '/'
            });
        }]);



    a01.config(['$controllerProvider', function($controllerProvider) {
      // this option might be handy for migrating old apps, but please don't use it
      // in new ones!
      $controllerProvider.allowGlobals();
    }]);



    a01.run(function ($rootScope) {
    $rootScope.score = 0;
    //global variable for score
    $rootScope.used = 0;
    $rootScope.pagechange = 0;
    $rootScope.timing = 0;
    //global variable for corrected
    $rootScope.quizset = 0;
    $rootScope.resetcount = 0;
    $rootScope.activeresult = 0;
    $rootScope.questioncount = 0;
  });

    //start of irene testing//
    //ADD any variables you want to access in all controllers to the APP variable

    var APP = {};

    APP.user = {
      name:'',
      age:0
    };

    APP.scores = [];
    //end of irene testing line
    //End Index.js
    //------------------


    //Star Injection
    a01.controller('logcontroller', function($scope, $rootScope) {
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
       });

       //------------------
       //Log In Contrller End

       //------------------
       //Quiz Select
       a01.controller('log_quizselect', function($scope, $rootScope) {

         $scope.easy = function ()
         {

           $rootScope.quizset = 1;

         }
          $scope.med = function ()
         {
              $rootScope.quizset = 2;

         }

           $scope.hard = function ()
         {
           $rootScope.quizset = 3;
         }
     });





    a01.controller('scorebarcontroller', function($scope, $rootScope) {

    $scope.scoring = $rootScope.score;
    $scope.correct = $rootScope.corrected;

  });



  //------------------
//Quiz Service Start
a01.service('quizservice', function($rootScope) {

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
      imgsrc: "img/tpi_3.png",
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
      imgsrc: "img/tpi_2.png",
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
      imgsrc: "img/tpi_1.png",
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
      imgsrc: "img/tpi_3.png",
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
      imgsrc: "img/tpi_2.png",
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
      imgsrc: "img/tpi_3.png",
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
      imgsrc: "img/tpi_2.png",
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
      imgsrc: "img/tpi_1.png",
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
      imgsrc: "img/tpi_3.png",
      Answers: [
        {AnswerId:1, Answer:"Sandor Clegane"},
        {AnswerId:2, Answer:"No One"},
        {AnswerId:3, Answer:"Daario Naharis"},
        {AnswerId:4, Answer:"Jaqen H'ghar"}
      ]}

  ];

  //Select Quiz and Set Maximum Length
  this.getquestion = function(questionNumber) {


    var numberofquestions;

  if ($rootScope.quizset === 1)
  {
    console.log("Quiz 1");
    numberofquestions = questions_set1.length;


          if (numberofquestions == questionNumber) {
      return null;
    }

    return questions_set1[questionNumber];
  }

  else if ($rootScope.quizset === 2)
  {
    console.log("Quiz 2");
    numberofquestions = questions_set2.length;

          if (numberofquestions == questionNumber) {
      return null;
    }

    return questions_set2[questionNumber];
  }
  };


});
//------------------
//Quiz Service End



  //------------------
  //Questions Controller Start

  a01.controller('questionscontroller', function($scope,$rootScope, $routeParams,$location, quizservice) {

  $rootScope.pagechange = 1;
  $rootScope.timing = 1;
  console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);

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
    $scope.deck = question.imgsrc;


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



  });
  //------------------
  //Questions Controller End






  a01.service('quizservicehard', function($rootScope) {

        var length21 = 5;
        $rootScope.questioncount = length21;
        console.log("Quiz Loaded #" + $rootScope.quizset + "Number of Questons :" +  $rootScope.questioncount);

        //Question Array
        //Set #1 - HARD


        questions_set3 = [
          {
            QuestionId:1,
            Question:"Man01",
            imgsrc: "img/tpi_1.png",
            CheckId: 1,
            Answers: [
              {AnswerId:1, Answer:"Dead"},
              {AnswerId:2, Answer:"Alive"}
            ]},

          {
            QuestionId:2,
            Question:"Man02",
            imgsrc: "img/tpi_2.png",
            CheckId: 1,
            Answers: [
              {AnswerId:1, Answer:"Dead"},
              {AnswerId:2, Answer:"Alive"}
            ]},

            {
            QuestionId:3,
            Question:"Man03",
            imgsrc: "img/tpi_3.png",
            CheckId: 1,
            Answers: [
              {AnswerId:1, Answer:"Dead"},
              {AnswerId:2, Answer:"Alive"}
            ]},

            {
            QuestionId:4,
            Question:"Man04",
            imgsrc: "img/tpi_1.png",
            CheckId: 1,
            Answers: [
              {AnswerId:1, Answer:"Dead"},
              {AnswerId:2, Answer:"Alive"}
            ]},

            {
            QuestionId:5,
            Question:"Man05",
            CheckId: 1,
            imgsrc: "img/tpi_2.png",
            Answers: [
              {AnswerId:1, Answer:"Dead"},
              {AnswerId:2, Answer:"Alive"}
            ]}
        ];

        //Select Quiz and Set Maximum Length
        this.getquestion = function(questionNumber) {

          var numberofquestions;
          console.log("Quiz 3");
          numberofquestions = questions_set3.length;
                if (numberofquestions == questionNumber) {
            return null;
          }
          return questions_set3[questionNumber];

        };
        //------------------
        //Quiz Service End
     });




  //------------------
  //Hard Questions Controller Start

      a01.controller('questionscontrollerh', function($scope,$rootScope,$routeParams,$location, quizservicehard) {

      $rootScope.pagechange = 1;
      $rootScope.timing = 1;
      console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);

        //irene testing
        $scope.user=APP.user;
        //end of irene testing

        var question = quizservicehard.getquestion(parseInt($routeParams.questionId));


        if (question === null) {
            $location.path( '/result/' );
        }


        //Change Markup
        $scope.hquestionnumber = $routeParams.questionId;
        $scope.hquestion_num = question.QuestionId;
        $scope.hquestion = question.Question;
        $scope.hanswers = question.Answers;
        $scope.hcheck = question.CheckId;
        $scope.hdeck = question.imgsrc;


        //Change Markup

        //Change Markup



      })
      //------------------
      //Hard Questions Controller End




    //------------------
    //Result Controller

    a01.controller('resultcontroller', function($scope, $rootScope) {



       //irene testing
      $scope.user=APP.user;
      //end of irene testing

            //start of irene testing
                    //show scores

            $scope.scores = APP.scores;


         //end of irene testing line



    console.log("End of the Road");
    $rootScope.pagechange = 0;
    $rootScope.timing = 0;
    console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);


    $scope.rs = function()
    {
   $rootScope.quizset = Math.floor((Math.random() * 10) + 1);
    console.log("Quiz Reset with #: " + $rootScope.quizset);
    $rootScope.used = 0;
    console.log("Correct Answers at: " + $rootScope.used);
    $rootScope.score = 0;
    console.log("Reset");
    }

  })


  a01.controller('timectrl_view',
   function($scope,$timeout, $rootScope, $routeParams,$location, quizservice) {
    console.log(timectrl.timesup);


  });


   a01.controller('timerctrl',
   function($scope,$timeout, $rootScope, $routeParams,$location, quizservice) {

var timesup;
    if ($rootScope.pagechange === 0)
    {
        console.log("New View at 0");
    } //Timer Disabled

    else if ($rootScope.pagechange === 1)
    {
        startclock();
        $scope.counter = 5;


    $scope.onTimeout = function()
    {

    $scope.counter--;
    mytimeout = $timeout($scope.onTimeout,1000);
    }

    var mycountdown =  $timeout($scope.onTimeout,1000);


    }//Time Enabled


    function startclock()
       {
           console.log("Start Clock");
           timesup = setTimeout(callTimeout, 5000);
           console.log(timesup);
       }


    function callTimeout() {
   console.log("Timeout : Question Incorrect");
var question = quizservice.getquestion(parseInt($routeParams.questionId));

var nextQuestionId = parseInt($routeParams.questionId) + 1;
$rootScope.used = $rootScope.used + 1;

$scope.$apply(function() {
$location.path( '/questions/' + nextQuestionId );
});

    console.log("Cleared");
    $timeout.cancel(timesup);



    }
 });
 //End Results
 //----------------
