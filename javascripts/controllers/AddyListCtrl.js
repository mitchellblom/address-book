app.controller("AddyListCtrl", function($scope, AddyFactory) {	

	$scope.addresses = [];

	let getAddressesThenWriteToDom = () => {
		AddyFactory.getAddressesFromFb().then((addresses) => {
			console.log(addresses);
			$scope.addresses = addresses;
		}).catch((error) => {
			console.log("get error", error);
		});
	};

	getAddressesThenWriteToDom();


	// delete item

	// input change


});