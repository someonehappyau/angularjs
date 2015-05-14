var TshirtControllers=angular.module('TshirtControllers', []);

TshirtControllers.controller('TshirtOrdersCtrl',function($scope, $http){
	$scope.myvar='Some Value';
	$http.get('orders.json').success(function(data){
		$scope.orders=data;
	});
});

TshirtControllers.controller('TshirtAddCtrl', function($scope){

});