(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http','$sce', function($scope,$http,$sce){

  	//'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0'
	$scope.clima = {};

	var url = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=9f50a805aa0089a1edd1829a5db029f0";
	var trustedUrl = $sce.trustAsResourceUrl(url);

  	$http.jsonp(trustedUrl, { jsonpCallbackParam: 'callback' })
    .then(function(json){
    	console.log('success');
      	$scope.clima = json.data;
    })
    .catch( function(error){
      console.warn( error );
    });

    $scope.KelvinCelcius = function(k){
    	c = k - 273.15;
    	c = Math.round(c*100) / 100;
    	return c;
    }
}]);





})();
