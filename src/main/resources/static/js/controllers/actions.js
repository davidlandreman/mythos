app.controller("ActionsController",[ 'Roller', function($scope) {

	$scope.currentRoll=null;
	
	$scope.getCoreRoll = function(){
		currentRoll = Roller.getCoreRoll();
	}

	
	
	
}]);