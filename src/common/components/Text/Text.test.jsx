import { render, screen } from '@testing-library/react';
import { Text } from './Text';
import { ThemeProvider } from '../../providers';

describe('<Text />', () => {
  it('should render without crashing', () => {
    render(<Text>Text</Text>, { wrapper: ThemeProvider });
  });

  it('should render text', () => {
    render(<Text>Text</Text>, { wrapper: ThemeProvider });

    expect(screen.getByText(/text/i)).toBeInTheDocument();
  });
});
