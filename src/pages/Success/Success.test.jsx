import React from 'react';
import { Success } from './Success';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';
import { useNavigate } from 'react-router-dom';
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

describe('<Success />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it('should call navigate on click restart button', () => {
    const mockedNavigate = jest.fn();
    useNavigate.mockImplementationOnce(() => mockedNavigate);

    render(<Success />, { wrapper: ThemeProvider });

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

    render(<Success />, { wrapper: ThemeProvider });

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
