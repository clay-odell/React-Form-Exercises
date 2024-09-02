import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const [todoText, setTodoText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            text: todoText,
            id: Date.now()
        });
        setTodoText('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Enter a new todo"
                />
                <button type="submit">Add</button>
        </form>
    );
};

export default NewTodoForm;