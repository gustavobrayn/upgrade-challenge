import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';
import { useSignUp } from '../../common/contexts';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn()),
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

  it('should call navigate on click restart button', () => {
    const mockedNavigate = jest.fn();
    useNavigate.mockImplementationOnce(() => mockedNavigate);

    render(<ErrorPage />, { wrapper: ThemeProvider });

    expect(mockedNavigate).not.toHaveBeenCalled();

    const button = screen.getByRole('button', { name: /restart/i });
    fireEvent.click(button);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('/', { replace: true });
  });

  it('should call setInfo on click restart button', () => {
    const mockedSetInfo = jest.fn();
    useSignUp.mockImplementationOnce(() => ({
      setInfo: mockedSetInfo,
      info: {
        name: 'John',
        email: 'john@doe.com',
        password: '12345',
        color: 'black',
        terms: true,
      },
    }));

    render(<ErrorPage />, { wrapper: ThemeProvider });

    const button = screen.getByRole('button', { name: /restart/i });
    fireEvent.click(button);

    expect(mockedSetInfo).toHaveBeenCalledTimes(1);
    expect(mockedSetInfo).toHaveBeenCalledWith({
      name: '',
      email: '',
      password: '',
      color: '',
      terms: false,
    });
  });
});
