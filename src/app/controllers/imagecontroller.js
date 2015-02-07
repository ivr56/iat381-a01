  //onehungrymind.com/build-sweet-photo-slider-angularjs-aniamte
angular.module('iat381-a01')
.controller('hardq_controller', function ($scope, quizservice_h)
{

  //Array List of Images for Question Hard
  $scope.tinder = [

      {image: 'img/hard/tpi_1.png'}, //Q1
      {image: 'img/hard/tpi_2.png'}, //Q1
      {image: 'img/hard/tpi_3.png'}, //Q3
      {image: 'img/hard/tpi_4.png'}, //Q4
      {image: 'img/hard/tpi_5.png'}, //Q5
  ];
  //Array List of Images for Question Hard



  $scope.currentIndex = 0;
  //Current Location

  //Tracking Images
  $scope.ccurrentSlideIndex = function (index)
  {
  $scope.currentindex = index;
  };

  $scope.iscurrentSlideIndex = function (index)
  {
    $scope.currentindex = index;
  };



  //Change Images Back
  $scope.prevSlide = funciton ()
  {
    $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    console.log("Switch Previous");
  };
  //Change Image Forward

  $scope.nextSlide = funciton ()
  {
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    console.log("Switch Next");
  };




}//Controller Function End for Image Control



//Animation Class
//Aniamtion Goes Here Later
//End Animation Class



)//Controller End



  //End Image Controller
  //------------------
