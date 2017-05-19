app.factory("AddyFactory", function($http, $q, FIREBASE_CONFIG) {

	let getAddressesFromFb = () => {
		let addresses = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
				.then((fbItems) => {
					var addressCollection = fbItems.data;
					console.log(addressCollection);
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

  let getSingleAddy = (id) => {
    return $q((resolve, reject) => {
       $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${id}.json`)
        .then((results) => {
          results.data.id = id;
          resolve(results);
        }).catch((error) => {
          reject(error);
        });
    });
  };




  return {
      getAddressesFromFb:getAddressesFromFb,
      getSingleAddy:getSingleAddy
  };



});