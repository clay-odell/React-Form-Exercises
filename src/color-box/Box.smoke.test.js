import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

it("renders without crashing", () => {
    render(<Box />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Box backgroundColor="blue" width="100" height="100" />);
    expect(asFragment()).toMatchSnapshot();
});
