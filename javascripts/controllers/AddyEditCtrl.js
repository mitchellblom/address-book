app.controller("AddyEditCtrl", function($location, $routeParams, $scope, AddyFactory){
    $scope.newContact = {};

    $scope.relationship_options = [
        {'id': 0, 'rel': 'Family'},
        {'id': 1, 'rel': 'Friend'},
        {'id': 2, 'rel': 'Other'},
    ];

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