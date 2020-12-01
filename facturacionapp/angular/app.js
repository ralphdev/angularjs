var app = angular.module('facturacionApp', [
    'ngRoute',
    'facturacionApp.configuracion'
]);

app.controller('mainCtrl', ['$scope', 'Configuracion', function($scope, Configuracion){

    $scope.config ={};
    //$scope.

    Configuracion.cargar().then(function(){
        $scope.config = Configuracion.config.data;
        console.log($scope.config);
    });
}]);

/** 
 * Rutas de la aplicacion
 * */
app.config(function($routeProvider, $locationProvider) {

    // Habilitar url amigables con el tag html base
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        templateUrl: 'dashboard/dash.html',
        controller: 'mainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});

/** 
 * Filtros
 * */
app.filter('quitarletra', function(){
    
    return function(palabra){
        if(palabra){
            if (palabra.length > 1) {
                return palabra.substr(1);
            }else{
                return palabra;
            }
        }
    }
});