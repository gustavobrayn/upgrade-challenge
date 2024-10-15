import { useTheme } from 'styled-components';
import { BaseText } from './styled';

export function Text(props) {
  const {
    as = 'span',
    weight = 'regular',
    size = 'md',
    color: colorProp,
    children,
  } = props;
  const theme = useTheme();
  const color = colorProp || theme.colors.text;

  return (
    <BaseText as={as} weight={weight} size={size} color={color} {...props}>
      {children}
    </BaseText>
  );
}
