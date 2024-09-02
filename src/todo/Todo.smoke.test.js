import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo.js';

const mockTodo = {
  text: 'Test Todo',
  id: 1
};

const mockRemoveTodo = jest.fn();

it("renders without crashing", () => {
    render(<Todo todo={mockTodo} removeTodo={mockRemoveTodo} />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Todo todo={mockTodo} removeTodo={mockRemoveTodo} />);
    expect(asFragment()).toMatchSnapshot();
});
