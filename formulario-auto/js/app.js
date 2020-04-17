var app = angular.module('bonusApp',[ 'jcs-autoValidate' ]);

angular.module('bonusApp')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {

        defaultErrorMessageResolver.setI18nFileRootPath('js/lib/lang');
        defaultErrorMessageResolver.setCulture('es-CO');

        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          errorMessages['edadMinima'] = 'Debe ser mayor a {0} años de edad';
          errorMessages['edadMaxima'] = 'Debe ser menor a {0} años de edad';
        });
    }
]);

app.controller('mainCtrl', ['$scope', function($scope){

	$scope.formData = {};


	$scope.guardar_datos = function(){

		console.log("Posteando...");
	}
}]);
