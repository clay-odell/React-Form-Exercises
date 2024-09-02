import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !==id));
  };

  return (
    <div>
      <h1>New Todo Form</h1>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo}    
            />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
