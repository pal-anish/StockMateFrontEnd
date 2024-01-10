import React from 'react';
import { render } from '@testing-library/react';
import Header1 from '../Components/Header1/Header1';
import '@testing-library/jest-dom'
 
test('renders Header1 component', () => {
  const { getByText } = render(<Header1 />);
  const headerElement = getByText(/STOCKMATE/i);
  expect(headerElement).toBeInTheDocument();
});
 
test('renders Header1 component with correct class', () => {
  const { container } = render(<Header1 />);
  const headerElement = container.querySelector('.Header1');
  expect(headerElement).toBeInTheDocument();
});
 
test('Header1 component has correct text content', () => {
  const { getByText } = render(<Header1 />);
  const headerElement = getByText(/STOCKMATE/i);
  expect(headerElement.textContent).toBe('STOCKMATE');
});