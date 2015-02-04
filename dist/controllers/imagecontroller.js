
  //------------------
  //Image Controller Start
  //Angualr Start

angular.module('iat381-a01')
.controller('imagecontroller',
function Ctrl($scope, $rootScope) {
  $scope.currentImage = 0;
    
    if ($rootScope.quizset > 5)
    {
    //Set #1 Image Start
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

    if ($rootScope.answered === 1)
    {
        
    $scope.currentImage++;
    if ($scope.currentImage > ($scope.availableImages.length - 1)) {
      $scope.currentImage = 0;
           console.log("Changed Image");
        $rootScope.answered = 0;
    }    
    }
    }
 //Set #1 Image End
    else
    {
    //Set #1 Image Start
    $scope.availableImages = [
    {
      src: "img/tpi_1.png"
    },
    {
      src: "img/tpi_2.png"
    },
    {
      src: "img/tpi_3.png"
    }
    ];

    if ($rootScope.answered === 1)
    {
    $scope.currentImage++;
    if ($scope.currentImage > ($scope.availableImages.length - 1)) {
      $scope.currentImage = 0;
           console.log("Changed Image");
        $rootScope.answered = 0;
    }    
    }
    }

    

   
  
})
  //End Image Controller
  //------------------

