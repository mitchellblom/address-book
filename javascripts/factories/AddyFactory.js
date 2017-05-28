app.factory("AddyFactory", function($http, $q, FIREBASE_CONFIG) {

	let getAddressesFromFb = (userId) => {
		let addresses = [];
		return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json?orderBy="uid"&equalTo="${userId}"`) // ?orderBy="uid"&equalTo="${userId}"
				.then((fbAddys) => {
					var addressCollection = fbAddys.data;
          if (addressCollection.length !== null) {
  					Object.keys(addressCollection).forEach((key) => {
              addressCollection[key].id = key;
              addresses.push(addressCollection[key]);
            });
          }
          resolve(addresses);
        })
        .catch((error) => {
					reject(error);
				});
		});
	};

  let getSingleAddy = (id) => {
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
        .then((results) => {
            resolve(results);
        }).catch((error) => {
            reject(error);
        });
    });
  };

  let editContact = (item) => {
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/addresses/${item.id}.json`, 
        JSON.stringify({
          address: item.address,
          birthday: item.birthday,
          city: item.city,
          country: item.country,
          given_name: item.given_name,
          state: item.state,
          surname: item.surname,
          uid: item.uid,
          zip: item.zip,
          relationship: item.relationship
        })
    	)
      	.then((results) => {
              resolve(results);
          }).catch((error) => {
              reject(error);
          });
        });
  };

  let deleteContact = (addyId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/addresses/${addyId}.json`)
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
      editContact:editContact,
      deleteContact:deleteContact
  };

});