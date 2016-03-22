/**
 * Created by avelez on 3/18/16.
 */
"use strict";

angular
    .module('todoApp', [])
    .controller("todoAppCtrl", ["$scope", function($scope, element){
        $scope.todos = [];
        var errorAlert = angular.element(document.getElementById("errorAlert"));

        $scope.addTodo = function (){
            if($scope.todoInput !== undefined && $scope.todoInput !== '' ) {
                $scope.todos.push($scope.todoInput);
                $scope.todoInput = '';
                errorAlert.css("display","none");
            }else{
                errorAlert.css("display","block");
            }
        };

        $scope.removeTodo = function (index){
            $scope.todos.splice(index,1);
        };
    }]);



