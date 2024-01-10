import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import '@testing-library/jest-dom'
 
test('renders Footer component', () => {
  const { getByText } = render(<Router><Footer /></Router>);
  const footerElement = getByText(/© 2023 Copyright : Anish Pal/i);
  expect(footerElement).toBeInTheDocument();
});
 
test('renders About link in Footer', () => {
  const { getByText } = render(<Router><Footer /></Router>);
  const aboutLink = getByText(/About/i);
  expect(aboutLink).toBeInTheDocument();
});
 
test('navigates to /about when About link is clicked', () => {
  const { getByText } = render(<Router><Footer /></Router>);
  const aboutLink = getByText(/About/i);
  expect(aboutLink.getAttribute('href')).toBe('/about');
});