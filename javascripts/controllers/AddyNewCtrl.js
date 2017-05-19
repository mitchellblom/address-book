app.controller("AddyNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, AddyFactory){

	$scope.addNewContact = () => {
		console.log("clicked add");
		console.log("scope of newContact", $scope.newContact);
		AddyFactory.postNewContact($scope.newContact).then(() => {
			$scope.newContact = {};
			$location.url("/addy/list");
		}).catch((error) => {
			console.log(error);
		});
	};








});