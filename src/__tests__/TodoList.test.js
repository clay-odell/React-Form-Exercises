import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../todo/TodoList';

test('adds a new todo', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Enter a new todo/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  const todoElement = screen.getByText(/Test Todo/i);
  expect(todoElement).toBeInTheDocument();
});

test('removes a todo', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/Enter a new todo/i);
    const addButton = screen.getByText(/Add/i);
  
    fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);
  
    const removeButton = screen.getByText(/X/i);
    fireEvent.click(removeButton);
  
    const todoElement = screen.queryByText(/Test Todo/i);
    expect(todoElement).not.toBeInTheDocument();
  });