/**
 * Created by avelez on 3/18/16.
 */
(function () {
    "use strict";

    describe('Verify todoApp', function(){

        var ctrl, scope;

        beforeEach(module('todoApp'));

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('todoAppCtrl', {$scope:scope});
        }));


        it('should start with an empty todo list', function(){
           expect(scope.todos.length).toBe(0);
        });

        it('should add items to the todo list', function(){
            scope.todoInput = "Buy tortillas";
            scope.addTodo();
            expect(scope.todos.length).toBe(1);
        });

        it('should remove items from the todo list', function(){
            scope.todoInput = "Buy coyotas";
            scope.addTodo();
            scope.removeTodo(0);
            expect(scope.todos.length).toBe(0);
        });

        it('should not add an empty item', function(){
            scope.todoInput = " ";
            scope.addTodo();
            expect(scope.todos.length).toBe(0);
        });

        it('should edit existing todo items', function(){
            scope.todoInput = "Buy chiles verdes";
            scope.addTodo();
            scope.todos[0] = "Buy chiles serranos";
            expect(scope.todos[0]).toBe("Buy chiles serranos");
        });

        it('should not edit a todo item to save it empty', function(){
            scope.todoInput = "Pay bank";
            scope.addTodo();
            scope.todo[0] = " ";
            expect(scope.todos[0].trim()).not.toBe("");
        });
    });

}());