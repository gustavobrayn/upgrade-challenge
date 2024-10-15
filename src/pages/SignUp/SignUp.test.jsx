import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from './SignUp';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';
import { useSignUp } from '../../common/contexts';

jest.mock('../../common/contexts', () => ({
  useSignUp: jest.fn(() => ({
    setInfo: jest.fn(),
    info: {
      name: '',
      email: '',
      password: '',
      color: '',
      terms: false,
    },
  })),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn()),
}));

describe('<SignUp />', () => {
  it('should render without crashing', () => {
    render(<SignUp />, { wrapper: ThemeProvider });
  });

  it('should render heading', () => {
    render(<SignUp />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('heading', { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it('should render name input', () => {
    render(<SignUp />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('textbox', { name: /first name/i })
    ).toBeInTheDocument();
  });

  it('should render email input', () => {
    render(<SignUp />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('textbox', { name: /e-mail/i })
    ).toBeInTheDocument();
  });

  it('should render password input', () => {
    render(<SignUp />, { wrapper: ThemeProvider });

    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it('should render next button', () => {
    render(<SignUp />, { wrapper: ThemeProvider });

    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });
  it('should call setInfo with input value on form submit', () => {
    const mockSetInfo = jest.fn();
    const mockInfo = { name: '', email: '', password: '' };
    useSignUp.mockReturnValue({ info: mockInfo, setInfo: mockSetInfo });

    render(<SignUp />, { wrapper: ThemeProvider });

    fireEvent.change(screen.getByRole('textbox', { name: /first name/i }), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /e-mail/i }), {
      target: { value: 'john@doe.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    expect(mockSetInfo).toHaveBeenCalledWith({
      name: 'John',
      email: 'john@doe.com',
      password: 'password123',
    });
  });
});
