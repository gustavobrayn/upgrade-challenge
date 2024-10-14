import { ButtonOutlined, ButtonPrimary } from './styles';

export function Button(props) {
  const { children, type, onClick, variant = 'primary' } = props;
  const Component = variant === 'outlined' ? ButtonOutlined : ButtonPrimary;

  return (
    <Component onClick={onClick} type={type}>
      {children}
    </Component>
  );
}
