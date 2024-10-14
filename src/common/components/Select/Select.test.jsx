import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from './Select';
import { ThemeProvider } from '../../providers';

describe('<Select />', () => {
  it('should render without crashing', () => {
    render(<Select />, { wrapper: ThemeProvider });
  });

  it('should render options', () => {
    render(
      <Select>
        <option value="red">red</option>
      </Select>,
      { wrapper: ThemeProvider }
    );

    expect(screen.getByRole('option', { name: /red/i })).toBeInTheDocument();
  });

  it('should call onChange on select option', () => {
    const onChange = jest.fn();

    render(
      <Select onChange={onChange}>
        <option value="red">red</option>
      </Select>,
      { wrapper: ThemeProvider }
    );

    expect(onChange).not.toHaveBeenCalled();

    const combobox = screen.getByRole('combobox');

    fireEvent.change(combobox, { target: { value: 'red' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
