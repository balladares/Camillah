var app = angular.module('Camillah', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/loves.html',
			controller: 'LovesController'
		});
});

