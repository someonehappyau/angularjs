var tshirtApp=angular.module('tshirtApp', ['ngRoute', 'TshirtControllers']);

tshirtApp.config(['$routeProvider',
                  function($routeProvider){
					$routeProvider.
						when('/orders',{
							templateUrl: 'orders.html',
							controller:	'TshirtOrdersCtrl'
						}).
						when('/add',{
							templateUrl: 'add.html',
							controller: 'TshirtAddCtrl'
						}).
						otherwise({
							redirectTo: '/orders'
						});
}]);