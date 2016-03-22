/**
 * Created by avelez on 3/18/16.
 */
"use strict";

angular
    .module('todoApp', [])
    .controller("todoAppCtrl", ["$scope", function($scope){
        $scope.todos = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addTodo = function (){
            if($scope.todoInput !== undefined && $scope.todoInput !== '' ) {
                $scope.todos.push($scope.todoInput);
                $scope.todoInput = '';
                $scope.isCollapsed = true;
            }else{
                $scope.isCollapsed = false;
            }
        };

        $scope.removeTodo = function (index){
            $scope.todos.splice(index,1);
        };
    }]);



