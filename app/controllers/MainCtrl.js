'use strict';

angular.module('helloAngularApp')
    .controller('MainCtrl', function TodoCtrl($scope, $routeParams, $filter) {
        'use strict';

        var todos = $scope.todos = [];

        $scope.newTodo = '';
        $scope.editedTodo = null;

        $scope.$watch('todos', function (newValue, oldValue) {
            $scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
            $scope.completedCount = todos.length - $scope.remainingCount;
            $scope.allChecked = !$scope.remainingCount;
        }, true);

        //Method called to add an item
        $scope.addTodo = function () {
            var newTodo = $scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }

            todos.push({
                title: newTodo,
                completed: false
            });

            $scope.newTodo = '';
        };

        //Method called to edit a todo item
        $scope.editTodo = function (todo) {
            $scope.editedTodo = todo;
            // Clone the original todo to restore it on demand.
            $scope.originalTodo = angular.extend({}, todo);
        };

        //Method called when finished editing a todo item
        $scope.doneEditing = function (todo) {
            $scope.editedTodo = null;
            todo.title = todo.title.trim();

            if (!todo.title) {
                $scope.removeTodo(todo);
            }
        };

        //Method called to revert edit
        $scope.revertEditing = function (todo) {
            todos[todos.indexOf(todo)] = $scope.originalTodo;
            $scope.doneEditing($scope.originalTodo);
        };

        //Method called to remove a todo item
        $scope.removeTodo = function (todo) {
            todos.splice(todos.indexOf(todo), 1);
        };

        //Method called to clear todo items
        $scope.clearCompletedTodos = function () {
            $scope.todos = todos = todos.filter(function (val) {
                return !val.completed;
            });
        };

        //Method called to mark all todo items
        $scope.markAll = function (completed) {
            todos.forEach(function (todo) {
                todo.completed = !completed;
            });
        };
    });