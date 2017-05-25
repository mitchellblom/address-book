app.factory("RelFactory", function($http, $q, FIREBASE_CONFIG) {

	let getRelationshipList = () => {
		console.log("in getRelationshipList");
    let relationship_options = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/relationships.json`)
        .then((fbRels) => {
          var relCollection = fbRels.data;
          if(relCollection.length !== null) {
          Object.keys(relCollection).forEach((key) => {
            relCollection[key].id = key;
            relationship_options.push(relCollection[key]);
          });
        }
          resolve(relationship_options);
        })
        .catch((error) => {
          reject(error);
        });
		});
	};

	return {
    getRelationshipList:getRelationshipList
  };

});