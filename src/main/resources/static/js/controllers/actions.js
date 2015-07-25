app.controller("ActionsController", function($scope, Roller) {

	$scope.currentRoll=null;
	
	$scope.getCoreRoll = function(){
		$scope.currentRoll = Roller.getCoreRoll();
		console.log("Current Role", $scope.currentRoll);
	}

	
	
	
});