function IndexCrtl($scope, $http) {
	$http.get('api/').
	success(function(data) {
		$scope.form = data;
	});
}

function ShowDataCrtl($scope, $http) {
	$http.get('api/showData').
	success(function(data) {
		$scope.form = data;
	});
}