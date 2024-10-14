import React from 'react';
import { SignUp } from './SignUp';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';

jest.mock('../../common/contexts', () => ({
  useSignUp: () => ({
    setInfo: jest.fn(),
    info: {
      name: '',
      email: '',
      password: '',
    },
  }),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
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
});
