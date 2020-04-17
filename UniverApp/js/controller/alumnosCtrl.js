app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){

	$scope.setActive("mAlumnos");

	$scope.alumnos = {};
	$scope.posicion = 5;

	$http({
	  	method: 'GET',
	  	url: 'php/servicios/alumnos.listado.php'
	}).then(function successCallback(reponse) {
	    $scope.alumnos = reponse.data;
  	}, function errorCallback(reponse) {
		console.log(data);
	});

	$scope.siguientes = function(){
		if ( $scope.alumnos.length > $scope.posicion) {
			return $scope.posicion += 5;
		}
	}

	$scope.anteriores = function(){

		if ( $scope.alumnos.length > 5) {
			return $scope.posicion -= 5;
		}
	}
}]);