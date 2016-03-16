'use strict';

console.log('App.js run');

angular
	.module('app',[
		'ngRoute'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.otherwise({
				templateUrl: 'views/home.html'
			})
	}]);