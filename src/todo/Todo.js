import React from 'react';
import './Todo.css';
const Todo = ({ todo, removeTodo }) => {
  return (
    <div className="todo-item">
      <p className="todo-text">{todo.text}</p>
      <button className="remove-button" onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
};

export default Todo;
