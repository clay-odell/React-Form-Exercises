import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it("renders without crashing", () => {
    render(<NewBoxForm addBox= {() => {}} />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
});