import React from 'react';
import { Success } from './Success';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
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

describe('<Success />', () => {
  it('should render without crashing', () => {
    render(<Success />, { wrapper: ThemeProvider });
  });

  it('should render heading', () => {
    render(<Success />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('heading', { name: /success/i })
    ).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<Success />, { wrapper: ThemeProvider });

    expect(
      screen.getByText(/You should receive a confirmation email soon./i)
    ).toBeInTheDocument();
  });

  it('should render restart button', () => {
    render(<Success />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('button', { name: /restart/i })
    ).toBeInTheDocument();
  });
});
