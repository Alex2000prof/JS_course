import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

myTodoList.addTask("Buy milk");
myTodoList.addTask("Walk the dog");
myTodoList.addTask("Write code");

myTodoList.markTaskAsCompleted("Walk the dog");

console.log(myTodoList.listTasks());
