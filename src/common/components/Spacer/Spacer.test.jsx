import { render } from '@testing-library/react';
import { Spacer } from './Spacer';
import { ThemeProvider } from '../../providers';

describe('<Spacer />', () => {
  it('should render without crashing', () => {
    render(<Spacer />, { wrapper: ThemeProvider });
  });
});
