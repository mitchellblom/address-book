app.controller("AddyViewCtrl", function($routeParams, $scope, AddyFactory){
    $scope.selectedAddy = {};

    console.log("routeParams Id: ", $routeParams.id);

    AddyFactory.getSingleAddy($routeParams.id).then((results) => {
    	console.log("getSingleAddy Id: ", results.data);
    	$scope.selectedAddy = results.data;
    }).catch((error) => {
    	console.log(error);
    });

});