app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG); 
});

app.controller("AddressControl", ($http, $q, $scope, FIREBASE_CONFIG) => {
	$scope.addresses = [];
	$scope.showListView = true;
	$scope.newContact = {};

	$scope.newContactView = () => {
		$scope.showListView = false;
	};

	$scope.allContactsView = () => {
		$scope.showListView = true;
	};

	let getAddressesFromFb = () => {
		let addresses = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
				.then((fbItems) => {
					var addressCollection = fbItems.data;
					Object.keys(addressCollection).forEach((key) => {
						addressCollection[key].id = key;
						addresses.push(addressCollection[key]);
					});
					resolve(addresses);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};

	let getAddressesThenWriteToDom = () => {
		getAddressesFromFb().then((addresses) => {
			$scope.addresses = addresses;
		}).catch((error) => {
			console.log("get error", error);
		});
	};

	getAddressesThenWriteToDom();

	let postNewContact = (newContactInfo) => {
		console.log(newContactInfo);
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newContactInfo))
				.then((results) => {
					resolve(results);
				}).catch((error) => {
					reject(error);
				});
		});
	};

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