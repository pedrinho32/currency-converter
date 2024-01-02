import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrencyConverterApp from './component/CurrencyConverterApp';

test('renders learn react link', () => {
  render(<CurrencyConverterApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
