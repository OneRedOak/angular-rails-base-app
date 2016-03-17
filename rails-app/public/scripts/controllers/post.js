'use strict';

angular.module('app')
	.controller('PostCtrl', ['$http', '$routeParams', function($http, $routeParams) {

		var mainCtrl = this;

		// Retrieve posts on page load
		$http({
			method: 'GET',
			url: 'api/post/' + $routeParams.id
		}).success(function(data) {

			mainCtrl.post = data.post;
			console.log('data', data);

		});

	}]);