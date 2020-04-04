(function(){

	var app = angular.module('universidadApp',[ ]);

	app.controller('listadoCtrl', ['$scope', function($scope){
		$scope.listado = ["Rafael", "Karla", "Yohanan", "Fulano"];

		$scope.listadoProfesores = {
			profesores: [{
				nombre: "Rafael Martienez",
				edad: 28,
				clase: "PEE"
			},
			{
				nombre: "Karla Gonzalez",
				edad: 28,
				clase: "IU"
			},
			{
				nombre: "Mengano Fulano",
				edad: 22,
				clase: "III"
			}]
		};

	}]);
})();
