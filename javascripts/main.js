app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG); 
});

app.controller("AddressControl", ($http, $q, $scope, FIREBASE_CONFIG) => {
	$scope.addresses = "Loading addresses...";

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

let getAddressesToDom = () => {
	getAddressesFromFb().then((addresses) => {
		$scope.addresses = addresses;
	}).catch((error) => {
		console.log("get error", error);
	});
};

getAddressesToDom();

});