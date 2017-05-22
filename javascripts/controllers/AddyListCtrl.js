app.controller("AddyListCtrl", function($scope, AddyFactory) {	

	$scope.addresses = [];

	let getAddressesThenWriteToDom = () => {
		AddyFactory.getAddressesFromFb().then((addresses) => {
			$scope.addresses = addresses;
		}).catch((error) => {
			console.log("get error", error);
		});
	};

	getAddressesThenWriteToDom();

	$scope.deleteContactPressed = (id) => {
		console.log("delete pressed");
		AddyFactory.deleteContact(id).then(() => {
			getAddressesThenWriteToDom();
		}).catch((error) => {
			console.log(error);
		});
	};

});