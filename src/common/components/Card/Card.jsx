import { BaseCard } from './styles';

export function Card(props) {
  const { children } = props;

  return <BaseCard>{children}</BaseCard>;
}
