'use strict';


angular.module('iat381A01' ).controller('resultCtrl', function ($scope, quizservice, quizcalc) {

    if (quizservice.property == 'Correct')
    {
quizcalc.propertyint.data = myQuizcalc.propertyint.data + 1;
    }
    else
    {
quizcalc.propertyint.data = myQuizcalc.propertyint.data;
    }
    

});


