app.controller("AddyNewCtrl", function($http, $location, $q, $rootScope, $scope, FIREBASE_CONFIG, AddyFactory){

	$scope.relationship_options = [
        {'id': 0, 'type': 'Family'},
        {'id': 1, 'type': 'Friend'},
        {'id': 2, 'type': 'Other'},
    ];

	$scope.addNewContact = () => {
		$scope.newContact.uid = $rootScope.user.uid;
		AddyFactory.postNewContact($scope.newContact).then(() => {
			$scope.newContact = {};
			$location.url("/addy/list");
		}).catch((error) => {
			console.log(error);
		});
	};

});