import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const elements = screen.getAllByText(/home/i);

  expect(elements).toHaveLength(2);
});
