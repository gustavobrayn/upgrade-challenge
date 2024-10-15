import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { ThemeProvider } from '../../providers';

describe('<Card />', () => {
  it('should render without crashing', () => {
    render(<Card>test</Card>, { wrapper: ThemeProvider });
  });

  it('should render children', () => {
    render(<Card>test</Card>, { wrapper: ThemeProvider });

    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
