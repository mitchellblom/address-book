app.controller("AddyEditCtrl", function($location, $routeParams, $scope, AddyFactory){
    $scope.newContact = {};

    $scope.relationship_options = [
        {'id': 0, 'type': 'Family'},
        {'id': 1, 'type': 'Friend'},
        {'id': 2, 'type': 'Other'}
    ];

    AddyFactory.getSingleAddy($routeParams.id).then((results) => {
    	$scope.newContact = results.data;
        results.data.birthday = new Date(results.data.birthday);
    }).catch((error) => {
    	console.log(error);
    });

    $scope.addNewContact = () => {
    	AddyFactory.editContact($scope.newContact).then(() => {
    		$location.url('/addy/list');
    	}).catch((error) => {
    		console.log(error);
    	});
    };
});