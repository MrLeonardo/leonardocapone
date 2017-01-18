leonardocapone.controller("indexController", function($scope, $http){
    $scope.config = {};
    $scope.studi = [];
    $scope.esperienze = [];
    $scope.progetti = [];
    $scope.skills = [];
    $scope.contatti = [];
    
    $scope.getConfig = function() {
        $http({
            url: urlConfig + "/data/config.xml", 
            method: 'GET',
        })
        .success(function (data) {
            var x2js = new X2JS();
            json = x2js.xml_str2json(data);
            
            $scope.config = json.config;
        })
        .error(function (data, status, headers) {   
        });        
    };
    
    $scope.getStudi = function() {
        $http({
            url: urlConfig + "/data/studi.xml", 
            method: 'GET',
        })
        .success(function (data) {
            var x2js = new X2JS();
            json = x2js.xml_str2json(data);

            for (var i = 0; i < json.studi.studio.length; i++) {
                $scope.studi.push(json.studi.studio[i]);
            }
        })
        .error(function (data, status, headers) {   
        });         
    };
    
    $scope.getEsperienze = function() {
        $http({
            url: urlConfig + "/data/esperienze.xml", 
            method: 'GET',
        })
        .success(function (data) {
            var x2js = new X2JS();
            json = x2js.xml_str2json(data);

            for (var i = 0; i < json.esperienze.esperienza.length; i++) {
                $scope.esperienze.push(json.esperienze.esperienza[i]);
            }
        })
        .error(function (data, status, headers) {   
        });    
    };
    
    $scope.getProgetti = function() {
        $http({
            url: urlConfig + "/data/progetti.xml", 
            method: 'GET',
        })
        .success(function (data) {
            var x2js = new X2JS();
            json = x2js.xml_str2json(data);

            for (var i = 0; i < json.progetti.progetto.length; i++) {
                $scope.progetti.push(json.progetti.progetto[i]);
            }
        })
        .error(function (data, status, headers) {   
        });    
    };
    
    $scope.getSkills = function() {
        $http({
            url: urlConfig + "/data/skills.xml", 
            method: 'GET',
        })
        .success(function (data) {
            var x2js = new X2JS();
            json = x2js.xml_str2json(data);

            for (var i = 0; i < json.skills.skill.length; i++) {
                $scope.skills.push(json.skills.skill[i]);
            }
        })
        .error(function (data, status, headers) {   
        });     
    };
    
    $scope.getContatti = function() {
        $http({
            url: urlConfig + "/data/contatti.xml", 
            method: 'GET',
        })
        .success(function (data) {
            var x2js = new X2JS();
            json = x2js.xml_str2json(data);

            for (var i = 0; i < json.contatti.contatto.length; i++) {
                $scope.contatti.push(json.contatti.contatto[i]);
            }
        })
        .error(function (data, status, headers) {   
        });       
    };    
});