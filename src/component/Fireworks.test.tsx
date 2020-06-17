import React from 'react';
import { render } from '@testing-library/react';
import Fireworks from './Fireworks';

test('renders Fireworks text', () => {
  const { getByText } = render(<Fireworks />);
  const linkElement = getByText(/Fireworks/i);
  expect(linkElement).toBeInTheDocument();
});
