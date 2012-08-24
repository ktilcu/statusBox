function statusBox($scope) {
  $scope.projects = [
    {filter:"project",title:'learn angular', start:"1-5-86", stop: "1-5-86", status: "Completed"},
    {filter:"project",title:'learn angular', start:"1-5-86", stop: "1-5-86", status: "Completed"},
    {filter:"project",title:'learn angular', start:"1-5-86", stop: "1-5-86", status: "Completed"}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}