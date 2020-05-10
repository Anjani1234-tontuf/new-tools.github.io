function MainCtrl($scope, items) {
	$scope.groceries = function() {
		return items.list();
	};

}

function HomeCtrl($scope, items) {
	$scope.groceries = function() {
		return items.list();
	};

	$scope.clr = function() {
		items.removeDone();
	};
}

function NewCtrl($scope, items) {
	$scope.item = '';

	$scope.isValidInput = function() {
		return $scope.item.trim().length > 0; //trim() removes
	};

	$scope.addItem = function() {
		items.addItem({
			item: $scope.item,
			amount: $scope.itemAmount,
			done: false
		});
		$scope.item = '';
		$scope.itemAmount = '';
	}

	$scope.cancel = function() {
		$scope.item = '';
		$scope.itemAmount = '';
	}
}