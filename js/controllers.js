'use strict';
angular.module('monApp.controllers',[])
.controller('MainCtrl', function ($scope,UserService) {

	  $scope.post = {};
	  $scope.post = UserService.query();
	  $scope.deleteUser = function(id) { // Delete a movie. Issues a DELETE to /api/movies/:id
		  $scope.user=new UserService();
		  $scope.user.$delete ({id:id});
	  };

	 
	  }).controller('UserViewCtrl',function($scope,$stateParams,UserService){
		  $scope.user = {};
		   $scope.user=UserService.get({id:$stateParams.id});
		   console.log($scope.user);
		  
	  }).controller('UserCreateCtrl',function($scope,$state,$stateParams,UserService){

		    $scope.user=new UserService();

		    $scope.addUser=function(){
		        $scope.user.$save(function(){
		        	console.log("ok");
		           $state.go('users');
		        });
		    };

		}).controller('UserEditCtrl',function($scope,$state,$stateParams,UserService){

			 $scope.user = {};
			   $scope.user=UserService.get({id:$stateParams.id});
		    $scope.updateUser = function() { //Update the edited movie. Issues a PUT to /api/movies/:id
		        $scope.user.$update(function() {
		          $state.go('users'); // on success go back to home i.e. movies state.
		        });
		    };
		});
