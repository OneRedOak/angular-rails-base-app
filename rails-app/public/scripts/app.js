'use strict';

console.log('App.js run');

angular
	.module('app',[
		'ngRoute'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/post/:id', {
				templateUrl: 'views/post.html'
			})
			.otherwise({
				templateUrl: 'views/home.html'
			})
	}]);