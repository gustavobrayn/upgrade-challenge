import { fireEvent, render, screen } from '@testing-library/react';
import { CheckBox } from './Checkbox';
import { ThemeProvider } from '../../providers';

describe('<Checkbox />', () => {
  it('should render without crashing', () => {
    render(<CheckBox />, { wrapper: ThemeProvider });
  });

  it('should render with label', () => {
    render(
      <CheckBox id="check" label={<label htmlFor="check">check</label>} />,
      { wrapper: ThemeProvider }
    );

    expect(
      screen.getByRole('checkbox', { name: /check/i })
    ).toBeInTheDocument();
  });

  it('should render call onChange on click', () => {
    const onChange = jest.fn();

    render(
      <CheckBox
        id="check"
        onChange={onChange}
        label={<label htmlFor="check">check</label>}
      />,
      { wrapper: ThemeProvider }
    );

    expect(onChange).not.toHaveBeenCalled();

    const checkbox = screen.getByRole('checkbox', { name: /check/i });
    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
