/*
* Config variables should be in a config file
* 
*/
var template_path="templates/";

/*
* The angular module for the app
* 
*/
var app = angular.module("login", ['ngRoute']);
	
	/*
	* Route Provider provides routes ;)
	* 
	*/
	app.config(function($routeProvider) 
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

	/*
	* Controller for the login template
	* 
	*/
	.controller("loginController", [ '$rootScope', '$scope', '$http', '$sce', '$interval', '$location', function($rootScope, $scope, $http, $sce, $interval, $location) 
	{
		$scope.submitted = false;
		$scope.loggedIn=false;

		/*
		* Handles the login
		* 
		*/
		$scope.login = function () 
		{
 			if ( $scope.form.$valid && $scope.loginRequest() ) 
			{
				$scope.navigate('restricted');
				$scope.loggedIn=true;
				$rootScope.loggedIn=true;
			}else 
			{
				$scope.showErrorMsg('Fehler','Der Benutzername oder das Passwort sind falsch!');
				$scope.loggedIn=false;
				$rootScope.loggedIn=false;
			}
		}
		
		/*
		* Quick and dirty -> shows a modal errormessage
		* 
		*/
		$scope.showErrorMsg = function( title, message)
		{
			$('<div></div>')
			.appendTo('.wrapper')
			.addClass('message')
			.attr('title',title)
			.html( message )
			.dialog(
            {
				modal: true,
				buttons: 
	            {
	            	Ok: function() 
	            	{
			            $( this ).dialog( "close" );
			            $( this ).remove();
		            }
            	}
        	});
		}

		/*
		* [DUMMY] checks the validity of the the credentials  
		* To Do: XSS - Sanitisation and request
		*/
		$scope.loginRequest = function()
		{
			if($scope.username == "user" && $scope.password == "pass132")
			{
				return true;
			}else
			{
				return false;
			}
		}
		
		$scope.navigate = function ( to )
		{
			$location.url( to );
		}
		
	}])

	.controller("restrictedController", [ '$rootScope', '$location', function($rootScope, $location)
	{
		//check if User is really logged in
		if(!$rootScope.loggedIn)
		{
			$location.url( "" );
		}
	}])
	
	/*
	* Appends the tooltip-template to the focused input
	* 
	*/
	.directive('dktooltip', ['$window', function ($window) 
	{
		return {

		  templateUrl: function(elem, attr)
		  {
			  return template_path + 'tooltip_'+attr.dktooltip+'.html';
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
