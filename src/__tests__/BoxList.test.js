import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BoxList from '../color-box/BoxList';

// Test if a new box is added when the form is submitted
test('adds a new box when form is submitted', () => {
    render(<BoxList />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('Background Color:'), { target: { value: 'red' } });
    fireEvent.change(screen.getByLabelText('Width:'), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText('Height:'), { target: { value: '100' } });
    
    // Submit the form
    fireEvent.click(screen.getByText('Add Box'));
    
    // Check if the new box is added
    const box = screen.getByRole('button', { name: 'X' }).parentElement;
    expect(box).toHaveStyle({ '--background-color': 'red', '--width': '100px', '--height': '100px' });
});

// Test if a box is removed when the remove button is clicked
test('removes a box when remove button is clicked', () => {
    render(<BoxList />);
    
    // Add a box first
    fireEvent.change(screen.getByLabelText('Background Color:'), { target: { value: 'red' } });
    fireEvent.change(screen.getByLabelText('Width:'), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText('Height:'), { target: { value: '100' } });
    fireEvent.click(screen.getByText('Add Box'));
    
    // Remove the box
    fireEvent.click(screen.getByRole('button', { name: 'X' }));
    
    // Check if the box is removed
    expect(screen.queryByRole('button', { name: 'X' })).not.toBeInTheDocument();
});
