app.factory("AddyFactory", function($http, $q, FIREBASE_CONFIG) {

	let getAddressesFromFb = () => {
		let addresses = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
				.then((fbAddys) => {
					var addressCollection = fbAddys.data;
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
  	console.log("getSingleAddy firing", id);
    return $q((resolve, reject) => {
       $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses/${id}.json`)
        .then((results) => {
          results.data.id = id;
          resolve(results);
        }).catch((error) => {
          reject(error);
        });
    });
  };

  let postNewContact = (newAddy) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newAddy))
        .then((resultz) => {
            resolve(resultz);
        }).catch((error) => {
            reject(error);
        });
    });
  };

  let editContact = (item) => {
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/items/${item.id}.json`, 
        JSON.stringify({
        	given_name: item.given_name,
        	surname: item.surname,
          address: item.address,
          city: item.city,
          state: item.state,
          zip: item.zip,
          country: item.country
        })
    	)
      	.then((results) => {
              resolve(results);
          }).catch((error) => {
              reject(error);
          });
        });
  };

  return {
      getAddressesFromFb:getAddressesFromFb,
      getSingleAddy:getSingleAddy,
      postNewContact:postNewContact,
      editContact:editContact
  };



});