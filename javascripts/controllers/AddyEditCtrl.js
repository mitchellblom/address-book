app.controller("AddyEditCtrl", function($location, $routeParams, $scope, AddyFactory){
    $scope.newContact = {};

    AddyFactory.getSingleAddy($routeParams.id).then((results) => {
    	$scope.newContact = results.data;
    }).catch((error) => {
    	console.log("getSingleItem error", error);
    });

    $scope.addNewContact = () => {
    	AddyFactory.editContact($scope.newContact).then(() => {
    		$location.url('/addy/list');
    	}).catch((error) => {
    		console.log(error);
    	});
    };
});