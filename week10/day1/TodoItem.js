import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "./actions";

const TodoItem = ({ id, text, completed, toggleTodo, removeTodo }) => (
  <div>
    <span
      onClick={() => toggleTodo(id)}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </span>
    <button onClick={() => removeTodo(id)}>Удалить</button>
  </div>
);

const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
