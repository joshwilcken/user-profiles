angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends

	friendService.getFriends().then(function(response){
		$scope.currentUser = response.data.currentUser;
		console.log($scope.currentUser);

		$scope.friends = response.data.friends;
		console.log($scope.friends);
	});
});