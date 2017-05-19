app.controller("AddyNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, ItemFactory){

	$scope.addNewContact = () => {
		console.log("clicked add");
		console.log("scope of newContact", $scope.newContact);
		postNewContact($scope.newContact).then(() => {
			$scope.newContact = {};
			$scope.showListView = true;
			getAddressesThenWriteToDom();
		}).catch((error) => {
			console.log(error);
		});
	};








});