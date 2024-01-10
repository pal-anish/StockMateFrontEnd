import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OnBroadingpage from '../Components/OnBroadingpage/OnBroadingpage';
import { BrowserRouter as Router} from 'react-router-dom';
 
test('renders landing page with welcome message', () => {
  render(<Router><OnBroadingpage /></Router>);
  expect(screen.getByText(/Welcome to the App/i)).toBeInTheDocument();
});
 
test('navigates to login page when login button is clicked', () => {
  render(<Router><OnBroadingpage /></Router>);
  fireEvent.click(screen.getByText(/Login/i));
  expect(window.location.pathname).toEqual('/login');
});
 
test('navigates to register page when sign up button is clicked', () => {
  render(<Router><OnBroadingpage /></Router>);
  fireEvent.click(screen.getByText(/Sign Up/i));
  expect(window.location.pathname).toEqual('/register');
});