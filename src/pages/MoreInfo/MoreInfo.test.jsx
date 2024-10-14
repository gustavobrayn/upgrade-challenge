import React from 'react';
import { MoreInfo } from './MoreInfo';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';
import { useColorsApi } from '../../common/hooks';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  Link: ({ children }) => <p>{children}</p>,
}));

jest.mock('../../common/hooks', () => ({
  useColorsApi: jest.fn(() => ({
    data: ['red', 'blue'],
    loading: false,
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

describe('<MoreInfo />', () => {
  it('should render without crashing', () => {
    render(<MoreInfo />, { wrapper: ThemeProvider });
  });

  it('should render heading', () => {
    render(<MoreInfo />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('heading', { name: /additional info/i })
    ).toBeInTheDocument();
  });

  it('should render color select', () => {
    render(<MoreInfo />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('combobox', { name: /favorite color/i })
    ).toBeInTheDocument();
  });

  it('should render combobox option', () => {
    render(<MoreInfo />, { wrapper: ThemeProvider });

    expect(screen.getByRole('option', { name: /red/i })).toBeInTheDocument();
  });

  it('should render terms check box', () => {
    render(<MoreInfo />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('checkbox', { name: /i agree to terms and conditions/i })
    ).toBeInTheDocument();
  });

  it('should render back button', () => {
    render(<MoreInfo />, { wrapper: ThemeProvider });

    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  });

  it('should render next button', () => {
    render(<MoreInfo />, { wrapper: ThemeProvider });

    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  it('should render loading if colors api data is null', () => {
    useColorsApi.mockImplementationOnce(() => ({
      data: null,
      loading: false,
    }));

    render(<MoreInfo />, { wrapper: ThemeProvider });

    expect(screen.getByTestId('loading-overlay')).toBeInTheDocument();
  });

  it('should render loading if colors api is loading', () => {
    useColorsApi.mockImplementationOnce(() => ({
      data: ['red', 'black'],
      loading: true,
    }));

    render(<MoreInfo />, { wrapper: ThemeProvider });

    expect(screen.getByTestId('loading-overlay')).toBeInTheDocument();
  });
});
