app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	$scope.setActive("mAlumnos");

	var codigo = $routeParams.codigo;

	$scope.alumno = {};
	$scope.actualizado = false;
	$scope.insertado = false;

	$scope.creando = false;

	if (codigo == "nuevo") {
		$scope.creando = true;
	}
	else{

		$http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).then(function successCallback(response) {

		    if (response.data.err!== undefined) {
		    	window.location = '#!/alumnos';
		    	return;
		    }
	     	$scope.alumno = response.data;

  		}, function errorCallback(response) {
			console.log(response);
		});

	}
	//Guardar Alumono
	$scope.guardarAlumno = function(){

		if ($scope.creando) {

			$http.post('php/servicios/alumnos.crear.php', $scope.alumno).then(function(response) {

				console.log(response);

				if (response.data.err === false) {
					$scope.insertado = true;
					setTimeout(function(){
						$scope.insertado = false;
						$scope.$apply();
					}, 3500);
				}
		  	});
		}
		else{
			$http.post('php/servicios/alumnos.guardar.php', $scope.alumno).then(function successCallback(response) {

				if (response.data.err === false) {
					$scope.actualizado = true;
					setTimeout(function(){
						$scope.actualizado = false;
						$scope.$apply();
					}, 3500);
				}
		  	}, function errorCallback(response) {
				console.log(response);
			});
		}
	}

}]);