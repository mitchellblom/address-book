app.controller("AddyNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, AddyFactory){

	$scope.addNewContact = () => {
		$scope.newContact.uid = $rootScope.user.uid;					//////////////// is not putting uid on new written object
		AddyFactory.postNewContact($scope.newContact).then(() => {
			$scope.newContact = {};
			$location.url("/addy/list");
		}).catch((error) => {
			console.log(error);
		});
	};

});