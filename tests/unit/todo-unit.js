/**
 * Created by avelez on 3/18/16.
 */
(function () {
    "use strict";

    describe('Verify todoApp', function(){

        var scope, ctrl;

        beforeEach(module('todoApp'));

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('todoAppCtrl', {$scope:scope});
        }));


        it('starts with 3 items', function(){
           expect(scope.todos.length).toBe(2);

       })
    });

}());