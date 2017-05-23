app.controller("AddyNewCtrl", function($http, $location, $q, $rootScope, $scope, FIREBASE_CONFIG, AddyFactory){

	$scope.addNewContact = () => {
		console.log("user id in rootscope: ", $rootScope.user.uid);
		$scope.newContact.uid = $rootScope.user.uid;
		AddyFactory.postNewContact($scope.newContact).then(() => {
			$scope.newContact = {};
			$location.url("/addy/list");
		}).catch((error) => {
			console.log(error);
		});
	};

});