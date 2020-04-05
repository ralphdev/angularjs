(function(){

	var app = angular.module('ejemplosApp',[ ]);



	app.controller('mainCtrl', ['$scope','$http', function($scope,$http){


		$scope.profesores = {};
		$scope.tblProfesores = 'parciales/tblProfesores.html';

		// Simple GET request example:
		$http({
		  	method: 'GET',
		  	url: 'json/profesores.json'
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    $scope.profesores = response.data.profesores;
		    console.log(response.data.profesores);

		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log(response);
		  });

	}]);





})();
