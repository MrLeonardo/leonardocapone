leonardocapone.directive("progetto", function() { 
    return { 
        restrict: "E", 
        templateUrl: "/template/progetto.html",
        scope: {
            progetto: "="
        }
    }});