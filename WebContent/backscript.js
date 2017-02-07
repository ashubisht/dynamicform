/**
 * 
 */

var app= angular.module("myapp",[]);
app.controller("myctrl", function($scope){
	
	$scope.tagfields=[];
	
	$scope.add=function(){
		var dataobj = {
				idmodel: '',
				selectmodel: 'text'
		};		
		$scope.tagfields.push(dataobj);
	}
	
	$scope.rem= function(indexVal){
		$scope.tagfields.splice(indexVal,1);
	}
	
	$scope.save = function(){
		console.log($scope.tagfields);
	}
	
});

app.directive('dynamicForm', [ '$rootScope', function($rootScope){
	return{
		restrict: 'E',
		scope: {
			dataObject:'=dataobject'
		},
		link: function(scope, element, attrs){
			element.append(
					'Sample directive ' + scope.dataObject.selectmodel
					+ '<input type='+scope.selectmodel+' ng-model='+scope.dataObject.idmodel+'>'
			);
		}
	}
	
}]);



