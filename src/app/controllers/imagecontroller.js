


angular.module('iat381-a01')

  //------------------
  //Image Controller Foreground Master

.controller('imagecontroller',
function Ctrl($scope, $rootScope) {
  $scope.currentImage = 0;
    
    if ($rootScope.quizset > 5)
    {
    //Set #1 Image Foreground-1
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
    //Set #1 Image Foreground-1
    else
    {
    //Set #2 Image Foreground-2
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
  //End Image Controller Foreground-2
  //------------------
  //End Image Controller Foreground Master



  //------------------
  //Start Image Controller Background  Master
.controller('bgcntrl', 
function($scope) 
            {
})
            
app.directive('bg-img', function(){
    return function(scope, element, attrs){
        var url = attrs.bg-img;
        element.css({
            'background-image': 'url(' + 'http://placekitten.com/g/250/300' +')',
            'background-size' : 'cover'
        });
    };
})







//DNT ------
/*
//Start Image Controller Background-1
.controller('imagecontroller_bg',
function Ctrl($scope, $rootScope) {
  $scope.currentImage_bg = 0;
    
    //Start Image Controller Background-1
    if ($rootScope.quizset > 5)
    {
    $scope.currentImage_bg = [
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
        
    $scope.currentImage_bg++;
    if ($scope.currentImage_bg > ($scope.currentImage_bg.length - 1)) {
      $scope.currentImage_bg = 0;
           console.log("Changed Image");
        $rootScope.answered = 0;
    }    
    }
    }
    //End Image Controller Background-1
    
    
    else
    {
    //Start Image Controller Background-2
    $scope.currentImage_bg = [
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
    $scope.currentImage_bg++;
    if ($scope.currentImage_bg > ($scope.currentImage_bg.length - 1)) 
    {
        $scope.currentImage_bg = 0;
        console.log("Changed Image");
        $rootScope.answered = 0;
    }    
    }
    }
    //End Image Controller Background-2
    

   
  
})
//End Image Controller Background Master
*/