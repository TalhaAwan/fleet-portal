angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'views/forklifts.html',
			controller: 'FleetController'
		})

        .when('/forklifts', {
            templateUrl: 'views/forklifts.html',
            controller: 'FleetController'
        })



        .otherwise({
            redirectTo: '/'
        });

	$locationProvider.html5Mode(true);

}]);