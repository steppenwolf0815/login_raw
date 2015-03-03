var template_path="templates/";
var app = angular.module("login", ['ngRoute']);

	app
	
	.config(function($routeProvider) 
	{
		$routeProvider
		.when('/restricted', 
		{
			templateUrl: template_path + 'view_restricted.html'
		})
		.when('/', 
		{
			templateUrl: template_path + 'view_login.html'
		})
		.otherwise(
		{
			redirectTo: '/'
		});
	})

	//Controller
	.controller("loginController", [ '$scope', '$http', '$sce', '$interval', function($scope, $http, $sce, $interval) 
	{
		$scope.submitted = false;
		$scope.loggedIn=false;
		
		
		$scope.login = function () 
		{
 			if ( $scope.form.$valid && $scope.loginRequest() ) 
			{
				$scope.navigate('restricted');
				$scope.loggedIn=true;
			} 
			else 
			{
				$scope.loggedIn=false;
			}
		}
		
		$scope.loginRequest = function()
		{
			return true;
		}
		
		$scope.navigate = function ( to )
		{
			$location.url( to );
		}
		
	}])
	
	.directive('dktooltip', ['$window', function ($window) 
	{
		return {

		  templateUrl: function(elem, attr)
		  {
			  return 'templates/tooltip_'+attr.dktooltip+'.html';
		  },
		  link:function(scope, element, attrs) 
		  {
			for (var i in element.children()[0])
			{
				var elem = angular.element(element.children()[0]);
				elem.parent().after(angular.element(element.children()[0]));	
			}			
		  }
	  };
	}]);
