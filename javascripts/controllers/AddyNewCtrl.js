app.controller("AddyNewCtrl", function($http, $location, $q, $rootScope, $scope, FIREBASE_CONFIG, AddyFactory){

	$scope.relationship_options = [
        {'id': 0, 'rel': 'Family'},
        {'id': 1, 'rel': 'Friend'},
        {'id': 2, 'rel': 'Other'},
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