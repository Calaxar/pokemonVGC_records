function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var app = angular.module("myApp", ['ngRoute']);
app.controller("myCtrl", function ($scope, $http) {
	$http.get("data/oceania2017.json").then(
		function(response) {
			$scope.oceania2017 = response.data;
		},
		function(response) {
			$scope.error = "Get request failed - oceania2017";
		});
	$http.get("data/europe2017.json").then(
		function(response) {
			$scope.europe2017 = response.data;
		},
		function(response) {
			$scope.error = "Get request failed - europe2017";
		});
	$http.get("data/latinAmerican2017.json").then(
		function(response) {
			$scope.latinAmerican2017 = response.data;
		},
		function(response) {
			$scope.error = "Get request failed - latinAmerican2017";
		});
	$http.get("data/northAmerican2017.json").then(
		function(response) {
			$scope.northAmerican2017 = response.data;
		},
		function(response) {
			$scope.error = "Get request failed - northAmerican2017";
		});
	$http.get("data/world2017.json").then(
		function(response) {
			$scope.world2017 = response.data;
		},
		function(response) {
			$scope.error = "Get request failed - world2017";
		});
});
app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider.when("/:infoID", {templateUrl: "templates/custom_template.html", controller: "infoController"}).when("/", {templateUrl: "templates/custom_template.html", controller: "infoController"});
});
app.controller("infoController", function ($scope, $routeParams) {
	
	switch ($routeParams.infoID) {
		case "oceania2017" : 
		default : 
			$scope.viewInfoID = $scope.oceania2017;
			break;
		case "europe2017" : $scope.viewInfoID = $scope.europe2017;
			break;
		case "latinAmerican2017" : $scope.viewInfoID = $scope.latinAmerican2017;
			break;
		case "northAmerican2017" : $scope.viewInfoID = $scope.northAmerican2017;
			break;
		case "world2017" : $scope.viewInfoID = $scope.world2017;
			break;
			}
});