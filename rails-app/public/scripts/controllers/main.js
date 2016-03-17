'use strict';

angular.module('app')
	.controller('MainCtrl', ['$http', function($http) {

		var mainCtrl = this;

		// Retrieve posts on page load
		$http({
			method: 'GET',
			url: 'api/posts'
		}).success(function(data) {
			mainCtrl.posts = data.posts;
			console.log(mainCtrl.posts);
		});

		mainCtrl.submitNewPost = function() {

			var newPost = {
				title: mainCtrl.newPost.title,
				link: mainCtrl.newPost.link || null,
				text: mainCtrl.newPost.text
			}

			$http({
				method: 'POST',
				url: 'api/post',
				data: newPost
			}).success(function() {

				$('.modal-backdrop.fade.in').hide(); // hide modal background

				window.location = "#home";
			});
		}

	}]);