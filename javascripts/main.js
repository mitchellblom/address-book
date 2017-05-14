app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG); 
});

var app = angular.module("AddressBook", []);	// make a new prototype from angular.min.js profile. array is for plugins

app.controller("AddressControl", ($scope) => {
	$scope.something = "Something";						// angular variables to use go in parens
});