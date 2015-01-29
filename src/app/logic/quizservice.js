angular.module('iat381A01')
    .factory('sharedProperties', function () {
    
        var property = 'First';
        var test = 0;

    
        if (test < 1)
        {
            document.getElementById('q2_head').innerHTML='Service Ready Now';
     
        }
        else if (test > 1)
        {
            document.getElementById('q2_head').innerHTML='Service Set';
        }
    
    
        return {
            getProperty: function () {
                return test;
            },
            setProperty: function(value) {
                test = value;
            }
        };
    });