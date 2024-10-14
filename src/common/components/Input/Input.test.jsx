import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';
import { ThemeProvider } from '../../providers';

describe('<Input />', () => {
  it('should render without crashing', () => {
    render(<Input />, { wrapper: ThemeProvider });
  });

  it('should have value if value prop is passed', () => {
    render(<Input onChange={() => null} value="Test" />, {
      wrapper: ThemeProvider,
    });

    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });

  it('should call onChange on type', () => {
    const onChange = jest.fn();

    render(<Input onChange={onChange} />, {
      wrapper: ThemeProvider,
    });

    expect(onChange).not.toHaveBeenCalled();

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(onChange).toHaveBeenCalled();
  });
});
