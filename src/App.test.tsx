import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('example test', () => {
  render(<App />);
  const linkElement = screen.getByText(/template/i);
  expect(linkElement).toBeInTheDocument();
});
