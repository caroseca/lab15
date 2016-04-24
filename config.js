var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when("/external", {
			controller: "inputcontroller",
			templateUrl: "external.html"
		})
		.when("/input", {
			controller: "inputcontroller",
			templateUrl: "input.html"
		})
		.otherwise({redirectTo: "/"});
});
