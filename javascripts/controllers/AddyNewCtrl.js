app.controller("AddyNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, AddyFactory){

	$scope.addNewContact = () => {
		AddyFactory.postNewContact($scope.newContact).then(() => {
			$scope.newContact = {};
			$location.url("/addy/list");
		}).catch((error) => {
			console.log(error);
		});
	};








});