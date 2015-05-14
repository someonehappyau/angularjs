describe('TshirtCtrl', function(){
	beforeEach(module('tshirtApp'));
	
	it('Should have myvar with value Some Value', inject(function($controller){
		var scope={},
			ctrl=$controller('TshirtCtrl',{$scope:scope});
		expect(scope.myvar).toBe('Some Value');
	}));
});