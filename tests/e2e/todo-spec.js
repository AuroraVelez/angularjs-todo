/**
 * Created by avelez on 3/22/16.
 */
(function () {
    "use strict";

    describe('todoApp', function(){
       beforeEach(function(){
          browser.get("todo.html");
        });

        it('should add a new todo item', function(){
            element(by.model('todoInput')).sendKeys('Send work email');
            element(by.id("btnAdd")).click();
            expect(element(by.id("todo0")).getAttribute('value')).toEqual('Send work email');
        });

        // Planned/pending scenarios
        it('should add multiple todo items', function(){
            element(by.model('todoInput')).sendKeys('Send status email');
            element(by.id("btnAdd")).click();
            element(by.model('todoInput')).sendKeys('Buy milk');
            element(by.id("btnAdd")).click();
            element(by.model('todoInput')).sendKeys('Clean kitchen');
            element(by.id("btnAdd")).click();
            expect(element(by.id("todo0")).getAttribute('value')).toEqual('Send status email');
            expect(element(by.id("todo1")).getAttribute('value')).toEqual('Buy milk');
            expect(element(by.id("todo2")).getAttribute('value')).toEqual('Clean kitchen');
        });

        it('should remove todo items', function(){
            element(by.model('todoInput')).sendKeys('Buy eggs');
            element(by.id("btnAdd")).click();
            element(by.id("remove0")).click();
            expect(element(by.id("todo0")).isPresent()).toBe(false);
        });

        it('should not allow to save empty items on page load', function(){
            element(by.id("btnAdd")).click();
            expect(element(by.id("todo0")).isPresent()).toBe(false);
        });

        it('should not allow to save empty items', function(){
            element(by.model('todoInput')).sendKeys('Get tomatoes');
            element(by.id("btnAdd")).click();
            element(by.id("btnAdd")).click();
            expect(element(by.id("todo1")).isPresent()).toBe(false);
        });

        it('should show an error message when todo input field is empty on page load', function(){
            element(by.id("btnAdd")).click();
            expect(element(by.id("errorAlert")).getCssValue('display')).toBe('block');
        });

        it('should show an error message when todo input field is empty', function(){
            element(by.model('todoInput')).sendKeys('Get tomatoes');
            element(by.id("btnAdd")).click();
            element(by.id("btnAdd")).click();
            expect(element(by.id("errorAlert")).getCssValue('display')).toBe('block');
        });

        it('should be able to edit a todo item', function(){
            element(by.model('todoInput')).sendKeys('Buy candy');
            element(by.id("btnAdd")).click();
            expect(element(by.id("todo0")).getAttribute('value')).toEqual('Buy candy');
            element(by.id("todo0")).clear();
            element(by.id("todo0")).sendKeys('Buy chocolates');
            expect(element(by.id("todo0")).getAttribute('value')).toEqual('Buy chocolates');
        });

    });

}());