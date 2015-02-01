
  //------------------
  //Image Controller Start
  //Angualr Start

angular.module('iat381-a01')
.controller('imagecontroller',
function Ctrl($scope) {
  $scope.currentImage = 0;

  $scope.availableImages = [
    {
      src: "img/tpi_3.png"
    },
    {
      src: "img/tpi_2.png"
    },
    {
      src: "img/tpi_1.png"
    }
    ];

  $scope.nextButton = function() {
    $scope.currentImage++;
    if ($scope.currentImage > ($scope.availableImages.length - 1)) {
      $scope.currentImage = 0;
    }
  }

  $scope.prevButton = function() {
    $scope.currentImage--;
    if ($scope.currentImage < 0) {
      $scope.currentImage = ($scope.availableImages.length - 1);
    }
  }
  
})
  //End Image Controller
  //------------------

