app.service('LovesServices', ['$http', '$routeParams', function($http, $routeParams){
	// Url Services definitions
	var Loves = 'http://localhost:3000/api/loves';
	var LovesByShort = 'http://localhost:3000/api/loves/';
	var LoveRandom = 'http://localhost:3000/api/random/loves/';

	// Get all loves
	this.GetAllLoves = function(){
		var REQ = {
			url: Loves,
			method: 'GET'
		};

		return $http(REQ);
	};

	// Get loves by short
	this.GetLovesByShort = function(short){
		if(short != null){
			var REQ = {
				url: LovesByShort + short,
				method: 'GET'
			};

			return $http(REQ);
		}else{
			console.log("Error: Param cant be null");
		}		
	}

		// Get random love
	this.GetRandomLove = function(){
		var REQ = {
			url: LoveRandom,
			method: 'GET'
		};

		return $http(REQ);
	};
}]);