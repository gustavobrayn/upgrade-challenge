import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';

export function ThemeProvider(props) {
  const { children } = props;

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
