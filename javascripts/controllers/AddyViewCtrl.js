app.controller("AddyViewCtrl", function($routeParams, $scope, AddyFactory){
    
    $scope.selectedAddy = {};

    AddyFactory.getSingleAddy($routeParams.id).then((results) => {
    	$scope.selectedAddy = results.data;
    }).catch((error) => {
    	console.log(error);
    });

});