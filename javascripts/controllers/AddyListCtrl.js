app.controller("AddyListCtrl", function($rootScope, $scope, AddyFactory) {	

	$scope.addresses = [];

	let getAddressesThenWriteToDom = () => {
		AddyFactory.getAddressesFromFb($rootScope.user.uid).then((addresses) => {
			$scope.addresses = addresses;
		}).catch((error) => {
			console.log(error);
		});
	};

	getAddressesThenWriteToDom();

	$scope.deleteContactPressed = (id) => {
		AddyFactory.deleteContact(id).then(() => {
			getAddressesThenWriteToDom();
		}).catch((error) => {
			console.log(error);
		});
	};

});