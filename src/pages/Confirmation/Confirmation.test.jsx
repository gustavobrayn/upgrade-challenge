import React from 'react';
import { Confirmation } from './Confirmation';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';
import { useSignUpApi } from '../../common/hooks';

jest.mock('../../common/hooks', () => ({
  useSignUpApi: jest.fn(() => ({
    success: false,
    error: false,
    loading: false,
    submit: jest.fn(),
  })),
}));

jest.mock('../../common/contexts', () => ({
  useSignUp: jest.fn(() => ({
    setInfo: jest.fn(),
    info: {
      name: 'John',
      email: 'john@doe.com',
      password: '12345',
      color: 'black',
      terms: true,
    },
  })),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('<Confirmation />', () => {
  it('should render without crashing', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });
  });

  it('should render heading', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('heading', { name: /confirmation/i })
    ).toBeInTheDocument();
  });

  it('should render list', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render first name', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(screen.getByText(/first name: john/i)).toBeInTheDocument();
  });

  it('should render hidden password', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(screen.getByText('Password: *****')).toBeInTheDocument();
  });

  it('should not render password', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(screen.queryByText('Password: 12345')).not.toBeInTheDocument();
  });

  it('should render favorite color', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(screen.getByText(/favorite color: black/i)).toBeInTheDocument();
  });

  it('should render terms and conditions', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(
      screen.getByText(/terms and conditions: agreed/i)
    ).toBeInTheDocument();
  });

  it('should render back button', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  });

  it('should render submit button', () => {
    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should render loading if sign up api is loading', () => {
    useSignUpApi.mockImplementationOnce(() => ({
      success: false,
      error: false,
      loading: true,
      submit: jest.fn(),
    }));

    render(<Confirmation />, { wrapper: ThemeProvider });

    expect(screen.getByTestId('loading-overlay')).toBeInTheDocument();
  });
});
