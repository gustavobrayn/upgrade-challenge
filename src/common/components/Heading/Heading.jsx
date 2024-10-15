import { useTheme } from 'styled-components';
import { BaseHeading } from './styled';

export function Heading(props) {
  const {
    as = 'h1',
    weight = 'bold',
    size = 'h1',
    color: colorProp,
    children,
  } = props;
  const theme = useTheme();
  const color = colorProp || theme.colors.text;

  return (
    <BaseHeading as={as} weight={weight} size={size} color={color}>
      {children}
    </BaseHeading>
  );
}
