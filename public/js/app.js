angular.module('app', ['app.filters', 'app.services', 'app.services']).
config(['$routeProvider', '$locationProvider', 
	function ($routeProvider, $locationProvider) {
		$routeProvider.
		when('/', {
			templateUrl: '/',
			controller: ShowDataCrtl
		}).
		when('/showData', {
			templateUrl: 'partials/showData',
			controller: ShowDataCrtl
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);