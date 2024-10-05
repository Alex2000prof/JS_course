import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Список дел</h1>
      <AddTodo />
      <TodoList />
    </div>
  </Provider>
);

export default App;
