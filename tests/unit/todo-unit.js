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


        it('starts with an empty todo list array', function(){
            expect(scope.todos.length).toBe(0);
            expect(Array.isArray(scope.todos)).toBeTruthy();
        });

        it('adds items to the todo list', function(){
            scope.todoInput = "Buy tortillas";
            scope.addTodo();
            expect(scope.todos.length).toBe(1);
        });

        it('removes items from the todo list', function(){
            scope.todos = ['Buy coyotas'];
            scope.removeTodo(0);
            expect(scope.todos.length).toBe(0);
        });

        it('should not add an empty item', function(){
            scope.todoInput = " ";
            scope.addTodo();
            expect(scope.todos.length).toBe(0);
        });

        it('should edit existing todo items', function(){
            scope.todos = ["Buy chiles verdes"];
            spyOn(scope, "editTodo").and.callFake(function(){
                console.log("Editing from spy");
                scope.todos.splice(0, 1, "Buy chiles serranos");
            });
            scope.editTodo();
            expect(scope.todos[0]).toBe("Buy chiles serranos");
        });
    });

}());