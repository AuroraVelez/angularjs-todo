/**
 * Created by avelez on 4/1/16.
 */
"use strict";
function TodoPage(){
    this.txtTodo = element(by.model('todoInput'));
    this.btnAdd = element(by.id("btnAdd"));
    this.itemList = element(by.repeater('item in todos'));
    this.itemListItems = element.all(by.repeater('item in todos')).all(by.binding('item'));
    this.itemListRemove = element.all(by.repeater('item in todos')).all(by.tagName('button'));
    this.errorAlert = element(by.id("errorAlert"));
    
    
    this.addTodoItem = function(name){
        this.txtTodo.sendKeys(name);
        this.btnAdd.click();
    };

    this.getTodoItem = function(index){
        return this.itemListItems.get(index).getText();
    };

    this.removeTodoItem = function(index){
        this.itemListRemove.get(index).click();
    };
    
    this.getItemCount = function(){
        return this.itemListItems.count();
    };
    
    this.getErrorAlertDisplay = function(){
        return this.errorAlert.getCssValue('display');
    };
    
    this.editTodoItem = function(index, name){
        this.itemListItems.get(index).click();
        browser.driver.switchTo().alert().sendKeys(name);
        browser.driver.switchTo().alert().accept();
    };

    this.itemListIsPresent = function(){
        return this.itemList.isPresent();
    };
    
    
}

module.exports = TodoPage;