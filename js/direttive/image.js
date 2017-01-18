leonardocapone.directive("image", function() { 
    return { 
        restrict: "E", 
        templateUrl: "/template/image.html",
        scope: {
            image: "="
        }
    }});