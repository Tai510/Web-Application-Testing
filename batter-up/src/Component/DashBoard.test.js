import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders without crashing', () => {
    render(<Dashboard />)
});

test('strike', () => {
    const { getByText } = render(<Dashboard />)
    getByText('Strike');
})

test('ball', () => {
    const { getByText } = render(<Dashboard />)
    getByText('Ball');
})
test('foul', () => {
    const { getByText } = render(<Dashboard />)
    getByText('Foul');
})

test('hit', () => {
    const { getByText } = render(<Dashboard />)
    getByText('Hit');
}) 