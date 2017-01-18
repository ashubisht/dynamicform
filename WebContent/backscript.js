/**
 * 
 */

var app= angular.module("myapp",[]);
app.controller("myctrl", function($scope){
	
	$scope.tagfields=[];
	$scope.temporary={};
	
	$scope.currentIndex=0;
	$scope.maxIndex=10;
	
	$scope.add=function(){
		if($scope.maxIndex> $scope.currentIndex){
			++$scope.currentIndex;
			var attributesObject={'getid':'inp'+$scope.currentIndex, 'getselid':'sel'+$scope.currentIndex};
			$scope.tagfields.push(attributesObject);
		}
		
	}
	
	$scope.rem= function(indexVal){
		$scope.tagfields.splice(indexVal,1);
		--$scope.currentIndex;
	}
	
	$scope.save = function(){
		console.log($scope.temporary);
	}
	
})