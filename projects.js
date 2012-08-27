function statusBox($scope) {
  $scope.projects = [
    {filter:"project",title:'learn angular', start:"1-5-86", stop: "1-5-86", status: "Completed"},
    {filter:"project",title:'learn angular', start:"1-5-86", stop: "1-5-86", status: "Completed"},
    {filter:"project",title:'learn angular', start:"1-5-86", stop: "1-5-86", status: "Completed"}];
 
  $scope.addProject = function() {
    $scope.projects.push({filter:$scope.filter, title: $scope.title, start: $scope.start, stop: $scope.stop, status: $scope.status});
    $scope.filter = $scope.title = $scope.start = $scope.stop = $scope.status = '';
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