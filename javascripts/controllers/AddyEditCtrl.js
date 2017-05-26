app.controller("AddyEditCtrl", function($location, $routeParams, $scope, AddyFactory, RelFactory){
    $scope.newContact = {};
    // $scope.rel_options = []; 

    // RelFactory.getRelList().then((results) => {
    //     console.log(results.data);
    //     $scope.rel_options = results.data;
    // }).catch((error) => {
    //     console.log(error);
    // });

    $scope.relationship_options = [                              // switch commented blocks for control testing
        {'id': 0, 'type': 'Family'},
        {'id': 1, 'type': 'Friend'},
        {'id': 2, 'type': 'Other'}
    ];

    AddyFactory.getSingleAddy($routeParams.id).then((results) => {
    	$scope.newContact = results.data;
        results.data.dueDate = new Date(results.data.dueDate);
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