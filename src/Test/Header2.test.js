import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
 
import Header2 from '../Components/Header2/Header2';
import '@testing-library/jest-dom'
 
 
 
test('renders Header2 component with profile link', () => {
  const { getByText } = render(<Router><Header2 /></Router>);
  const homeLink = getByText(/Home/i);
  expect(homeLink.getAttribute('href')).toBe('/search');
});
 
test('renders Header2 component with profile link', () => {
  const { getByText } = render(<Router><Header2 /></Router>);
  const WishListLink = getByText(/WishList/i);
  expect(WishListLink.getAttribute('href')).toBe('/wishlist');
});
 
test('renders Header2 component with profile link', () => {
  const { getByText } = render(<Router><Header2 /></Router>);
  const profileLink = getByText(/Profile/i);
  expect(profileLink.getAttribute('href')).toBe('/userdetails');
});