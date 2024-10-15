import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from './Select';
import { ThemeProvider } from '../../providers';

const options = [{ value: 'red', text: 'Red' }];

describe('<Select />', () => {
  it('should render without crashing', () => {
    render(<Select options={options} />, { wrapper: ThemeProvider });
  });

  it('should render options', () => {
    render(<Select options={options} />, { wrapper: ThemeProvider });

    expect(screen.getByRole('option', { name: /red/i })).toBeInTheDocument();
  });

  it('should render label', () => {
    render(<Select id="select" label="select" options={options} />, {
      wrapper: ThemeProvider,
    });

    expect(
      screen.getByRole('combobox', { name: /select/i })
    ).toBeInTheDocument();
  });

  it('should call onChange on select option', () => {
    const onChange = jest.fn();

    render(<Select onChange={onChange} options={options} />, {
      wrapper: ThemeProvider,
    });

    expect(onChange).not.toHaveBeenCalled();

    const combobox = screen.getByRole('combobox');

    fireEvent.change(combobox, { target: { value: 'red' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
