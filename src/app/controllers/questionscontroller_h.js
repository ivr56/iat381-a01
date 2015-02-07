   angular.module('iat381-a01')
    //------------------
    //Questions Controller Start
    .controller('questionscontroller_h', function($scope,$rootScope, $routeParams,$location, quizservice_h) {

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

      //Change Markup



    })
    //------------------
    //Questions Controller End
