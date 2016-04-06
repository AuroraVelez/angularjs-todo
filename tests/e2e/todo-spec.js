/**
 * Created by avelez on 3/22/16.
 */

var capture = require('../screenshot');
var TodoPage = require('../../tests/e2e/po/todo.po.js');

(function () {
    "use strict";

    describe('todoApp', function(){
        var todoPage = new TodoPage();
        browser.ignoreSynchronization = true;
        browser.sleep(10000);

        beforeEach(function(){
            browser.get('http://localhost:8000/app/todo.html');
        });

        afterEach(function () {
            capture.takeScreenshot(jasmine.getEnv().currentSpec);
        });

        it('should add a new todo item by pressing the add button', function(){
            todoPage.addTodoItem('Send work email');
            expect(todoPage.getTodoItem(0)).toEqual('Send work email');
        });


        it('should be able to add multiple todo items', function(){
            todoPage.addTodoItem('Send status email');
            todoPage.addTodoItem('Buy milk');
            todoPage.addTodoItem('Clean kitchen');
            expect(todoPage.getTodoItem(0)).toEqual('Send status email');
            expect(todoPage.getTodoItem(1)).toEqual('Buy milk');
            expect(todoPage.getTodoItem(2)).toEqual('Clean kitchen');
        });

        it('should remove todo items', function(){
            todoPage.addTodoItem('Buy eggs');
            todoPage.removeTodoItem(0);
            expect(todoPage.itemListIsPresent()).toBe(false);
        });

        it('should not allow to save empty items on page load', function(){
            todoPage.btnAdd.click();
            expect(todoPage.itemListIsPresent()).toBe(false);
        });

        it('should not allow to save empty items', function(){
            todoPage.addTodoItem('Get tomatoes');
            todoPage.btnAdd.click();
            expect(todoPage.getItemCount()).toBe(1);
        });

        it('should show an error message when todo input field is empty on page load', function(){
            todoPage.btnAdd.click();
            expect(todoPage.getErrorAlertDisplay()).toBe('block');
        });

        it('should show an error message when todo input field is empty', function(){
            todoPage.addTodoItem('Get tomatoes');
            todoPage.btnAdd.click();
            expect(todoPage.getErrorAlertDisplay()).toBe('block');
        });

        // To run only one test from this suite (spec) use 'fit'
        // e.g. fit('should be able to edit a todo item', function(){
        it('should be able to edit a todo item', function(){
            todoPage.addTodoItem('Buy candy');
            todoPage.editTodoItem(0,'Buy chocolates');
            expect(todoPage.getTodoItem(0)).toEqual('Buy chocolates');
        });

    });

}());