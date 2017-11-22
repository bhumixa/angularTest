
function MainCtrl($scope, $location) {
	$scope.todoList = [
		{
			'name': 'Painting',
			'status':true
		},
		{
			'name': 'Home Work',
			'status':false
		},
	]
	$scope.todoText = '';

	$scope.addTodo = function(){
		//alert($scope.todoText)
		$scope.todoList.push({'name':$scope.todoText, 'status':false})
	}

	$scope.edit = function(taskName){
		//alert(taskName)
		$location.path('/edit/'+taskName)
	}

};

function EditTaskCtrl($scope, $routeParams){
	$scope.taskName = $routeParams.taskName;
}


angular
    .module('app')
.controller('MainCtrl', MainCtrl)
.controller('EditTaskCtrl', EditTaskCtrl)