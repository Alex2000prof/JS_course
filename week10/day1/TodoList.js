import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => (
  <div>
    {todos.map((todo) => (
      <TodoItem key={todo.id} {...todo} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
