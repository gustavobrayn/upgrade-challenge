import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from '../../providers';

describe('<Button />', () => {
  it('should render without crashing', () => {
    render(<Button>Button</Button>, { wrapper: ThemeProvider });
  });

  it('should call onClick on button click', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Button</Button>, {
      wrapper: ThemeProvider,
    });

    expect(onClick).not.toHaveBeenCalled();

    const button = screen.getByRole('button', { name: /button/i });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
