/**
 * Created by avelez on 3/22/16.
 */
(function () {
    "use strict";
    var items, removeBtns = [];

    describe('todoApp', function(){
       beforeEach(function(){
          browser.get("todo.html");
        });

        it('should add a new todo item by pressing the add button', function(){
            element(by.model('todoInput')).sendKeys('Send work email');
            element(by.id("btnAdd")).click();
            items = element.all(by.repeater('item in todos')).all(by.binding('item'));
            expect(items.get(0).getText()).toEqual('Send work email');
        });


        it('should be able to add multiple todo items', function(){
            element(by.model('todoInput')).sendKeys('Send status email');
            element(by.id("btnAdd")).click();
            element(by.model('todoInput')).sendKeys('Buy milk');
            element(by.id("btnAdd")).click();
            element(by.model('todoInput')).sendKeys('Clean kitchen');
            element(by.id("btnAdd")).click();
            items = element.all(by.repeater('item in todos')).all(by.binding('item'));
            expect(items.get(0).getText()).toEqual('Send status email');
            expect(items.get(1).getText()).toEqual('Buy milk');
            expect(items.get(2).getText()).toEqual('Clean kitchen');
        });

        it('should remove todo items', function(){
            element(by.model('todoInput')).sendKeys('Buy eggs');
            element(by.id("btnAdd")).click();
            element.all(by.repeater('item in todos')).all(by.tagName('button')).first().click();
            expect(element(by.repeater('item in todos')).isPresent()).toBe(false);
        });

        it('should not allow to save empty items on page load', function(){
            element(by.id("btnAdd")).click();
            expect(element(by.repeater('item in todos')).isPresent()).toBe(false);
        });

        it('should not allow to save empty items', function(){
            element(by.model('todoInput')).sendKeys('Get tomatoes');
            element(by.id("btnAdd")).click();
            element(by.id("btnAdd")).click();
            items = element.all(by.repeater('item in todos')).all(by.binding('item'));
            expect(items.count()).toBe(1);
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

        // To run only one test from this suite (spec) use 'fit'
        // e.g. fit('should be able to edit a todo item', function(){
        it('should be able to edit a todo item', function(){
            element(by.model('todoInput')).sendKeys('Buy candy');
            element(by.id("btnAdd")).click();
            element.all(by.repeater('item in todos')).all(by.binding('item')).get(0).click();
            browser.driver.switchTo().alert().sendKeys('Buy chocolates');
            browser.driver.switchTo().alert().accept();
            expect(element.all(by.repeater('item in todos')).all(by.binding('item')).get(0).getText()).toEqual('Buy chocolates');
        });

    });

}());