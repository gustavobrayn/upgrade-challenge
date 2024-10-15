import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFound } from './NotFound';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../common/providers/ThemeProvider';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn()),
}));

describe('<NotFound />', () => {
  it('should render without crashing', () => {
    render(<NotFound />, { wrapper: ThemeProvider });
  });

  it('should render heading', () => {
    render(<NotFound />, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('heading', { name: /not found/i })
    ).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<NotFound />, { wrapper: ThemeProvider });

    expect(
      screen.getByText(/sorry, the page you're looking for could not be found/i)
    ).toBeInTheDocument();
  });

  it('should render back button', () => {
    render(<NotFound />, { wrapper: ThemeProvider });

    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  });

  it('should call navigate on click back button', () => {
    const mockedNavigate = jest.fn();
    useNavigate.mockImplementationOnce(() => mockedNavigate);

    render(<NotFound />, { wrapper: ThemeProvider });

    expect(mockedNavigate).not.toHaveBeenCalled();

    const button = screen.getByRole('button', { name: /back/i });
    fireEvent.click(button);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('/', { replace: true });
  });
});
