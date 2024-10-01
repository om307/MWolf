
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../src/screens/Login';
import useLoginForm from '../src/hooks/UseLoginForm';
jest.mock('../hooks/useLoginForm'); 

describe('Login Component', () => {
  const mockNavigation = { replace: jest.fn() };

  beforeEach(() => {
    useLoginForm.mockReturnValue({
      email: '',
      setEmail: jest.fn(),
      password: '',
      setPassword: jest.fn(),
      errors: {},
      handleLogin: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Login navigation={mockNavigation} />);
    
    expect(getByText("Welcome to Metawolf Solar")).toBeTruthy();
    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(getByText("Forgot Password?")).toBeTruthy();
  });

  test('handles email input correctly', () => {
    const { getByPlaceholderText } = render(<Login navigation={mockNavigation} />);
    
    const emailInput = getByPlaceholderText("Email");
    fireEvent.changeText(emailInput, 'test@example.com');

    expect(useLoginForm().setEmail).toHaveBeenCalledWith('test@example.com');
  });

  test('handles password input correctly', () => {
    const { getByPlaceholderText } = render(<Login navigation={mockNavigation} />);
    
    const passwordInput = getByPlaceholderText("Password");
    fireEvent.changeText(passwordInput, 'password123');

    expect(useLoginForm().setPassword).toHaveBeenCalledWith('password123');
  });

  test('shows error message for invalid email', () => {
    useLoginForm.mockReturnValueOnce({
      email: '',
      setEmail: jest.fn(),
      password: '',
      setPassword: jest.fn(),
      errors: { email: 'Email is required' },
      handleLogin: jest.fn(),
    });

    const { getByText } = render(<Login navigation={mockNavigation} />);
    
    expect(getByText('Email is required')).toBeTruthy();
  });

  test('calls handleLogin when login button is pressed', () => {
    const { getByText } = render(<Login navigation={mockNavigation} />);
    
    fireEvent.press(getByText("Login"));

    expect(useLoginForm().handleLogin).toHaveBeenCalledWith(mockNavigation);
  });
});
