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
            expect(element(by.id("todo0")).getAttribute('value')).toEqual('Send work email -bad');
        });

        // Planned/pending scenarios
        it('should add multiple todo items', function(){});
        it('should remove todo items', function(){});
        it('should not allow to save empty items on page load', function(){});
        it('should not allow to save empty items', function(){});
        it('should show an error message when todo input field is empty on page load', function(){});
        it('should show an error message when todo input field is empty', function(){});
        it('should be able to edit a todo item', function(){});

    });

}());