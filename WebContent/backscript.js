/**
 * 
 */

var app= angular.module("myapp",[]);
app.controller("myctrl", function($scope){
	
	$scope.tagfields=[];
	$scope.temporary={};
	
	$scope.currentIndex=0;
	$scope.maxIndex=10;
	$scope.spaces=[];
	
	$scope.initspaces= function(){
		for (var i =0; i<$scope.maxIndex;i++){
			$scope.spaces.push(true);
		}
	}
	
	var getspace = function(){
		for (var i =0; i<$scope.maxIndex;i++){
			if($scope.spaces[i]){
				return i;
			}
		}
		return -1;
	}
	
	$scope.add=function(){
		if($scope.maxIndex> $scope.currentIndex){
			var index = getspace();
			if(index>=0){
				var attributesObject={'getid':'inp'+index, 'getselid':'sel'+index};
				$scope.tagfields.push(attributesObject);
				$scope.spaces[index] = false;
				++$scope.currentIndex;
			}
		}
	}
	
	$scope.rem= function(indexVal){
		$scope.tagfields.splice(indexVal,1);
		--$scope.currentIndex;
		//Task 1: Need something to do with spaces in order to manage indexes
	}
	
	$scope.save = function(){
		console.log($scope.temporary);
		//Task 2: Need to convert this temporary object into array of objects with common keys which can be send to persistence
	}
	
})