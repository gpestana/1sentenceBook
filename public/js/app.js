angular.module('app', ['app.filters', 'app.services', 'app.services']).
	config(['$routerProvider', function ($routerProvider) {
		$routerProvider.
			when('/', {
				templateUrl: 'index',
				controller: IndexCrtl
			}).
			when('/showData', {
				templateUrl: 'partials/showData',
				controller: ShowDataCrtl
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);