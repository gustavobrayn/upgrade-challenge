import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';
import { ThemeProvider } from '../../providers';

describe('<Heading />', () => {
  it('should render without crashing', () => {
    render(<Heading>Heading</Heading>, { wrapper: ThemeProvider });
  });

  it('should render text', () => {
    render(<Heading>Heading</Heading>, { wrapper: ThemeProvider });

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument();
  });
});
