import { render } from '@testing-library/react';
import { Loading } from './Loading';
import { ThemeProvider } from '../../providers';

describe('<Loading />', () => {
  it('should render without crashing', () => {
    render(<Loading />, { wrapper: ThemeProvider });
  });
});
