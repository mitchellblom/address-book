let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    var logged = AuthFactory.isAuthenticated();

    var appTo;

    if (currRoute.originalPath) {
      appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
    }
  });
});

app.config(function($routeProvider){
    $routeProvider
        .when('/auth', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl'
        })
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
        .when('/logout', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl',
            resolve: {isAuth}
        })
        .otherwise('/auth');
});