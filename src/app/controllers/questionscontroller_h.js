//------------------
//Questions Controller Start
   angular.module('iat381-a01')
    .controller('questionscontroller_h', function($scope,$rootScope,$routeParams,$location, quizservice_hard) {

    $rootScope.pagechange = 1;
    $rootScope.timing = 1;
    console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);

      //irene testing
      $scope.user=APP.user;
      //end of irene testing

      var question = quizservice_hard.getquestion(parseInt($routeParams.questionId));


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

      //Change Markup



    })
    //------------------
    //Questions Controller End
