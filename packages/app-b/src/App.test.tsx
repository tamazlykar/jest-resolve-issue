import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/learn react/i);
  expect(buttonElement).toBeInTheDocument();
});
