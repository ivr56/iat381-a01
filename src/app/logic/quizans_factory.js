'use strict';

angular.module('iat381A01')
    .factory('quizservice', function () {
    
        var ansproperty = 0;

        return {
        ansproperty: { data: 0 }
        };
        
});

angular.module('iat381A01' ).controller('checkCntrl', function ($scope, quizservice, $http) {
    
    if (quizservice.ansproperty == 2)
    {
          document.getElementById('q1_head').innerHTML='---ballin---';
   
    }
    else
    {
       document.getElementById('q1_head').innerHTML='---balling---'; 
    }
    
    

   
});

