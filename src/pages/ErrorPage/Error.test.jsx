import React from 'react';
import { ErrorPage } from './ErrorPage';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('<ErrorPage />', () => {
  it('should render without crashing', () => {
    render(<ErrorPage />, { wrapper: ThemeProvider });
  });

  it('should render heading', () => {
    render(<ErrorPage />, { wrapper: ThemeProvider });

    expect(screen.getByRole('heading', { name: /error/i })).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<ErrorPage />, { wrapper: ThemeProvider });

    expect(
      screen.getByText(/Uh oh, something went wrong. Please try again later./i)
    ).toBeInTheDocument();
  });

  it('should render restart button', () => {
    render(<ErrorPage />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('button', { name: /restart/i })
    ).toBeInTheDocument();
  });
});
