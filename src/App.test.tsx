import React from 'react';

import App from './App';
import { render, screen } from './testUtils';

test('renders learn react link', () => {
  render(<App />);
  const elements = screen.getAllByText(/home/i);

  expect(elements).toHaveLength(2);
});
