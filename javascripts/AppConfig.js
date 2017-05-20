app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG); 
});																							// config runs once, run runs when any controller changes

app.config(function($routeProvider){
    $routeProvider
        .when('/addy/list', {
            templateUrl: 'partials/addy-list.html',
            controller: 'AddyListCtrl'
        })
        .when('/addy/new', {
            templateUrl: 'partials/addy-new.html',
            controller: 'AddyNewCtrl'
        })
        .when('/addy/view/:id', {
            templateUrl: 'partials/addy-view.html',
            controller: 'AddyViewCtrl'
        })
        .when('/addy/edit/:id', {
            templateUrl: 'partials/addy-new.html',
            controller: 'AddyEditCtrl'
        })
        .otherwise('addy/list');
});