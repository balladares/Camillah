var app = angular.module('Camillah', ['ngRoute', 'ngAnimate'])
.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/loves.html',
			controller: 'LovesController'
		});
});

