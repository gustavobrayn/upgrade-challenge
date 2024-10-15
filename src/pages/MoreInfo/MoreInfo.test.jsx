import React from 'react';
import { MoreInfo } from './MoreInfo';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';
import { useColorsApi } from '../../common/hooks';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../../common/contexts';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn()),
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

  it('should call navigate on click back button', () => {
    const mockedNavigate = jest.fn();
    useNavigate.mockImplementationOnce(() => mockedNavigate);

    render(<MoreInfo />, { wrapper: ThemeProvider });

    expect(mockedNavigate).not.toHaveBeenCalled();

    const button = screen.getByRole('button', { name: /back/i });
    fireEvent.click(button);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });

  it('should call setInfo on form submit', () => {
    const mockSetInfo = jest.fn();
    const mockInfo = {
      name: 'John',
      email: 'john@doe.com',
      password: 'password123',
      color: '',
      terms: false,
    };
    useSignUp.mockReturnValue({ info: mockInfo, setInfo: mockSetInfo });

    render(<MoreInfo />, { wrapper: ThemeProvider });

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'red' },
    });
    fireEvent.click(screen.getByRole('checkbox'));

    expect(mockSetInfo).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    expect(mockSetInfo).toHaveBeenCalledTimes(1);
  });
});
