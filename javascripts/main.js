var app = angular.module("AddressBook", []);	// make a new prototype from angular.min.js profile. array is for plugins
											// name in quotes must be the same as the html. THE SAME!!!

app.controller("ToDom", ($scope) => {			//quotes are name of controller, usually has ctrl in it in PaschalCase
	$scope.something = "Something";						// angular variables to use go in parens
});	



// DO THIS::
// Put variable in the controller and write it to the dom. Put this one in Exercises!