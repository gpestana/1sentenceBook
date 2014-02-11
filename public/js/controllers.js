function IndexCrtl($scope, $http) {
	$http.get('api/').
	
	console.log("aaaa");

	success(function(data) {
		$scope.form = data;
	});
}

function ShowDataCrtl($scope, $http) {
	console.log("ShowDataCrtl - 1");
	$http.get('/api/showData/').success(
		function(data, status, headers, config) {
			console.log("ShowDataCrtl - 2");		
			$scope.entries = data.entries;	
		});
	console.log("ShowDataCrtl - 3");
}
