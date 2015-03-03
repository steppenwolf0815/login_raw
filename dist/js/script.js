var app = angular.module("login", []);

	//Controller
	app.controller("loginController", [ '$scope', '$http', '$sce', '$interval', function($scope, $http, $sce, $interval) 
	{
		$scope.submitted = false;
		$scope.loggedIn=false;
		$scope.login = function () 
		{
 			if ( $scope.form.$valid && $scope.loginRequest() ) 
			{
				$scope.navigate("/restricted");
				$scope.loggedIn=true;
			} 
			else 
			{
				$scope.loggedIn=false;
			}
		}
		
		$scope.navigate = function ( to )
		{
			$location.url( to );
		}
	}])
	
	.directive('tooltip', ['$window', function ($window) 
	{
		return {

		  templateUrl: function(elem, attr)
		  {
			  return 'templates/tooltip_'+attr.tooltip+'.html';
		  },
		  link:function(scope, element, attrs) 
		  {
			for (var i in element.children()[0])
			{
				var elem = angular.element(element.children()[0]);
				elem.parent().append(angular.element(element.children()[0]));	
			}			
		  }
	  };
	}]);
