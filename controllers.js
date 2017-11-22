
function MainCtrl($scope ) {

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
		alert($scope.todoText)
		$scope.todoList.push({'name':$scope.todoText, 'status':false})
	}

};


angular
    .module('app')
.controller('MainCtrl', MainCtrl)