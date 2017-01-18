leonardocapone.directive("contatto", function() { 
    return { 
        restrict: "E", 
        templateUrl: "/template/contatto.html",
        scope: {
            contatto: "="
        }
    }});