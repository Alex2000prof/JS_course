import React, { useState } from "react";
import { Todo } from "./types";
import List from "./List";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: `New task at ${new Date().toLocaleTimeString()}`,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <button onClick={addTodo}>Add To-Do</button>
      <List items={todos} renderItem={(todo) => <span>{todo.text}</span>} />
    </div>
  );
};

export default TodoApp;
