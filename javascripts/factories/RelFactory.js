app.factory("RelFactory", function($http, $q, FIREBASE_CONFIG) {

	let getRelList = () => {
		console.log("in getRelList");
    let rel_options = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/relationships.json`)
        .then((fbRels) => {
          var relCollection = fbRels.data;
          if(relCollection.length !== null) {
          Object.keys(relCollection).forEach((key) => {
            relCollection[key].id = key;
            rel_options.push(relCollection[key]);
          });
        }
          resolve(rel_options);
        })
        .catch((error) => {
          reject(error);
        });
		});
	};

	return {
    getRelList:getRelList
  };

});