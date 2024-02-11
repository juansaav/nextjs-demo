import React from 'react';
import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';
import Login from './login';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock the login service
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ token: 'mocked-token', username: 'testuser' }),
  })
);

describe('Login Component', () => {

  it('should not send the request if fields are empty', async () => {
    render(<Login />);
  
    fireEvent.click(screen.getByText('Login'));
  
    await waitFor(() => {
      expect(global.fetch).not.toHaveBeenCalled();
    });
  });
  
  it('should handle successful login and redirect to home', async () => {
    // Mock the useRouter hook to simulate redirection
    const useRouterMock = jest.spyOn(require('next/router'), 'useRouter');
    const pushMock = jest.fn();
    useRouterMock.mockImplementation(() => ({
      push: pushMock,
    }));

    render(<Login />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'testpassword' } });

    // Simulate form submission
    await act(async () => {
      fireEvent.click(screen.getByText('Login'));
    });

    // Wait for the redirect to home
    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/');
    });

    // Cleanup the mock
    useRouterMock.mockRestore();
  });

  it('should handle login failure', async () => {
    // Mock the fetch function for a failed login
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Invalid credentials' }),
      })
    );

    render(<Login />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'invaliduser' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'invalidpassword' } });

    // Simulate form submission
    fireEvent.click(screen.getByText('Login'));

    // Wait for the error message
    await waitFor(() => {
      expect(screen.getByText('Login failed')).toBeInTheDocument();
    });
  });

  it('should save data to localStorage on successful login', async () => {
    render(<Login />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'testpassword' } });

    // Simulate form submission
    await act(async () => {
      fireEvent.click(screen.getByText('Login'));
    });

    // Wait for the success message
    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe('mocked-token');
      expect(localStorage.getItem('username')).toBe('testuser');
    });
  });
});
