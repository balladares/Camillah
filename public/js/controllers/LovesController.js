app.controller('LovesController', ['$scope', 'LovesServices', function($scope, LovesServices){
	// Get service return ~random love
	LovesServices.GetRandomLove()
	.success(function(data){
		$scope.love = data;
	})
	.error(function(err){
		console.log(err);
	});

	// Get service return ~all loves
	LovesServices.GetAllLoves()
	.success(function(data){
		$scope.loves = data;
	})
	.error(function(err){
		console.log(err);
	});

	$scope.GetRandomLove = function(short){
		LovesServices.GetRandomLove()
	.success(function(data){
		$scope.love = data;
	})
	.error(function(err){
		console.log(err);
	});
	}

	$scope.GetLoveByShort = function(){
		LovesServices.GetLovesByShort($scope.short)
		.success(function(data){
		$scope.love = data;
	})
	.error(function(err){
		console.log(err);
	});
	}
}]);