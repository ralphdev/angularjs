(function(){

	var app = angular.module('ejemplosApp',[ ]);

	app.controller('mainCtrl', ['$scope','$http','$sce', function($scope,$http,$sce){

		$scope.geo = {};

		// Simple GET request example:
		//http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
		var url = "http://www.geoplugin.net/json.gp";
		var trustedUrl = $sce.trustAsResourceUrl(url);

	  	$http.jsonp(trustedUrl, {jsonpCallbackParam: 'jsoncallback'})
        .then(function(json){
          $scope.geo = json.data;
        })
        .catch( function(error){
          console.warn( error );
        });

	}]);

})();
